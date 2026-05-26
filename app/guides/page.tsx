import type { Metadata } from "next";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical, guides } from "@/lib/site";

export const metadata: Metadata = {
  title: "ScreenTools Guides | Simple Screen and Monitor Tips",
  description: "Read simple guides for white screens, dead pixel tests, screen lighting, safe screen cleaning and monitor color checks.",
  alternates: { canonical: canonical("/guides") },
  openGraph: { title: "ScreenTools Guides", description: "Simple guides for screen tools and monitor checks.", url: canonical("/guides") }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }])} />
      <h1 className="text-3xl font-bold sm:text-4xl">ScreenTools guides</h1>
      <p className="mt-3 max-w-3xl text-gray-700">Short guides for common screen, light and monitor testing tasks.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => <GuideCard key={guide.href} {...guide} />)}
      </div>
    </main>
  );
}
