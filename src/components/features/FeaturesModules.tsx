"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesModules = () => {
  const modules = [
  {
    "t": "Purchases",
    "c": "bg-blue-500/10 text-blue-500"
  },
  {
    "t": "Receiving",
    "c": "bg-emerald-500/10 text-emerald-500"
  },
  {
    "t": "Supplier Records",
    "c": "bg-purple-500/10 text-purple-500"
  },
  {
    "t": "Inventory",
    "c": "bg-orange-500/10 text-orange-500"
  }
];

  return (
    <section className="py-6 md:py-8 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-4"
        >
          <span className="section-label">Selected configuration</span>
          <h2 className="text-base md:text-lg font-extrabold text-foreground mt-3">Purchase Management</h2>
          <p className="text-sm text-muted max-w-2xl mx-auto mt-3">Keep supported purchase and supplier records connected with inventory work. Confirm which receiving, supplier and purchasing functions are available in your selected setup.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 md:px-7 py-3 rounded-2xl font-bold border border-surface-border/50 text-sm md:text-base shadow-sm backdrop-blur-sm cursor-pointer hover:border-primary/40 transition-all ${m.c}`}
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
