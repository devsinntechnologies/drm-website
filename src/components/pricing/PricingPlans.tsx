"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "Forever",
    desc: "For small cafes and new businesses getting started.",
    features: ["Up to 500 orders/mo", "Basic inventory", "1 terminal", "Standard reporting"],
    btn: "Get started",
    href: "/demo",
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    desc: "Advanced tools for growing restaurants with multiple staff.",
    features: ["Unlimited orders", "Advanced inventory", "3 terminals", "24/7 support", "Custom reports"],
    btn: "Start free trial",
    href: "/demo",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact sales",
    desc: "Full-scale solution for multi-location franchises.",
    features: ["Multi-unit sync", "Dedicated manager", "Unlimited terminals", "Custom API", "On-site setup"],
    btn: "Contact sales",
    href: "/contact",
    popular: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="py-10 md:py-14 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="section-label">Transparent pricing</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Plans that <span className="text-primary">scale</span> with you
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`surface-card p-6 flex flex-col h-full relative card-hover ${
                plan.popular ? "border-primary ring-1 ring-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-primary/10 border border-primary/25 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Most popular
                </span>
              )}

              <div className="mb-4">
                <h3 className="text-lg font-bold uppercase tracking-wider text-foreground mb-3">{plan.name}</h3>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground tracking-tight">{plan.price}</span>
                  <span className="text-xs font-semibold text-muted uppercase tracking-wider">{plan.period}</span>
                </div>
              </div>

              <p className="text-muted text-sm mb-5 leading-relaxed">{plan.desc}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button href={plan.href} variant={plan.popular ? "primary" : "secondary"} fullWidth>
                {plan.btn}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
