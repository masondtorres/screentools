import Link from "next/link";

export function FunScreenCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href} className="rounded border border-line bg-white p-4 hover:border-gray-500">
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </Link>
  );
}
