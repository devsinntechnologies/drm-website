import type { Metadata } from "next";
import Industries from '@/components/Industries/Industries';
import React from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "Industry POS & Inventory Solutions | DigiNizam",
  description:
    "Explore DigiNizam POS and business management solutions for retail, restaurants, pharmacies, distribution and other supported industries worldwide.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="pt-2 md:pt-4">
      <Industries />
    </div>
  );
}
