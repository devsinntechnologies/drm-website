"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesKDS = () => {
  const tabs = [
    { title: "Kitchen Display Terminal", active: true },
    { title: "DRM TableTab", active: false },
    { title: "DRM Insights", active: false },
    { title: "DRM Rider App", active: false },
  ];

  const points = [
    "Real-time Order Synchronization",
    "Enhanced Kitchen Communication",
    "Optimized Food Prep Focus",
    "Automated Inventory Deductions",
    "Accurate Timing & Delivery Tracking"
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden border-t border-surface-border">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Sidebar Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col gap-3"
          >
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">DRM Ecosystem</span>
            {tabs.map((tab, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className={`group py-4 px-6 rounded-2xl border font-bold text-sm transition-all duration-300 cursor-pointer ${
                  tab.active 
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 -translate-y-0.5' 
                  : 'bg-surface/50 border-surface-border text-muted hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  {tab.title}
                  {tab.active && (
                    <motion.svg 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Title & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <span className="section-label mb-6">Kitchen Display</span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-[1.1] mb-6">
              Modern <span className="gradient-text">KDS</span> Terminals
            </h2>
            <p className="text-lg text-muted leading-relaxed font-medium">
              The kitchen display terminal is the beating heart of your kitchen operation, 
              connecting front-of-house to back-of-house with millisecond precision.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-700" />
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative glass-card rounded-3xl p-1 overflow-hidden h-full"
            >
              <div className="relative w-full aspect-square lg:h-full rounded-2xl overflow-hidden bg-surface/50">
                <Image 
                  src="/features/feature-kds-v2.png" 
                  alt="Kitchen Display Terminal" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Quick List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <ul className="space-y-8">
              {points.map((point, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex gap-4 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover:bg-emerald-500 group-hover:text-white group-hover:rotate-6">
                    <svg className="w-3.5 h-3.5 text-emerald-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-foreground/80 leading-relaxed group-hover:text-primary transition-colors">
                    {point}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesKDS;
