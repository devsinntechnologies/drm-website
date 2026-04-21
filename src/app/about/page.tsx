"use client";
import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutMission from '@/components/about/AboutMission';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';

export default function AboutPage() {
  return (
    <div className="pt-10">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}
