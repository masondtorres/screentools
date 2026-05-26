"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { config } from "@/lib/config";

const gear = ["Monitor arm", "Portable monitor", "Screen cleaning kit", "Ring light", "Desk lamp"];

export function RecommendedGearBlock({ context = "general" }: { context?: string }) {
  useEffect(() => {
    if (config.AFFILIATE_BLOCKS_ENABLED) trackEvent("affiliate_block_visible", { context });
  }, [context]);

  if (!config.AFFILIATE_BLOCKS_ENABLED) return null;

  return (
    <section aria-labelledby="recommended-gear" className="my-8 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-sm">
      <h2 id="recommended-gear" className="text-2xl font-bold">Recommended gear</h2>
      <p className="mt-2 max-w-3xl text-sm text-gray-600">This section may contain affiliate links when enabled. No prices, ratings or reviews are shown.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {gear.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => trackEvent("affiliate_link_clicked", { item, context })}
            className="rounded-xl border border-line bg-white p-4 text-left text-sm font-semibold hover:border-blue-200 hover:shadow-sm"
          >
            {item}
            <span className="mt-2 block text-xs font-normal text-gray-600">Category placeholder</span>
          </button>
        ))}
      </div>
    </section>
  );
}
