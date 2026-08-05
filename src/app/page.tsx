import React from "react";

import HeroSection from "@/components/home/HeroSection";
import TrustStripSection from "@/components/home/TrustStripSection";
import AwardBannerSection from "@/components/home/AwardBannerSection";
import AllIndustriesSection from "@/components/home/AllIndustriesSection";
import HomeAiSection from "@/components/home/HomeAiSection";
import WhatWeDoSection from "@/components/home/Whatwedo";
import BoostSalesSection from "@/components/home/BoostSales";
import WhoWeAreSection from "@/components/home/Whoweare";
import SmartFeaturesGridSection from "@/components/home/SmartFeaturesGridSection";
import ComplianceStripSection from "@/components/home/ComplianceStripSection";
import Testimonials from "@/components/home/Testimonials";
import ReadyToGetStartedSection from "@/components/home/Readytogetstarted";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* <TrustStripSection /> */}
      <AwardBannerSection />
      <AllIndustriesSection />
      <HomeAiSection />
      <SmartFeaturesGridSection />
      <WhatWeDoSection />
      <BoostSalesSection />
      <WhoWeAreSection />
      <ComplianceStripSection />
      <Testimonials />
      <ReadyToGetStartedSection />
    </main>
  );
}
