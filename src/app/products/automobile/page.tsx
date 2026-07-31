"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AutomobileSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* 1. Hero Section (Video Background) - No Bluish Shade */}
      <section className="relative min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden border-b border-gray-200 bg-[#08162D]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/automobile.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-black/60 border border-white/20 px-3 py-1 rounded-xl mb-3 shadow-lg backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 align-middle">The DigiNizam <Image src="/logo.png" alt="Logo" width={14} height={14} className="object-contain inline-block" /></span> RETAIL SOLUTIONS • AUTOMOBILE & AUTO PARTS SUITE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-3 text-[#08162D] tracking-tight">
              Advanced <span className="text-[#0055FF]">Automobile & Dealership</span> POS System
            </h1>
            <p className="text-xs md:text-sm text-gray-200 font-medium leading-relaxed mb-4">
              Comprehensive POS system for automobile dealerships and auto parts stores. Manage inventory, track sales, and streamline operations effortlessly with absolute reliability.
            </p>
 
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl group"
              >
                Get Free Demo <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. POS Section with posautomobile.png Image Showcase & Extra Description */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
                POINT OF SALE & CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#08162D] mb-2 tracking-tight">
                Designed for Modern <span className="text-[#0055FF]">Automobile & Spare Parts Stores</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed mb-2">
                Everything you need to manage auto parts inventory, vehicle sales, service counters, and customer accounts seamlessly under high-volume pressures.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed mb-2">
                Our comprehensive automobile suite provides precise serial number tracking, part compatibility matrices, barcode scanning for quick part lookup, and instantaneous stock visibility across multiple storage bays.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed">
                Empower your service advisors and counter sales team with rapid invoicing, warranty management tools, and integrated digital payment processing to boost operational throughput.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image 
                src="/posautomobile.png" 
                alt="Designed for Modern Automobile and Dealership POS System" 
                width={420} 
                height={280}
                className="w-auto max-h-[280px] object-contain rounded-xl shadow-lg"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiSmartphone size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Part Number & VIN Tracking</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Rapid barcode scanning for exact automotive parts, compatibility lookup, and vehicle identification tracking.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiShield size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Service & Repair Job Cards</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Manage workshop appointments, labor charges, spare part allocations, and automated job card history.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiAward size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">FBR Fiscal Integration</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Automatic tax calculation and digital invoice reporting fully compliant with FBR standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Staff Section with automobilestaff.jpg Image Showcase & Extra Description */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
              STAFF EFFICIENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#08162D] mb-2 tracking-tight">
              Empower your <span className="text-[#0055FF]">dealership & workshop staff</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
              High-speed counter billing, service technician assignment tracking, and real-time inventory reports all in one platform to eliminate parts misplacement and billing bottlenecks.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
              Empower counter clerks, mechanics, and floor managers with intuitive touchscreen workflows, holding customer estimates, split payment processing, and offline backup redundancy.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
              Granular role-based permissions ensure maximum cash control and component security, while giving administration complete visibility into hourly revenue generation and employee task efficiency.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-4 py-2 rounded-xl">
              <FiServer size={16} /> Cloud & Local Sync Enabled
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
              src="/automobilestaff.jpg" 
              alt="Empower Dealership and Workshop Staff" 
              width={420} 
              height={280}
              className="w-auto max-h-[280px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Our Modules Section */}
      <section className="py-6 md:py-8 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
              CORE SYSTEM MODULES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#08162D] mb-2 tracking-tight">
              Explore Our Powerful <span className="text-[#0055FF]">Automobile Modules</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal">
              Designed to handle every operational department of your automobile showroom and auto parts store under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiBox size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Inventory Control</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Real-time stock tracking for thousands of spare parts, bin location mapping, and low-stock alerts.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiLayers size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Point of Sale (POS)</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Lightning-fast counter checkouts, part code scanning, holding bills, and flexible discounts.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiPrinter size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Barcode & Label Printing</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Generate and print custom part labels, shelf tags, and storage bin barcodes instantly.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiTruck size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Purchase & Supplier Management</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Manage vendor ledgers, purchase orders, auto-part shipments, and automated reorder schedules.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiBarChart2 size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Financial & Tax Reports</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Comprehensive profit/loss, daily cash registers, expense registers, and automated FBR tax reports.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiGlobe size={20} />
              </div>
              <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">Multi-Store & Cloud Sync</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Control multiple showroom branches or spare parts outlets from a single centralized real-time cloud dashboard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}