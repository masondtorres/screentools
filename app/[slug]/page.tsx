import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClusterPage } from "@/components/ClusterPage";
import { FunScreenLayout } from "@/components/FunScreenLayout";
import { FullscreenColorTool } from "@/components/FullscreenColorTool";
import { ToolPageTemplate } from "@/components/ToolPageTemplate";
import { clusterPages } from "@/lib/clusters";
import { funScreens } from "@/lib/fun-screens";
import { seoLandingPages } from "@/lib/seo-pages";
import { canonical } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...clusterPages.map((page) => ({ slug: page.slug })), ...seoLandingPages.map((page) => ({ slug: page.slug })), ...funScreens.map((page) => ({ slug: page.slug }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cluster = getClusterPage(slug);
  const page = getPage(slug);
  const funPage = getFunPage(slug);
  if (!cluster && !page && !funPage) return {};
  if (cluster) {
    return {
      title: cluster.title,
      description: cluster.description,
      alternates: { canonical: canonical(`/${cluster.slug}`) },
      openGraph: {
        title: cluster.title,
        description: cluster.description,
        url: canonical(`/${cluster.slug}`)
      }
    };
  }
  if (funPage) {
    return {
      title: funPage.title,
      description: funPage.description,
      alternates: { canonical: canonical(`/${funPage.slug}`) },
      openGraph: {
        title: funPage.title,
        description: funPage.description,
        url: canonical(`/${funPage.slug}`)
      }
    };
  }
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
  const cluster = getClusterPage(slug);
  const page = getPage(slug);
  const funPage = getFunPage(slug);
  if (cluster) return <ClusterPage page={cluster} />;
  if (funPage) return <FunScreenLayout page={funPage} />;
  if (!page) notFound();

  return (
    <ToolPageTemplate path={`/${page.slug}`} title={page.h1} intro={page.intro} quickAnswer={page.quickAnswer} cluster={page.cluster} sections={page.sections} faqs={page.faqs} current={`/${page.slug}`} summaryRows={page.summaryRows}>
      <FullscreenColorTool initialColor={page.color ?? "#ffffff"} presets={page.presets ?? [{ name: page.h1.replace(" Online", ""), hex: page.color ?? "#ffffff" }]} title={page.h1} allowDownload={page.slug.includes("white")} />
    </ToolPageTemplate>
  );
}

function getPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

function getClusterPage(slug: string) {
  return clusterPages.find((page) => page.slug === slug);
}

function getFunPage(slug: string) {
  return funScreens.find((page) => page.slug === slug);
}
