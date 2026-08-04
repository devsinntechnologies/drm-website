"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="hero-section bg-navy text-white border-b border-white/10 relative overflow-hidden min-h-[min(100vh,820px)] flex items-center">
      <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/15 blur-[100px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center relative z-10 w-full py-10 lg:py-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-secondary mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            DigiNizam
          </p>
          <h1
            className="font-semibold text-white mb-4 tracking-tight"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.08 }}
          >
            Complete ERP &amp; POS for modern retail
          </h1>
          <p className="text-sm md:text-base text-white/75 leading-relaxed mb-7 max-w-xl">
            Orders, inventory, accounting, and FBR-ready POS—one platform for restaurants, pharmacies, marts, and more.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <Button href="/demo" variant="primary" size="lg" className="animate-pulse-glow">
              Get free demo
            </Button>
            <Button href="tel:03000000000" variant="secondary" size="lg" className="!bg-surface/5 !text-white !border-white/20 hover:!border-primary hover:!bg-primary/10">
              <span className="w-2 h-2 rounded-full bg-secondary" aria-hidden />
              UAN: 03-000000000
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative flex justify-center items-center animate-float"
        >
          <div className="w-full max-w-2xl relative h-[280px] sm:h-[400px] lg:h-[480px] animate-scan">
            <Image
              src="/originalheroimage.png"
              alt="DigiNizam software solutions"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
