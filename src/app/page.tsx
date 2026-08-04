import React from "react";

import HeroSection from "@/components/home/HeroSection";
import AwardBannerSection from "@/components/home/AwardBannerSection";
import AllIndustriesSection from "@/components/home/AllIndustriesSection";
import BoostSalesSection from "@/components/home/BoostSales";
import WhatWeDoSection from "@/components/home/Whatwedo";
import WhoWeAreSection from "@/components/home/Whoweare";
import SmartFeaturesGridSection from "@/components/home/SmartFeaturesGridSection";
import Testimonials from "@/components/home/Testimonials";
import ReadyToGetStartedSection from "@/components/home/Readytogetstarted";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AwardBannerSection />
      <AllIndustriesSection />
      <WhatWeDoSection />
      <BoostSalesSection />
      <WhoWeAreSection />
      <SmartFeaturesGridSection />
      <Testimonials />
      <ReadyToGetStartedSection />
    </main>
  );
}
