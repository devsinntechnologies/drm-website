import React from "react";
import ComingSoon from "@/components/ComingSoon";

export default async function CatchAllServicesPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const name = slug
    ?.map((s) => s.replace(/-/g, " "))
    .join(" ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return <ComingSoon pageName={name || "Service"} />;
}
