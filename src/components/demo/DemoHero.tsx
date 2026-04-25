"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DemoHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Animated Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" 
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-4xl mx-auto"
        >
          <span className="section-label mx-auto mb-6">Expert Tour</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
            See DRM in <span className="text-primary">Action</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-bold">
            Experience the workflow that powers thousands of kitchens. 
            Schedule your personalized walkthrough today.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoHero;
