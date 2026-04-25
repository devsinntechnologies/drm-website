"use client";
import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Instant Resolution',
    desc: 'Average response time of less than 2 minutes via live chat and phone support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Expert Consultation',
    desc: 'Speak with hardware and software experts who understand the restaurant business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'On-Site Setup',
    desc: 'We send our engineers to your location for professional hardware installation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Continuous Training',
    desc: 'Free staff training whenever you hire new team members or we release updates.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const SupportWhy = () => {
  return (
    <section className="py-24 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="section-label mb-6">Why Our Support?</span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">
              Customer Success is <br />
              <span className="text-primary">Our Top Priority</span>
            </h2>
            <p className="text-xl text-muted leading-relaxed font-bold mb-10">
              We don't just sell software; we become your partners in growth. Our support 
              infrastructure is built to handle mission-critical restaurant operations.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl glow-primary"
            >
              Get Priority Support
            </motion.button>
          </motion.div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-8 rounded-[32px] glass-card border border-surface-border/50 group hover:border-primary/40 transition-all"
              >
                <motion.div 
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6"
                >
                  {reason.icon}
                </motion.div>
                <h4 className="text-lg font-extrabold text-foreground mb-2 group-hover:text-primary transition-colors">{reason.title}</h4>
                <p className="text-sm text-muted font-bold leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportWhy;
