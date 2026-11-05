import type { Metadata } from "next";
import PrivacyContent from "@/components/legal/PrivacyContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | DigiNizam",
  description:
    "Read the DigiNizam privacy policy to learn what information we collect through this website and our software, how it is used and how to contact us.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <PrivacyContent />
    </div>
  );
}
