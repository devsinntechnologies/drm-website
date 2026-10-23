import React from "react";
import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMetadata } from "@/lib/seo";

type ServiceProps = { params: Promise<{ slug: string[] }> };

function serviceName(slug: string[]) {
  return slug.map((s) => s.replace(/-/g, " ")).join(" ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: ServiceProps): Promise<Metadata> {
  const { slug } = await params;
  const name = serviceName(slug);
  return pageMetadata({
    title: `${name} Service — In Development | DigiNizam`,
    description: `DigiNizam's ${name.toLowerCase()} service page is in development. Contact our team to discuss your requirements.`,
    path: `/services/${slug.map(encodeURIComponent).join("/")}`,
    index: false,
    follow: true,
  });
}

export default async function CatchAllServicesPage({
  params,
}: ServiceProps) {
  const { slug } = await params;
  const name = serviceName(slug);

  return <ComingSoon pageName={name || "Service"} />;
}
