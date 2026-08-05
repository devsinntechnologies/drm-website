"use client";

import PageHero from "@/components/common/PageHero";

export default function BlogHero() {
  return (
    <PageHero
      label="Resources & news"
      title={
        <>
          Insights for <span className="text-primary">modern retail</span>
        </>
      }
      description="Industry trends, operational guides, and product updates from the DigiNizam team."
    />
  );
}
