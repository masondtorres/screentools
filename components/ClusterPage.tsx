import Link from "next/link";
import { FAQBlock } from "@/components/FAQBlock";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";
import type { ClusterPage as ClusterPageType } from "@/lib/clusters";

export function ClusterPage({ page }: { page: ClusterPageType }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <JsonLd data={[breadcrumbSchema([{ name: "Home", path: "/" }, { name: page.h1, path: `/${page.slug}` }]), faqSchema(page.faqs)]} />
      <section>
        <h1 className="text-3xl font-bold sm:text-4xl">{page.h1}</h1>
        <p className="mt-3 max-w-3xl text-gray-700">{page.intro}</p>
      </section>
      <section className="my-8" aria-labelledby={`${page.slug}-cards`}>
        <h2 id={`${page.slug}-cards`} className="text-2xl font-bold">Tools in this group</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.cards.map((card) => (
            <Link key={card.href} href={card.href} className="rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm hover:border-blue-200 hover:shadow-soft">
              <h3 className="font-extrabold tracking-tight">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="my-8" aria-labelledby={`${page.slug}-chooser`}>
        <h2 id={`${page.slug}-chooser`} className="text-2xl font-bold">Which tool should I use?</h2>
        <div className="mt-3 overflow-x-auto rounded-2xl border border-white/70 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3">Need</th>
                <th className="px-3 py-3">Use</th>
                <th className="px-3 py-3">Why</th>
              </tr>
            </thead>
            <tbody>
              {page.table.map((row) => (
                <tr key={row.need} className="border-t border-line">
                  <td className="px-3 py-3">{row.need}</td>
                  <td className="px-3 py-3"><Link href={row.href} className="font-semibold underline">{row.tool}</Link></td>
                  <td className="px-3 py-3 text-gray-700">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section aria-labelledby={`${page.slug}-guides`} className="my-8">
        <h2 id={`${page.slug}-guides`} className="text-2xl font-bold">Related guides</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {page.relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="rounded-2xl border border-white/70 bg-white/90 p-4 font-semibold shadow-sm hover:border-blue-200 hover:shadow-soft">
              {guide.title}
            </Link>
          ))}
        </div>
      </section>
      <FAQBlock items={page.faqs} />
    </main>
  );
}
