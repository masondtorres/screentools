import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { config } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact ScreenTools",
  description: "Contact ScreenTools for feedback, corrections or simple support questions.",
  alternates: { canonical: canonical("/contact") },
  openGraph: { title: "Contact ScreenTools", description: "Send feedback or support questions.", url: canonical("/contact") }
};

export default function ContactPage() {
  const email = config.contactEmail;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 content-prose">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <h1>Contact</h1>
      <p>For feedback, corrections or support questions, email us at <a href={`mailto:${email}`}>{email}</a>.</p>
      <p>ScreenTools does not use a contact form yet. Email opens in your mail app so your message is sent directly.</p>
    </main>
  );
}
