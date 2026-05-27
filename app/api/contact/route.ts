import { NextResponse } from "next/server";
import { config } from "@/lib/config";

const reasons = new Map([
  ["general-question", "General question"],
  ["bulk-screen-testing", "Bulk screen testing"],
  ["bug-report", "Bug report"],
  ["feature-request", "Feature request"],
  ["business-inquiry", "Business inquiry"]
]);

const recent = new Map<string, number[]>();
const maxMessageLength = 2000;

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ message: `Too many messages. Please email ${config.CONTACT_EMAIL}.` }, { status: 429 });
  }

  const form = await request.formData();
  if (String(form.get("company") || "").trim()) {
    return NextResponse.json({ message: `The form could not send right now. Please email ${config.CONTACT_EMAIL}.` }, { status: 400 });
  }

  const name = clean(String(form.get("name") || ""), 100);
  const email = clean(String(form.get("email") || ""), 200);
  const reasonValue = clean(String(form.get("reason") || ""), 80);
  const message = clean(String(form.get("message") || ""), maxMessageLength);
  const pageUrl = clean(String(form.get("pageUrl") || ""), 500);
  const reason = reasons.get(reasonValue);

  if (!name || name.length > 100) return invalid("Name is required.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return invalid("Enter a valid email address.");
  if (!reason) return invalid("Choose a reason for contact.");
  if (!message || message.length > maxMessageLength) return invalid("Message is required and must be 2,000 characters or less.");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: `Contact form setup is not complete yet. Please email ${config.CONTACT_EMAIL}.` }, { status: 503 });
  }

  const from = process.env.RESEND_FROM_EMAIL || "ScreenTools <onboarding@resend.dev>";
  const timestamp = new Date().toISOString();
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Reason: ${reason}`,
    `Page URL: ${pageUrl || "Not provided"}`,
    `Timestamp: ${timestamp}`,
    "",
    "Message:",
    message
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [config.CONTACT_EMAIL],
      reply_to: email,
      subject: `ScreenTools Contact: ${reason} from ${name}`,
      text: body
    })
  });

  if (!response.ok) {
    return NextResponse.json({ message: `The form could not send right now. Please email ${config.CONTACT_EMAIL}.` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function invalid(message: string) {
  return NextResponse.json({ message }, { status: 400 });
}

function clean(value: string, max: number) {
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const hits = (recent.get(ip) || []).filter((time) => now - time < windowMs);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 5;
}
