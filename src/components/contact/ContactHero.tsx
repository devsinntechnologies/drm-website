"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative pt-20 md:pt-28 pb-12 md:pb-16 bg-white text-[#08162D] overflow-hidden border-b border-gray-200">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0055FF]/20 blur-[180px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-4 py-2 rounded-xl mb-4 border border-[#0055FF]/20 shadow-sm">
            LET'S CONNECT
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#08162D] mb-4 md:mb-6 tracking-tight">
            Get in <span className="text-[#0055FF]">Touch</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Have questions about how N&S Software Solutions can transform your business? Our team is standing by to provide expert guidance and answer all your inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;