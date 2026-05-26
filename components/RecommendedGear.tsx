"use client";

import { trackEvent } from "@/lib/analytics";

const gear = ["Monitor arm", "Portable monitor", "Screen cleaning kit", "Ring light", "Desk lamp"];

export function RecommendedGear() {
  return (
    <section aria-labelledby="recommended-gear" className="my-8">
      <h2 id="recommended-gear" className="text-2xl font-bold">Recommended gear</h2>
      <p className="mt-2 max-w-3xl text-sm text-gray-600">Affiliate disclosure: these are placeholder gear categories for future affiliate links. No prices, ratings or reviews are shown.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {gear.map((item) => (
          <a
            key={item}
            href="#"
            onClick={(event) => {
              event.preventDefault();
              trackEvent("affiliate_clicked", { item });
            }}
            className="rounded border border-line bg-white p-4 text-sm font-semibold hover:border-gray-500"
          >
            {item}
            <span className="mt-2 block text-xs font-normal text-gray-600">Affiliate link placeholder</span>
          </a>
        ))}
      </div>
    </section>
  );
}
