"use client";
import React from 'react';
import { motion } from 'framer-motion';

const CoreFeaturesList = () => {
  const coreFeatures = [
    "Table Tracking & Floor Management",
    "Split Billing & Partial Payments",
    "Customer Profiles & History",
    "Employee Clock-in/Clock-out",
    "Multiple Tax Structures (FBR Sync)",
    "Custom Kitchen Ticket Templates",
    "Live Dashboard on Mobile App",
    "EndOfDay (Z-Reports) Automation",
    "Multi-Store Inventory Transfer",
    "Supplier Purchase Orders",
    "Digital Recipe Management",
    "Wastage Tracking & Analytics"
  ];

  return (
    <section className="py-24 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label">Enterprise-Grade</span>
          <h2 className="text-4xl font-extrabold text-foreground mt-4">Core <span className="text-primary">Functionalities</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {coreFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="p-5 rounded-2xl glass-card border border-surface-border/50 flex items-center gap-4 group hover:border-primary/40 transition-all cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-foreground/80 leading-tight group-hover:text-primary transition-colors">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesList;
