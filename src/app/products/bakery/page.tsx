"use client";

import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";

export default function BakerySolutionPage() {
  return (
    <ProductPageTemplate
      label="Bakery POS"
      title={
        <>
          POS built for <span className="text-primary">bakeries & sweet shops</span>
        </>
      }
      description="Weight-based billing, expiry alerts, label printing, and FBR-ready checkout for bakeries across Pakistan."
      heroMedia={{ type: "video", src: "/bakery.mp4" }}
      overview={{
        title: (
          <>
            Faster counters, <span className="text-primary">smarter stock</span>
          </>
        ),
        description:
          "Touchscreen billing, perishable tracking, and supplier management—one platform for every outlet.",
        badge: "Cloud & local sync enabled",
        image: "/bakeryshop.png",
        imageAlt: "Bakery POS checkout",
      }}
      features={{
        title: "Designed for fresh retail",
        description: "From display counters to back-kitchen—inventory and sales stay in sync.",
        highlights: [
          "Expiry alerts for perishable goods",
          "Custom weight & barcode billing",
          "Multi-store cloud dashboard",
        ],
        image: "/bakeryshop.png",
        imageAlt: "Bakery shop operations",
      }}
      modules={[
        { title: "Inventory control", desc: "Real-time stock, expiry alerts, and low-stock warnings.", icon: <FiBox size={20} /> },
        { title: "Point of sale", desc: "Fast touchscreen checkout with barcode and weight entry.", icon: <FiLayers size={20} /> },
        { title: "Label printing", desc: "Print price tags, packaging stickers, and shelf labels.", icon: <FiPrinter size={20} /> },
        { title: "Supplier management", desc: "Purchase orders, deliveries, and reorder lists.", icon: <FiTruck size={20} /> },
        { title: "Financial & tax reports", desc: "P&L, cash registers, and FBR tax reporting.", icon: <FiBarChart2 size={20} /> },
        { title: "Multi-store cloud sync", desc: "Control branches from one centralized dashboard.", icon: <FiGlobe size={20} /> },
      ]}
      cta={{
        title: "See bakery POS in action",
        description: "Book a free demo and walk through billing, inventory, and reporting for your bakery.",
      }}
    />
  );
}
