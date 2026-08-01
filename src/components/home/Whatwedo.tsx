"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const WhatWeDoSection: React.FC = () => {
  const services = [
    { title: "MIS AUDITING", desc: "Advanced system reporting and tracking tools to discover business goals with actionable data insights." },
    { title: "SYSTEM SUPPORT", desc: "Reliable, round-the-clock technical assistance for flawless daily POS and backend workflows." },
    { title: "TRAINING", desc: "Comprehensive user training and operational documentation support to maximize software potential." },
    { title: "INVENTORY DIGITALIZATION", desc: "Automate stock levels, orders, and sales tracking in real-time with complete supply chain control." }
  ];

  return (
    <section className="py-6 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0055FF]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-5 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl border border-[#0055FF]/20">
            Our Services
          </span>
          <h2 className="text-lg sm:text-xl lg:text-base font-black text-[#08162D] mt-3 tracking-tight">
            WHAT WE DO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* Left Side: Attractive Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative h-[380px] sm:h-[440px] rounded-xl overflow-hidden border border-gray-200 shadow-md group"
          >
            <Image 
              src="/whatwedo.jpg" 
              alt="What We Do - DEVSINN" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08162D]/60 via-transparent to-transparent flex items-end p-6">
              <span className="text-white text-xs font-bold uppercase tracking-widest bg-[#0055FF] px-3 py-1.5 rounded-lg shadow-sm">
                Core Capabilities
              </span>
            </div>
          </motion.div>

          {/* Right Side: Services Stack */}
          <div className="lg:col-span-7 space-y-3.5">
            {services.map((s, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm hover:border-[#0055FF] hover:shadow-md transition-all group"
              >
                <h4 className="text-base md:text-lg font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">
                  {s.title}
                </h4>
                <p className="text-xs md:text-sm font-normal text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;