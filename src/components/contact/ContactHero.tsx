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
      description="Questions about POS, inventory, or implementation? Tell our team about your business and the setup you need."
    />
  );
}
