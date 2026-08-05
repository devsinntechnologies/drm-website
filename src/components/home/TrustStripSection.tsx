"use client";

import React from "react";
import SectionShell from "@/components/common/SectionShell";

export default function TrustStripSection() {
  return (
    <SectionShell tone="background" divider className="!py-7 md:!py-9">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="text-xs font-semibold text-muted uppercase tracking-[0.14em] shrink-0">
          Trusted by growing brands
        </p>
        <span className="text-xs font-medium text-muted whitespace-nowrap sm:text-right">
          500+ outlets nationwide
        </span>
      </div>
    </SectionShell>
  );
}
