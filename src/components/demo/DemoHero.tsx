"use client";

import PageHero from "@/components/common/PageHero";

export default function DemoHero() {
  return (
    <PageHero
      label="Live demo"
      title={
        <>
          See <span className="text-primary">DigiNizam</span> in action
        </>
      }
      description="Walk through POS, inventory, and reporting with our team—tailored to your industry and workflow."
    />
  );
}
