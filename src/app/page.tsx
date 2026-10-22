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
    <div className="min-h-screen bg-background">
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
                POS software records sales and connects checkout with related business information such as product records, inventory and reports. DigiNizam brings these workflows together in a configured platform so teams can manage daily work from connected records.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What does a POS system do?</h3>
              <p className="text-muted text-sm leading-relaxed">
                A POS system helps a business create bills, record sales and organize information used in day-to-day operations. Depending on the selected configuration, it can connect these activities with stock, purchasing, reports and other supported workflows.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5 md:col-span-2">
              <h3 className="text-lg font-bold text-foreground mb-2">Who uses POS software?</h3>
              <p className="text-muted text-sm leading-relaxed">
                POS software is used by owners, managers and staff handling sales and operational records. DigiNizam offers configurations for retail stores, restaurants, pharmacies, snooker clubs and other supported businesses. The right setup depends on the workflow and modules each team needs.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5 md:col-span-2">
              <h3 className="text-lg font-bold text-foreground mb-2">How does POS software improve daily operations?</h3>
              <p className="text-muted text-sm leading-relaxed">
                POS software can reduce separate record keeping by connecting billing, sales, stock and reports. DigiNizam brings supported workflows together so teams can review operational information in one configured platform. The benefit depends on accurate records, suitable configuration and how staff use the system.
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
          { href: "/industries", label: "industry solutions" },
          { href: "/features", label: "POS & inventory management features" },
          { href: "/pricing", label: "Discuss POS software pricing" },
          { href: "/demo", label: "book a POS software demo" },
        ]}
      />
      <ReadyToGetStartedSection description="See billing, inventory and reporting in a walkthrough based on your business requirements." />
    </div>
  );
}
