"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BlogHero = () => {
  return (
    <section className="relative bg-blue-950 pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden border-b border-surface-border bg-gradient-to-br from-orange-100 via-yellow-100 to-orange-50">
      
      {/* Background Decor */}
      <div className="absolute top-0 inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-300/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" 
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-300/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" 
        />

        <div className="noise-overlay opacity-10" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label mx-auto mb-3">Resources & News</span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground mb-4 md:mb-6 tracking-tight leading-tight">
              Latest <span className="text-orange-500">Insights</span> & Updates
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-medium">
              Master the art of restaurant management. Stay ahead with deep dives into 
              industry trends, technical guides, and operational strategies.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {[
              'All Posts',
              'Restaurant Management',
              'POS Strategy',
              'Marketing',
              'Industry News'
            ].map((cat, i) => (
              <motion.button 
                key={cat} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-xl border border-orange-200 bg-white/40 backdrop-blur-md text-sm font-bold text-orange-700 hover:border-orange-400 hover:text-orange-600 transition-all cursor-pointer"
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BlogHero;