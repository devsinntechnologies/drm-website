"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function RestaurantSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* Hero Section (Video Background) - Strictly Fits Full Viewport so next section doesn't peek */}
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
            <source src="/restaurant-hero.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-[#08162D]/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-black/60 border border-white/20 px-3.5 py-1.5 rounded-xl mb-4 shadow-lg backdrop-blur-md">
              DigiNizam RETAIL SOLUTIONS • RESTAURANT SUITE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-4 text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Advanced <span className="text-[#3b82f6] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">Restaurant</span> POS System
            </h1>
            <p className="text-sm md:text-base text-gray-100 font-medium leading-relaxed mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Streamline your dine-in, takeaway, delivery, kitchen display orders, and table management seamlessly with Pakistan's leading smart restaurant software, engineered for speed and absolute reliability.
            </p>
            {/* Extra Description Added */}
           
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl group"
              >
                Get Free Demo <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Staff & Receipt Printing Image Showcase */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
              STAFF EFFICIENCY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08162D] mb-3 tracking-tight">
              Empower your <span className="text-[#0055FF]">restaurant staff</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              High-speed receipt printing, seamless counter billing, and real-time sales reporting all in one place. Built on a complete POS infrastructure that supports both local operations and cloud synchronization.
            </p>
            {/* Extra Description Added */}
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Empower cashiers and floor managers with intuitive touch interfaces, multi-terminal connectivity, offline backup support, and instantaneous kitchen dispatching to prevent order bottlenecks during peak hours.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-5 py-3 rounded-xl">
              <FiServer size={18} /> Cloud & Local Sync Enabled
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

      {/* Section 1: Core Capabilities Grid with foodbusiness.jpg Showcase */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
                KEY CAPABILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08162D] mb-3 tracking-tight">
                Designed for Modern <span className="text-[#0055FF]">Food Businesses</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed mb-3">
                Everything you need to run cafes, fine dining, fast food chains, and bakeries efficiently.
              </p>
              {/* Extra Description Added */}
              <p className="text-gray-500 text-xs sm:text-sm font-normal leading-relaxed">
                Our versatile software adapts effortlessly to unique workflow requirements across different food service sectors, offering customizable menu modifiers, happy hour discounts, and granular user permission controls.
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
                src="/foodbusiness.jpg" 
                alt="Designed for Modern Food Businesses - Cafes, Fine Dining, Fast Food & Bakeries" 
                width={650} 
                height={450}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiSmartphone size={24} />
              </div>
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">Table & Order Management</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Real-time tracking of dine-in tables, split bills, merging orders, and fast counter billing.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiShield size={24} />
              </div>
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">Kitchen Display System (KDS)</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Send orders directly from cash counters to kitchen screens instantly, eliminating paper slips.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiAward size={24} />
              </div>
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">FBR Fiscal Integration</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Automatic tax calculation and real-time digital invoice reporting compliant with FBR standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Smart Operations & Inventory Spotlight */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
              SMART AUTOMATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08162D] mb-4 tracking-tight">
              Optimized Inventory & <span className="text-[#0055FF]">Recipe Control</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Take complete control of your stock levels. Our integrated platform automatically deducts ingredients with every order placed, minimizing food wastage and streamlining kitchen purchasing.
            </p>
            {/* Extra Description Added */}
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
              Receive low-stock threshold alerts automatically, track supplier purchase orders, and generate precise cost-of-goods-sold (COGS) reports to protect profit margins.
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-700 font-bold">
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#0055FF]" size={18} /> Automated Recipe & Stock Deduction
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#0055FF]" size={18} /> Multi-Branch Centralized Cloud Dashboard
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#0055FF]" size={18} /> Customer Loyalty & Discount Management
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center">
                <FiTrendingUp size={28} />
              </div>
              <div>
                <h4 className="text-lg font-black text-[#08162D]">Real-Time Analytics</h4>
                <p className="text-xs text-gray-500 font-medium">Comprehensive daily sales & expense reports</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 italic font-normal">
              "Monitor hourly sales performance, top-selling menu items, and peak dining hours directly from your mobile phone or desktop dashboard."
            </p>
            <div className="p-4 rounded-xl bg-[#0055FF]/10 border border-[#0055FF]/20 flex items-center justify-between text-xs font-bold text-[#08162D]">
              <span>Reporting Status: Live & Active</span>
              <span className="text-[#0055FF]">v2.4</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}