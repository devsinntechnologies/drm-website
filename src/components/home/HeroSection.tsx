"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

const stats = [
  { value: 1000, suffix: '+', label: 'Happy Businesses' },
  { value: 99.9, suffix: '%', label: 'Uptime Guarantee' },
  { value: 24, suffix: '/7', label: 'Expert Support' },
  { value: 15, suffix: '+', label: 'Years Experience' },
];

const TYPEWRITER_WORDS = [
  'business in one place',
  'restaurant like a pro',
  'kitchen with precision',
  'growth with confidence',
];

function useTypewriter(words: string[], speed = 60, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Number((value * eased).toFixed(value % 1 !== 0 ? 1 : 0)));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-2xl font-black gradient-text text-glow relative z-10">
      {count}{suffix}
    </div>
  );
}

const ORBIT_BADGES = [
  { label: 'Orders', value: '2.4K', icon: '🧾', angle: 0 },
  { label: 'Tables', value: '48', icon: '🍽️', angle: 90 },
  { label: 'Revenue', value: '+31%', icon: '📈', angle: 180 },
  { label: 'Kitchen', value: 'Live', icon: '🔥', angle: 270 },
];

const METEORS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 60}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  duration: `${3 + Math.random() * 4}s`,
  width: `${80 + Math.random() * 120}px`,
}));

const HeroSection = () => {
  const typed = useTypewriter(TYPEWRITER_WORDS);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const [orbitDeg, setOrbitDeg] = useState(0);
  const animFrame = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 20);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 20);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      setOrbitDeg(((ts - start) / 1000 / 20) * 360 % 360);
      animFrame.current = requestAnimationFrame(step);
    };
    animFrame.current = requestAnimationFrame(step);
    return () => { if (animFrame.current) cancelAnimationFrame(animFrame.current); };
  }, []);

  return (
    <section
      className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Morphing blob 1 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, var(--primary) 25%, transparent) 0%, transparent 70%)`,
          top: '-10%', right: '-10%',
          x: springX, y: springY,
        }}
        animate={{ borderRadius: ['60% 40% 30% 70% / 60% 30% 70% 40%', '30% 60% 70% 40% / 50% 60% 30% 60%', '60% 40% 30% 70% / 60% 30% 70% 40%'] }}
        transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Morphing blob 2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, var(--secondary) 20%, transparent) 0%, transparent 70%)`,
          bottom: '-10%', left: '-5%',
        }}
        animate={{ borderRadius: ['50% 60% 30% 60% / 30% 40% 60% 40%', '70% 30% 60% 40% / 60% 70% 30% 50%', '50% 60% 30% 60% / 30% 40% 60% 40%'] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* Meteor trails */}
      {METEORS.map((m) => (
        <span
          key={m.id}
          className="absolute pointer-events-none rotate-[215deg]"
          style={{ top: m.top, left: m.left }}
        >
          <span
            style={{
              display: 'block',
              height: '1px',
              width: m.width,
              background: 'linear-gradient(90deg, rgba(239,68,68,0.7), transparent)',
              boxShadow: '0 0 8px rgba(239,68,68,0.4)',
              animation: `meteor ${m.duration} linear ${m.delay} infinite`,
            }}
          />
        </span>
      ))}

      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col lg:flex-row items-center gap-16 pt-28 pb-16 relative">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="section-label"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse" />
            #1 Restaurant DRM Platform
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.05]"
          >
            Manage your entire{' '}
            <span className="gradient-text text-glow block mt-2 min-h-[1.2em]">
              {typed}
              <span className="animate-cursor-blink inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle rounded-sm" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-lg md:text-xl text-muted mb-10 leading-relaxed"
          >
            Streamline your orders, manage inventory, and boost customer satisfaction — all from one smart system. More than just a DRM, it&apos;s the recipe for smooth operations and business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14"
          >
            <Link href="/demo">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="shimmer-btn relative overflow-hidden px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-xl glow-primary transition-all duration-300 group"
              >
                {/* Animated shine sweep */}
                <span className="absolute inset-0 w-1/3 h-full bg-white/10 skew-x-[-20deg] -translate-x-full group-hover:animate-spotlight-scan pointer-events-none" />
                Book a Free Demo →
              </motion.button>
            </Link>
            <Link href="/pricing">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-transparent border-2 border-surface-border text-foreground font-semibold text-base rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                View Pricing
              </motion.button>
            </Link>
          </motion.div>

          {/* Animated counter stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-surface-border/50"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.06 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="text-center lg:text-left glass-card p-4 rounded-2xl border-gradient relative overflow-hidden group shimmer-line-effect"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-xs text-muted font-bold mt-1 uppercase tracking-wider relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image with Orbiting Badges */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full relative max-w-xl mx-auto"
          style={{ perspective: 1000 }}
        >
          {/* Conic halo */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none animate-spin-conic"
            style={{
              background: 'conic-gradient(from 0deg, transparent 70%, color-mix(in srgb, var(--primary) 30%, transparent) 100%)',
              filter: 'blur(40px)',
              transform: 'scale(1.3)',
            }}
          />

          {/* Outer orbit ring */}
          <div
            className="absolute inset-[-60px] rounded-full border border-dashed border-primary/10 pointer-events-none"
            style={{ transform: `rotate(${orbitDeg}deg)` }}
          />

          {/* Orbiting badges */}
          {ORBIT_BADGES.map((badge, i) => {
            const angle = ((badge.angle + orbitDeg) * Math.PI) / 180;
            const radius = 195;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <div
                key={i}
                className="absolute z-30 pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  transition: 'none',
                }}
              >
                <div className="glass-card px-3 py-2 rounded-2xl border-gradient shadow-lg backdrop-blur-xl flex items-center gap-2 whitespace-nowrap">
                  <span className="text-base">{badge.icon}</span>
                  <div>
                    <div className="text-xs font-black gradient-text leading-none">{badge.value}</div>
                    <div className="text-[9px] text-muted font-bold uppercase tracking-widest">{badge.label}</div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating Frame */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            className="relative w-full rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(var(--primary-rgb),0.3)] border-[3px] border-surface-border/40 bg-surface/50 backdrop-blur-2xl p-2 z-10"
          >
            <div className="relative rounded-[32px] overflow-hidden border border-surface-border/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 mix-blend-overlay z-10 pointer-events-none" />
              <img
                src="/home/hero-mockup.png"
                alt="DRM Dashboard Mockup"
                className="w-full aspect-[4/3] object-cover block relative z-0 transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* Sales badge */}
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: 'spring', stiffness: 200 }}
            className="absolute -top-8 -right-4 z-20 glass-card px-5 py-4 rounded-3xl shadow-2xl border-gradient backdrop-blur-3xl"
          >
            <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full -z-10 animate-pulse" />
            <div className="text-primary font-black text-3xl leading-none text-glow">+45%</div>
            <div className="text-[10px] uppercase tracking-widest text-muted mt-1 font-bold">Sales Growth</div>
          </motion.div>

          {/* Live badge */}
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: 'spring', stiffness: 200 }}
            className="absolute -bottom-8 -left-4 z-20 glass-card px-5 py-4 rounded-3xl shadow-2xl border border-surface-border/50 backdrop-blur-3xl flex items-center gap-3"
          >
            <div className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
            </div>
            <div>
              <div className="text-sm font-black text-foreground">Live Sync</div>
              <div className="text-[10px] text-muted font-bold uppercase tracking-widest">Connected</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
