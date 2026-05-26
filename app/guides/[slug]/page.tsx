import type { Metadata } from "next";
import Link from "next/link";
import { FAQBlock } from "@/components/FAQBlock";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
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
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: guide.title, path: `/guides/${slug}` }]), faqSchema(guide.faqs)]} />
      <h1 className="text-3xl font-bold sm:text-4xl">{guide.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{guide.intro}</p>
      <div className="content-prose mt-4">
        {guide.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
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
      </div>
      <FAQBlock items={guide.faqs} />
      <Link href="/guides" className="mt-8 inline-block rounded bg-ink px-4 py-2 text-sm font-bold text-white">Back to guides</Link>
    </main>
  );
}

function getGuide(slug: string) {
  return guideArticles.find((guide) => guide.slug === slug);
}
