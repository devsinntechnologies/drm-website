"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

type Feature = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  points: string[];
  image: string;
  imageAlt: string;
  reverse: boolean;
  color: string;
  storeButtons?: boolean;
};

const features: Feature[] = [
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
  },
];

function FeatureBlock({ feature, idx }: { feature: typeof features[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -12;
    setTilt({ x, y });
  };

  const isPrimary = feature.color === 'primary';
  const accentColor = isPrimary ? 'var(--primary)' : 'var(--secondary)';
  const hoverAccent = isPrimary ? 'from-yellow-300/20 via-transparent to-transparent' : 'from-red-300/20 via-transparent to-transparent';
  const hoverBorder = isPrimary ? 'hover:border-yellow-300/80' : 'hover:border-red-300/80';

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      whileHover={{ y: -10, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className={`w-full rounded-[40px] border border-surface-border/50 bg-mist-200 backdrop-blur-3xl shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_35px_120px_rgba(15,23,42,0.14)] ${hoverBorder} group`}
    >
      <div className="relative overflow-hidden rounded-t-[40px]" style={{ perspective: '1000px' }} onMouseMove={handleMouseMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
        <motion.div
          animate={{ rotateX: tilt.x, rotateY: tilt.y }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${hoverAccent} opacity-0 transition-opacity duration-500 group-hover:opacity-80`} />
          <img
            src={feature.image}
            alt={feature.imageAlt}
            className="w-full h-64 object-cover rounded-t-[40px] transition-transform duration-1000 group-hover:scale-105"
          />
          <div
            className="absolute left-5 top-5 rounded-full bg-white/90 p-3 shadow-xl"
            style={{ border: `1px solid color-mix(in srgb, ${accentColor} 20%, transparent)` }}
          >
            {feature.icon}
          </div>
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: idx * 0.4 }}
            className={`absolute ${feature.reverse ? 'left-5' : 'right-5'} -bottom-8 z-20 rounded-3xl bg-white/90 px-4 py-3 border border-surface-border/60 shadow-2xl backdrop-blur-2xl`}
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.30em] text-foreground/70 font-black">Real-time</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="px-6 pb-8 pt-8">
        <span className="inline-flex items-center gap-3 rounded-full border border-surface-border/60 bg-surface/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-muted shadow-sm">
          {feature.subtitle}
        </span>

        <h3 className="mt-6 text-3xl font-extrabold text-foreground leading-tight tracking-tight">
          {feature.title.split(' ').map((word, i) =>
            i === 0
              ? <span key={i} className="text-primary">{word} </span>
              : word + ' '
          )}
        </h3>

        <div className="mt-6 space-y-4">
          {feature.points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
              className="flex gap-3"
            >
              <span className="mt-1.5 inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-[10px] font-black">✓</span>
              <p className="text-base leading-relaxed text-muted">{point}</p>
            </motion.div>
          ))}
        </div>

        {feature.storeButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {[
              { label: 'Download on the', store: 'App Store', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.07-.46-2.06-.48-3.13 0-1.01.45-2.03.62-2.96-.28-3.17-3.08-4.88-8.23-1.63-11.45C7.54 7.6 8.92 6.95 10.15 7c1.1.05 2.14.65 2.7 1.15.2.18.39.38.56.59.18-.21.37-.41.57-.6 1.05-.98 2.5-1.5 3.86-1.5 1.7.07 3.09.84 3.96 2 .05.07.1.15.15.22-1.92 1.02-2.6 3.01-1.35 4.67 1.05 1.39 2.58 1.94 3.23 2-2.28 3.51-4.74 5.75-6.78 4.75zM12.03 6.64c-.16-1.6 1.05-3.23 2.57-3.48 1.15-.19 2.22.44 2.8 1.48.51.92.57 2.05.08 2.92-1.28 2.27-3.8 2.37-4.99 1.48-.37-.28-.51-.38-.46-2.4z" /></svg> },
              { label: 'GET IT ON', store: 'Google Play', icon: <svg className="w-6 h-6 text-[#3DDC84]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 15.187l-4.526-2.607 4.545-2.607c3.961 2.254 3.968 2.26 3.968 2.26s-3.928 2.229-3.987 2.954m-12.091 2.16l8.03-8.03 4.14 2.385-11.517 6.638c-.145-.246-.967-.803-.653-.993m.133-14.73l11.536 6.637-4.149 2.385-8.04-8.03c-.29-.204.436-.934.653-.992M3.197 4.116c-.024.186-.039.387-.039.605v14.542c0 .216.015.415.039.601l8.361-8.362-8.361-8.386z" /></svg> },
            ].map((btn, bi) => (
              <motion.button
                key={bi}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 rounded-3xl border border-surface-border/70 bg-surface/80 px-5 py-3 text-left text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-primary/60 hover:bg-white"
              >
                {btn.icon}
                <div>
                  <div className="text-[10px] text-muted uppercase tracking-[0.28em]">{btn.label}</div>
                  <div className="text-base font-black">{btn.store}</div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

const SmartFeatures = () => {
  return (
    <section className="py-8 md:py-10 bg-gradient-to-tr from-red-300 via-orange-200 to-orange-200 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      {/* Background radial orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch pb-6">
          {features.map((feature, idx) => (
            <FeatureBlock key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartFeatures;
