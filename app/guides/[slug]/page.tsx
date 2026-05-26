import type { Metadata } from "next";
import Link from "next/link";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { FAQBlock } from "@/components/FAQBlock";
import { InContentAdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { RecommendedGearBlock } from "@/components/RecommendedGearBlock";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { guideArticles } from "@/lib/guides";
import { canonical } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideArticles.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  const title = guide?.title ?? "ScreenTools Guide";
  return {
    title: `${title} | ScreenTools`,
    description: guide?.description ?? "A practical ScreenTools guide.",
    alternates: { canonical: canonical(`/guides/${slug}`) },
    openGraph: { title, description: guide?.description ?? "A practical ScreenTools guide.", url: canonical(`/guides/${slug}`) }
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return null;
  const showGear = ["how-to-clean-your-screen-safely", "how-to-use-a-white-screen-for-video-calls", "how-to-use-your-screen-as-a-light", "how-to-test-a-used-monitor-before-buying", "best-screen-colors-for-focus"].includes(slug);
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={[articleSchema(guide.title, guide.description, `/guides/${slug}`), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path: `/guides/${slug}` }]), faqSchema(guide.faqs)]} />
      <h1 className="text-3xl font-bold sm:text-4xl">{guide.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{guide.intro}</p>
      <div className="content-prose mt-4">
        {guide.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
        <InContentAdSlot />
        {slug === "how-to-test-a-used-monitor-before-buying" ? <ChecklistCTA /> : null}
        {showGear ? <RecommendedGearBlock context={slug} /> : null}
        <section>
          <h2>Use-case table</h2>
          <div className="overflow-x-auto rounded border border-line">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="border-b border-line px-3 py-2">Need</th>
                  <th className="border-b border-line px-3 py-2">Use</th>
                  <th className="border-b border-line px-3 py-2">Why</th>
                </tr>
              </thead>
              <tbody>
                {guide.related.map((item, index) => (
                  <tr key={item.href}>
                    <td className="border-b border-line px-3 py-2">{index === 0 ? "Main task" : index === 1 ? "Next check" : "Extra context"}</td>
                    <td className="border-b border-line px-3 py-2"><Link href={item.href}>{item.title}</Link></td>
                    <td className="border-b border-line px-3 py-2">This related tool helps you check the screen with a simple visible state.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2>Before you finish</h2>
          <p>Use these tools as simple visual checks. They are useful because they remove distractions and show one screen state at a time. They do not replace hardware repair, professional calibration, device warranty terms or the cleaning instructions from your device maker.</p>
          <p>For the best result, test in normal conditions first. Then change one thing at a time, such as brightness, room light or viewing angle. This makes it easier to understand what you are seeing and avoid blaming the screen for dust, glare or an unusual setting.</p>
          <p>On mobile, keep the device steady and use a comfortable brightness level. On desktop, move the browser window to the display you want to test before entering fullscreen. If you use more than one display, test each screen separately.</p>
          <p>Write down what you see if you are comparing devices. A short note like top left corner, only on blue, or visible on gray can save time later. If you take a photo, include one wide shot and one close shot so the location is clear.</p>
          <p>Repeat the check after changing brightness or room light. Some issues look worse at maximum brightness, while fingerprints and reflections may disappear when the angle changes. A second pass helps separate a real display issue from the test setup.</p>
          <p>If you are helping someone else, explain what the tool can and cannot do. It can show colors, light and patterns. It cannot confirm warranty coverage, repair pixels, clean the screen for you or measure professional color accuracy.</p>
          <p>Keep the process simple. Start with the screen state that answers your main question, then use one or two related tools if you need more context. Clear steps are better than switching through many settings too quickly.</p>
        </section>
        <section>
          <h2>Related ScreenTools</h2>
          <ul>
            {guide.related.map((item) => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}
          </ul>
        </section>
        <section>
          <h2>Related guides</h2>
          <ul>
            {guideArticles.filter((item) => item.slug !== guide.slug).slice(0, 2).map((item) => (
              <li key={item.slug}><Link href={`/guides/${item.slug}`}>{item.title}</Link></li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Summary</h2>
          <p>Start with the simple screen state that answers your question. Use fullscreen, keep brightness comfortable, and compare one result at a time. ScreenTools can help you see colors, light and display patterns, but it does not repair hardware or replace device maker instructions.</p>
        </section>
      </div>
      <FAQBlock items={guide.faqs} />
      <Link href="/guides" className="mt-8 inline-block rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-slate-700">Back to guides</Link>
    </main>
  );
}

function getGuide(slug: string) {
  return guideArticles.find((guide) => guide.slug === slug);
}
