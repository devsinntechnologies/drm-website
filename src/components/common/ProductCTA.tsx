"use client";

import SiteCTA from "@/components/common/SiteCTA";

export default function ProductCTA({
  title = "See DigiNizam in action",
  description = "Book a free demo and discover how DigiNizam fits your operations.",
}: {
  title?: string;
  description?: string;
}) {
  return <SiteCTA title={title} description={description} />;
}
