"use client";

import React from "react";
import { FiCode, FiDatabase, FiServer, FiLayout } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutTechStack() {
  const capabilities = [
    {
      icon: <FiLayout size={20} />,
      title: "Frontend & UI/UX",
      desc: "Crafting responsive, high-performance interfaces using React, Next.js, Tailwind CSS, and precise grid layouts.",
      tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      icon: <FiServer size={20} />,
      title: "Backend Engineering",
      desc: "Building robust, scalable server-side architectures and APIs using Node.js, Express, and NestJS frameworks.",
      tags: ["Node.js", "Express", "NestJS", "REST APIs"]
    },
    {
      icon: <FiDatabase size={20} />,
      title: "Database Management",
      desc: "Optimizing secure data storage and advanced querying with both relational and non-relational database systems.",
      tags: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"]
    },
    {
      icon: <FiCode size={20} />,
      title: "Enterprise Solutions",
      desc: "Developing custom ERP, POS systems, and automated workflows designed specifically for modern business enterprises.",
      tags: ["ERP Systems", "POS Solutions", "Automation", "Full Stack"]
    },
  ];

  return (
    <section className="bg-white text-[#08162D] py-10 md:py-14 border-b border-gray-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0055FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3.5 py-1.5 rounded-xl mb-2.5 border border-[#0055FF]/20">
            OUR CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 tracking-tight text-[#08162D]">
            Powered by modern <span className="text-[#0055FF]">technology stack</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed">
            We leverage cutting-edge frameworks and tools to build lightning-fast, secure, and fully scalable digital solutions.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3.5 group-hover:bg-[#0055FF] group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-base font-black text-[#08162D] mb-2 group-hover:text-[#0055FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>
              </div>
              
              {/* Technology Tags with Interactive Hover */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                {item.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-bold bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-200 hover:bg-[#0055FF] hover:text-white hover:border-[#0055FF] transition-all cursor-pointer shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}