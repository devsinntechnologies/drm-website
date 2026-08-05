"use client";

import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";

export default function PharmacySolutionPage() {
  return (
    <ProductPageTemplate
      label="Pharmacy POS"
      title={
        <>
          Smart POS for <span className="text-primary">pharmacies & medical stores</span>
        </>
      }
      description="Batch tracking, salt alternatives, FBR invoicing, and multi-branch inventory—built for Pakistan's pharmacy workflow."
      heroMedia={{ type: "video", src: "/heropharmacy.mp4" }}
      overview={{
        title: (
          <>
            Empower pharmacists with <span className="text-primary">compliant billing</span>
          </>
        ),
        description:
          "Fast prescription dispensing, salt lookup, and real-time stock—online or offline across branches.",
        badge: "Cloud & local sync enabled",
        image: "/Pospharmacy.png",
        imageAlt: "Pharmacy POS system",
      }}
      features={{
        title: "Built for regulated retail",
        description: "Expiry control, distributor ledgers, and reports that keep compliance clear.",
        highlights: [
          "Batch & expiry tracking with alerts",
          "Alternative salt finder at billing",
          "Distributor & supplier ledger management",
        ],
        image: "/pharmacy.png",
        imageAlt: "Pharmacy inventory management",
      }}
      modules={[
        { title: "Batch & expiry control", desc: "Track batches and prevent expired stock from reaching customers.", icon: <FiBox size={20} /> },
        { title: "Alternative salt finder", desc: "Suggest equivalent brands by active salt during billing.", icon: <FiLayers size={20} /> },
        { title: "Barcode scanning", desc: "Scan boxes, strips, or units with high-speed readers.", icon: <FiPrinter size={20} /> },
        { title: "Distributor ledger", desc: "Track orders, returns, claims, and credit accounts.", icon: <FiTruck size={20} /> },
        { title: "Financial & tax reports", desc: "P&L, daily closing, and automated compliance logs.", icon: <FiBarChart2 size={20} /> },
        { title: "Multi-branch cloud sync", desc: "Manage branches and warehouse transfers from one dashboard.", icon: <FiGlobe size={20} /> },
      ]}
      cta={{
        title: "See pharmacy POS in action",
        description: "Book a free demo tailored to your pharmacy or medical store workflow.",
      }}
    />
  );
}
