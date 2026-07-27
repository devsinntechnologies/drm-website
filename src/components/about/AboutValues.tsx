"use client";

import React from "react";
import { FiShield, FiZap, FiHeart, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutValues() {
  const values = [
    {
      icon: <FiShield size={24} />,
      title: "Integrity & Trust",
      description: "We build long-term relationships through absolute transparency, honesty, and ethical business practices.",
    },
    {
      icon: <FiZap size={24} />,
      title: "Continuous Innovation",
      description: "Constantly upgrading our tech stack and solutions to stay ahead of industry trends and deliver future-proof systems.",
    },
    {
      icon: <FiHeart size={24} />,
      title: "Client Commitment",
      description: "Your business growth is our ultimate priority. We provide dedicated support and tailor-made digital strategies.",
    },
    {
      icon: <FiStar size={24} />,
      title: "Quality Excellence",
      description: "Rigorous standards in coding, security, and UI/UX design to ensure robust and high-performance applications.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden border-b border-gray-200">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20">
            WHAT WE STAND FOR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] mb-4 tracking-tight">
            Our Core <span className="text-[#0055FF]">Values</span>
          </h2>
          <p className="text-gray-600 font-normal text-sm sm:text-base leading-relaxed">
            The foundational principles that guide every line of code we write and every client relationship we build.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#0055FF] shadow-sm hover:shadow-xl transition-all group text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-6 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-[#08162D] mb-3 group-hover:text-[#0055FF] transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}