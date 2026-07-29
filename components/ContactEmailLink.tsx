"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

export function ContactEmailLink({ email, subject, children, className }: { email: string; subject?: string; children?: ReactNode; className?: string }) {
  const href = `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return (
    <a href={href} className={className} onClick={() => trackEvent("contact_email_clicked", { email })}>
      {children ?? email}
    </a>
  );
}
