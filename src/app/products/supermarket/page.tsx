"use client";

import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";

export default function SupermarketSolutionPage() {
  return (
    <ProductPageTemplate
      label="Supermarket POS"
      title={
        <>
          Scale your <span className="text-primary">mart & supermarket</span> operations
        </>
      }
      description="High-volume checkout, barcode inventory, supplier management, and multi-lane POS for modern supermarkets."
      heroMedia={{ type: "video", src: "/herovediosupermarket.mp4" }}
      overview={{
        title: (
          <>
            Faster lanes, <span className="text-primary">clearer inventory</span>
          </>
        ),
        description:
          "Empower cashiers with barcode billing, real-time stock, and branch-wide reporting from one platform.",
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
        { title: "Fast checkout POS", desc: "Multi-lane billing with barcode scanners and scales.", icon: <FiLayers size={20} /> },
        { title: "Inventory management", desc: "Track SKUs, categories, and stock across locations.", icon: <FiBox size={20} /> },
        { title: "Purchase & GRN", desc: "Supplier orders, goods receipt, and ledger tracking.", icon: <FiTruck size={20} /> },
        { title: "Label & shelf tags", desc: "Print barcodes and price labels for new stock.", icon: <FiPrinter size={20} /> },
        { title: "Reports & analytics", desc: "Sales, margins, and shrinkage insights in real time.", icon: <FiBarChart2 size={20} /> },
        { title: "Multi-branch cloud", desc: "Central dashboard for every store and warehouse.", icon: <FiGlobe size={20} /> },
      ]}
      cta={{
        title: "See supermarket POS in action",
        description: "Book a free demo for your mart, supermarket, or retail chain.",
      }}
    />
  );
}
