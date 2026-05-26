import type { Metadata } from "next";
import Link from "next/link";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQBlock } from "@/components/FAQBlock";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/seo";
import { canonical, guides, toolLinks } from "@/lib/site";

const faqs = [
  { question: "Is ScreenTools free?", answer: "Yes. The tools run in your browser and do not require an account." },
  { question: "Does fullscreen work on phones?", answer: "Most modern mobile browsers support fullscreen or a similar screen mode. Some iPhone browsers may limit fullscreen behavior." },
  { question: "Can I share a custom color?", answer: "Yes. Use the copy link button on the color screen tool to share a direct color link." }
];

export const metadata: Metadata = {
  title: "ScreenTools | Simple Full-Screen Color Tools",
  description: "Use white, black and custom color screens for lighting, focus, screen cleaning and monitor testing.",
  alternates: { canonical: canonical("/") },
  openGraph: {
    title: "ScreenTools | Simple Full-Screen Color Tools",
    description: "Fast browser tools for full-screen colors, light and monitor testing.",
    url: canonical("/")
  }
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <JsonLd data={[webApplicationSchema("ScreenTools", "Simple full-screen color tools for your browser.", "/"), breadcrumbSchema([{ name: "Home", path: "/" }]), faqSchema(faqs)]} />
      <section className="mb-5">
        <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">Simple full-screen color tools</h1>
        <p className="mt-3 max-w-3xl text-gray-700">Use white, black and custom color screens for lighting, focus, screen cleaning and monitor testing.</p>
      </section>
      <FullscreenColorTool title="Main full-screen color tool" allowDownload />
      <AdPlaceholder />
      <section className="my-10" aria-labelledby="popular-tools">
        <h2 id="popular-tools" className="text-2xl font-bold">Popular tools</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {toolLinks.map((tool) => (
            <Link key={tool.href} href={tool.href} className="rounded border border-line bg-white p-4 hover:border-gray-500">
              <h3 className="font-bold">{tool.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="content-prose">
        <h2>Common uses</h2>
        <ul>
          <li>Use your screen as a light.</li>
          <li>Check for dead pixels.</li>
          <li>Clean your monitor.</li>
          <li>Improve video call lighting.</li>
          <li>Create a simple focus screen.</li>
          <li>Test colors on a display.</li>
        </ul>
      </section>
      <FAQBlock items={faqs} />
      <section className="my-10" aria-labelledby="related-guides">
        <h2 id="related-guides" className="text-2xl font-bold">Related guides</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {guides.slice(0, 3).map((guide) => <GuideCard key={guide.href} {...guide} />)}
        </div>
      </section>
      <RelatedTools />
    </main>
  );
}
