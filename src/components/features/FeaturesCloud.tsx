"use client";
import React from 'react';
import { motion } from 'framer-motion';

const FeaturesCloud = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-card p-12 md:p-20 rounded-[48px] border border-surface-border/50 shadow-2xl"
        >
          <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
             className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-10 text-primary"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8">Seamless <span className="gradient-text">Hybrid-Cloud</span> Architecture</h2>
          <p className="text-xl text-muted leading-relaxed font-bold mb-12">
            The power of the cloud meets the reliability of local storage. Sell anywhere, anytime, with or without an active internet connection.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div 
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl bg-surface/50 border border-surface-border/50"
            >
              <h4 className="text-lg font-extrabold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Auto-Sync Technology
              </h4>
              <p className="text-sm text-muted font-bold">Data syncs automatically as soon as a connection is available—no manual work required.</p>
            </motion.div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="p-6 rounded-2xl bg-surface/50 border border-surface-border/50"
            >
              <h4 className="text-lg font-extrabold text-foreground mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Zero Downtime
              </h4>
              <p className="text-sm text-muted font-bold">Offline mode keeps your front-of-house running even if your internet provider fails.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCloud;
