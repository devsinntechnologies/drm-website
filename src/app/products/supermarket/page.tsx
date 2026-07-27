"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle, FiTrendingUp, FiServer } from "react-icons/fi";

export default function SupermarketSolutionPage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      
      {/* Hero Section (Video Background) */}
      <section className="relative py-28 md:py-40 overflow-hidden border-b border-navy/10 flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-80"
          >
            <source src="/supermarket-hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid grid-cols-1 gap-12 items-center text-center">
          <div className="max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-royal px-4 py-2 rounded-xl mb-6 shadow-md">
              N&S RETAIL SOLUTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6 text-white">
              Advanced <span className="text-bright">Supermarket</span> POS System
            </h1>
            <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed mb-8">
              Streamline your checkout, barcode scanning, shelf management, and retail operations seamlessly with Pakistan's leading smart supermarket software.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="#contact">
                Get Free Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section below Hero */}
      <section className="py-20 md:py-24 bg-white border-b border-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center max-w-4xl">
           <h2 className="text-2xl sm:text-4xl font-black text-navy mb-6">Empower your supermarket staff</h2>
           <p className="text-navy/70 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              High-speed receipt printing, seamless counter billing, and real-time sales reporting all in one place. Built on a complete POS infrastructure that supports both local operations and cloud synchronization.
           </p>
           <div className="inline-flex items-center gap-2 text-sm font-bold text-royal bg-royal/10 px-6 py-3 rounded-xl">
             <FiServer size={18} /> Cloud & Local Sync Enabled
           </div>
        </div>
      </section>

      {/* Section 1: Core Capabilities Grid */}
      <section className="py-20 md:py-28 bg-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-4 py-2 rounded-xl mb-4">
              KEY CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-4">
              Designed for Modern <span className="text-royal">Retail Supermarkets</span>
            </h2>
            <p className="text-navy/60 text-sm sm:text-base font-medium">
              Everything you need to run supermarkets, grocery stores, and retail marts efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-navy/10 shadow-sm hover:border-royal transition-all">
              <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                <FiSmartphone size={24} />
              </div>
              <h3 className="text-lg font-black text-navy mb-3">Checkout & Barcode Scanning</h3>
              <p className="text-navy/60 text-xs sm:text-sm leading-relaxed font-medium">
                Real-time tracking of items, ultra-fast counter billing with barcode scanners, and split payments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-navy/10 shadow-sm hover:border-royal transition-all">
              <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                <FiShield size={24} />
              </div>
              <h3 className="text-lg font-black text-navy mb-3">Shelf Management</h3>
              <p className="text-navy/60 text-xs sm:text-sm leading-relaxed font-medium">
                Organize your products effectively, track shelf life, and manage aisles to enhance the shopping experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-navy/10 shadow-sm hover:border-royal transition-all">
              <div className="w-12 h-12 rounded-xl bg-royal/10 text-royal flex items-center justify-center mb-6">
                <FiAward size={24} />
              </div>
              <h3 className="text-lg font-black text-navy mb-3">FBR Fiscal Integration</h3>
              <p className="text-navy/60 text-xs sm:text-sm leading-relaxed font-medium">
                Automatic tax calculation and real-time digital invoice reporting compliant with FBR standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Smart Operations & Inventory Spotlight */}
      <section className="py-20 md:py-24 bg-white border-y border-navy/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-royal bg-royal/10 px-4 py-2 rounded-xl mb-4">
              SMART AUTOMATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-6">
              Optimized Inventory & <span className="text-royal">Inventory Control</span>
            </h2>
            <p className="text-navy/70 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              Take complete control of your stock levels. Our integrated platform automatically deducts inventory with every order placed, minimizing discrepancies and streamlining purchasing.
            </p>
            <ul className="space-y-3 text-sm text-navy font-bold">
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-royal" size={18} /> Automated Purchase & Stock Deduction
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-royal" size={18} /> Multi-Branch Centralized Cloud Dashboard
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-royal" size={18} /> Customer Loyalty & Discount Management
              </li>
            </ul>
          </div>
          <div className="bg-navy/5 p-8 rounded-xl border border-navy/10 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-royal/10 text-royal flex items-center justify-center">
                <FiTrendingUp size={28} />
              </div>
              <div>
                <h4 className="text-lg font-black text-navy">Real-Time Analytics</h4>
                <p className="text-xs text-navy/60 font-medium">Comprehensive daily sales & expense reports</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-navy/70 leading-relaxed mb-6 italic">
              "Monitor hourly sales performance, top-selling grocery items, and peak shopping hours directly from your mobile phone or desktop dashboard."
            </p>
            <div className="p-4 rounded-xl bg-royal/10 border border-royal/20 flex items-center justify-between text-xs font-bold text-navy">
              <span>Reporting Status: Live & Active</span>
              <span className="text-royal">v2.4</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}