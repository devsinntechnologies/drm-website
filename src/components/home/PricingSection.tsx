"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiX, FiLayers } from "react-icons/fi";

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      desc: "Essential billing features for single cafes and small coffee stands.",
      priceMonthly: "29",
      priceAnnually: "22",
      features: [
        { text: "Touch POS Terminal", included: true },
        { text: "Order Sources Routing", included: true },
        { text: "Basic Inventory & Menu", included: true },
        { text: "Single Outlet Limit", included: true },
        { text: "Real-Time KDS Screen", included: false },
        { text: "Staff Roster scheduling", included: false },
        { text: "Central Multi-Branch Hub", included: false },
        { text: "AI Sales Forecasting", included: false },
      ],
      cta: "Start Free Trial",
      badge: "",
      color: "border-surface-border bg-surface/30",
    },
    {
      name: "Growth",
      desc: "Perfect for busy dine-in bistros and quick-service diners.",
      priceMonthly: "79",
      priceAnnually: "59",
      features: [
        { text: "Touch POS Terminal", included: true },
        { text: "Order Sources Routing", included: true },
        { text: "Advanced Inventory & POs", included: true },
        { text: "Up to 3 Branches Limit", included: true },
        { text: "Real-Time KDS Screen", included: true },
        { text: "Staff Roster scheduling", included: true },
        { text: "Central Multi-Branch Hub", included: false },
        { text: "AI Sales Forecasting", included: false },
      ],
      cta: "Start Free Trial",
      badge: "Popular",
      color: "border-primary bg-white shadow-xl shadow-primary/5",
    },
    {
      name: "Pro",
      desc: "Full-scale operations suite for mid-size restaurant brands.",
      priceMonthly: "149",
      priceAnnually: "119",
      features: [
        { text: "Touch POS Terminal", included: true },
        { text: "Order Sources Routing", included: true },
        { text: "Advanced Inventory & POs", included: true },
        { text: "Up to 10 Branches Limit", included: true },
        { text: "Real-Time KDS Screen", included: true },
        { text: "Staff Roster scheduling", included: true },
        { text: "Central Multi-Branch Hub", included: true },
        { text: "AI Sales Forecasting", included: true },
      ],
      cta: "Start Free Trial",
      badge: "Best Value",
      color: "border-surface-border bg-surface/30",
    },
    {
      name: "Enterprise",
      desc: "Custom franchise operations command center built to scale.",
      priceMonthly: "Custom",
      priceAnnually: "Custom",
      features: [
        { text: "Touch POS Terminal", included: true },
        { text: "Order Sources Routing", included: true },
        { text: "Advanced Inventory & POs", included: true },
        { text: "Unlimited Branches Sync", included: true },
        { text: "Real-Time KDS Screen", included: true },
        { text: "Staff Roster scheduling", included: true },
        { text: "Central Multi-Branch Hub", included: true },
        { text: "AI Suite Complete Access", included: true },
      ],
      cta: "Contact Sales",
      badge: "Enterprise",
      color: "border-surface-border bg-surface/30",
    },
  ];

  return (
    <section className="py-10 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <span className="section-label">Transparent Plans</span>
          <h2 className="text-xl md:text-base font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            Flexible Plans that <span className="text-primary text-glow">Scale</span> With You
          </h2>
          <p className="text-muted text-lg font-medium">
            Choose a plan that fits your restaurant scale. Easily add or remove modular subscription toggles as your business grows.
          </p>

          {/* Billing Cycle Switch */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className={`text-sm font-bold ${billingCycle === "monthly" ? "text-primary" : "text-muted"}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(prev => prev === "monthly" ? "annually" : "monthly")}
              className="w-12 h-6 bg-surface-border rounded-full p-1 transition-colors relative flex items-center"
            >
              <motion.div 
                layout 
                className="w-4 h-4 rounded-full bg-primary" 
                animate={{ x: billingCycle === "annually" ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-bold ${billingCycle === "annually" ? "text-primary" : "text-muted"} flex items-center gap-1.5`}>
              Annually <span className="bg-primary/20 text-primary text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch max-w-7xl mx-auto">
          {plans.map((plan, idx) => {
            const isHovered = hoveredIdx === idx;
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnually;
            const period = price === "Custom" ? "" : billingCycle === "monthly" ? "/mo" : "/mo, billed annually";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`glass-card p-4 rounded-[32px] border flex flex-col justify-between h-full transition-all duration-500 backdrop-blur-2xl relative overflow-hidden ${plan.color}`}
                style={{
                  boxShadow: isHovered 
                    ? "0 30px 60px rgba(62, 163, 72, 0.08), inset 0 0 0 1px rgba(62, 163, 72, 0.1)" 
                    : "none",
                  borderColor: isHovered ? "var(--primary)" : ""
                }}
              >
                {/* Popular / Enterprise Badges */}
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <span className="bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-2xl">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-black text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted text-xs leading-relaxed font-semibold mb-4">{plan.desc}</p>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-xl font-black text-foreground tracking-tighter">{price}</span>
                    <span className="text-xs font-bold text-muted uppercase tracking-widest">{period}</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-4">
                    {plan.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-3 text-xs font-bold text-foreground/90">
                        {feat.included ? (
                          <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                            <FiCheck className="text-[10px] font-black" />
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full bg-surface-border text-muted flex items-center justify-center shrink-0 mt-0.5">
                            <FiX className="text-[10px] font-black" />
                          </span>
                        )}
                        <span className={feat.included ? "" : "text-muted/65"}>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                    plan.name === "Growth" || isHovered
                      ? "bg-primary text-white shadow-lg glow-primary"
                      : "bg-background border border-surface-border text-foreground hover:border-primary"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
