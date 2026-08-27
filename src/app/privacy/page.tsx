import type { Metadata } from "next";
import PrivacyContent from "@/components/legal/PrivacyContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | DigiNizam",
  description: "Learn how DigiNizam collects, uses, and protects your business data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      <PrivacyContent />
    </main>
  );
}
