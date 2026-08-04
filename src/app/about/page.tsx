"use client";
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutWhyUs from '@/components/about/AboutWhyUs';
import AboutTeam from '@/components/about/AboutTeam';

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
