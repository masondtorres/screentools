"use client";

import { trackEvent } from "@/lib/analytics";

export function ChecklistCTA() {
  return (
    <section className="my-8 rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm" aria-labelledby="checklist-cta">
      <h2 id="checklist-cta" className="text-2xl font-bold">Used Monitor Test Checklist</h2>
      <p className="mt-2 text-gray-700">Checklist coming soon.</p>
      <button type="button" onClick={() => trackEvent("checklist_cta_clicked")} className="mt-4 rounded-xl bg-ink px-4 py-2 text-sm font-bold text-white hover:bg-slate-700">
        Checklist coming soon
      </button>
    </section>
  );
}
