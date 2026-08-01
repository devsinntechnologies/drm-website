"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight, FiBox, FiLayers, FiPrinter, FiTruck, FiBarChart2, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

export default function BookShopSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* Hero Section (Video Background) - Strictly Fits Full Viewport */}
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
            <source src="/BookShopPeople.mp4" type="video/mp4" />
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
              <span className="inline-flex items-center gap-1.5 align-middle">The <span className="text-white">Digi</span><span className="text-[#0055FF]">Nizam</span> <Image src="/logo.png" alt="Logo" width={14} height={14} className="object-contain inline-block" /></span> RETAIL SOLUTIONS • BOOKSHOP &amp; PUBLISHERS SUITE
            </span>
            <h1 className="text-base sm:text-lg font-black leading-tight text-white tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 0px 4px rgba(0,0,0,0.8)' }}>
              Advanced <span className="text-[#0055FF]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>Bookshop &amp; Publishers</span> POS System
            </h1>
            <p className="text-xs md:text-sm text-gray-200 font-medium leading-relaxed mt-3 mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Streamline your bookstore inventory, ISBN barcode scanning, publishing distribution, and retail operations seamlessly with Pakistan&apos;s leading smart bookshop software, engineered for speed and absolute reliability.
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

      {/* 2. POS Section with posbook3.jpg Image Showcase (Card Background Removed) */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-center mb-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
                POINT OF SALE & CAPABILITIES
              </span>
              <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
                Designed for Modern <span className="text-[#0055FF]">Bookshops &amp; Publishers</span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-normal leading-relaxed mb-2.5">
                Everything you need to run bookstores, publisher houses, and libraries efficiently.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed">
                Our comprehensive retail suite adapts to your store layout, offering robust inventory modules, flexible pricing rules, automated purchase ordering, and integrated ISBN scanning support.
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
                src="/posbook3.jpg" 
                alt="Designed for Modern Bookshops and Publishers POS System" 
                width={420} 
                height={280}
                className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">ISBN Scanning & POS</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Real-time tracking of books, ultra-fast counter billing with ISBN scanners, and split payments.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Author & Category Management</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Organize your titles by author, genre, publisher, and academic syllabus to enhance the customer browsing experience.
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

      {/* 3. Staff Section with POSbook2.jpg Image Showcase (Card Background Removed) */}
      <section className="py-4 md:py-6 bg-white border-b border-gray-200 relative overflow-hidden">
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
              Empower your <span className="text-[#0055FF]">bookstore staff</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 font-normal">
              High-speed receipt printing, seamless counter billing, and real-time sales reporting all in one place. Built on a complete POS infrastructure that supports both local operations and cloud synchronization.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Empower booksellers and inventory managers with lightning-fast ISBN barcode scanning, multi-terminal connectivity, offline backup support, and instantaneous checkout flows to handle rush hours effortlessly.
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
              src="/POSbook2.jpg" 
              alt="Empower Bookstore Staff and High-Speed Checkout" 
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
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2.5 border border-[#0055FF]/20">
              CORE SYSTEM MODULES
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Explore Our Powerful <span className="text-[#0055FF]">Bookshop Modules</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal">
              Designed to handle every operational department of your bookstore and publishing house seamlessly under one roof.
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
                Real-time stock tracking, edition-wise monitoring, and automated low-stock alerts.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Barcode & Label Printing</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Generate and print custom ISBN barcode labels, price tags, and shelf talkers instantly from the system.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Purchase & Publisher Management</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Manage publisher ledgers, purchase orders, goods receiving notes, and automated reorder sheets.
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
              <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">Multi-Store & Cloud Sync</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-normal">
                Control multiple branches or warehouse outlets from a single centralized real-time cloud dashboard.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}