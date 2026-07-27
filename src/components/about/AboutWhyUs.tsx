"use client";

import React from "react";
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
    <section className="bg-white text-[#08162D] py-20 md:py-28 border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-6 border border-[#0055FF]/20">
            The N&S Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight text-[#08162D]">
            Why choose us as your technology partner?
          </h2>
          <p className="text-sm md:text-base text-gray-600 font-normal leading-relaxed mb-8">
            We don't just provide software; we provide a complete ecosystem designed to optimize every facet of your enterprise. Our deep understanding of local market dynamics enables us to offer solutions that truly matter.
          </p>
          
          <ul className="space-y-4">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-[#0055FF] shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-12 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all flex flex-col items-center justify-center text-center group"
        >
          <h3 className="text-4xl md:text-6xl font-black text-[#0055FF] mb-2">10+</h3>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Years of Excellence</p>
          <div className="w-16 h-1 bg-[#0055FF]/20 my-6 rounded-full"></div>
          <h3 className="text-4xl md:text-6xl font-black text-[#0055FF] mb-2">500+</h3>
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Happy Clients</p>
        </motion.div>

      </div>
    </section>
  );
}