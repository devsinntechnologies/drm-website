"use client";

import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Ahmed Khan", role: "Founder & CEO" },
  { name: "Sarah Malik", role: "Head of Operations" },
  { name: "Zeeshan Ahmed", role: "Lead Architect" },
  { name: "Maria Siddiqui", role: "Support Director" },
];

export default function AboutTeam() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
            OUR TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] tracking-tight">
            Who <span className="text-[#0055FF]">drives</span> our success
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-normal mt-4 leading-relaxed">
            A dedicated group of professionals committed to delivering excellence in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all text-center group flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all shadow-sm">
                <span className="text-2xl font-black">{m.name.charAt(0)}</span>
              </div>
              <h4 className="text-lg font-black text-[#08162D] mb-1 group-hover:text-[#0055FF] transition-colors">{m.name}</h4>
              <p className="text-xs text-gray-500 font-medium">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}