"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface PricingBenefitsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
}

const PricingBenefits = ({ title, highlight, subtitle }: PricingBenefitsProps) => {
  const benefits = [
    { t: "No Hidden Costs", d: "What you see is what you pay. No setup fees or maintenance charges.", i: "💎" },
    { t: "Cancel Anytime", d: "Billed monthly. You have the flexibility to scale up or down risk-free.", i: "🔄" },
    { t: "Free Daily Backups", d: "Your data is backed up every 24 hours on our secure cloud servers.", i: "🛡️" },
    { t: "Priority Onboarding", d: "Get up and running with 1-on-1 support and data migration.", i: "🚀" }
  ];

  return (
    <section className="py-24 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {(title || highlight || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              {title} <span className="gradient-text">{highlight}</span>
            </h2>
            {subtitle && (
              <p className="text-lg text-muted max-w-3xl mx-auto font-medium">
                {subtitle}
              </p>
            )}
            <div className="section-divider mx-auto mt-8" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-4xl mb-6 inline-block"
              >
                {b.i}
              </motion.div>
              <h4 className="text-xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors">{b.t}</h4>
              <p className="text-sm text-muted font-bold leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingBenefits;
