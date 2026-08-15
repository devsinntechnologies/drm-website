"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BusinessBannerSection() {
  return (
    <section className="py-12 md:py-16 bg-surface section-soft-edge relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-surface-border group flex items-center justify-center text-center p-6"
        >
          {/* Background Image with Smooth Zoom */}
          <Image 
            src="/business.jpg" 
            alt="DigiNizam Business Success" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Dark Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)]/90 via-[var(--foreground)]/75 to-[var(--foreground)]/90" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-white">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-secondary mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Powering enterprises
            </span>
            <h2
              className="font-semibold tracking-tight text-white mb-3"
              style={{ fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.12 }}
            >
              Empowering businesses across Pakistan
            </h2>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              Experience seamless inventory tracking, lightning-fast POS checkout, and multi-branch management designed to scale your enterprise effortlessly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}