"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import Button from "@/components/ui/Button";
import ProductScreen from "@/components/common/ProductScreen";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section className="hero-section bg-navy text-white section-soft-edge section-soft-edge--dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_35%,rgba(0,85,255,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="max-w-lg"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
              AI-powered retail OS
            </span>

            <h1 className="font-semibold text-white tracking-tight mb-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1]">
              Run every store from one{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                intelligent platform
              </span>
            </h1>

            <p className="text-base text-white/70 leading-relaxed mb-7">
              FBR-ready POS and inventory for restaurants, pharmacies, and retail across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="/demo" variant="primary" size="lg">
                Book free demo
              </Button>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] text-sm font-semibold border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
              >
                <FiPhone className="w-4 h-4 text-secondary" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
            className="w-full lg:max-w-none"
          >
            <ProductScreen
              src="/originalheroimage.png"
              alt="DigiNizam POS terminal, scanner, and receipt printer"
              variant="showcase"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
