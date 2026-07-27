"use client";

import React from "react";
import { FiTarget, FiEye, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutMission() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden border-b border-gray-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
            OUR PURPOSE & DIRECTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] tracking-tight">
            Driven by Innovation, <span className="text-[#0055FF]">Defined by Excellence</span>
          </h2>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiTarget size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#08162D] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                To empower businesses across Pakistan and globally with robust, scalable, and intuitive ERP, POS, and software applications that simplify complex operations and fuel sustainable growth.
              </p>
            </div>
            <ul className="space-y-3 pt-6 border-t border-gray-100 text-xs font-bold text-gray-700">
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={16} /> High-performance custom software</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={16} /> Seamless client partnership approach</li>
            </ul>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                <FiEye size={28} />
              </div>
              <h3 className="text-2xl font-black text-[#08162D] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                To become a globally recognized software house known for cutting-edge digital transformation, unmatched execution accuracy, and setting industry standards in enterprise automation.
              </p>
            </div>
            <ul className="space-y-3 pt-6 border-t border-gray-100 text-xs font-bold text-gray-700">
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={16} /> Industry-leading technology standards</li>
              <li className="flex items-center gap-2"><FiCheckCircle className="text-[#0055FF]" size={16} /> Continuous technological innovation</li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}