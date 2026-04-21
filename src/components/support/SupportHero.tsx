"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SupportHero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" 
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label mx-auto mb-6">Support Center</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
            How can we <span className="gradient-text">help</span> you?
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Our dedicated support team is available 24/7 to ensure your restaurant runs smoothly. 
            Explore our resources or connect with an expert directly.
          </p>
        </motion.div>
        
        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto relative mb-20 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition duration-500" />
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for articles, guides, or help topics..." 
              className="w-full py-5 pl-14 pr-6 rounded-2xl bg-surface/50 backdrop-blur-xl border border-surface-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary/50 transition-all text-lg shadow-2xl"
            />
            <svg className="w-6 h-6 text-primary absolute left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-6xl mx-auto relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-[40px] blur-2xl opacity-50" />
          <div className="glass-card rounded-[32px] p-2 md:p-3 overflow-hidden shadow-2xl relative">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="aspect-[21/9] relative rounded-[24px] overflow-hidden"
            >
              <Image 
                src="/support/support-hero-v2.png" 
                alt="DRM Support Team" 
                fill 
                className="object-cover" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </motion.div>
          </div>
          
          {/* Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-6 -right-6 glass-card p-4 rounded-2xl shadow-xl hidden lg:block animate-float"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs text-muted font-bold uppercase tracking-wider">Avg response</p>
                <p className="text-lg font-extrabold text-foreground">&lt; 2 Minutes</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportHero;
