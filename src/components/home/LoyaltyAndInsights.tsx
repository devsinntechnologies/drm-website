"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LoyaltyAndInsights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Noise Texture */}
      <div className="noise-overlay opacity-10" />

      {/* Background aurora */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] pointer-events-none">
        <div className="absolute inset-0 aurora-bg opacity-25" />
      </div>

      <div className="container mx-auto px-4 md:px-8 space-y-36 relative z-10">

        {/* Section 1: Loyalty */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } }}
            className="flex-1 order-2 lg:order-1 relative max-w-lg mx-auto w-full group"
            style={{ perspective: '1000px' }}
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              className="absolute inset-[-40px] rounded-full border border-dashed border-primary/15 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
              className="absolute inset-[-20px] rounded-full border border-dotted border-secondary/10 pointer-events-none"
            />

            <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-1000 pointer-events-none animate-morph-blob" />

            <motion.div
              whileHover={{ scale: 1.04, rotateY: 8, rotateX: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-full rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(var(--primary-rgb),0.35)] border-2 border-surface-border/60 bg-surface/50 backdrop-blur-3xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src="/home/loyalty-mockup.png"
                alt="Loyalty App"
                className="w-full object-cover aspect-[4/3] transform transition-transform duration-1000 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

              {/* Floating loyalty badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card px-4 py-3 rounded-2xl border-gradient shadow-xl backdrop-blur-xl z-20"
              >
                <div className="text-xs font-black gradient-text">🎁 +850 pts</div>
                <div className="text-[9px] text-muted font-bold uppercase tracking-widest">Earned Today</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } }}
            className="flex-1 order-1 lg:order-2"
          >
            <span className="section-label group cursor-default">
              <svg className="w-4 h-4 transition-transform group-hover:scale-125" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Loyalty Program
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              Hassle-Free{' '}
              <span className="gradient-text text-glow block mt-1">Customer Loyalty</span>{' '}
              & Promotions
            </h3>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Drive customer loyalty with our DRM. Get your own loyalty app, save money, and improve the customer experience. Delight your guests with categorised point-based rewards and special customer offerings.
            </p>
            <ul className="space-y-4">
              {["Get your own loyalty app", "Categorize Point-based rewards", "Customer offerings (Birthday / VIPs)"].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center gap-4 group/item"
                >
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: 12 }}
                    className="w-6 h-6 shrink-0 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center transition-colors group-hover/item:bg-primary/30"
                  >
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.span>
                  <span className="text-foreground font-medium group-hover/item:text-primary transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Section 2: Insights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Text */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } }}
            className="flex-1"
          >
            <span className="section-label group cursor-default">
              <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Business Analytics
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
              <span className="gradient-text text-glow block mb-1">Insights</span> on the Go
            </h3>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Stay updated while on the go. Monitor daily operations remotely. Compare outlets, filter by time & menu, and make perfectly informed decisions.
            </p>

            {/* Animated bar chart mini-visual */}
            <div className="flex items-end gap-2 mb-8 h-16">
              {[40, 65, 50, 80, 70, 90, 75].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.7, ease: 'easeOut' }}
                  className="flex-1 rounded-t-sm"
                  style={{ background: `linear-gradient(to top, var(--secondary), color-mix(in srgb, var(--secondary) 40%, transparent))` }}
                />
              ))}
              <span className="text-xs text-muted font-bold ml-2 self-center">Sales / Week</span>
            </div>

            <ul className="space-y-4">
              {["Monitor daily operations remotely", "Comparison outlet, time & menu wise", "Do informed decisions"].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex items-center gap-4 group/item"
                >
                  <motion.span
                    whileHover={{ scale: 1.3, rotate: -12 }}
                    className="w-6 h-6 shrink-0 rounded-full bg-secondary/15 border border-secondary/40 flex items-center justify-center transition-colors group-hover/item:bg-secondary/30"
                  >
                    <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.span>
                  <span className="text-foreground font-medium group-hover/item:text-secondary transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9 } } }}
            className="flex-1 relative max-w-lg mx-auto w-full group"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
              className="absolute inset-[-40px] rounded-full border border-dashed border-secondary/15 pointer-events-none"
            />

            <div className="absolute inset-0 bg-secondary/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-1000 pointer-events-none animate-morph-blob" style={{ animationDelay: '4s' }} />

            <motion.div
              whileHover={{ scale: 1.04, rotateY: -8, rotateX: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative w-full rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(var(--secondary-rgb),0.35)] border-2 border-surface-border/60 bg-surface/50 backdrop-blur-3xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src="/home/insights-mockup.png"
                alt="Insights Dashboard"
                className="w-full object-cover aspect-[4/3] transform transition-transform duration-1000 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />

              {/* Floating revenue badge */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-2xl border-gradient shadow-xl backdrop-blur-xl z-20"
              >
                <div className="text-xs font-black" style={{ color: 'var(--secondary)' }}>📈 +31% Revenue</div>
                <div className="text-[9px] text-muted font-bold uppercase tracking-widest">This Month</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default LoyaltyAndInsights;
