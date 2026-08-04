"use client";

import React from "react";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";

const restaurantModules = [
  {
    title: "Table & Order Management",
    desc: "Real-time tracking of dine-in tables, floor maps, split bills, merging orders, and fast counter billing.",
    icon: <FiSmartphone size={20} />
  },
  {
    title: "Kitchen Display System (KDS)",
    desc: "Send orders directly from cash counters to kitchen screens instantly, eliminating paper slips.",
    icon: <FiShield size={20} />
  },
  {
    title: "Recipe & Inventory Control",
    desc: "Automatic raw ingredient deduction per menu item, wastage tracking, and recipe cost management.",
    icon: <FiBox size={20} />
  },
  {
    title: "POS Counter Billing",
    desc: "Lightning-fast touchscreen ordering, menu modifiers, happy hour triggers, and hold-bill options.",
    icon: <FiLayers size={20} />
  },
  {
    title: "FBR Fiscal Integration",
    desc: "Automatic tax calculation and real-time digital invoice reporting compliant with FBR standards.",
    icon: <FiAward size={20} />
  },
  {
    title: "Multi-Branch Cloud Sync",
    desc: "Control multiple restaurant outlets or central kitchens from a single real-time cloud dashboard.",
    icon: <FiGlobe size={20} />
  }
];

export default function RestaurantSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* 1. Hero Section (Video Background) - Resized Blue Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-gray-200">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/restaurant-hero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center px-6 text-center bg-black/40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[6rem] font-black uppercase leading-none text-[#0055FF] tracking-wide drop-shadow-2xl">
              RESTAURANT
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Solution Overview Section - Background: bg-white */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
              SOLUTION OVERVIEW
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Empower your <span className="text-[#0055FF]">restaurant staff</span> with SRB
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2 mb-4 font-normal">
              High-speed receipt printing, seamless counter billing, and real-time sales reporting all in one place. Built on a complete POS infrastructure that supports both local operations and cloud synchronization.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Empower cashiers and floor managers with intuitive touch interfaces, multi-terminal connectivity, offline backup support, and instantaneous kitchen dispatching to prevent order bottlenecks during peak hours.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-5 py-3 rounded-xl">
              <FiServer size={18} /> Cloud &amp; Local Sync Enabled
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50 group"
          >
            <div className="absolute inset-0 bg-[#0055FF]/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            <Image 
              src="/restaurantstaff.jpg" 
              alt="Empower Restaurant Staff and High-Speed Receipt Printing" 
              width={650} 
              height={450}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Solution Key Features Section - Background: bg-gray-50 */}
      <section className="py-4 md:py-6 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
                SOLUTION KEY FEATURES
              </span>
              <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
                Designed for Modern <span className="text-[#0055FF]">Food Businesses</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed mt-2 mb-3">
                Everything you need to run cafes, fine dining, fast food chains, and bakeries efficiently.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                Our versatile software adapts effortlessly to unique workflow requirements across different food service sectors, offering customizable menu modifiers, happy hour discounts, and granular user permission controls.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-bold">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#0055FF]" size={18} /> Automated Recipe &amp; Stock Deduction
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#0055FF]" size={18} /> Multi-Branch Centralized Cloud Dashboard
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#0055FF]" size={18} /> Customer Loyalty &amp; Discount Management
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50 group"
            >
              <div className="absolute inset-0 bg-[#0055FF]/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
              <Image 
                src="/foodbusiness.jpg" 
                alt="Designed for Modern Food Businesses - Cafes, Fine Dining, Fast Food & Bakeries" 
                width={650} 
                height={450}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Modules Section - Background: bg-white */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
              OUR MODULES
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Explore Our Powerful <span className="text-[#0055FF]">Restaurant Modules</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal mt-1">
              Purpose-built module cards engineered for seamless restaurant &amp; kitchen management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurantModules.map((mod, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                  {mod.icon}
                </div>
                <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Clientele Section - Background: bg-gray-50 */}
      <ProductClientele bgLight={true} />

      {/* 6. Certificates / Memberships / Achievements Section - Background: bg-white */}
      <ProductCertificates bgLight={false} />

    </main>
  );
}