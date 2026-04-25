"use client";
import React from 'react';
import { motion } from 'framer-motion';

const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-surface-border">
      {/* Background Decor */}
      <div className="absolute top-0 inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/4" 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-150 mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label mx-auto mb-8">Resources & News</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
              Latest <span className="text-primary">Insights</span> & Updates
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-medium">
              Master the art of restaurant management. Stay ahead with deep dives into 
              industry trends, technical guides, and operational strategies.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
             {['All Posts', 'Restaurant Management', 'POS Strategy', 'Marketing', 'Industry News'].map((cat, i) => (
               <motion.button 
                key={cat} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-xl border border-surface-border bg-surface/50 backdrop-blur-md text-sm font-bold text-muted hover:border-primary/50 hover:text-primary transition-all cursor-pointer"
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
