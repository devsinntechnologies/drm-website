import React from "react";
import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata({
    title: "Contact — In Development | DigiNizam",
    description: "This contact page is in development. Use the main DigiNizam contact page to reach our team.",
    path: `/contact/${slug.map(encodeURIComponent).join("/")}`,
    index: false,
    follow: true,
  });
}

export default function ContactComingSoon() {
  return <ComingSoon pageName="Contact" />;
}
