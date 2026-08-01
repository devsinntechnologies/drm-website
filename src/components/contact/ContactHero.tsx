"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <div className="relative py-4 md:py-5 bg-white text-[#08162D] overflow-hidden border-b border-gray-200 min-h-[340px]">
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
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-1.5 border border-[#0055FF]/20 shadow-sm">
            LET'S CONNECT
          </span>
          
          <h1 className="text-xl sm:text-2xl md:text-2xl font-black text-[#08162D] mb-1 tracking-tight">
            Get in <span className="text-[#0055FF]">Touch</span>
          </h1>

          <h2 className="text-base sm:text-lg text-[#08162D] font-medium mb-2">
            Start your next project with clarity and confidence.
          </h2>

          <p className="text-sm sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal mb-3">
            Have questions about how <span className="text-black font-black">Digi</span><span className="text-[#0055FF] font-black">Nizam</span> Software Solutions can transform your business? Our team is standing by to provide expert guidance and answer all your inquiries.
          </p>

          <p className="text-sm sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal mb-3">
            Whether you're exploring a new product rollout, optimizing operations, or looking for tailored digital transformation support, we help make the process smooth and results-driven.
          </p>

          <p className="text-sm sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Reach out today and discover how we can help your business move faster, work smarter, and scale with confidence.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHero;