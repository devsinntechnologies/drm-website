"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiArrowRight, FiCheckCircle, FiShoppingBag, FiCoffee, 
  FiFeather, FiCloud, FiTruck, FiMonitor, FiGrid, FiLayers 
} from "react-icons/fi";

const IndustriesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const industries = [
    { title: "Restaurants", desc: "Fine dining & casual operations with visual floor plans, tableside orders, and complex billing.", icon: <FiShoppingBag /> },
    { title: "Cafes", desc: "Fast espresso bars and tea shops with fast checkouts, loyalty tags, and modifiers.", icon: <FiCoffee /> },
    { title: "Bakeries", desc: "Manage raw baking ingredient conversions, batch production costs, and shelf expiration trackers.", icon: <FiFeather /> },
    { title: "Cloud Kitchens", desc: "Route orders from multiple delivery channels straight to a single consolidated KDS terminal board.", icon: <FiCloud /> },
    { title: "Food Trucks", desc: "Mobile-ready POS terminals that sync data to cloud servers via mobile hotspots.", icon: <FiTruck /> },
    { title: "Hotel Restaurants", desc: "Integrated room billing room charge codes and unified inventory tracking syncs.", icon: <FiMonitor /> },
    { title: "Food Courts", desc: "Deploy independent tenant stalls syncing billing records to a central organizer dashboard.", icon: <FiGrid /> },
    { title: "Franchise Chains", desc: "Standardize recipes, centralize menu control, and track royalty payments across branches.", icon: <FiLayers /> },
  ];

  return (
    <section className="py-24 bg-[#090b12] text-[#f5f7fb] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-secondary/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Industries We Serve</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Built for Every <span className="text-primary text-glow">Restaurant Segment</span>
          </h2>
          <p className="text-[#95a1b6] text-lg font-medium">
            Whether you run a single neighborhood food truck or coordinate a nationwide franchise network, RMS has the tools configured for your operations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.05] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#95a1b6] text-xs leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-primary">
                <span>View Solutions</span>
                <FiArrowRight className="text-xs" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
