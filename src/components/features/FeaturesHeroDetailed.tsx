"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturesHeroDetailed = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden border-b border-surface-border">
      {/* Background Glows */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2" 
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label mx-auto mb-6">Core Technology</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
              Restaurant <span className="text-primary">Point of Sale</span> System
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-16 leading-relaxed">
              DRM is a <span className="text-foreground font-bold">comprehensive ecosystem</span> designed to be
              <span className="text-primary font-bold ml-1">Simple, Quick & Scalable</span>.
              Empowering modern restaurateurs with enterprise-grade tools.
            </p>
          </motion.div>

          {/* Feature Image Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 rounded-[40px] blur-2xl opacity-50" />
            <div className="glass-card rounded-[32px] p-2 md:p-3 overflow-hidden shadow-2xl relative">
              <motion.div 
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-[16/9] relative rounded-[24px] overflow-hidden bg-surface/50"
              >
                <Image
                  src="/features/feature-hero-v2.png"
                  alt="Restaurant POS Software Dashboard"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </motion.div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute top-10 -left-6 glass-card p-4 rounded-2xl shadow-xl hidden lg:block animate-float" 
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-foreground">Ultra-Fast Sync</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 -right-6 glass-card p-4 rounded-2xl shadow-xl hidden lg:block animate-float"
            >
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-foreground">Cloud Resilience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHeroDetailed;
