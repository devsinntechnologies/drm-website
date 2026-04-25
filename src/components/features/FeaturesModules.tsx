"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesModules = () => {
  const modules = [
    { t: "Purchase Management", c: "bg-blue-500/10 text-blue-500" },
    { t: "Stock Adjustments", c: "bg-emerald-500/10 text-emerald-500" },
    { t: "Vendor Portal", c: "bg-purple-500/10 text-purple-500" },
    { t: "Multi-Unit Sync", c: "bg-orange-500/10 text-orange-500" },
    { t: "Waste Tracking", c: "bg-rose-500/10 text-rose-500" },
    { t: "Auto-Reorder", c: "bg-cyan-500/10 text-cyan-500" },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label">All Access</span>
          <h3 className="text-3xl font-extrabold text-foreground mt-4">Extended <span className="text-primary">Modules</span></h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-bold border border-surface-border/50 text-base shadow-sm backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-all ${m.c}`}
            >
              {m.t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesModules;
