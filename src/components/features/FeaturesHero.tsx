"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesHero = () => {
  return (
    <section className="relative h-20 overflow-hidden bg-background">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" 
      />
      <div className="absolute top-0 inset-x-0 h-px bg-surface-border" />
    </section>
  );
};

export default FeaturesHero;
