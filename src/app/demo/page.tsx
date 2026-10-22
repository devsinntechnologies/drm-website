import type { Metadata } from "next";
import DemoHero from "@/components/demo/DemoHero";
import DemoForm from "@/components/demo/DemoForm";
import DemoSeoSections from "@/components/demo/DemoSeoSections";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import SiteCTA from "@/components/common/SiteCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a POS Software Demo | DigiNizam",
  description:
    "Book a DigiNizam POS software demo to see billing, inventory, reporting and daily workflows configured around your business.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <div className="bg-background">
      <DemoHero />
      <DemoForm />
      <DemoSeoSections />
      <SeoRelatedLinks
        intro="Learn more first:"
        links={[
          { href: "/", label: "POS software" },
          { href: "/products/retail", label: "retail POS software" },
          { href: "/features", label: "POS software features" },
          { href: "/pricing", label: "Discuss POS software pricing" },
          { href: "/industries", label: "industry-specific POS solutions" },
        ]}
      />
      <SiteCTA
        title="See DigiNizam configured for your business"
        description="Walk through billing, inventory, reporting and the modules that match your business workflow with our team."
      />
    </div>
  );
}
