"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiX, FiCheck, FiMinus, FiAlertCircle } from "react-icons/fi";

const WhySection: React.FC = () => {
  const traditionalFeatures = [
    { title: "Limited Modules", desc: "Siloed apps that don't talk to each other, causing disjointed data." },
    { title: "No Artificial Intelligence", desc: "Manual planning, zero predictive forecasting, and missed optimization." },
    { title: "Poor Reporting", desc: "Delayed, static spreadsheets with no real-time cross-outlet visibility." },
    { title: "Basic POS System", desc: "Simple cash registers that crash during high traffic and lack smart additions." },
  ];

  const rmsFeatures = [
    { title: "Complete Restaurant Ecosystem", desc: "POS, inventory, KDS, staff, and delivery work together seamlessly." },
    { title: "AI Automation Built-in", desc: "Smart sales, staff, and ingredient forecasting with automated actions." },
    { title: "Multi Branch Management", desc: "Consolidated reporting and controls for branches anywhere in the world." },
    { title: "Franchise Support", desc: "Compliance monitoring and standardized operation sync across partners." },
    { title: "Advanced Analytics", desc: "Beautiful real-time dashboard visualization for instant decisions." },
    { title: "Smart Forecasting", desc: "Predict stock demand, shift schedules, and profit leaks automatically." },
    { title: "Feature Based Subscription Control", desc: "Super Admins can activate or deactivate specific modules per branch." },
  ];

  return (
    <section className="py-8 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-6">
          <span className="section-label">Competitive Advantage</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Why <span className="text-primary">RMS by Devsinn</span>?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Compare legacy restaurant software with our unified AI-Powered Restaurant Operating System.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Traditional Software */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[32px] p-8 bg-surface/40 border-surface-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <FiAlertCircle className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-foreground">Traditional Software</h3>
                  <p className="text-xs text-muted font-semibold tracking-wider uppercase">Legacy Systems</p>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                {traditionalFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                      <FiX className="text-sm font-bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base leading-snug">{feat.title}</h4>
                      <p className="text-muted text-sm mt-1">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border/50 text-center text-xs font-semibold text-muted tracking-widest uppercase">
              REDUCES EFFICIENCY • SEPARATE DATA SILOS
            </div>
          </motion.div>

          {/* RMS by Devsinn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-[32px] p-8 bg-white border-primary/30 shadow-xl relative overflow-hidden flex flex-col justify-between"
            style={{
              boxShadow: "0 20px 40px rgba(62, 163, 72, 0.08), inset 0 0 0 1px rgba(62, 163, 72, 0.1)",
            }}
          >
            {/* Corner glowing overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <FiCheck className="text-2.5xl font-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary">RMS by Devsinn</h3>
                    <p className="text-xs text-primary/80 font-semibold tracking-wider uppercase">Next-Dig Operating System</p>
                  </div>
                </div>
                <span className="bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  Recommended
                </span>
              </div>

              <div className="space-y-6 mt-8">
                {rmsFeatures.map((feat) => (
                  <div key={feat.title} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <FiCheck className="text-sm font-bold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base leading-snug">{feat.title}</h4>
                      <p className="text-muted text-sm mt-1">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-surface-border/50 text-center text-xs font-semibold text-primary tracking-widest uppercase">
              100% UNIFIED OPERATIONS • SCALES INFINITELY
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
