"use client";

import React from "react";
import { FiTarget, FiEye, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="bg-surface py-10 md:py-14 relative overflow-hidden border-b border-surface-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="section-label">Our purpose &amp; direction</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Driven by innovation, <span className="text-primary">defined by excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-surface p-6 sm:p-7 rounded-xl border border-surface-border shadow-sm hover:border-primary hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <FiTarget size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Empower businesses across Pakistan and beyond with scalable, intuitive ERP, POS, and software that simplifies operations and fuels sustainable growth.
              </p>
            </div>
            <ul className="space-y-2 pt-3.5 border-t border-surface-border text-xs font-bold text-muted">
              <li className="flex items-center gap-2"><FiCheckCircle className="text-primary" size={14} /> High-performance custom software</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-primary" size={14} /> Seamless client partnership approach</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-surface p-6 sm:p-7 rounded-xl border border-surface-border shadow-sm hover:border-primary hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                <FiEye size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Become a globally recognized software house known for cutting-edge digital transformation and setting the standard in enterprise automation.
              </p>
            </div>
            <ul className="space-y-2 pt-3.5 border-t border-surface-border text-xs font-bold text-muted">
              <li className="flex items-center gap-2"><FiCheckCircle className="text-primary" size={14} /> Industry-leading technology standards</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-primary" size={14} /> Continuous technological innovation</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}