import type { Metadata } from "next";
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutWhyUs from '@/components/about/AboutWhyUs';
import AboutTeam from '@/components/about/AboutTeam';
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
                DigiNizam provides POS, inventory and business-management software designed to help businesses manage day-to-day operations from connected workflows.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Does DigiNizam provide support?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam provides 24/7 support as part of its service commitment, helping teams keep operations moving with ongoing assistance and guided setup.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">Does DigiNizam serve customers globally?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam is positioned to serve customers globally, with product and support workflows designed for international business use without creating unsupported office-specific claims.
              </p>
            </article>
            <article className="rounded-2xl border border-surface-border bg-surface p-5">
              <h3 className="text-lg font-bold text-foreground mb-2">What industries does DigiNizam support?</h3>
              <p className="text-muted text-sm leading-relaxed">
                DigiNizam provides industry-specific workflows for areas such as retail, restaurants, pharmacies and specialty stores, with setup depending on the business workflow.
              </p>
            </article>
          </div>
        </div>
      </section>
      <AboutMission />
      <AboutWhyUs />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}
