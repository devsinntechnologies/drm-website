"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BusinessBannerSection() {
  return (
    <section className="py-6 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0055FF]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 group flex items-center justify-center text-center p-6"
        >
          {/* Background Image with Smooth Zoom */}
          <Image 
            src="/business.jpg" 
            alt="DEVSINN Business Success" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Dark Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08162D]/90 via-[#08162D]/75 to-[#08162D]/90" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-white bg-[#0055FF] px-4 py-2 rounded-xl mb-3 shadow-md shadow-[#0055FF]/30">
              POWERING ENTERPRISES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 tracking-tight text-white">
              Empowering Businesses Across Pakistan
            </h2>
            <p className="text-xs md:text-sm text-gray-200 font-normal leading-relaxed">
              Experience seamless inventory tracking, lightning-fast POS checkout, and multi-branch management designed to scale your enterprise effortlessly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}