"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "error";

const reasons = [
  { value: "general-question", label: "General question" },
  { value: "bulk-screen-testing", label: "Bulk screen testing" },
  { value: "bug-report", label: "Bug report" },
  { value: "feature-request", label: "Feature request" },
  { value: "business-inquiry", label: "Business inquiry" }
];

export function ContactForm({ contactEmail }: { contactEmail: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [reason, setReason] = useState("general-question");

  useEffect(() => {
    setPageUrl(window.location.href);
    const params = new URLSearchParams(window.location.search);
    const requestedReason = params.get("reason");
    if (requestedReason && reasons.some((item) => item.value === requestedReason)) setReason(requestedReason);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("reason", reason);
    data.set("pageUrl", pageUrl);

    try {
      const response = await fetch("/api/contact", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok) {
        setStatus("error");
        setMessage(result?.message || `The form could not send right now. Please email ${contactEmail}.`);
        return;
      }
      form.reset();
      setReason("general-question");
      setStatus("success");
      setMessage("Message sent. I’ll review it soon.");
    } catch {
      setStatus("error");
      setMessage(`The form could not send right now. Please email ${contactEmail}.`);
    }
  }

  return (
    <form onSubmit={onSubmit} className="not-prose mt-6 grid gap-4 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm font-semibold">
          Name
          <input name="name" required maxLength={100} className="min-h-11 rounded-xl border border-line px-3 shadow-inner" autoComplete="name" />
        </label>
        <label className="grid gap-1 text-sm font-semibold">
          Email
          <input name="email" type="email" required className="min-h-11 rounded-xl border border-line px-3 shadow-inner" autoComplete="email" />
        </label>
      </div>
      <label className="grid gap-1 text-sm font-semibold">
        Reason for contact
        <select name="reason" required value={reason} onChange={(event) => setReason(event.target.value)} className="min-h-11 rounded-xl border border-line px-3 shadow-inner">
          {reasons.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
        </select>
      </label>
      <label className="grid gap-1 text-sm font-semibold">
        Message
        <textarea name="message" required maxLength={2000} rows={7} className="rounded-xl border border-line px-3 py-2 shadow-inner" />
      </label>
      <label className="hidden" aria-hidden="true">
        Leave this field empty
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <input type="hidden" name="pageUrl" value={pageUrl} />
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          onClick={() => trackEvent("contact_email_clicked", { source: "contact_form_submit" })}
          className="min-h-11 rounded-xl bg-ink px-5 py-3 font-bold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <a href={`mailto:${contactEmail}`} className="font-semibold text-blue-700 underline">Email {contactEmail}</a>
      </div>
      {message ? <p className={`text-sm font-semibold ${status === "success" ? "text-green-700" : "text-red-700"}`} role="status">{message}</p> : null}
      <p className="text-sm text-gray-600">If the form cannot send, use the email link. Do not send passwords or sensitive account details.</p>
    </form>
  );
}
