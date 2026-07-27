import React from "react";
// import Navbar from "@/components/Navbar";

import HeroSection from "@/components/home/HeroSection";
import AwardBannerSection from "@/components/home/AwardBannerSection";
import AllIndustriesSection from "@/components/home/AllIndustriesSection";
import WhatWeDoSection from "@/components/home/Whatwedo";
import WhoWeAreSection from "@/components/home/Whoweare";
import GoesEverywhereSection from "@/components/home/GoesEverywhereSection";
import SmartFeaturesGridSection from "@/components/home/SmartFeaturesGridSection";
import SecondaryFeaturesGridSection from "@/components/home/SecondaryFeaturesGridSection";
import Testimonials from "@/components/home/Testimonials"
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* <Navbar/> */}

      {/* 2. Award Banner Section */}
      <AwardBannerSection />

      {/* 3. All In One Solution For All Industries */}
      <AllIndustriesSection />

      {/* 4. What We Do */}
      <WhatWeDoSection />

      {/* 5. Who We Are */}
      <WhoWeAreSection />

      {/* 6. Gentec Goes Where You Go */}
      <GoesEverywhereSection />

      {/* Additional Sections */}
      <SmartFeaturesGridSection />
      <SecondaryFeaturesGridSection />
      <Testimonials />
    </main>
  );
}
