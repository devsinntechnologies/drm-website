import type { Metadata } from "next";
import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pharmacy POS & Inventory Software | DigiNizam",
  description:
    "Explore DigiNizam POS for pharmacy billing, inventory and business reports. Book a demo to discuss your medical store's requirements and selected configuration.",
  path: "/products/pharmacy",
});

export default function PharmacySolutionPage() {
  return (
    <ProductPageTemplate
      label="Pharmacy POS"
      title={
        <>
          Smart POS for <span className="text-primary">pharmacies & medical stores</span>
        </>
      }
      description="Explore billing, inventory and business reports for your pharmacy or medical store. Review the available workflows in your selected configuration during a demo."
      overview={{
        title: (
          <>
            Review your pharmacy&apos;s <span className="text-primary">daily operations</span>
          </>
        ),
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
      modules={[
        { title: "Stock requirements", desc: "Discuss your item records and any batch or expiry controls you need. Confirm what the selected setup supports.", icon: <FiBox size={20} /> },
        { title: "Item information", desc: "Review the item information available in your configuration during the demo.", icon: <FiLayers size={20} /> },
        { title: "Billing workflow", desc: "Review billing and receipt requirements, including any hardware you plan to use.", icon: <FiPrinter size={20} /> },
        { title: "Purchase workflows", desc: "Discuss supplier and receiving requirements and confirm the available functions.", icon: <FiTruck size={20} /> },
        { title: "Business reports", desc: "Review the sales and inventory reports relevant to your pharmacy. Confirm local regulatory obligations separately.", icon: <FiBarChart2 size={20} /> },
        { title: "Branch requirements", desc: "Discuss your locations and confirm deployment, connectivity and any synchronization requirements.", icon: <FiGlobe size={20} /> },
      ]}
      cta={{
        title: "See pharmacy POS in action",
        description: "Book a free demo tailored to your pharmacy or medical store workflow.",
      }}
    />
  );
}
