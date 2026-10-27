import type { Metadata } from "next";
import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";
import SectionCopy from "@/components/common/SectionCopy";
import IndustryContextLinks from "@/components/common/IndustryContextLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import { pageMetadata, type FaqItem } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pharmacy POS & Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam POS for pharmacy billing, inventory and business reports. Book a demo to discuss your medical store's requirements and selected configuration.",
  path: "/products/pharmacy",
});

const pharmacyFaqs: FaqItem[] = [
  {
    q: "How does pharmacy POS differ from prescription-management software?",
    a: "Pharmacy POS covers retail sales, item stock and business records. Prescription-management software also handles specialist clinical and dispensing workflows. DigiNizam's scope here is billing and inventory. Prescription processing, clinical checks, insurance claims and regulatory integrations are not included as capabilities on this page.",
  },
  {
    q: "What should I prepare for a pharmacy POS demo?",
    a: "Bring examples of item records, supplier documents, receipts and the stock controls your pharmacy requires. List any batch, expiry, branch, device or professional-system requirements. Confirm the available configuration and exclusions before choosing the setup. DigiNizam does not provide online payment integration.",
  },
];

export default function PharmacySolutionPage() {
  return (
    <ProductPageTemplate
      label="Pharmacy POS"
      title="Pharmacy POS for Billing, Inventory & Business Reports"
      description="Explore billing, inventory and business reports for your pharmacy or medical store. Review the available item records and stock controls in a demo."
      intro={
        <SectionCopy label="Overview" title="What Does Pharmacy POS Cover?">
          <p>
            Pharmacy POS records retail purchases, item stock and business reports. Prescription
            processing, clinical checks, insurance claims and dispensing are separate
            pharmacy-management functions. The DigiNizam page covers the billing and inventory
            scope described here, rather than claiming those specialist functions.
          </p>
        </SectionCopy>
      }
      overview={{
        title: "Review Your Pharmacy's Daily Operations",
        description:
          "Bring your billing, stock and reporting requirements to a DigiNizam demo. Confirm the available item records, inventory controls and branch setup with our team.",
        image: "/pharmacy.png",
        imageAlt: "Illustration of a pharmacy storefront",
      }}
      features={{
        title: "Plan your pharmacy setup",
        description: "Confirm the workflows and responsibilities before choosing your configuration.",
        highlights: [
          "Review billing, item records and inventory workflows",
          "Confirm any batch, expiry or supplier requirements during the demo",
          "No online payment integration is available",
        ],
        image: "/pharmacy.png",
        imageAlt: "Illustration of a pharmacy storefront",
      }}
      modulesTitle="Pharmacy Workflows to Review"
      modules={[
        { title: "Stock requirements", desc: "Discuss your item records and any batch or expiry controls you need. Confirm what the selected setup supports.", icon: <FiBox size={20} /> },
        { title: "Item information", desc: "Review the item information available in your configuration during the demo.", icon: <FiLayers size={20} /> },
        { title: "Billing workflow", desc: "Review billing and receipt requirements, including any hardware you plan to use.", icon: <FiPrinter size={20} /> },
        { title: "Purchase workflows", desc: "Discuss supplier and receiving requirements and confirm the available functions.", icon: <FiTruck size={20} /> },
        { title: "Business reports", desc: "Review the sales and inventory reports relevant to your pharmacy. Confirm local regulatory obligations separately.", icon: <FiBarChart2 size={20} /> },
        { title: "Branch requirements", desc: "Discuss your locations and confirm deployment, connectivity and any synchronization requirements.", icon: <FiGlobe size={20} /> },
      ]}
      afterModules={
        <>
          <SectionCopy label="Your setup" title="Discuss Your Business Setup" reverse>
            <p>
              Pharmacies and medical stores in Pakistan can discuss their billing and stock
              requirements with DigiNizam. Confirm professional and regulatory obligations
              separately for your operation.
            </p>
            <IndustryContextLinks />
          </SectionCopy>
          <SeoFaq
            label="Pharmacy POS"
            title="Pharmacy software questions"
            description="Direct answers for common pharmacy POS questions."
            items={pharmacyFaqs}
          />
        </>
      }
      cta={{
        title: "Review DigiNizam for Your Pharmacy",
        description:
          "Book a demo to review billing, item records and stock requirements for your pharmacy. Pricing is discussed after the demo, once requirements are understood.",
        primaryCtaLabel: "Book a Demo",
      }}
    />
  );
}
