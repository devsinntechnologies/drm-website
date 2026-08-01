"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#08162D] text-white py-4 sm:py-5 md:py-7 border-b border-gray-800 relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      
      {/* Background Decor with Subtle Opacity */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0055FF]/15 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#00B4FF]/15 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-center relative z-10 w-full">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00B4FF] bg-[#0055FF]/20 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/40">
            <span className="inline-flex items-center gap-1.5 align-middle">
              The <span className="text-black font-black">Digi</span><span className="text-[#00B4FF] font-black">Nizam</span>
              <Image src="/logo.png" alt="DigiNizam Logo" width={14} height={14} className="object-contain inline-block" />
            </span> - Complete ERP & POS System
          </span>

          <h1 className="text-base sm:text-lg lg:text-xl font-medium leading-tight text-white mb-3 tracking-tight">
            Complete ERP &amp; POS System in Pakistan <br />
            <span className="text-white">Complete Solutions</span>
          </h1>

          <p className="text-sm md:text-base text-gray-300 font-normal leading-relaxed mb-4">
            Optimize your Retail Store, Mart, Manufacturing, Restaurant, Bakery, Salon, Pharmacy, Boutique, Sales, Accounting, Inventory and FBR POS integration with Top POS System in Pakistan.
          </p>
          
          <div className="flex flex-wrap gap-3 items-center">
            <Link 
              href="/demo"
              className="bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest px-7 py-3.5 rounded-xl shadow-lg shadow-[#0055FF]/25 transition-all text-center"
            >
              GET FREE DEMO
            </Link>

            <a 
              href="tel:03000000000" 
              className="border border-gray-700 hover:border-[#0055FF] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-3 bg-[#08162D]/60 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00B4FF] animate-pulse"></span>
              UAN: 03-000000000
            </a>
          </div>
        </motion.div>

        {/* Right Local Image Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-full max-w-2xl relative h-[320px] sm:h-[420px] lg:h-[500px] -mt-2 lg:-mt-4">
            <Image 
              src="/originalheroimage.png" 
              alt="DigiNizam Software Solutions System in Pakistan" 
              fill
              className="object-contain drop-shadow-2xl scale-90 sm:scale-100 md:scale-110 origin-center"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}