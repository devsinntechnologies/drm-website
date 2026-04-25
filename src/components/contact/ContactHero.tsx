"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Decor */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" 
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="section-label mx-auto mb-6">Let's Connect</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 tracking-tight">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed font-bold">
            Have questions about how DRM can help your restaurant? Our team is 
            standing by to provide experts answers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
