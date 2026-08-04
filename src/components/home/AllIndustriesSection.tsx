"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AllIndustriesSection() {
  const industries = [
    { name: "Retail Store",     icon: "/retailstore.png",    href: "/products/coming-soon" },
    { name: "Pharmacy",         icon: "/pharmacy.png",       href: "/products/pharmacy" },
    { name: "Restaurant",       icon: "/fastfood.png",       href: "/products/restaurant" },
    { name: "Boutique",         icon: "/boutique.png",       href: "/products/coming-soon" },
    { name: "Salon / SPA",      icon: "/beautysalon.png",   href: "/products/coming-soon" },
    { name: "Bakery POS",       icon: "/bakeryshop.png",    href: "/products/bakery" },
    { name: "Electric Store",   icon: "/electricstore.png", href: "/products/coming-soon" },
    { name: "Jewellery Shop",   icon: "/jewelleryshop.png", href: "/products/coming-soon" },
    { name: "Toys Store",       icon: "/toys.png",           href: "/products/coming-soon" },
    { name: "Food / Cafe",      icon: "/coffeeshop.png",    href: "/products/coming-soon" },
    { name: "Furniture Store",  icon: "/furniturestore.png",href: "/products/coming-soon" },
    { name: "Supermarkets",     icon: "/supermarket.png",   href: "/products/supermarket" },
    { name: "Manufacturing",    icon: "/manufactoring.png", href: "/products/coming-soon" },
    { name: "Auto Parts",       icon: "/AutoParts.png",      href: "/products/coming-soon" },
    { name: "Book Store",       icon: "/bookstore.png",      href: "/products/books" },
  ];

  return (
    <section className="py-12 md:py-16 bg-surface border-b border-surface-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Industries we serve
          </span>
          <h2
            className="font-semibold tracking-tight text-foreground"
            style={{ fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.12 }}
          >
            All-in-one solution for every industry
          </h2>
          <p className="text-sm md:text-base text-muted mt-3 leading-relaxed max-w-xl">
            Tailor-made software features customized specifically to run workflows efficiently across diverse business sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {industries.map((item, idx) => (
            <Link
              key={idx}
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
              <div className="border border-gray-300 group-hover:border-primary px-5 py-2 rounded-xl bg-surface shadow-sm transition-all">
                <span className="text-xs font-bold tracking-wider text-foreground uppercase">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}