import type { Metadata } from "next";
import Industries from '@/components/Industries/Industries';
import React from 'react';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: "Industries We Serve | DigiNizam POS & ERP",
  description:
    "DigiNizam POS and ERP solutions tailored for restaurants, retail, pharmacy, supermarkets, and more industries across Pakistan.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div className="pt-2 md:pt-4">
      <Industries />
    </div>
  );
}
