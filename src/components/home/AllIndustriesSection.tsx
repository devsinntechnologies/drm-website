"use client";

import React from "react";
import Image from "next/image";

export default function AllIndustriesSection() {
  const industries = [
    { name: "Retail Store", icon: "/retailstore.png" },
    { name: "Pharmacy", icon: "/pharmacy.png" },
    { name: "Restaurant", icon: "/fastfood.png" },
    { name: "Boutique", icon: "/boutique.png" },
    { name: "Salon / SPA", icon: "/beautysalon.png" },
    { name: "Bakery POS", icon: "/bakeryshop.png" },
    { name: "Electric Store", icon: "/electricstore.png" },
    { name: "Jewellery Shop", icon: "/jewelleryshop.png" },
    { name: "Toys Store", icon: "/toys.png" },
    { name: "Food / Cafe", icon: "/coffeeshop.png" },
    { name: "Furniture Store", icon: "/furniturestore.png" },
    { name: "Supermarkets", icon: "/supermarket.png" },
    { name: "Manufacturing", icon: "/manufactoring.png" },
    { name: "Auto Parts", icon: "/AutoParts.png" },
    { name: "Book Store", icon: "/bookstore.png" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0055FF]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-3 border border-[#0055FF]/20">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#08162D] tracking-tight">
            ALL IN ONE SOLUTION FOR ALL INDUSTRIES
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-3 font-normal leading-relaxed">
            Tailor-made software features customized specifically to run workflows efficiently across diverse business sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
          {industries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-28 h-28 relative mb-4 flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  fill 
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="border border-gray-300 group-hover:border-[#0055FF] px-5 py-2 rounded-xl bg-white shadow-sm transition-all">
                <span className="text-xs font-bold tracking-wider text-[#08162D] uppercase">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}