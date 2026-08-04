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
    <section className="bg-surface text-foreground py-10 md:py-14 border-b border-surface-border relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="section-label">Our capabilities</span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-foreground">
            Powered by a modern <span className="text-primary">technology stack</span>
          </h2>
          <p className="text-sm md:text-base text-muted leading-relaxed">
            Cutting-edge frameworks and tools to build fast, secure, and fully scalable digital solutions.
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
              className="bg-surface p-5 rounded-xl border border-surface-border shadow-sm hover:border-primary hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>
              </div>
              
              {/* Technology Tags with Interactive Hover */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border">
                {item.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-bold bg-surface text-muted px-2 py-1 rounded-md border border-surface-border hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer shadow-2xs"
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