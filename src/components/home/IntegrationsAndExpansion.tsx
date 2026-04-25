"use client";
import React from 'react';
import { motion } from 'framer-motion';

const IntegrationsAndExpansion = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8 }
    })
  };

  const auths = ['FBR', 'SRB', 'PRA', 'KPRA'];
  const rules = ["Franchise Order Management", "Set credit or other rules", "Monitor ROI securely"];

  return (
    <section className="py-32 bg-surface/20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Compliance & Scale</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Built for{' '}
            <span className="text-primary">Growth & Compliance</span>
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto mt-4">
            Scale confidently. Stay compliant. Grow without limits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FBR Integration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={cardVariants}
            className="glass-card rounded-[40px] p-10 relative overflow-hidden group shimmer-line-effect"
          >
            {/* Animated glow on hover */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 blur-[80px] rounded-full group-hover:bg-accent/20 transition-all duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <motion.div
              whileHover={{ rotate: 15, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="w-14 h-14 rounded-2xl bg-accent/15 flex items-center justify-center mb-6 text-accent relative z-10"
            >
              <div className="absolute inset-0 rounded-2xl animate-energy-pulse" />
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </motion.div>

            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300 relative z-10">
              Mandatory FBR DRM Integration
            </h3>
            <p className="text-muted leading-relaxed mb-8 font-medium relative z-10">
              Our DRM Software can be fully integrated with major revenue authorities ensuring compliance without the headache.
            </p>

            <div className="flex flex-wrap gap-3 relative z-10">
              {auths.map((auth, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.08, type: 'spring', stiffness: 400 }}
                  whileHover={{ scale: 1.1, y: -3, rotate: 2 }}
                  className="px-5 py-2 glass-card rounded-full text-sm font-bold text-foreground hover:border-accent/60 hover:text-accent transition-all cursor-default"
                >
                  ✓ {auth}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Franchise */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={cardVariants}
            className="glass-card rounded-[40px] p-10 relative overflow-hidden group shimmer-line-effect"
          >
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <motion.div
              whileHover={{ rotate: -15, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6 text-primary relative z-10"
            >
              <div className="absolute inset-0 rounded-2xl animate-energy-pulse" />
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </motion.div>

            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
              DRM Solution for Franchise Success
            </h3>
            <p className="text-muted leading-relaxed mb-8 font-medium relative z-10">
              Scale your business globally. Focus on business growth and reduce operational cost, monitor ROI and accelerate growth.
            </p>

            <ul className="space-y-4 relative z-10">
              {rules.map((rule, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                  className="flex items-center gap-4 text-muted font-medium group/li"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, backgroundColor: 'var(--primary)' }}
                    className="w-5 h-5 shrink-0 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center transition-colors group-hover/li:bg-primary group-hover/li:text-white"
                  >
                    <svg className="w-3 h-3 text-primary group-hover/li:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.span>
                  <span className="group-hover/li:text-foreground transition-colors">{rule}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsAndExpansion;
