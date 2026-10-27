import React from "react";
import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

type ProductProps = { params: Promise<{ slug: string[] }> };

function productName(slug: string[]) {
  return slug
    ?.map((s) => s.replace(/-/g, " "))
    .join(" ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: ProductProps): Promise<Metadata> {
  const { slug } = await params;
  const name = productName(slug);
  return pageMetadata({
    title: `${name} Solution — In Development | DigiNizam`,
    description: `This DigiNizam solution page is in development. Explore the available industry pages or contact our team to discuss your requirements.`,
    path: `/products/${slug.map(encodeURIComponent).join("/")}`,
    index: false,
    follow: true,
  });
}

export default async function CatchAllProductsPage({ params }: ProductProps) {
  const { slug } = await params;
  const name = productName(slug);

  return <ComingSoon pageName={name ? `${name} Solution` : "Product"} />;
}
