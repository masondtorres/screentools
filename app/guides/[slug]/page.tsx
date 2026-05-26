import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { canonical, guides } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.href.split("/").pop() }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuide(params.slug);
  const title = guide?.title ?? "ScreenTools Guide";
  return {
    title: `${title} | ScreenTools`,
    description: "A short ScreenTools guide. Full guide content will be expanded after launch.",
    alternates: { canonical: canonical(`/guides/${params.slug}`) },
    openGraph: { title, description: "A short ScreenTools guide.", url: canonical(`/guides/${params.slug}`) }
  };
}

export default function GuideDetailPage({ params }: Props) {
  const guide = getGuide(params.slug);
  const title = guide?.title ?? "ScreenTools Guide";
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: title, path: `/guides/${params.slug}` }])} />
      <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
      <div className="content-prose mt-4">
        <p>This guide page is ready for expansion. For now, use the related ScreenTools pages for the working tools.</p>
        <p>The full article should stay plain, helpful and short. It should explain the task before adding any product links or ads.</p>
      </div>
      <Link href="/guides" className="mt-8 inline-block rounded bg-ink px-4 py-2 text-sm font-bold text-white">Back to guides</Link>
    </main>
  );
}

function getGuide(slug: string) {
  return guides.find((guide) => guide.href.endsWith(`/${slug}`));
}
