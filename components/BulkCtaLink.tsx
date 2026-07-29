"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function BulkCtaLink({ children, className, href = "/contact?reason=bulk-screen-testing" }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackEvent("bulk_cta_click", { destination: href });
        trackEvent("bulk_testing_cta_clicked", { destination: href });
      }}
    >
      {children}
    </Link>
  );
}
