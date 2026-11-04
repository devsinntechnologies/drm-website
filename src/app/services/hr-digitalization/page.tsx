import type { Metadata } from "next";
import HrDigitalizationContent from "@/components/services/HrDigitalizationContent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "HR Digitalization & HRIS Software Pakistan | DigiNizam",
  description:
    "DigiNizam HRIS software for HR digitalization — payroll automation, time & attendance, employee self-service, and recruitment for businesses in Pakistan.",
  path: "/services/hr-digitalization",
  // Not officially ready (owner, 4 Nov 2026): keep live and crawlable, out of the
  // index and sitemap. Remove these two lines and re-add the sitemap entry at launch.
  index: false,
  follow: true,
});

export default function HRDigitalizationPage() {
  return <HrDigitalizationContent />;
}
