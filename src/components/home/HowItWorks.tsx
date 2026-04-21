"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Setup & Installation',
    desc: 'Our experts handle everything, from setting up the hardware to cloud configuration.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'primary',
    detail: 'Avg. 2 hours',
  },
  {
    number: '02',
    title: 'Menu & Inventory Sync',
    desc: 'Easily import your data. Sync menus and inventory across all your outlets instantly.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'secondary',
    detail: 'Auto-import',
  },
  {
    number: '03',
    title: 'Start Selling',
    desc: 'Go live and start managing your restaurant with speed, accuracy, and detailed insights.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'primary',
    detail: 'Instant go-live',
  },
];

function DrawingLine() {
  const ref = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const [pathLen, setPathLen] = useState(0);
  const dashOffset = useTransform(scrollYProgress, [0, 1], [pathLen, 0]);

  useEffect(() => {
    if (ref.current) {
      setPathLen(ref.current.getTotalLength());
    }
  }, []);

  return (
    <div ref={containerRef} className="hidden md:block absolute top-[44%] left-[8%] right-[8%] h-0 pointer-events-none">
      <svg className="absolute inset-0 w-full overflow-visible" height="50" style={{ top: '-25px' }} viewBox="0 0 100 50" preserveAspectRatio="none">
        <defs>
          <linearGradient id="linegradi" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow-line">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Dashed static path */}
        <path d="M 0 25 C 20 10, 35 40, 50 25 C 65 10, 80 40, 100 25"
          fill="none"
          stroke="url(#linegradi)"
          strokeWidth="0.5"
          strokeDasharray="3,3"
          opacity="0.3"
        />
        {/* Animated drawing path */}
        <motion.path
          ref={ref}
          d="M 0 25 C 20 10, 35 40, 50 25 C 65 10, 80 40, 100 25"
          fill="none"
          stroke="url(#linegradi)"
          strokeWidth="1.2"
          filter="url(#glow-line)"
          strokeDasharray={pathLen || 200}
          style={{ strokeDashoffset: dashOffset }}
        />
        {/* Animated dot traveling along path */}
        <motion.circle
          r="1.5"
          fill="var(--primary)"
          filter="url(#glow-line)"
          style={{
            offsetPath: 'path("M 0 25 C 20 10, 35 40, 50 25 C 65 10, 80 40, 100 25")',
            offsetDistance: scrollYProgress as unknown as string,
          }}
        />
      </svg>
    </div>
  );
}

const HowItWorks = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background pulses */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="section-label">Quick Start</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            How It <span className="gradient-text text-glow">Works</span>
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto">
            From zero to fully operational in hours — not weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {/* Animated SVG connector */}
          <DrawingLine />

          {steps.map((step, i) => {
            const isPrimary = step.color === 'primary';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.25, duration: 0.8, type: 'spring', stiffness: 180 }}
                className="relative text-center group"
              >
                {/* Background hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Icon box with pulse ring */}
                <div className="relative w-28 h-28 mx-auto mb-8">
                  {/* Pulse rings */}
                  <div className={`absolute inset-0 rounded-[32px] animate-pulse-ring ${isPrimary ? 'bg-primary/20' : 'bg-secondary/20'}`} style={{ animationDelay: `${i * 0.5}s` }} />
                  <div className={`absolute inset-0 rounded-[32px] animate-pulse-ring ${isPrimary ? 'bg-primary/10' : 'bg-secondary/10'}`} style={{ animationDelay: `${i * 0.5 + 0.7}s` }} />

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className={`relative w-full h-full rounded-[32px] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl overflow-hidden border-2 z-10 ${isPrimary ? 'bg-primary/10 border-primary/30 text-primary group-hover:border-primary/70 group-hover:bg-primary/20' : 'bg-secondary/10 border-secondary/30 text-secondary group-hover:border-secondary/70 group-hover:bg-secondary/20'} transition-all duration-500`}
                  >
                    {/* Inner shine sweep */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)' }}
                    />
                    <div className="relative z-10">{step.icon}</div>
                  </motion.div>
                </div>

                {/* Big ghost number */}
                <div className="absolute top-0 right-1/2 translate-x-16 -translate-y-4 text-8xl font-black text-foreground/[0.04] pointer-events-none transition-colors duration-500 group-hover:text-primary/10 select-none">
                  {step.number}
                </div>

                <h3 className={`text-2xl font-black text-foreground mb-3 group-hover:${isPrimary ? 'text-primary' : 'text-secondary'} transition-colors duration-300`}>
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-[260px] mx-auto text-sm mb-6">{step.desc}</p>

                {/* Detail pill */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.25 + 0.4 }}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${isPrimary ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-secondary/10 text-secondary border border-secondary/20'}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {step.detail}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
