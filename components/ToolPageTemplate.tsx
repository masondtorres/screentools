import type { ReactNode } from "react";
import Link from "next/link";
import { BelowToolAdSlot, InContentAdSlot } from "@/components/AdSlot";
import { BulkCtaLink } from "@/components/BulkCtaLink";
import { ChecklistCTA } from "@/components/ChecklistCTA";
import { FAQBlock } from "@/components/FAQBlock";
import { JsonLd } from "@/components/JsonLd";
import { RelatedTools } from "@/components/RelatedTools";
import { SEOContentSection } from "@/components/SEOContentSection";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/seo";
import { guides } from "@/lib/site";

type Props = {
  path: string;
  title: string;
  intro: string;
  children: ReactNode;
  sections: Array<{ title: string; body: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  current?: string;
  extra?: ReactNode;
  quickAnswer?: string;
  cluster?: { title: string; href: string };
  summaryRows?: Array<{ label: string; value: string }>;
};

export function ToolPageTemplate({ path, title, intro, children, sections, faqs, current, extra, quickAnswer, cluster, summaryRows }: Props) {
  const answer = quickAnswer ?? intro;
  const guideLinks = guides.slice(0, 2);
  const clusterLink = cluster ?? inferCluster(path);
  const rows = summaryRows ?? [
    { label: "What it does", value: intro },
    { label: "Best for", value: "Lighting, focus, display checks or simple fullscreen use depending on the page." },
    { label: "Exit", value: "Press Esc where supported or use the on-screen exit button." }
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <JsonLd data={[webApplicationSchema(title, intro, path), breadcrumbSchema([{ name: "Home", path: "/" }, { name: title, path }]), faqSchema(faqs)]} />
      <section className="mb-5">
        <h1 className="text-3xl font-bold tracking-normal sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-gray-700">{intro}</p>
      </section>
      {children}
      <BelowToolAdSlot />
      {["/monitor-test", "/dead-pixel-test", "/backlight-bleed-test"].includes(path) ? <ChecklistCTA /> : null}
      {["/monitor-test", "/dead-pixel-test", "/backlight-bleed-test"].includes(path) ? (
        <section className="my-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
          <h2 className="text-2xl font-bold">Testing multiple screens?</h2>
          <p className="mt-2 text-gray-700">If you need to check many phones, tablets, monitors or classroom displays, see the bulk screen testing help page.</p>
          <BulkCtaLink href="/bulk-screen-testing" className="mt-4 inline-block rounded-xl bg-ink px-4 py-2 font-bold text-white hover:bg-slate-700">Bulk screen testing help</BulkCtaLink>
        </section>
      ) : null}
      <section className="my-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm" aria-labelledby="quick-answer">
        <h2 id="quick-answer" className="text-xl font-bold">Quick answer</h2>
        <p className="mt-2 text-gray-700">{answer}</p>
      </section>
      {rows.length ? (
        <section className="my-8" aria-labelledby="summary-table">
          <h2 id="summary-table" className="text-2xl font-bold">Summary</h2>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-white/70 bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-line last:border-b-0">
                    <th className="w-40 px-3 py-3 font-semibold text-gray-900">{row.label}</th>
                    <td className="px-3 py-3 text-gray-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
      <SEOContentSection sections={sections} />
      {extra}
      {clusterLink ? (
        <section className="my-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
          <h2 className="text-2xl font-bold">Tool category</h2>
          <p className="mt-2 text-gray-700">Browse more tools in <a href={clusterLink.href} className="font-semibold underline">{clusterLink.title}</a>.</p>
        </section>
      ) : null}
      <RelatedTools current={current} />
      <section aria-labelledby="related-guides" className="my-8">
        <h2 id="related-guides" className="text-2xl font-bold">Related guides</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {guideLinks.map((guide) => (
            <a key={guide.href} href={guide.href} className="rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm hover:border-blue-200 hover:shadow-soft">
              <span className="font-semibold">{guide.title}</span>
              <span className="mt-1 block text-sm text-gray-600">{guide.description}</span>
            </a>
          ))}
        </div>
      </section>
      <InContentAdSlot />
      <FAQBlock items={faqs} />
    </main>
  );
}

function inferCluster(path: string) {
  if (["/dead-pixel-test", "/monitor-test"].includes(path)) return { title: "Screen Tests", href: "/screen-tests" };
  if (["/screen-flashlight", "/zoom-light"].includes(path)) return { title: "Screen Lighting", href: "/screen-lighting" };
  if (["/black-screen", "/white-screen", "/color-screen"].includes(path)) return { title: "Color Screens", href: "/color-screens" };
  return undefined;
}
