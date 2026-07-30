"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

export default function DistributionSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* 1. Hero Section (Video Background) - No Bluish Overlay/Shade */}
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
            <source src="/herodistribution.mp4" type="video/mp4" />
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
              <span className="inline-flex items-center gap-1.5 align-middle">The DigiNizam <Image src="/logo.png" alt="Logo" width={14} height={14} className="object-contain inline-block" /></span> RETAIL SOLUTIONS • DISTRIBUTION & WHOLESALE SUITE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-3 text-[#08162D] tracking-tight">
              Advanced <span className="text-[#0055FF]">Distribution & Wholesale</span> POS System
            </h1>
            <p className="text-xs md:text-sm text-gray-200 font-medium leading-relaxed mb-4">
              Comprehensive management system for wholesale distributors, supply chains, and warehouse operations. Streamline inventory tracking, order fulfillment, and logistics effortlessly with absolute reliability.
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

      {/* 2. POS Section with POSDistribution.png Image Showcase & Extra Description */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
                POINT OF SALE & CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#08162D] mb-2.5 tracking-tight">
                Designed for Modern <span className="text-[#0055FF]">Distribution Networks</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed mb-2.5">
                Everything you need to manage wholesale orders, inventory batches, warehouse fulfillment lanes, and large-scale distribution seamlessly under high-volume pressures.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed mb-2.5">
                Our comprehensive distribution suite provides multi-tier pricing structures, bulk discounts, route accounting integrations, and instantaneous stock visibility across multiple regional hubs.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed">
                Empower your supply chain managers with automated replenishment triggers, barcode scanning gun support, and rapid invoice generation tailored for B2B wholesale transactions.
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
                src="/POSDistribution.png" 
                alt="Designed for Modern Distribution Networks POS System" 
                width={420} 
                height={280}
                className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Wholesale Order & POS</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Rapid order booking, tiered client pricing, and instant dispatch note generation for bulk buyers.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Route & Fleet Tracking</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Organize delivery routes, assign driver manifests, and track shipment statuses in real time.
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
                Automatic tax calculation and digital invoice reporting fully compliant with FBR standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Staff Section with staffdistribution.jpg Image Showcase & Extra Description */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
              STAFF EFFICIENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#08162D] mb-2.5 tracking-tight">
              Empower your <span className="text-[#0055FF]">warehouse & sales team</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
              High-speed order processing, digital dispatch notes, and real-time ledger tracking to maintain absolute synchronization between field sales agents and warehouse fulfillment teams.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
              Empower warehouse pickers, inventory clerks, and logistics coordinators with streamlined mobile workflows, automated stock auditing, and offline redundancy support for uninterrupted operations.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Granular role-based access control guarantees precise data security, preventing unauthorized ledger adjustments while giving managers clear visibility into individual team productivity and output.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-4 py-2.5 rounded-xl">
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
              src="/staffdistribution.jpg" 
              alt="Empower Warehouse and Sales Team" 
              width={420} 
              height={280}
              className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Our Modules Section */}
      <section className="py-4 md:py-6 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
              CORE SYSTEM MODULES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#08162D] mb-2.5 tracking-tight">
              Explore Our Powerful <span className="text-[#0055FF]">Distribution Modules</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal">
              Designed to handle every operational department of your distribution and wholesale business seamlessly under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                Real-time stock tracking across multiple warehouses, batch monitoring, and automated low-stock alerts.
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
                Lightning-fast counter checkouts, wholesale billing support, holding orders, and custom discounts.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Barcode & Label Printing</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Generate and print custom pallet tags, box labels, and barcode stickers instantly from the system.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Purchase & Supplier Management</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Manage supplier ledgers, purchase orders, goods receiving notes, and automated reorder schedules.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Financial & Tax Reports</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Comprehensive profit/loss, daily cash registers, accounts receivable/payable, and automated FBR reports.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Multi-Store & Cloud Sync</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Control multiple branch warehouses and delivery depots from a single centralized real-time cloud dashboard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}