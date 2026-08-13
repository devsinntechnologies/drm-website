"use client";

import FeaturesHeroDetailed from "@/components/features/FeaturesHeroDetailed";
import FeaturesPowerful from "@/components/features/FeaturesPowerful";
import FeaturesRecipe from "@/components/features/FeaturesRecipe";
import FeaturesChef from "@/components/features/FeaturesChef";
import FeaturesCloud from "@/components/features/FeaturesCloud";
import FeaturesInventory from "@/components/features/FeaturesInventory";
import FeaturesModules from "@/components/features/FeaturesModules";
import FeaturesKDS from "@/components/features/FeaturesKDS";
import FeaturesSalient from "@/components/features/FeaturesSalient";
import InventorySeoSections from "@/components/features/InventorySeoSections";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import SiteCTA from "@/components/common/SiteCTA";

export default function FeaturesPageContent() {
  return (
    <main className="min-h-screen bg-background">
      <FeaturesHeroDetailed />
      <InventorySeoSections />
      <FeaturesInventory />
      <FeaturesRecipe />
      <FeaturesKDS />
      <FeaturesPowerful />
      <FeaturesChef />
      <FeaturesCloud />
      <FeaturesModules />
      <FeaturesSalient />
      <SeoRelatedLinks
        intro="Continue with:"
        links={[
          { href: "/products/restaurant", label: "restaurant management software" },
          { href: "/pricing", label: "POS software pricing" },
          { href: "/demo", label: "book a demo" },
          { href: "/", label: "POS software Pakistan" },
        ]}
      />
      <SiteCTA
        title="Book a Demo"
        description="See restaurant inventory software connected to POS, kitchen tickets and reporting."
      />
    </main>
  );
}
