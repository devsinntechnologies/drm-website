import type { Metadata } from "next";
import DemoHero from "@/components/demo/DemoHero";
import DemoForm from "@/components/demo/DemoForm";
import DemoSeoSections from "@/components/demo/DemoSeoSections";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import SiteCTA from "@/components/common/SiteCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a DigiNizam POS Demo | POS Software Pakistan",
  description:
    "Book a free DigiNizam demo to explore POS billing, inventory, reporting and multi-location workflows for your business.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <main className="bg-background">
      <DemoHero />
      <DemoForm />
      <DemoSeoSections />
      <SeoRelatedLinks
        intro="Learn more first:"
        links={[
          { href: "/", label: "POS software Pakistan" },
          { href: "/products/retail", label: "retail POS software" },
          { href: "/features", label: "inventory management software" },
          { href: "/pricing", label: "POS software pricing" },
          { href: "/industries", label: "business-specific solutions" },
        ]}
      />
      <SiteCTA
        title="See DigiNizam configured for your business"
        description="Walk through billing, inventory, reporting and the modules that match your business workflow with our team."
      />
    </main>
  );
}
