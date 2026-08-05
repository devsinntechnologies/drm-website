"use client";

import React from "react";
import { FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import ProductPageTemplate from "@/components/common/ProductPageTemplate";

export default function RestaurantSolutionPage() {
  return (
    <ProductPageTemplate
      label="Restaurant POS"
      title={
        <>
          Run your restaurant on one <span className="text-primary">connected platform</span>
        </>
      }
      description="Table service, kitchen flow, inventory, and FBR-ready billing—built for cafes, fine dining, and fast food across Pakistan."
      heroMedia={{ type: "video", src: "/restaurant-hero.mp4" }}
      overview={{
        title: (
          <>
            Empower staff with <span className="text-primary">SRB-ready</span> POS
          </>
        ),
        description:
          "High-speed billing, receipt printing, and real-time reporting—online or offline, local or cloud.",
        badge: "Cloud & local sync enabled",
        image: "/restaurantstaff.jpg",
        imageAlt: "Restaurant staff using DigiNizam POS",
      }}
      features={{
        title: "Designed for modern food businesses",
        description: "From cafes to chains—menu modifiers, discounts, and permissions that match how you serve.",
        highlights: [
          "Automated recipe & stock deduction",
          "Multi-branch centralized dashboard",
          "Customer loyalty & discount management",
        ],
        image: "/foodbusiness.jpg",
        imageAlt: "Modern food business operations",
      }}
      modules={[
        { title: "Table & order management", desc: "Floor maps, split bills, merging orders, and fast counter billing.", icon: <FiLayers size={20} /> },
        { title: "Kitchen display (KDS)", desc: "Send orders from counter to kitchen screens—no paper slips.", icon: <FiBox size={20} /> },
        { title: "Recipe & inventory", desc: "Auto ingredient deduction, wastage tracking, and recipe costing.", icon: <FiBox size={20} /> },
        { title: "POS counter billing", desc: "Touch ordering, modifiers, happy hour rules, and hold bills.", icon: <FiLayers size={20} /> },
        { title: "FBR fiscal integration", desc: "Tax calculation and digital invoicing compliant with FBR.", icon: <FiBarChart2 size={20} /> },
        { title: "Multi-branch cloud sync", desc: "Manage outlets and central kitchens from one dashboard.", icon: <FiGlobe size={20} /> },
      ]}
      cta={{
        title: "See restaurant POS in action",
        description: "Book a free demo and walk through table service, KDS, and inventory with our team.",
      }}
    />
  );
}
