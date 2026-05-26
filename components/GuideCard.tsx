import Link from "next/link";

export function GuideCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm hover:border-blue-200 hover:shadow-soft">
      <h2 className="text-lg font-extrabold tracking-tight group-hover:text-blue-700">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </Link>
  );
}
