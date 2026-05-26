"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { config } from "@/lib/config";

export function AdSlot({ placement = "generic" }: { placement?: string }) {
  useEffect(() => {
    if (config.ADS_ENABLED) trackEvent("ad_slot_visible", { placement });
  }, [placement]);

  if (!config.ADS_ENABLED) return null;

  return (
    <aside className="my-8 min-h-24 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5 text-center text-sm text-gray-600" aria-label="Advertisement">
      <span className="font-semibold">Advertisement</span>
    </aside>
  );
}

export function InContentAdSlot() {
  return <AdSlot placement="in_content" />;
}

export function BelowToolAdSlot() {
  return <AdSlot placement="below_tool" />;
}
