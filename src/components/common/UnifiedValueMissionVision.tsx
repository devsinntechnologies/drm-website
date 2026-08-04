"use client";

import React from "react";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

interface UnifiedValueMissionVisionProps {
  bgLight?: boolean;
}

export default function UnifiedValueMissionVision({ bgLight = false }: UnifiedValueMissionVisionProps) {
  return (
    <section className={`py-5 md:py-8 ${bgLight ? "bg-gray-50" : "bg-white"} border-b border-gray-200 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20">
            OUR GUIDING PRINCIPLES
          </span>
          <h2 className="text-xl sm:text-base font-black text-[#08162D] tracking-tight">
            Our Value, Our Mission &amp; <span className="text-[#0055FF]">Our Vision</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-[13px] font-normal">
            The core pillars that drive our digital innovations and customer commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Our Value */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
              <FiHeart size={20} />
            </div>
            <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">
              Our Value
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed font-normal">
              Integrity, continuous innovation, and absolute engineering excellence. We build transparent partnerships with our clients to deliver software that produces real, measurable ROI.
            </p>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
              <FiTarget size={20} />
            </div>
            <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">
              Our Mission
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed font-normal">
              To empower modern businesses with state-of-the-art software solutions and cloud technologies that simplify complex workflows, automate operations, and boost efficiency.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
              <FiEye size={20} />
            </div>
            <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">
              Our Vision
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed font-normal">
              To be the premier digital transformation partner globally, recognized for building resilient, future-ready enterprise ecosystems that lead industry trends.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
