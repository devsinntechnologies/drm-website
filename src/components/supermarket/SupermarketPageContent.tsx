"use client";

import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";
import SectionCopy from "@/components/common/SectionCopy";
import IndustryContextLinks from "@/components/common/IndustryContextLinks";
import SeoFaq from "@/components/seo/SeoFaq";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

const supermarketFaqs: FaqItem[] = [
  {
    q: "What is supermarket POS software?",
    a: "Supermarket POS software connects checkout billing with inventory, purchasing and reporting so supermarket teams can manage sales and stock from one system.",
  },
  {
    q: "What is the best POS system for a supermarket?",
    a: "Compare item lookup, billing, inventory, purchasing, reports and store locations. If your supermarket sells weighed goods or uses several checkout lanes, test those requirements with the actual devices and selected software configuration before choosing a POS.",
  },
  {
    q: "Which POS is best for a grocery store?",
    a: "Choose a grocery POS that fits your checkout and stock workflow. Review packaged and loose items, purchasing, reports, hardware compatibility and location requirements. Scale integration and specialist stock controls need to be verified separately.",
  },
  {
    q: "Can supermarket POS software manage inventory?",
    a: "A connected supermarket POS can keep inventory records linked with sales and purchases, helping teams see available stock and identify products that need attention.",
  },
  {
    q: "Does supermarket POS support barcode scanning?",
    a: "Yes. DigiNizam supports barcode scanning at checkout. Bring sample items and your scanner to the demo to confirm barcode formats and device compatibility. Scale integration, weight-based barcodes and shelf-label printing must be confirmed separately.",
  },
  {
    q: "Can supermarket POS manage multiple branches?",
    a: "Yes. DigiNizam supports multi-branch setups with connected store-level stock, sales and reports. Confirm checkout lanes, warehouses and access for your stores before rollout.",
  },
  {
    q: "What features should supermarket POS software have?",
    a: "Review checkout billing, item inventory, purchasing, receiving, reports and branch visibility. Confirm scanners, loose-product units, weighing scales, expiry or batch controls and labels separately if your store needs them.",
  },
  {
    q: "How does supermarket POS help with checkout?",
    a: "A POS retrieves configured items, records the sale and keeps billing connected with stock and reports. Review barcode lookup, receipt printing and any multi-lane requirements using the actual devices and selected setup.",
  },
];

export default function SupermarketPageContent() {
  return (
    <>
      <JsonLd data={faqJsonLd(supermarketFaqs)} />
      <ProductPageTemplate
        label="Supermarket POS"
        title="Supermarket POS Software for Billing & Stock Management"
        description="Keep grocery checkout, item records and stock activity connected. Review purchasing, reports and the checkout configuration your supermarket needs."
        heroMedia={{ type: "video", src: "/herovediosupermarket.mp4" }}
        intro={
          <SectionCopy label="Overview" title="What Is Supermarket POS Software?">
            <p>
              Supermarket POS software records grocery sales and connects them with item
              inventory, purchasing and store reports. The checkout setup may use scanners or
              other hardware, depending on the selected configuration and supported devices.
            </p>
          </SectionCopy>
        }
        overview={{
          title: "Checkout, Stock and Purchasing",
          description:
            "Review grocery sales, product records, supplier purchases and stock reports in the same workflow. Confirm the available checkout devices and location setup.",
          badge: "Review your checkout configuration",
          image: "/supermarket.png",
          imageAlt: "Supermarket POS operations",
        }}
        features={{
          title: "Review Your Grocery Store Workflow",
          description:
            "Bring sample packaged and loose products, supplier documents and checkout requirements. Check how each item is billed and recorded in stock.",
          highlights: [
            "Product and barcode requirements",
            "Purchasing and receiving review",
            "Checkout and location configuration",
          ],
          image: "/supermarket.png",
          imageAlt: "Supermarket inventory and checkout",
        }}
        modulesTitle="Supermarket Workflows to Review"
        modules={[
          {
            title: "Checkout billing",
            desc: "Review item lookup, sales and receipts with the devices available for your configuration.",
            icon: <FiLayers size={20} />,
          },
          {
            title: "Item inventory",
            desc: "Review product stock and the sales, purchase and adjustment records available in the selected setup.",
            icon: <FiBox size={20} />,
          },
          {
            title: "Purchasing and receiving",
            desc: "Confirm the supported supplier, purchase and stock-receiving steps.",
            icon: <FiTruck size={20} />,
          },
          {
            title: "Barcodes and shelf labels",
            desc: "Check supported barcode formats, printers and label fields using your items.",
            icon: <FiPrinter size={20} />,
          },
          {
            title: "Store reports",
            desc: "Review the sales and stock reports available for your store. Confirm any margin or loss-reporting requirements separately.",
            icon: <FiBarChart2 size={20} />,
          },
          {
            title: "Store locations",
            desc: "Confirm checkout lanes, locations, access and connectivity before rollout.",
            icon: <FiGlobe size={20} />,
          },
        ]}
        afterModules={
          <SectionCopy label="Your setup" title="Discuss Your Business Setup" reverse>
            <p>
              Supermarkets and grocery stores in Pakistan can review billing, item records and
              purchasing with DigiNizam. Confirm hardware and local requirements for the selected
              setup.
            </p>
            <IndustryContextLinks peer="retail" />
          </SectionCopy>
        }
        cta={{
          title: "Review DigiNizam for Your Supermarket",
          description:
            "Book a demo to review grocery checkout, product records, purchasing and reports. Pricing is discussed after the demo, once requirements are understood.",
          primaryCtaLabel: "Book a Demo",
        }}
      />
      <SeoFaq
        label="Supermarket POS"
        title="Supermarket software questions"
        description="Direct answers for common supermarket and grocery POS questions."
        items={supermarketFaqs}
      />
    </>
  );
}
