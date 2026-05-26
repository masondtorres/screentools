import type { ReactNode } from "react";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { FAQBlock } from "@/components/FAQBlock";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { SEOContentSection } from "@/components/SEOContentSection";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/seo";

type Props = {
  path: string;
  title: string;
  intro: string;
  children: ReactNode;
  sections: Array<{ title: string; body: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  current?: string;
  extra?: ReactNode;
};

export function ToolPageTemplate({ path, title, intro, children, sections, faqs, current, extra }: Props) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <JsonLd data={[webApplicationSchema(title, intro, path), breadcrumbSchema([{ name: "Home", path: "/" }, { name: title, path }]), faqSchema(faqs)]} />
      <section className="mb-5">
        <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-gray-700">{intro}</p>
      </section>
      {children}
      <AdPlaceholder />
      <SEOContentSection sections={sections} />
      {extra}
      <RelatedTools current={current} />
      <AdPlaceholder />
      <FAQBlock items={faqs} />
    </main>
  );
}
