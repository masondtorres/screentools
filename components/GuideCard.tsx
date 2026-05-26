import Link from "next/link";

export function GuideCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href} className="rounded border border-line bg-white p-4 hover:border-gray-500">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </Link>
  );
}
