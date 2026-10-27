"use client";

import SiteCTA from "@/components/common/SiteCTA";

export default function ProductCTA({
  title = "See DigiNizam in action",
  description = "Book a free demo and discover how DigiNizam fits your operations.",
  primaryCtaLabel,
}: {
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
}) {
  return <SiteCTA title={title} description={description} primaryCtaLabel={primaryCtaLabel} />;
}
