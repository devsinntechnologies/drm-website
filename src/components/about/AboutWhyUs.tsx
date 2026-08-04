"use client";

import React from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutWhyUs() {
  const points = [
    "Industry-leading ERP & POS system specifically tailored for Pakistani businesses.",
    "24/7 dedicated customer support to ensure seamless everyday operations.",
    "Highly scalable architecture allowing you to grow from one branch to hundreds.",
    "Integrated modules connecting HR, Sales, Inventory, and Accounting.",
  ];

  return (
    <section className="bg-surface text-foreground py-10 md:py-14 border-b border-surface-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">The DigiNizam advantage</span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-foreground">
            Why choose us as your technology partner?
          </h2>
          <p className="text-sm md:text-base text-muted leading-relaxed mb-5">
            We don&apos;t just provide software—we provide a complete ecosystem to optimize every facet of your enterprise, backed by deep understanding of local market dynamics.
          </p>
          
          <ul className="space-y-2.5">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-sm md:text-base font-medium text-muted">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[450px] h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-surface-border shadow-sm group">
            <Image 
              src="/success.jpg" 
              alt="DigiNizam Success and Growth" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/60 via-transparent to-transparent flex items-end p-5">
              <span className="text-white text-[11px] font-bold uppercase tracking-widest bg-primary px-2.5 py-1 rounded-lg shadow-sm">
                Proven Track Record
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}