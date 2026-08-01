"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DemoHero = () => {
  return (
    <section className="relative pt-10 pb-8 overflow-hidden bg-white text-[#08162D] border-b border-gray-200">
      {/* Animated Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#0055FF]/20 blur-[180px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-4 py-2 rounded-xl mb-4 shadow-sm">
            Expert Tour
          </span>
          <h1 className="text-xl sm:text-base md:text-xl font-black text-[#08162D] mb-4 tracking-tight">
            See <span className="text-black font-black">Digi</span><span className="text-[#00B4FF] font-black">Nizam</span> in <span className="text-[#0055FF]">Action</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Experience the workflow that powers thousands of businesses.
            Schedule your personalized walkthrough today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoHero;