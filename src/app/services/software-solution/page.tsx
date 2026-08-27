import type { Metadata } from "next";
import SoftwareSolutionContent from "@/components/services/SoftwareSolutionContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Custom Software Development Services | DigiNizam",
  description:
    "End-to-end custom software development services from DigiNizam — application engineering, automation, and digital transformation for growing businesses.",
  path: "/services/software-solution",
});

export default function SoftwareSolutionPage() {
  return <SoftwareSolutionContent />;
}
