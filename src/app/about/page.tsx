import type { Metadata } from "next";
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutWhyUs from '@/components/about/AboutWhyUs';
import AboutTeam from '@/components/about/AboutTeam';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "About DigiNizam | POS Software Pakistan",
  description:
    "Learn about DigiNizam — the team building POS and ERP software for restaurants, retail, and businesses across Pakistan.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-surface min-h-screen">
      <AboutHero />
      <AboutMission />
      <AboutWhyUs />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}
