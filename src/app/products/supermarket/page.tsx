"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";

export default function SupermarketSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* Hero Section (Video Background) - Reduced Height */}
      <section className="relative w-full h-[50vh] min-h-[380px] overflow-hidden bg-white">
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src="/herovediosupermarket.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase leading-none text-[#0055FF] tracking-wide drop-shadow-2xl">
              SUPERMARKET
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Staff & Image Showcase */}
      <section className="py-2 md:py-3 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0055FF]/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
              STAFF EFFICIENCY
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Empower your <span className="text-[#0055FF]">supermarket staff</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2 mb-3 font-normal">
              High-speed receipt printing, seamless counter billing, and real-time sales reporting all in one place. Built on a complete POS infrastructure that supports both local operations and cloud synchronization.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Empower cashiers and floor managers with ultra-fast barcode scanning, multi-terminal connectivity, offline backup support, and instantaneous checkout flows to handle rush hours effortlessly.
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
            className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gray-50 group"
          >
            <div className="absolute inset-0 bg-[#0055FF]/15 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />
            <Image 
              src="/supermarket-solution.jpg" 
              alt="Empower Supermarket Staff and High-Speed Checkout" 
              width={600} 
              height={400}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 1: Core Capabilities / Our Modules with possupermarket.jpg Showcase */}
      <section className="py-2 md:py-3 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-center mb-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
                OUR MODULES &amp; CAPABILITIES
              </span>
              <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
                Designed for Modern <span className="text-[#0055FF]">Retail Supermarkets</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed mt-2 mb-2.5">
                Everything you need to run supermarkets, grocery stores, and retail marts efficiently.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed">
                Our comprehensive retail suite adapts to your store layout, offering robust inventory modules, flexible pricing rules, automated purchase ordering, and integrated weighing scale support.
              </p>
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
                src="/possupermarket.jpg" 
                alt="Designed for Modern Retail Supermarkets POS System" 
                width={600} 
                height={400}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiSmartphone size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Checkout &amp; Barcode Scanning</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Real-time tracking of items, ultra-fast counter billing with barcode scanners, and split payments.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiShield size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Shelf Management</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Organize your products effectively, track shelf life, and manage aisles to enhance the shopping experience.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiAward size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">FBR Fiscal Integration</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Automatic tax calculation and real-time digital invoice reporting compliant with FBR standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Modules Section */}
      <section className="py-2 md:py-3 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
              CORE SYSTEM MODULES
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Explore Our Powerful <span className="text-[#0055FF]">Supermarket Modules</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal mt-2">
              Designed to handle every operational department of your supermarket seamlessly under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiBox size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Inventory Control</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Real-time stock tracking, batch-wise expiry monitoring, and automated low-stock alerts.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiLayers size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Point of Sale (POS)</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Lightning-fast touchscreen checkouts, barcode gun support, holding bills, and flexible discounts.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiPrinter size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Barcode &amp; Label Printing</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Generate and print custom barcode labels, price tags, and shelf talkers instantly from the system.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiTruck size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Purchase &amp; Supplier Management</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Manage supplier ledgers, purchase orders, goods receiving notes, and automated reorder sheets.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiBarChart2 size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Financial &amp; Tax Reports</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Comprehensive profit/loss, daily cash registers, expense registers, and automated FBR tax reports.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-4 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiGlobe size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Multi-Store &amp; Cloud Sync</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Control multiple branches or warehouse outlets from a single centralized real-time cloud dashboard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Our Clientele Section */}
      <ProductClientele bgLight={true} />

      {/* 6. Certificates / Memberships / Achievements Section */}
      <ProductCertificates bgLight={false} />

    </main>
  );
}