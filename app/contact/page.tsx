import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact ScreenTools",
  description: "Contact ScreenTools for feedback, corrections or simple support questions.",
  alternates: { canonical: canonical("/contact") },
  openGraph: { title: "Contact ScreenTools", description: "Send feedback or support questions.", url: canonical("/contact") }
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 content-prose">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <h1>Contact</h1>
      <p>For feedback, corrections or support questions, email hello@example.com.</p>
      <p>Replace this address with the live support inbox before launch.</p>
    </main>
  );
}
