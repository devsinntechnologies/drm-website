"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";

export default function AllIndustriesSection() {
  const industries = [
    { name: "Retail Store", icon: "/retailstore.png", href: "/products/coming-soon" },
    { name: "Pharmacy", icon: "/pharmacy.png", href: "/products/pharmacy" },
    { name: "Restaurant", icon: "/fastfood.png", href: "/products/restaurant" },
    { name: "Boutique", icon: "/boutique.png", href: "/products/coming-soon" },
    { name: "Salon / SPA", icon: "/beautysalon.png", href: "/products/coming-soon" },
    { name: "Bakery POS", icon: "/bakeryshop.png", href: "/products/bakery" },
    { name: "Electric Store", icon: "/electricstore.png", href: "/products/coming-soon" },
    { name: "Jewellery Shop", icon: "/jewelleryshop.png", href: "/products/coming-soon" },
    { name: "Toys Store", icon: "/toys.png", href: "/products/coming-soon" },
    { name: "Food / Cafe", icon: "/coffeeshop.png", href: "/products/coming-soon" },
    { name: "Furniture Store", icon: "/furniturestore.png", href: "/products/coming-soon" },
    { name: "Supermarkets", icon: "/supermarket.png", href: "/products/supermarket" },
    { name: "Manufacturing", icon: "/manufactoring.png", href: "/products/coming-soon" },
    { name: "Auto Parts", icon: "/AutoParts.png", href: "/products/coming-soon" },
    { name: "Book Store", icon: "/bookstore.png", href: "/products/books" },
    { name: "Snooker POS", icon: "/snooker.svg", href: "/products/snooker" },
  ];

  return (
    <SectionShell glow>
      <SectionHeader
        align="center"
        label="Industries / Use Cases"
        title="Industries and use cases"
        description="One POS platform tailored to how restaurants, pharmacies, marts, and specialty stores actually operate."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
        {industries.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-28 h-28 relative mb-4 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="border border-surface-border group-hover:border-primary px-5 py-2 rounded-xl bg-surface shadow-sm transition-all">
              <span className="text-xs font-semibold tracking-wide text-foreground">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </SectionShell>
  );
}
