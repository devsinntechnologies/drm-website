"use client";

import React from "react";
import { FiShield, FiZap, FiHeart, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutValues() {
  const values = [
    {
      icon: <FiShield size={20} />,
      title: "Integrity & Trust",
      description: "We build long-term relationships through absolute transparency, honesty, and ethical business practices.",
    },
    {
      icon: <FiZap size={20} />,
      title: "Continuous Innovation",
      description: "Constantly upgrading our tech stack and solutions to stay ahead of industry trends and deliver future-proof systems.",
    },
    {
      icon: <FiHeart size={20} />,
      title: "Client Commitment",
      description: "Your business growth is our ultimate priority. We provide dedicated support and tailor-made digital strategies.",
    },
    {
      icon: <FiStar size={20} />,
      title: "Quality Excellence",
      description: "Rigorous standards in coding, security, and UI/UX design to ensure robust and high-performance applications.",
    },
  ];

  return (
    <section className="bg-surface py-10 md:py-14 relative overflow-hidden border-b border-surface-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="section-label">What we stand for</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Our core <span className="text-primary">values</span>
          </h2>
          <p className="text-sm md:text-base text-muted leading-relaxed mt-2">
            The principles that guide every line of code we write and every client relationship we build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-surface p-5 rounded-xl border border-surface-border hover:border-primary shadow-sm hover:shadow-md transition-all group text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3.5 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed font-normal">
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