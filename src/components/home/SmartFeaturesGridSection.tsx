"use client";

import React, { useState } from "react";
import {
  FiCloud,
  FiGrid,
  FiBox,
  FiFileText,
  FiZap,
  FiAlertTriangle,
  FiCreditCard,
  FiBarChart2,
  FiPercent,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const features = [
  {
    icon: FiCloud,
    title: "Online / Offline",
    desc: "Cloud or one-time POS—sell and stay productive even when the network drops.",
  },
  {
    icon: FiGrid,
    title: "Multi-Store Control",
    desc: "Run every branch from one dashboard. Stock, sales, and reports stay in sync.",
  },
  {
    icon: FiBox,
    title: "Inventory Management",
    desc: "Track stock from supplier to shelf with clear, real-time visibility.",
  },
  {
    icon: FiFileText,
    title: "Unlimited Invoicing",
    desc: "Create branded invoices in seconds and send them to customers or suppliers.",
  },
  {
    icon: FiZap,
    title: "Fast Sales Processing",
    desc: "Speed through checkout so lines move faster and customers leave happy.",
  },
  {
    icon: FiAlertTriangle,
    title: "Stock-out Alerts",
    desc: "Get low-stock warnings early—restock before you lose a sale.",
  },
  {
    icon: FiCreditCard,
    title: "Multi-Payment Options",
    desc: "Accept cards and more payment methods so customers can pay their way.",
  },
  {
    icon: FiBarChart2,
    title: "Detailed Reports",
    desc: "See income and performance insights that help you decide what to do next.",
  },
  {
    icon: FiPercent,
    title: "Offers and Discounts",
    desc: "Run promotions and loyalty offers across one store or many locations.",
  },
];

export default function SmartFeaturesGridSection() {
  const [active, setActive] = useState(0);
  const ActiveIcon = features[active].icon;

  return (
    <section className="py-12 md:py-16 bg-background section-soft-edge relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-primary/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="max-w-2xl mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Smart Suite
          </span>
          <h2
            className="font-semibold tracking-tight text-foreground"
            style={{ fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.12 }}
          >
            Everything you need to run retail
          </h2>
          <p className="text-sm md:text-base text-muted mt-3 leading-relaxed max-w-xl">
            Pick a capability to explore how DigiNizam keeps sales, stock, and stores moving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Feature list */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="lg:col-span-5 flex flex-col gap-1.5"
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = active === idx;

              return (
                <button
                  key={feature.title}
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 border border-primary/30"
                      : "border border-transparent hover:bg-primary/5"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary group-hover:bg-primary/15"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-sm font-semibold tracking-tight transition-colors ${
                        isActive ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {feature.title}
                    </span>
                    <span className="block text-xs text-muted truncate md:hidden">
                      {feature.desc}
                    </span>
                  </span>
                  <span
                    className={`text-[11px] font-bold tabular-nums transition-colors ${
                      isActive ? "text-primary" : "text-muted/70"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="smart-suite-active"
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          {/* Preview panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.08 }}
            className="lg:col-span-7 relative min-h-[320px] sm:min-h-[380px]"
          >
            <div className="absolute inset-0 rounded-3xl border border-surface-border bg-surface overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <div className="absolute -top-20 -right-16 w-72 h-72 bg-primary/10 blur-[90px] rounded-full" />
              <div className="absolute -bottom-24 -left-10 w-64 h-64 bg-secondary/10 blur-[90px] rounded-full" />

              {/* Decorative scan line */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
                    Capability {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    Live system
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={features[active].title}
                    initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    className="py-8"
                  >
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_18px_40px_-18px_rgba(0,85,255,0.7)]">
                      <ActiveIcon className="w-7 h-7" />
                    </div>
                    <h3
                      className="font-semibold tracking-tight text-foreground mb-3"
                      style={{ fontSize: "clamp(26px, 3.5vw, 36px)", lineHeight: 1.15 }}
                    >
                      {features[active].title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted leading-relaxed max-w-md">
                      {features[active].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center gap-2">
                  {features.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={`Show ${features[idx].title}`}
                      onClick={() => setActive(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active === idx ? "w-8 bg-primary" : "w-2.5 bg-surface-border hover:bg-primary/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
