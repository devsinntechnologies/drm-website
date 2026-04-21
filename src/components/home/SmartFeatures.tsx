"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Cloud Based DRM System',
    subtitle: 'Advanced Offline Mode',
    points: [
      'No need to worry about internet disconnection anymore.',
      'Data remains safe on our live server and your local server.',
      'Easy to Setup and Maintain',
    ],
    image: '/home/cloud-pos.png',
    imageAlt: 'Cloud Based DRM System',
    reverse: false,
    color: 'primary',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: 'Kitchen Display Terminal',
    subtitle: 'Smart Kitchen Workflow',
    points: [
      'Fire Faster & Better Communication',
      'Manage Whole Kitchen with one screen',
      'Measure and Improve cook timings',
      'Track individual cooked items',
      'Top customer service',
    ],
    image: '/home/kds.png',
    imageAlt: 'Kitchen Display Terminal',
    reverse: true,
    color: 'secondary',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Restaurant Table-Side Ordering',
    subtitle: 'Faster. Smarter. More Revenue.',
    points: [
      'Enhanced customer experience',
      'Increase Revenue with Upselling',
      'Improve Table Turnover with Faster Ordering',
      'Improved Order Accuracy',
      'Increase Productivity',
    ],
    image: '/home/table-ordering.png',
    imageAlt: 'Restaurant Table-Side Ordering',
    reverse: false,
    color: 'primary',
    storeButtons: true,
  },
];

function FeatureBlock({ feature, idx }: { feature: typeof features[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgY = useSpring(useTransform(scrollYProgress, [0, 1], [30, -30]), { stiffness: 80, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -20;
    setTilt({ x, y });
  };

  const isPrimary = feature.color === 'primary';
  const accentColor = isPrimary ? 'var(--primary)' : 'var(--secondary)';

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
    >
      {/* Image side */}
      <motion.div style={{ y: imgY }} className="flex-1 w-full">
        <div
          className="relative w-full max-w-lg mx-auto group"
          style={{ perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
          {/* Glow blob */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 blur-[80px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, color-mix(in srgb, ${accentColor} 35%, transparent) 0%, transparent 70%)` }}
          />

          {/* 3D tilt card */}
          <motion.div
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full rounded-[40px] overflow-hidden border-2 border-surface-border/60 bg-surface/40 backdrop-blur-3xl"
            style={{ boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px color-mix(in srgb, ${accentColor} 15%, transparent)` }}
          >
            {/* Scanline overlay on hover */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
              }}
            />

            <img
              src={feature.image}
              alt={feature.imageAlt}
              className="w-full object-cover aspect-[4/3] transform transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-500" />
          </motion.div>

          {/* Floating mini-metric */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: idx * 0.5 }}
            className={`absolute ${feature.reverse ? '-left-6 -bottom-6' : '-right-6 -bottom-6'} z-20 glass-card px-4 py-3 rounded-2xl border-gradient backdrop-blur-2xl`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1 animate-pulse" />
            <span className="text-xs font-black text-foreground uppercase tracking-wider">Real-time</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div style={{ y }} className="flex-1 w-full">
        <motion.span
          initial={{ opacity: 0, x: feature.reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-label"
        >
          {feature.icon}
          {feature.subtitle}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 leading-tight tracking-tight"
        >
          {feature.title.split(' ').map((word, i) =>
            i === 0
              ? <span key={i} className="gradient-text text-glow">{word} </span>
              : word + ' '
          )}
        </motion.h2>

        <ul className="space-y-4 mb-8">
          {feature.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: feature.reverse ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              className="flex items-start gap-4 group/item"
            >
              <motion.span
                whileHover={{ scale: 1.3, rotate: 10 }}
                className="shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center transition-colors"
                style={{ background: `color-mix(in srgb, ${accentColor} 15%, transparent)`, border: `1px solid color-mix(in srgb, ${accentColor} 40%, transparent)` }}
              >
                <svg className="w-3 h-3" style={{ color: accentColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.span>
              <p className="text-muted text-base leading-relaxed group-hover/item:text-foreground transition-colors">{point}</p>
            </motion.li>
          ))}
        </ul>

        {feature.storeButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            {[
              { label: 'Download on the', store: 'App Store', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.07-.46-2.06-.48-3.13 0-1.01.45-2.03.62-2.96-.28-3.17-3.08-4.88-8.23-1.63-11.45C7.54 7.6 8.92 6.95 10.15 7c1.1.05 2.14.65 2.7 1.15.2.18.39.38.56.59.18-.21.37-.41.57-.6 1.05-.98 2.5-1.5 3.86-1.5 1.7.07 3.09.84 3.96 2 .05.07.1.15.15.22-1.92 1.02-2.6 3.01-1.35 4.67 1.05 1.39 2.58 1.94 3.23 2-2.28 3.51-4.74 5.75-6.78 4.75zM12.03 6.64c-.16-1.6 1.05-3.23 2.57-3.48 1.15-.19 2.22.44 2.8 1.48.51.92.57 2.05.08 2.92-1.28 2.27-3.8 2.37-4.99 1.48-.37-.28-.51-.38-.46-2.4z" /></svg>, color: 'text-foreground' },
              { label: 'GET IT ON', store: 'Google Play', icon: <svg className="w-6 h-6 text-[#3DDC84]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 15.187l-4.526-2.607 4.545-2.607c3.961 2.254 3.968 2.26 3.968 2.26s-3.928 2.229-3.987 2.954m-12.091 2.16l8.03-8.03 4.14 2.385-11.517 6.638c-.145-.246-.967-.803-.653-.993m.133-14.73l11.536 6.637-4.149 2.385-8.04-8.03c-.29-.204.436-.934.653-.992M3.197 4.116c-.024.186-.039.387-.039.605v14.542c0 .216.015.415.039.601l8.361-8.362-8.361-8.386z" /></svg>, color: 'text-[#3DDC84]' },
            ].map((btn, bi) => (
              <motion.button
                key={bi}
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 px-6 py-3 glass-card rounded-xl text-foreground hover:border-primary/40 transition-all card-hover"
              >
                {btn.icon}
                <div className="text-left">
                  <div className="text-[10px] text-muted leading-tight">{btn.label}</div>
                  <div className="text-sm font-bold leading-tight">{btn.store}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

const SmartFeatures = () => {
  return (
    <section className="py-32 bg-surface/20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      {/* Background radial orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 space-y-40">
        {features.map((feature, idx) => (
          <FeatureBlock key={idx} feature={feature} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default SmartFeatures;
