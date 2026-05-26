import Link from "next/link";
import { toolLinks } from "@/lib/site";

export function RelatedTools({ current }: { current?: string }) {
  const links = toolLinks.filter((tool) => tool.href !== current).slice(0, 4);
  return (
    <section aria-labelledby="related-tools" className="my-8">
      <h2 id="related-tools" className="text-2xl font-bold">Related tools</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((tool) => (
          <Link key={tool.href} href={tool.href} className="rounded border border-line bg-white p-4 hover:border-gray-500">
            <span className="font-semibold">{tool.title}</span>
            <span className="mt-1 block text-sm text-gray-600">{tool.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
