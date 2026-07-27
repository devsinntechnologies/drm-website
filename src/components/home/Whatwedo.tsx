"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const WhatWeDoSection: React.FC = () => {
  const services = [
    { title: "MIS AUDITING", desc: "Advanced system reporting and tracking tools to discover business goals. We provide comprehensive data analysis and actionable insights to optimize your enterprise's daily performance." },
    { title: "SYSTEM SUPPORT", desc: "Reliable, round-the-clock technical assistance for flawless daily workflows. Our dedicated experts ensure minimal downtime, keeping your point-of-sale and backend systems running smoothly 24/7." },
    { title: "TRAINING", desc: "Comprehensive user training and operational documentation support. We ensure your staff is fully equipped to leverage our software to its maximum potential, increasing productivity and efficiency." },
    { title: "INVENTORY DIGITALIZATION", desc: "Automate stock levels, kitchen orders, and sales tracking in real-time. Gain complete control over your supply chain and eliminate manual errors with our seamless digitalization suite." }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl border border-[#0055FF]/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] mt-4 tracking-tight">
            WHAT WE DO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl border border-gray-200 bg-white flex flex-col justify-between shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
            >
              <div>
                <h4 className="text-lg font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">{s.title}</h4>
                <p className="text-sm font-normal text-gray-600 mb-8 leading-relaxed">{s.desc}</p>
              </div>
              
              <Link 
                href="/services/software-solution"
                className="w-full py-3 bg-gray-50 hover:bg-[#0055FF] text-[#08162D] hover:text-white font-black text-xs uppercase tracking-widest text-center rounded-xl transition-all border border-gray-200 hover:border-[#0055FF] shadow-sm block"
              >
                READ MORE
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;