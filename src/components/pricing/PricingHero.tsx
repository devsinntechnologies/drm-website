"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PricingHero = () => {
  return (
    <section className="relative pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label mx-auto mb-4 md:mb-4">Simple Pricing</span>
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl text-foreground mb-5 md:mb-4 tracking-tight">
            Plans for every <span className="text-primary">scale</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed font-medium">
            Choose the perfect plan for your business. No hidden fees, just pure growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
