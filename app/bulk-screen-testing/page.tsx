import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
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
  const email = config.contactEmail;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bulk Screen Testing", path: "/bulk-screen-testing" }])} />
      <h1 className="text-3xl font-bold sm:text-4xl">Bulk screen testing for teams</h1>
      <p className="mt-4 text-lg text-gray-700">ScreenTools is exploring simple workflows for repair shops, refurbishers, schools and device resellers that need repeatable display checks.</p>
      <section className="content-prose mt-6">
        <h2>Who this is for</h2>
        <p>This future workflow may help teams that inspect many phones, tablets, laptops or monitors. The current public tools are free browser utilities. A bulk workflow is not available yet.</p>
        <h2>Possible early access use cases</h2>
        <p>Teams may want a repeatable checklist for dead pixels, backlight bleed, screen cleaning, color uniformity and simple pass/follow-up notes. We are not promising a dashboard, account system or paid plan yet.</p>
        <h2>Contact for early access</h2>
        <p>If your team wants to share a real workflow, email us at <a href={`mailto:${email}`}>{email}</a> and describe the devices you test, the volume, and the checks you repeat most often.</p>
      </section>
      <Link href={`mailto:${email}?subject=ScreenTools%20bulk%20screen%20testing`} className="mt-6 inline-block rounded bg-ink px-5 py-3 font-bold text-white">Contact us for early access</Link>
    </main>
  );
}
