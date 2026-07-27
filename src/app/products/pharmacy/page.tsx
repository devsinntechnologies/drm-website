"use client";

import React from "react";
import Link from "next/link";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function PharmacySolutionPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D]">
      
      {/* Hero Section (Video Background) */}
      <section className="relative py-28 md:py-40 overflow-hidden border-b border-gray-200 flex items-center bg-[#08162D]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/pharmacy-hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#08162D]/70"></div>
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0055FF]/20 blur-[180px] rounded-full pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 gap-12 items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/20 border border-[#0055FF]/40 px-4 py-2 rounded-xl mb-6 shadow-md">
              N&S RETAIL SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 text-white tracking-tight">
              Advanced <span className="text-[#0055FF]">Pharmacy</span> POS System
            </h1>
            <p className="text-sm md:text-base text-gray-300 font-normal leading-relaxed mb-8">
              Streamline your prescription billing, expiry tracking, batch management, and retail operations seamlessly with Pakistan's leading smart pharmacy software.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg group"
              >
                Get Free Demo <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section below Hero */}
      <section className="py-20 md:py-24 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-4xl relative z-10">
           <h2 className="text-2xl sm:text-4xl font-black text-[#08162D] mb-6 tracking-tight">Empower your pharmacy staff</h2>
           <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
             High-speed receipt printing, seamless counter billing, and real-time sales reporting all in one place. Built on a complete POS infrastructure that supports both local operations and cloud synchronization.
           </p>
           <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-6 py-3 rounded-xl">
             <FiServer size={18} /> Cloud & Local Sync Enabled
           </div>
        </div>
      </section>

      {/* Section 1: Core Capabilities Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
              KEY CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#08162D] mb-4 tracking-tight">
              Designed for Modern <span className="text-[#0055FF]">Retail Pharmacies</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-normal">
              Everything you need to run pharmacies, medical stores, and clinics efficiently.
            </p>
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
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">Prescription Management</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Real-time tracking of prescriptions, fast counter billing, and patient history retrieval.
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
              <h3 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">Expiry & Batch Tracking</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                Automatic alerts for near-expiry medicines and precise batch management to ensure safety and compliance.
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
      <section className="py-20 md:py-24 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
              SMART AUTOMATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#08162D] mb-6 tracking-tight">
              Optimized Inventory & <span className="text-[#0055FF]">Stock Control</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Take complete control of your stock levels. Our integrated platform automatically deducts inventory with every order placed, minimizing discrepancies and streamlining purchasing.
            </p>
            <ul className="space-y-3 text-sm text-gray-700 font-bold">
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-[#0055FF]" size={18} /> Automated Purchase & Stock Deduction
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
              "Monitor hourly sales performance, top-selling medicines, and peak hours directly from your mobile phone or desktop dashboard."
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