"use client";
import React from 'react';
import { motion } from 'framer-motion';

const PrivacyContent = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label mx-auto mb-6">Security First</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8">
            Privacy <span className="text-primary">Policy</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-12"
        >
          <div className="glass-card p-10 rounded-[32px] border border-surface-border/50">
            <h3 className="text-2xl font-black text-foreground mb-6">Data Collection</h3>
            <p className="text-muted font-bold leading-relaxed">
              We collect information necessary to provide and improve our restaurant management services. 
              This includes restaurant details, transaction data, and staff operational logs.
            </p>
          </div>

          <div className="glass-card p-10 rounded-[32px] border border-surface-border/50">
            <h3 className="text-2xl font-black text-foreground mb-6">Data Usage</h3>
            <p className="text-muted font-bold leading-relaxed">
              Your data is used strictly for operational purposes, generating insights for your 
              business growth, and providing technical support. We never sell your data to third parties.
            </p>
          </div>

          <div className="glass-card p-10 rounded-[32px] border border-surface-border/50">
            <h3 className="text-2xl font-black text-foreground mb-6">Cloud Security</h3>
            <p className="text-muted font-bold leading-relaxed">
              All data is encrypted in transit and at rest using enterprise-grade AES-256 encryption. 
              Our cloud servers are hosted in secure data centers with 24/7 monitoring.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyContent;
