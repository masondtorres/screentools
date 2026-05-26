"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { config } from "@/lib/config";

export function AdPlaceholder({ label = "Advertisement" }: { label?: string }) {
  useEffect(() => {
    if (config.ADS_ENABLED) trackEvent("ad_placeholder_viewed", { label });
  }, [label]);

  if (!config.ADS_ENABLED) return null;

  return (
    <aside className="my-8 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5 text-center text-sm text-gray-600 shadow-sm" aria-label={label}>
      <span>{label}</span>
    </aside>
  );
}
