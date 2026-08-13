import type { Metadata } from "next";
import DemoHero from "@/components/demo/DemoHero";
import DemoForm from "@/components/demo/DemoForm";
import DemoSeoSections from "@/components/demo/DemoSeoSections";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import SiteCTA from "@/components/common/SiteCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book a DigiNizam Demo | POS Software Pakistan",
  description:
    "Book a DigiNizam demo to see restaurant POS, billing, inventory, orders and reporting in action. Choose the demo/contact option that fits your business.",
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
          { href: "/products/restaurant", label: "restaurant management software" },
          { href: "/features", label: "restaurant inventory software" },
          { href: "/pricing", label: "POS software pricing" },
        ]}
      />
      <SiteCTA
        title="Questions before booking?"
        description="Talk to our team—we'll help you pick the right POS and inventory setup for your business."
      />
    </main>
  );
}
