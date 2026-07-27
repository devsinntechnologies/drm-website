"use client";

import React from "react";
import Image from "next/image";
import { 
  FiShoppingBag, 
  FiActivity, 
  FiCoffee, 
  FiTag, 
  FiScissors, 
  FiPackage, 
  FiZap, 
  FiAward, 
  FiBox, 
  FiHome, 
  FiGrid 
} from "react-icons/fi";

export default function AllIndustriesSection() {
  const industries = [
    { name: "Retail Store", icon: <FiShoppingBag className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Pharmacy", icon: <FiActivity className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Restaurant", icon: <FiCoffee className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Boutique", icon: <FiTag className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Salon / SPA", icon: <FiScissors className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Bakery POS", icon: <FiPackage className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Electric Store", icon: <FiZap className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Jewellery Shop", icon: <FiAward className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Toys Store", icon: <FiBox className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Food / Cafe", icon: <FiCoffee className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Furniture Store", icon: <FiHome className="w-7 h-7 text-[#0055FF]" /> },
    { name: "Supermarkets", icon: <FiGrid className="w-7 h-7 text-[#0055FF]" /> },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
            Versatile Solutions
          </span>

          <div className="relative w-48 h-16 mb-4">
            <Image 
              src="/logo-industries.png" 
              alt="Client Logo" 
              fill 
              className="object-contain" 
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] mt-4 tracking-tight">
            ALL IN ONE SOLUTION FOR All Industries
          </h2>

          <p className="text-sm md:text-base text-gray-600 mt-4 font-normal leading-relaxed">
            Tailor-made software features customized specifically to run workflows efficiently across diverse business sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all flex flex-col items-center text-center group"
            >
              <div className="p-4 bg-[#0055FF]/10 rounded-xl mb-4 group-hover:bg-[#0055FF] transition-all flex items-center justify-center">
                {React.cloneElement(item.icon, {
                  className: "w-7 h-7 text-[#0055FF] group-hover:text-white transition-all"
                })}
              </div>
              <h3 className="text-sm md:text-base font-black text-[#08162D]">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}