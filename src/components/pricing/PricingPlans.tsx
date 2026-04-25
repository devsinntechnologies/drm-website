"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingPlans = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      desc: 'Perfect for small cafes and new businesses getting started.',
      features: ['Up to 500 orders/mo', 'Basic Inventory', '1 Terminal', 'Standard Reporting'],
      btn: 'Get Started',
      popular: false,
      color: 'secondary'
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'per month',
      desc: 'Advanced tools for growing restaurants with multiple staff.',
      features: ['Unlimited orders', 'Advanced Inventory', '3 Terminals', '24/7 Support', 'Custom Reports'],
      btn: 'Start Free Trial',
      popular: true,
      color: 'primary'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact Sales',
      desc: 'Full-scale solution for multi-location franchises.',
      features: ['Multi-Uni Sync', 'Dedicated Manager', 'Unlimited Terminals', 'Custom API', 'On-site Setup'],
      btn: 'Contact Sales',
      popular: false,
      color: 'accent'
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Dynamic Background Glow based on hover */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[150px] pointer-events-none bg-${plans[hoveredIndex].color}/10`}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="section-label">Transparent Pricing</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Plans that <span className="text-primary text-glow">Scale</span> With You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-6xl mx-auto">
          {plans.map((plan, i) => {
            const isHovered = hoveredIndex === i;
            const colorVar = `var(--${plan.color})`;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, type: 'spring', stiffness: 100 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -15, scale: 1.02 }}
                className={`glass-card p-10 rounded-[40px] flex flex-col h-full relative overflow-hidden transition-all duration-500 backdrop-blur-2xl ${plan.popular ? 'bg-surface/60 lg:scale-[1.05] z-10' : 'bg-surface/30'}`}
                style={{
                  boxShadow: isHovered 
                    ? `0 40px 80px rgba(var(--${plan.color}-rgb), 0.2), inset 0 2px 20px rgba(var(--${plan.color}-rgb), 0.1)` 
                    : plan.popular ? '0 20px 40px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
                  borderColor: isHovered ? `color-mix(in srgb, ${colorVar} 50%, transparent)` : plan.popular ? 'var(--primary)' : 'var(--surface-border)',
                }}
              >
                {/* Highlight Sweep */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none"
                  style={{ 
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(circle at top right, color-mix(in srgb, ${colorVar} 15%, transparent), transparent 70%)` 
                  }}
                />

                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-primary animate-pulse" />
                )}

                {plan.popular && (
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-6 right-8"
                  >
                     <span className="px-4 py-2 bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">Most Popular</span>
                  </motion.div>
                )}

                <div className="mb-10 relative z-10">
                  <h3 className="text-xl font-black mb-4 uppercase tracking-[0.2em]" style={{ color: isHovered ? colorVar : 'var(--foreground)' }}>{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-foreground tracking-tighter">{plan.price}</span>
                    <span className="text-sm font-bold text-muted uppercase tracking-widest">{plan.period}</span>
                  </div>
                </div>

                <p className="text-muted font-medium mb-10 leading-relaxed relative z-10">{plan.desc}</p>

                <ul className="space-y-5 mb-12 flex-1 relative z-10">
                  {plan.features.map((f, j) => (
                    <motion.li 
                      key={j} 
                      className="flex items-center gap-4 text-sm font-bold text-foreground/90 group/item"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-colors shrink-0"
                        style={{ 
                          background: `color-mix(in srgb, ${colorVar} 15%, transparent)`, 
                          border: `1px solid color-mix(in srgb, ${colorVar} 30%, transparent)`,
                          color: colorVar 
                        }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.span>
                      <span className="group-hover/item:text-white transition-colors">{f}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-5 rounded-2xl font-black text-base shadow-xl transition-all relative z-10 overflow-hidden group`}
                  style={{
                    backgroundColor: plan.popular ? 'var(--primary)' : 'var(--surface)',
                    color: plan.popular ? 'white' : 'var(--foreground)',
                    border: plan.popular ? 'none' : '1px solid var(--surface-border)'
                  }}
                >
                  {/* Button Hover Shine */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shimmer pointer-events-none" />
                  {plan.btn}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
