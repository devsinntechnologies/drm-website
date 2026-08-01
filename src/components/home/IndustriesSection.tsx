"use client";

import React, { useState } from "react";
import { FiArrowRight, FiShoppingBag, FiCoffee, FiFeather, FiCloud, FiTruck, FiMonitor, FiGrid, FiLayers } from "react-icons/fi";

const IndustriesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const industries = [
    { title: "Restaurants", desc: "Fine dining and casual operations with visual floor plans, tableside orders, and complex billing.", icon: <FiShoppingBag /> },
    { title: "Cafes", desc: "Fast espresso bars and tea shops with quick checkouts, loyalty tracking, and modifiers.", icon: <FiCoffee /> },
    { title: "Bakeries", desc: "Manage raw ingredient conversions, batch production costs, and shelf expiration trackers.", icon: <FiFeather /> },
    { title: "Cloud Kitchens", desc: "Route orders from multiple delivery channels straight to a single consolidated KDS terminal.", icon: <FiCloud /> },
    { title: "Food Trucks", desc: "Mobile-ready POS terminals that sync data to cloud servers via mobile hotspots.", icon: <FiTruck /> },
    { title: "Hotel Restaurants", desc: "Integrated room billing, charge codes, and unified inventory tracking syncs.", icon: <FiMonitor /> },
    { title: "Food Courts", desc: "Deploy independent tenant stalls syncing billing records to a central organizer dashboard.", icon: <FiGrid /> },
    { title: "Franchise Chains", desc: "Standardize recipes, centralize menu control, and track royalty payments across branches.", icon: <FiLayers /> },
  ];

  return (
    <section className="py-8 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-royal/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-bright/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-royal/20 border border-royal/30 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-bright" />
            <span className="text-xs font-bold uppercase tracking-widest text-bright">Industries We Serve</span>
          </span>
          <h2 className="text-lg sm:text-xl md:text-base font-black text-white mb-4 leading-tight tracking-tight">
            Built for Every <span className="text-bright">Restaurant Segment</span>
          </h2>
          <p className="text-sm md:text-base text-white/70 font-medium">
            Whether you run a single neighborhood food truck or coordinate a nationwide franchise network, <span className="text-black font-black">Digi</span><span className="text-[#00B4FF] font-black">Nizam</span> POS has the tools configured for your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {industries.map((item, idx) => (
            <div
              key={item.title}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative p-6 rounded-xl border border-navy/20 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-royal/30 hover:bg-white/[0.05] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center text-base mb-4 group-hover:bg-royal group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-2 group-hover:text-bright transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-bright">
                <span>View Solutions</span>
                <FiArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;