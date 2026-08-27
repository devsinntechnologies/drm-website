import type { Metadata } from "next";
import WebDevelopmentContent from "@/components/services/WebDevelopmentContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Web Development Services Pakistan | DigiNizam",
  description:
    "Professional web development services from DigiNizam — fast, secure, and scalable websites and web applications built for growing businesses.",
  path: "/services/web-development",
});

export default function WebDevelopmentPage() {
  return <WebDevelopmentContent />;
}
