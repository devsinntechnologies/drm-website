"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesInventory = () => {
  const points = [
    { title: "Unlimited Stores", desc: "Scale your business with the #1 cloud inventory system." },
    { title: "Infinite Products", desc: "Manage thousands of items without any performance lag." },
    { title: "Variations & Batches", desc: "Track colors, sizes, and specific batches with absolute precision." },
    { title: "Auto-Adjustment", desc: "Stock levels update instantly with every sale, purchase, or return." },
    { title: "Bulk Management", desc: "Import and export your entire product list in seconds using templates." },
    { title: "Multi-Location Sync", desc: "Independent inventory control for each store, synced in real-time." }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side Tablet Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[40px] blur opacity-30 group-hover:opacity-50 transition duration-1000" />
            <motion.div 
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative glass-card rounded-[40px] p-2 overflow-hidden shadow-2xl"
            >
              <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden relative bg-surface/50">
                <Image 
                  src="/features/feature-inventory-v2.png" 
                  alt="Inventory Management" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
            </motion.div>
            
            {/* Floating Tag */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute top-10 right-10 tag-pill bg-emerald-500/20 text-emerald-500 border-emerald-500/40"
            >
              Real-time Sync
            </motion.div>
          </motion.div>

          {/* Right Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 lg:pl-4"
          >
            <span className="section-label mb-6">Inventory Control</span>
            <h2 className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 leading-tight">
              Dynamic <span className="text-primary">Stock</span> <br />
              Management
            </h2>
            <p className="text-xl text-muted mb-12 leading-relaxed max-w-xl font-medium">
              Eliminate guesswork with our advanced cloud-based inventory. 
              Gain absolute clarity on every item, location, and transaction.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              {points.map((point, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-1 transition-all group-hover:bg-primary group-hover:scale-110">
                    <svg className="w-3.5 h-3.5 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed font-medium">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesInventory;
