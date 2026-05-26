import Link from "next/link";
import { funScreens } from "@/lib/fun-screens";

export function RelatedFunScreens({ current, related }: { current: string; related: string[] }) {
  const screens = related
    .map((slug) => funScreens.find((screen) => screen.slug === slug))
    .filter((screen): screen is NonNullable<typeof screen> => Boolean(screen));

  return (
    <section aria-labelledby="related-fun-screens" className="my-8">
      <h2 id="related-fun-screens" className="text-2xl font-bold">Related fun screens</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Link href="/fun-screens" className="rounded border border-line bg-white p-4 hover:border-gray-500">
          <span className="font-semibold">All Fun Screens</span>
          <span className="mt-1 block text-sm text-gray-600">Browse harmless full-screen visual effects.</span>
        </Link>
        {screens.filter((screen) => screen.slug !== current).slice(0, 3).map((screen) => (
          <Link key={screen.slug} href={`/${screen.slug}`} className="rounded border border-line bg-white p-4 hover:border-gray-500">
            <span className="font-semibold">{screen.cardTitle}</span>
            <span className="mt-1 block text-sm text-gray-600">{screen.cardDescription}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
