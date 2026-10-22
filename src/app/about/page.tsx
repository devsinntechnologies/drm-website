import type { Metadata } from "next";
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutWhyUs from '@/components/about/AboutWhyUs';
import AboutTeam from '@/components/about/AboutTeam';
import SeoRelatedLinks from '@/components/seo/SeoRelatedLinks';
import SiteCTA from '@/components/common/SiteCTA';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "About DigiNizam | POS & Business Management Software",
  description:
    "Learn about DigiNizam, the software platform helping businesses manage POS, inventory and daily operations with tailored workflows and ongoing support.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      <AboutHero />
      <section className="py-10 md:py-14 bg-background border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="section-label">Quick answers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">Questions people ask about DigiNizam</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Who is DigiNizam?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam provides POS, inventory and business-management software designed to connect billing, stock, reporting and daily operational workflows. Available modules and the final configuration depend on the needs of the business.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Does DigiNizam provide 24/7 support?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Yes. DigiNizam provides 24/7 support as part of its service commitment. Discuss the support channels, onboarding arrangements and any setup-specific requirements with the team when reviewing your solution.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Does DigiNizam serve customers globally?</h3>
              <p className="text-muted text-sm leading-relaxed">
                Yes. DigiNizam serves customers globally through its English-language offering. Available workflows and setup requirements should be confirmed for each business. Global service availability does not imply local offices, universal tax compliance or support for every regional integration.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What industries does DigiNizam support?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam offers industry-specific configurations for retail, restaurants, pharmacies, snooker clubs and other supported businesses. Review the relevant product page and demo to confirm the modules and workflows available for your industry.
              </p>
            </article>
          </div>
        </div>
      </section>
      <AboutMission />
      <AboutWhyUs />
      <AboutValues />
      <AboutTeam />
      <SeoRelatedLinks
        intro="Explore DigiNizam:"
        links={[
          { href: "/", label: "DigiNizam POS software" },
          { href: "/features", label: "POS and inventory capabilities" },
          { href: "/industries", label: "industries we serve" },
          { href: "/products/retail", label: "retail POS software" },
          { href: "/products/restaurant", label: "restaurant POS software" },
          { href: "/products/pharmacy", label: "pharmacy POS software" },
          { href: "/products/snooker", label: "snooker POS software" },
          { href: "/demo", label: "talk to the DigiNizam team" },
        ]}
      />
      <SiteCTA title="Talk to DigiNizam" description="Book a demo to discuss your business workflow, required modules and next steps." />
    </div>
  );
}
