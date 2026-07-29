"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function BulkLeadTracker() {
  useEffect(() => {
    trackEvent("bulk_page_view", { path: window.location.pathname });
  }, []);

  return null;
}
