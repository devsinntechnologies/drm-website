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
    <section className="bg-white text-[#08162D] py-10 md:py-14 border-b border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-3 border border-[#0055FF]/20">
            The <span className="text-black font-black">Digi</span><span className="text-[#00B4FF] font-black">Nizam</span> Advantage
          </span>
          <h2 className="text-lg sm:text-xl lg:text-base font-black mb-3 tracking-tight text-[#08162D]">
            Why choose us as your technology partner?
          </h2>
          <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed mb-5">
            We don&apos;t just provide software; we provide a complete ecosystem designed to optimize every facet of your enterprise. Our deep understanding of local market dynamics enables us to offer solutions that truly matter.
          </p>
          
          <ul className="space-y-2.5">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-[#0055FF] shrink-0 mt-1" />
                <span className="text-xs md:text-sm font-bold text-gray-700">{point}</span>
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
          <div className="relative w-full max-w-[450px] h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-gray-200 shadow-sm group">
            <Image 
              src="/success.jpg" 
              alt="DigiNizam Success and Growth" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08162D]/60 via-transparent to-transparent flex items-end p-5">
              <span className="text-white text-[11px] font-bold uppercase tracking-widest bg-[#0055FF] px-2.5 py-1 rounded-lg shadow-sm">
                Proven Track Record
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}