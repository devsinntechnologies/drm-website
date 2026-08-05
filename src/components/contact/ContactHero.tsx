"use client";

import PageHero from "@/components/common/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      label="Contact us"
      title={
        <>
          Let&apos;s talk about your <span className="text-primary">business</span>
        </>
      }
      description="Questions about POS, ERP, or implementation? Our team responds within two business hours on working days."
    />
  );
}
