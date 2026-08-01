"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BlogHero = () => {
  return (
    <section className="relative py-3 md:py-4 pt-3 md:pt-4 pb-3 md:pb-4 min-h-0 bg-white text-[#08162D] overflow-visible border-b border-gray-200">
      
      {/* Background Decor */}
      <div className="absolute inset-x-0 top-0 pointer-events-none overflow-visible">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#0055FF]/10 blur-[160px] rounded-full -translate-y-1/3 translate-x-1/4"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[280px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />
      </div>

<div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20 shadow-sm">
              Resources & News
            </span> */}

            <h1 className="text-base sm:text-lg md:text-xl font-black text-[#08162D] mb-2 md:mb-3 tracking-tight">
              Latest <span className="text-[#0055FF]">Insights</span> & Updates
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Master the art of enterprise management with <span className="text-black font-black">Digi</span><span className="text-[#0055FF] font-black">Nizam</span>. Stay ahead with deep dives into industry trends, technical guides, and operational strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 flex flex-wrap justify-center gap-2"
          >
            {[
              'All Posts',
              'Enterprise Management',
              'Platform Strategy',
              'Marketing',
              'Industry News'
            ].map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (i * 0.05) }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1.5 rounded-xl border border-gray-200 bg-white text-xs font-bold text-[#08162D] hover:border-[#0055FF] hover:text-[#0055FF] transition-all cursor-pointer shadow-sm"
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          <div className="mt-4 grid gap-3 md:grid-cols-3 text-left">
            <div className="rounded-3xl border border-gray-200 border-l-4 border-l-transparent bg-[#F8FAFF] p-3 shadow-sm transition-all hover:border-l-[#0055FF]">
              <h3 className="text-base font-medium text-[#08162D] mb-2">In-Depth Articles</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Discover actionable insights on strategy, technology, and growth for modern enterprises.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 border-l-4 border-l-transparent bg-[#F8FAFF] p-3 shadow-sm transition-all hover:border-l-[#0055FF]">
              <h3 className="text-base font-medium text-[#08162D] mb-2">Expert Views</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Learn from industry leaders and specialists who share their perspectives and best practices.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 border-l-4 border-l-transparent bg-[#F8FAFF] p-3 shadow-sm transition-all hover:border-l-[#0055FF]">
              <h3 className="text-base font-medium text-[#08162D] mb-2">Growth Tips</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get practical guidance for making your operations more efficient and future-ready.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 border-l-4 border-l-transparent bg-[#F8FAFF] p-3 shadow-sm transition-all hover:border-l-[#0055FF]">
              <h3 className="text-base font-medium text-[#08162D] mb-2">Latest News</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Stay updated with the newest developments and trends shaping enterprise software.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 border-l-4 border-l-transparent bg-[#F8FAFF] p-3 shadow-sm transition-all hover:border-l-[#0055FF]">
              <h3 className="text-base font-medium text-[#08162D] mb-2">Strategy Trends</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Explore high-impact tactics for scaling operations and improving business performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogHero;