import type { Metadata } from "next";
import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";
import SectionCopy from "@/components/common/SectionCopy";
import IndustryContextLinks from "@/components/common/IndustryContextLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import { pageMetadata, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Bakery POS & Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam bakery POS for counter billing, item inventory and reports. Confirm weight entry, expiry, labels and purchasing requirements in a demo.",
  path: "/products/bakery",
});

const bakeryFaqs: FaqItem[] = [
  {
    q: "What should a bakery check before choosing POS software?",
    a: "Check counter billing, item records, stock movements, supplier purchases and reports. Then test any loose-product units, weighing, labels, batch or expiry requirements with the actual devices and selected setup. Recipe costing and production planning need separate confirmation.",
  },
  {
    q: "Does DigiNizam support weight entry, expiry controls and labels for my bakery?",
    a: "These requirements must be confirmed for the selected configuration and hardware. Bring packaged and loose products, label examples and expiry requirements to the demo. The billing and stock scope described here does not guarantee scales, batch tracking, expiry alerts or production tools.",
  },
];

export default function BakerySolutionPage() {
  return (
    <ProductPageTemplate
      label="Bakery POS"
      title="Bakery POS Software for Billing & Stock Management"
      description="Connect bakery counter sales with item records and stock visibility. Review purchasing, reports and any weight, expiry or label requirements for your setup."
      heroMedia={{ type: "video", src: "/bakery.mp4" }}
      intro={
        <SectionCopy label="Overview" title="What Is Bakery POS Software?">
          <p>
            Bakery POS software records counter sales and connects them with item inventory,
            purchasing and store reports. Retail bakery billing is different from recipe costing
            or production planning. Check weight-based sales, expiry controls, labels and any
            production requirements separately.
          </p>
        </SectionCopy>
      }
      overview={{
        title: "Bakery Counter Billing and Stock Records",
        description:
          "Review item records, counter billing, purchasing and reports using examples from your bakery.",
        badge: "Confirm your bakery configuration",
        image: "/bakeryshop.png",
        imageAlt: "Bakery POS checkout",
      }}
      features={{
        title: "Review Your Bakery Workflow",
        description:
          "Bring packaged products, loose items and label examples to the demo. Confirm the available billing and stock controls before rollout.",
        highlights: [
          "Counter billing and item records",
          "Weight and expiry requirements",
          "Purchasing and report review",
        ],
        image: "/bakeryshop.png",
        imageAlt: "Bakery shop operations",
      }}
      modulesTitle="Bakery Workflows to Review"
      modules={[
        { title: "Item inventory", desc: "Review product records and stock movements. Confirm batch or expiry requirements separately.", icon: <FiBox size={20} /> },
        { title: "Counter billing", desc: "Review item lookup and sales. Confirm weight entry or scale hardware using the selected setup.", icon: <FiLayers size={20} /> },
        { title: "Label requirements", desc: "Review the supported printer, label fields and packaging requirements.", icon: <FiPrinter size={20} /> },
        { title: "Purchasing records", desc: "Review the supplier, purchasing and receiving steps available in your configuration.", icon: <FiTruck size={20} /> },
        { title: "Business reports", desc: "Review the sales, inventory and operating reports available in your selected setup.", icon: <FiBarChart2 size={20} /> },
        { title: "Outlet requirements", desc: "Confirm stock locations, user access and connectivity for your bakery setup.", icon: <FiGlobe size={20} /> },
      ]}
      afterModules={
        <>
          <SectionCopy label="Your setup" title="Discuss Your Business Setup" reverse>
            <p>
              Bakeries and sweet shops in Pakistan can review counter billing, stock and
              purchasing with DigiNizam. Confirm weight, expiry and label requirements using your
              product examples.
            </p>
            <IndustryContextLinks peer="restaurant" />
          </SectionCopy>
          <SeoFaq
            label="Bakery POS"
            title="Bakery software questions"
            description="Direct answers for common bakery POS questions."
            items={bakeryFaqs}
          />
        </>
      }
      cta={{
        title: "Review DigiNizam for Your Bakery",
        description:
          "Book a demo to review counter billing, item records, stock and label requirements. Pricing is discussed after the demo, once requirements are understood.",
        primaryCtaLabel: "Book a Demo",
      }}
    />
  );
}
