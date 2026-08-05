"use client";

import PageHero from "@/components/common/PageHero";

export default function PricingHero() {
  return (
    <PageHero
      label="Simple pricing"
      title={
        <>
          Plans for every <span className="text-primary">scale</span>
        </>
      }
      description="Choose the plan that fits your business. Transparent pricing with no hidden fees."
    />
  );
}
