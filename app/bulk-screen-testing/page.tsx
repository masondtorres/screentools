import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { ContactEmailLink } from "@/components/ContactEmailLink";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { config } from "@/lib/config";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bulk Screen Testing Tools | ScreenTools",
  description: "A future ScreenTools workflow for repair shops, schools, refurbishers and device resellers that need repeatable screen checks.",
  alternates: { canonical: canonical("/bulk-screen-testing") },
  openGraph: {
    title: "Bulk Screen Testing Tools | ScreenTools",
    description: "Early access page for future bulk screen testing workflows.",
    url: canonical("/bulk-screen-testing")
  }
};

export default function BulkScreenTestingPage() {
  const email = config.CONTACT_EMAIL;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bulk Screen Testing", path: "/bulk-screen-testing" }])} />
      <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Bulk Screen Testing for Shops, Schools and Resellers</h1>
      <p className="mt-4 text-lg text-gray-700">ScreenTools can help teams run repeated visual screen checks with the free browser tools that already exist.</p>
      <section className="mt-6 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
        <h2 className="text-2xl font-bold">Quick answer</h2>
        <p className="mt-2 text-gray-700">Use ScreenTools when you need a simple repeatable way to check dead pixels, stuck pixels, backlight bleed, uniformity and screen cleaning issues across many devices. No bulk dashboard exists yet.</p>
      </section>
      <section className="content-prose mt-6">
        <h2>Who this is for</h2>
        <p>This page is for repair shops, refurbishers, schools, IT departments, used device sellers and electronics resellers that inspect phones, tablets, laptops or monitors.</p>
        <h2>What it helps check</h2>
        <p>Use the current public tools to check dead pixels, stuck pixels, backlight bleed, screen uniformity, cleaning marks, color channels and text sharpness.</p>
        <h2>Simple workflow</h2>
        <p>Clean the screen. Open the Dead Pixel Test. Check solid colors. Run Monitor Test patterns. Use Backlight Bleed Test in a dim room. Save short notes outside ScreenTools if your team needs records.</p>
        <h2>Current limitations</h2>
        <p>ScreenTools does not have accounts, payments, dashboards, device history, saved reports or team management. The tools are visual checks only and do not repair devices.</p>
        <h2>Contact CTA</h2>
        <p>Need a repeatable screen testing workflow for multiple devices? Email <ContactEmailLink email={email} subject="ScreenTools bulk screen testing" /> with your device count, testing process and what you need checked.</p>
        <h2>FAQ</h2>
        <p><strong>Does ScreenTools have a bulk dashboard?</strong> No. The current site is a set of browser tools.</p>
        <p><strong>Can teams use the free tools now?</strong> Yes. Use the public tools on each device or monitor you inspect.</p>
        <p><strong>Does this replace professional diagnostics?</strong> No. It is a simple visual workflow.</p>
      </section>
      <ChecklistCTA />
      <Link href="/contact?reason=bulk-screen-testing" className="mt-6 inline-block rounded-xl bg-ink px-5 py-3 font-bold text-white hover:bg-slate-700">Request bulk screen testing help</Link>
      <RelatedTools />
    </main>
  );
}
