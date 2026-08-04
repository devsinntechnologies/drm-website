"use client";

import React from "react";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";

const bakeryModules = [
  {
    title: "Inventory Control",
    desc: "Real-time stock tracking, expiry alerts for perishables, and automated low-stock warnings.",
    icon: <FiBox size={20} />
  },
  {
    title: "Point of Sale (POS)",
    desc: "Lightning-fast touchscreen checkouts, barcode scanning, and custom weight entry support.",
    icon: <FiLayers size={20} />
  },
  {
    title: "Barcode & Label Printing",
    desc: "Generate and print custom product price tags, packaging stickers, and shelf labels instantly.",
    icon: <FiPrinter size={20} />
  },
  {
    title: "Purchase & Supplier Management",
    desc: "Manage supplier ledgers, purchase orders, ingredient deliveries, and automated reorder lists.",
    icon: <FiTruck size={20} />
  },
  {
    title: "Financial & Tax Reports",
    desc: "Comprehensive profit/loss, daily cash registers, expense registers, and automated FBR tax reports.",
    icon: <FiBarChart2 size={20} />
  },
  {
    title: "Multi-Store & Cloud Sync",
    desc: "Control multiple bakery branches or outlets from a single centralized real-time cloud dashboard.",
    icon: <FiGlobe size={20} />
  }
];

export default function BakerySolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-gray-200">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/bakery.mp4" type="video/mp4" />
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
              SWEETS &amp; BAKERY
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Solution Overview Section - Background: bg-white */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
              SOLUTION OVERVIEW
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Empower your <span className="text-[#0055FF]">bakery staff</span> with SRB
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 mb-3 font-normal">
              High-speed receipt printing, kitchen display order routing, and real-time counter reports all in one place to maintain seamless synchronization between front-of-house counters and back-of-house production ovens.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Empower cashiers and bakers with intuitive workflows, holding orders, split bill handling, shift-handover management, and offline backup capabilities ensuring operations continue without disruption during heavy traffic hours.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-4 py-2.5 rounded-xl">
              <FiServer size={16} /> Cloud &amp; Local Sync Enabled
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image 
              src="/bakeryinfo.jpg" 
              alt="Empower Bakery Staff and High-Speed Counter Operations" 
              width={420} 
              height={280}
              className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Solution Key Features Section - Background: bg-gray-50 */}
      <section className="py-4 md:py-6 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mb-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
                SOLUTION KEY FEATURES
              </span>
              <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
                Designed for Modern <span className="text-[#0055FF]">Bakeries &amp; Confectioneries</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-2.5">
                Everything you need to run bakery counters, sweet shops, and fast checkout lanes smoothly under high-pressure retail hours.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                Our specialized retail suite handles electronic scale integration for weighted sweets, custom item pricing rules, lightning-fast touch screen billing, split-payment processing, and seamless daily inventory tracking.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-bold">
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#0055FF]" size={18} /> Integrated Electronic Weighing Scales
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#0055FF]" size={18} /> Ingredient Recipe &amp; Perishable Stock Logs
                </li>
                <li className="flex items-center gap-3">
                  <FiCheckCircle className="text-[#0055FF]" size={18} /> FBR Fiscal Integration &amp; Customer Loyalty
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image 
                src="/bakerypos.png" 
                alt="Designed for Modern Bakeries and Confectioneries POS System" 
                width={420} 
                height={280}
                className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Our Modules Section - Background: bg-white */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
              OUR MODULES
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Explore Our Powerful <span className="text-[#0055FF]">Bakery Modules</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal mt-1">
              Designed to handle every operational department of your sweet shop and bakery seamlessly under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bakeryModules.map((mod, idx) => (
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