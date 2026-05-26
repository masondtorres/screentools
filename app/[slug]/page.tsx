import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { seoLandingPages } from "@/lib/seo-pages";
import { canonical } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: canonical(`/${page.slug}`) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical(`/${page.slug}`)
    }
  };
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  return (
    <ToolPageTemplate path={`/${page.slug}`} title={page.h1} intro={page.intro} sections={page.sections} faqs={page.faqs} current={`/${page.slug}`}>
      <FullscreenColorTool initialColor={page.color ?? "#ffffff"} presets={page.presets ?? [{ name: page.h1.replace(" Online", ""), hex: page.color ?? "#ffffff" }]} title={page.h1} allowDownload={page.slug.includes("white")} />
    </ToolPageTemplate>
  );
}

function getPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
