"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TermsContent = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label mx-auto mb-6">Last Updated: Oct 2023</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8">
            Terms & <span className="gradient-text">Conditions</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none space-y-12"
        >
          <div className="glass-card p-10 rounded-[32px] border border-surface-border/50">
            <h3 className="text-2xl font-black text-foreground mb-6">1. Agreement to Terms</h3>
            <p className="text-muted font-bold leading-relaxed">
              By accessing or using DRM platform, you agree to be bound by these Terms and Conditions. 
              If you do not agree with any part of these terms, you may not use our services.
            </p>
          </div>

          <div className="glass-card p-10 rounded-[32px] border border-surface-border/50">
            <h3 className="text-2xl font-black text-foreground mb-6">2. Use License</h3>
            <p className="text-muted font-bold leading-relaxed">
              Permission is granted to use our software for your restaurant business operations. 
              This is the grant of a license, not a transfer of title, and under this license you may not 
              reverse engineer or attempt to extract the source code of our software.
            </p>
          </div>

          <div className="glass-card p-10 rounded-[32px] border border-surface-border/50">
            <h3 className="text-2xl font-black text-foreground mb-6">3. Service Availability</h3>
            <p className="text-muted font-bold leading-relaxed">
              While we strive for 99.9% uptime, we do not guarantee that our services will be 
              uninterrupted or error-free. We reserve the right to modify or discontinue service 
              at any time for maintenance or updates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsContent;
