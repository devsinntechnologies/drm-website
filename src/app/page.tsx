import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AwardBannerSection from "@/components/home/AwardBannerSection";
import AllIndustriesSection from "@/components/home/AllIndustriesSection";
import HomeAiSection from "@/components/home/HomeAiSection";
import WhatWeDoSection from "@/components/home/Whatwedo";
import BoostSalesSection from "@/components/home/BoostSales";
import WhoWeAreSection from "@/components/home/Whoweare";
import SmartFeaturesGridSection from "@/components/home/SmartFeaturesGridSection";
import HomeCapabilitiesSection from "@/components/home/HomeCapabilitiesSection";
import ComplianceStripSection from "@/components/home/ComplianceStripSection";
import Testimonials from "@/components/home/Testimonials";
import ReadyToGetStartedSection from "@/components/home/Readytogetstarted";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "POS Software Pakistan | DigiNizam",
  description:
    "DigiNizam POS software helps businesses manage billing, inventory, orders and daily operations from one platform. Explore the solution and book a demo.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HomeCapabilitiesSection />
      <AwardBannerSection />
      <AllIndustriesSection />
      <HomeAiSection />
      <SmartFeaturesGridSection />
      <WhatWeDoSection />
      <BoostSalesSection />
      <WhoWeAreSection />
      <ComplianceStripSection />
      <Testimonials />
      <SeoRelatedLinks
        intro="See how DigiNizam fits your operation:"
        links={[
          { href: "/products/restaurant", label: "restaurant management software" },
          { href: "/features", label: "restaurant inventory software" },
          { href: "/pricing", label: "POS software pricing in Pakistan" },
          { href: "/demo", label: "book a demo" },
        ]}
      />
      <ReadyToGetStartedSection />
    </main>
  );
}
