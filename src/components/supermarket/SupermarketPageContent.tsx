"use client";

import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoRelatedLinks from "@/components/seo/SeoRelatedLinks";
import JsonLd from "@/components/seo/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/seo";

const supermarketFaqs: FaqItem[] = [
  {
    q: "What is supermarket POS software?",
    a: "Supermarket POS software connects checkout billing with inventory, purchasing and reporting so supermarket teams can manage sales and stock from one system.",
  },
  {
    q: "What is the best POS system for a supermarket?",
    a: "The right POS depends on checkout speed, barcode or scale support, inventory accuracy, purchasing, reporting, multi-branch needs and staff workflow. Compare these requirements before choosing a system.",
  },
  {
    q: "Which POS is best for a grocery store?",
    a: "A grocery POS should make checkout efficient while keeping sales connected with inventory, purchasing and reports. Compare barcode support, stock control, reporting and branch requirements before selecting a system.",
  },
  {
    q: "Can supermarket POS software manage inventory?",
    a: "A connected supermarket POS can keep inventory records linked with sales and purchases, helping teams see available stock and identify products that need attention.",
  },
  {
    q: "Does supermarket POS support barcode scanning?",
    a: "DigiNizam's supermarket solution includes barcode and scale-integrated billing for supported checkout workflows.",
  },
  {
    q: "Can supermarket POS manage multiple branches?",
    a: "DigiNizam supports multi-branch stock synchronization and a central dashboard for connected stores and warehouses.",
  },
  {
    q: "What features should supermarket POS software have?",
    a: "Important features include barcode and scale billing, inventory management, supplier purchasing, goods receipt, labels, reports and multi-branch visibility.",
  },
  {
    q: "How does supermarket POS help with checkout?",
    a: "Barcode and multi-lane billing can help staff process supported sales efficiently while keeping transactions connected with inventory and reporting.",
  },
];

export default function SupermarketPageContent() {
  return (
    <>
      <JsonLd data={faqJsonLd(supermarketFaqs)} />
      <ProductPageTemplate
        label="Supermarket POS"
        title="Supermarket POS Software in Pakistan for Faster Checkout & Smarter Stock Management"
        description="Manage high-volume checkout, barcode inventory, supplier purchasing and multi-lane POS from one connected supermarket system."
        heroMedia={{ type: "video", src: "/herovediosupermarket.mp4" }}
        overview={{
          title: (
            <>
              Faster lanes, <span className="text-primary">clearer inventory</span>
            </>
          ),
          description:
            "Empower cashiers with barcode billing, real-time stock, and branch-wide reporting from one platform. Connect supermarket billing, inventory and store activity so your team can process sales, track stock and review operations from one system.",
          badge: "Multi-lane & multi-branch ready",
          image: "/supermarket.png",
          imageAlt: "Supermarket POS operations",
        }}
        features={{
          title: "Built for high-volume retail",
          description: "From checkout to warehouse—keep shelves stocked and queues moving.",
          highlights: [
            "Barcode & scale-integrated billing",
            "Supplier purchase & GRN management",
            "Real-time multi-branch stock sync",
          ],
          image: "/supermarket.png",
          imageAlt: "Supermarket inventory and checkout",
        }}
        modules={[
          {
            title: "Fast checkout POS",
            desc: "Process supermarket sales with barcode and scale-integrated billing across supported checkout lanes.",
            icon: <FiLayers size={20} />,
          },
          {
            title: "Inventory management",
            desc: "Connect supermarket sales, purchases and stock records so teams can see inventory across locations.",
            icon: <FiBox size={20} />,
          },
          {
            title: "Purchase & GRN",
            desc: "Supplier orders, goods receipt, and ledger tracking.",
            icon: <FiTruck size={20} />,
          },
          {
            title: "Label & shelf tags",
            desc: "Print barcodes and price labels for new stock.",
            icon: <FiPrinter size={20} />,
          },
          {
            title: "Reports & analytics",
            desc: "Sales, margins, and shrinkage insights in real time.",
            icon: <FiBarChart2 size={20} />,
          },
          {
            title: "Multi-branch cloud",
            desc: "Monitor branch-level sales, stock and reporting from a centralized view.",
            icon: <FiGlobe size={20} />,
          },
        ]}
        cta={{
          title: "See supermarket POS in action",
          description: "Book a free demo for your mart, supermarket, or retail chain.",
        }}
      />
      <SeoFaq
        label="Supermarket POS"
        title="Supermarket software questions"
        description="Direct answers for common supermarket and grocery POS questions."
        items={supermarketFaqs}
      />
      <SeoRelatedLinks
        intro="Related pages:"
        links={[
          { href: "/pricing", label: "POS software pricing" },
          { href: "/demo", label: "Book a supermarket POS demo" },
          { href: "/products/retail", label: "Retail POS software" },
        ]}
      />
    </>
  );
}
