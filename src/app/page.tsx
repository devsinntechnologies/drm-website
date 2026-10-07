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
  title: "POS Software for Retail, Restaurants & Growing Businesses | DigiNizam",
  description:
    "POS software for billing, inventory, sales and daily operations across retail, restaurants and other growing businesses. Explore features, industries, pricing and book a demo.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HomeCapabilitiesSection />
      <section className="py-10 md:py-14 bg-background border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="section-label">Quick answers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">What businesses want to know before choosing POS software</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What is POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                POS software helps businesses record sales and manage related operational information such as inventory, reporting and checkout from a connected system.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What does a POS system do?</h3>
              <p className="text-muted text-sm leading-relaxed">
                A POS system brings billing, sales, inventory and reporting into one workflow so teams can process transactions while keeping stock and operational records aligned.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5 md:col-span-2">
              <h3 className="text-lg font-bold text-foreground mb-2">Who uses POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Retail stores, restaurants, specialty businesses and multi-location operators use POS software to manage transactions, stock movement, daily sales and reporting from one place.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5 md:col-span-2">
              <h3 className="text-lg font-bold text-foreground mb-2">How does POS software improve daily operations?</h3>
              <p className="text-muted text-sm leading-relaxed">
                By connecting billing, stock, sales and reporting, POS software reduces manual follow-up and gives teams a clearer picture of daily activity across checkout, inventory and performance.
              </p>
            </article>
          </div>
        </div>
      </section>
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
          { href: "/products/restaurant", label: "restaurant POS software" },
          { href: "/features", label: "POS & inventory management features" },
          { href: "/pricing", label: "POS software pricing & plans" },
          { href: "/demo", label: "book a POS software demo" },
        ]}
      />
      <ReadyToGetStartedSection />
    </main>
  );
}
