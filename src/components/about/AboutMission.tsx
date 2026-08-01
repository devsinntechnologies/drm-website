"use client";

import React from "react";
import { FiTarget, FiEye, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="bg-white py-10 md:py-14 relative overflow-hidden border-b border-gray-200">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-2.5 border border-[#0055FF]/20">
            OUR PURPOSE & DIRECTION
          </span>
          <h2 className="text-lg sm:text-xl lg:text-base font-black text-[#08162D] tracking-tight">
            Driven by Innovation, <span className="text-[#0055FF]">Defined by Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all shadow-sm">
                <FiTarget size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-[#08162D] mb-2">Our Mission</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 font-normal">
                To empower businesses across Pakistan and globally with robust, scalable, and intuitive ERP, POS, and software applications that simplify complex operations and fuel sustainable growth.
              </p>
            </div>
            <ul className="space-y-2 pt-3.5 border-t border-gray-100 text-xs font-bold text-gray-700">
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={14} /> High-performance custom software</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={14} /> Seamless client partnership approach</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white p-6 sm:p-7 rounded-xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all shadow-sm">
                <FiEye size={22} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-[#08162D] mb-2">Our Vision</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 font-normal">
                To become a globally recognized software house known for cutting-edge digital transformation, unmatched execution accuracy, and setting industry standards in enterprise automation.
              </p>
            </div>
            <ul className="space-y-2 pt-3.5 border-t border-gray-100 text-xs font-bold text-gray-700">
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={14} /> Industry-leading technology standards</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={14} /> Continuous technological innovation</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}