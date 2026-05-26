import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use | ScreenTools",
  description: "Read the ScreenTools terms of use for simple browser utility tools.",
  alternates: { canonical: canonical("/terms") },
  openGraph: { title: "Terms of Use | ScreenTools", description: "ScreenTools terms of use.", url: canonical("/terms") }
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 content-prose">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])} />
      <h1>Terms of Use</h1>
      <p>ScreenTools is provided as a simple browser utility. Use the tools at your own discretion.</p>
      <p>The tools can help with visual checks, but they do not replace professional hardware testing, repair or calibration.</p>
      <p>Screen tests can help identify possible issues. They do not repair devices, confirm warranty coverage or replace professional diagnostics.</p>
      <p>Fun screens are visual effects only. Nothing is actually broken, crashing or updating. Use them responsibly and do not use them to mislead people about security, payments, accounts or device damage.</p>
      <p>Do not stare directly at a bright screen for long periods. Take care when using bright fullscreen modes in dark rooms.</p>
    </main>
  );
}
