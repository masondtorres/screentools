import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { ContactEmailLink } from "@/components/ContactEmailLink";
import { FAQBlock } from "@/components/FAQBlock";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { config } from "@/lib/config";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo";
import { canonical } from "@/lib/site";

const faqs = [
  { question: "Can I use ScreenTools to test multiple devices?", answer: "Yes. ScreenTools can be used as a browser-based checklist for repeated visual checks across many screens." },
  { question: "Does this require installing software?", answer: "No. The current tools run in the browser. No app install, executable download or account is required." },
  { question: "Can this work for phones, tablets, monitors and TVs?", answer: "Yes. Any device with a modern browser can use the tools. For TVs, open the site in the TV browser or connect a device to the display." },
  { question: "Can you help create a testing checklist?", answer: "Yes. You can request a checklist for dead pixels, stuck pixels, uniformity, backlight bleed, cleaning checks and basic display review." },
  { question: "Is this for repair shops or schools?", answer: "Yes. It can help repair shops, refurbishers, resellers, schools, IT teams, offices and AV installers create a repeatable screen check process." },
  { question: "Do you offer custom setup help?", answer: "You can request workflow help. This is inquiry-based only and does not include subscriptions or guaranteed response times." }
];

const offers = [
  {
    title: "Screen Testing Checklist",
    bestFor: "Best for individuals and small sellers.",
    details: "A simple order of tests for checking a few phones, tablets, monitors or TVs before sale, repair intake or classroom use.",
    cta: "Request checklist"
  },
  {
    title: "Custom Testing Workflow",
    bestFor: "Best for repair shops, resellers and small teams.",
    details: "Includes recommended test order, screen links, pass/fail checklist and setup notes for repeated checks.",
    cta: "Request workflow help"
  },
  {
    title: "Team Display Testing Setup",
    bestFor: "Best for schools, offices and teams.",
    details: "A simple testing process for multiple devices with shared instructions your team can follow.",
    cta: "Request team setup"
  }
];

export const metadata: Metadata = {
  title: "Bulk Screen Testing Help for Phones, Monitors, TVs and Classrooms",
  description: "Request browser-based bulk screen testing help for phones, tablets, monitors, TVs, classrooms, offices, repair shops and resellers.",
  alternates: { canonical: canonical("/bulk-screen-testing") },
  openGraph: {
    title: "Bulk Screen Testing Help",
    description: "Create a simple browser-based screen testing workflow for many devices.",
    url: canonical("/bulk-screen-testing")
  }
};

export default function BulkScreenTestingPage() {
  const email = config.CONTACT_EMAIL;
  const contactHref = "/contact?reason=bulk-screen-testing";

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={[webPageSchema("Bulk Screen Testing Help", metadata.description as string, "/bulk-screen-testing"), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bulk Screen Testing", path: "/bulk-screen-testing" }]), faqSchema(faqs)]} />
      <section className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-soft sm:p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-700">For businesses and teams</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-5xl">Bulk Screen Testing Help</h1>
        <p className="mt-4 max-w-4xl text-lg text-gray-700">Need to check more than one screen? ScreenTools can help you create a simple browser-based testing workflow for phones, tablets, monitors, TVs, classroom devices or office displays.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={contactHref} className="rounded-xl bg-ink px-5 py-3 font-bold text-white hover:bg-slate-700">Request bulk screen testing help</Link>
          <ContactEmailLink email={email} subject="ScreenTools bulk screen testing" className="rounded-xl border border-line bg-white px-5 py-3 font-bold hover:border-blue-400">Email {email}</ContactEmailLink>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
        <h2 className="text-2xl font-bold">Quick answer</h2>
        <p className="mt-2 text-gray-700">Use this page when you need a repeatable way to check dead pixels, stuck pixels, backlight bleed, screen uniformity, cleaning marks and basic display quality across several devices. This page is for inquiries only.</p>
      </section>

      <section className="my-10" aria-labelledby="service-offers">
        <h2 id="service-offers" className="text-2xl font-bold">Service options</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {offers.map((offer) => (
            <article key={offer.title} className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
              <h3 className="text-xl font-extrabold">{offer.title}</h3>
              <p className="mt-2 font-semibold text-blue-700">{offer.bestFor}</p>
              <p className="mt-3 text-gray-700">{offer.details}</p>
              <p className="mt-3 text-sm font-semibold text-gray-600">No prices shown yet. Request details first.</p>
              <Link href={contactHref} className="mt-5 inline-block rounded-xl bg-ink px-4 py-2 font-bold text-white hover:bg-slate-700">{offer.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-prose">
        <h2>Who this is for</h2>
        <p>This is for phone repair shops, electronics refurbishers, eBay and Facebook Marketplace resellers, schools, IT departments, office managers, AV installers and small businesses that need to check multiple displays.</p>
        <h2>What it can help check</h2>
        <p>Use ScreenTools to build a simple visual workflow for dead pixels, stuck pixels, backlight bleed, gray uniformity, smudges, color channels, brightness issues and text sharpness.</p>
        <h2>Simple testing flow</h2>
        <p>Clean the screen. Run the Dead Pixel Test. Check solid colors. Use Monitor Test patterns. Use Backlight Bleed Test in a dim room. Record pass or fail notes outside ScreenTools if your team needs a record.</p>
        <h2>Current limits</h2>
        <p>ScreenTools does not have accounts, saved reports, team dashboards or device history. The tools are visual checks only and do not repair devices or replace professional diagnostics.</p>
        <h2>Useful starting links</h2>
        <p>Start with <Link href="/screen-tests">Screen Tests</Link>, <Link href="/dead-pixel-test">Dead Pixel Test</Link>, <Link href="/monitor-test">Monitor Test</Link>, <Link href="/backlight-bleed-test">Backlight Bleed Test</Link> and <Link href="/screen-uniformity-test">Screen Uniformity Test</Link>.</p>
      </section>

      <ChecklistCTA />
      <section className="my-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
        <h2 className="text-2xl font-bold">Request details</h2>
        <p className="mt-2 text-gray-700">Need a repeatable screen testing workflow for multiple devices? Email <ContactEmailLink email={email} subject="ScreenTools bulk screen testing" /> with your device count, testing process and what you need checked.</p>
        <Link href={contactHref} className="mt-5 inline-block rounded-xl bg-ink px-5 py-3 font-bold text-white hover:bg-slate-700">Request bulk screen testing help</Link>
      </section>

      <FAQBlock items={faqs} />
      <RelatedTools />
    </main>
  );
}
