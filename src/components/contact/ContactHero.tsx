"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative py-8 md:py-12 bg-white text-[#08162D] overflow-hidden border-b border-gray-200">
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0055FF]/15 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20 shadow-sm">
            LET'S CONNECT
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] mb-2 md:mb-3 tracking-tight">
            Get in <span className="text-[#0055FF]">Touch</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Have questions about how DigiNizam Software Solutions can transform your business? Our team is standing by to provide expert guidance and answer all your inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;