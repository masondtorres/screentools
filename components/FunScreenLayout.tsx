import { FAQBlock } from "@/components/FAQBlock";
import { FullscreenEffectStage } from "@/components/FullscreenEffectStage";
import { JsonLd } from "@/components/JsonLd";
import { RelatedFunScreens } from "@/components/RelatedFunScreens";
import { RelatedTools } from "@/components/RelatedTools";
import { ResponsibleUseNotice } from "@/components/ResponsibleUseNotice";
import { breadcrumbSchema, faqSchema, webApplicationSchema } from "@/lib/seo";
import type { FunScreenPage } from "@/lib/fun-screens";

export function FunScreenLayout({ page }: { page: FunScreenPage }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <JsonLd data={[webApplicationSchema(page.h1, page.description, `/${page.slug}`), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Fun Screens", path: "/fun-screens" }, { name: page.h1, path: `/${page.slug}` }]), faqSchema(page.faqs)]} />
      <section className="mb-5">
        <p className="text-sm font-bold uppercase tracking-wide text-gray-600">Fake visual effect</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 max-w-3xl text-gray-700">{page.description}</p>
      </section>
      <ResponsibleUseNotice motion={page.motionWarning} />
      <div className="mt-5">
        <FullscreenEffectStage effect={page.effect} title={page.h1} motionWarning={page.motionWarning} />
      </div>
      <div className="content-prose mt-8">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </div>
      <RelatedFunScreens current={page.slug} related={page.related} />
      <RelatedTools />
      <FAQBlock items={page.faqs} />
    </main>
  );
}
