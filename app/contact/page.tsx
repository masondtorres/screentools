import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { ContactEmailLink } from "@/components/ContactEmailLink";
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
  const email = config.CONTACT_EMAIL;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 content-prose">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <h1>Contact</h1>
      <p>For feedback, corrections, bug reports, feature requests or bulk screen testing questions, email us at <ContactEmailLink email={email} />.</p>
      <p>You can also use the contact form below. If email delivery is not configured, the form will show a setup message and the direct email link will stay available.</p>
      <ContactForm contactEmail={email} />
    </main>
  );
}
