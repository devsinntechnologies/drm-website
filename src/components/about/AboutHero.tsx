"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const AboutHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yImg = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), { stiffness: 100, damping: 30 });
  
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -15;
    setTilt({ x, y });
  };

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden bg-background">
      {/* Noise Texture */}
      <div className="noise-overlay opacity-10" />

      {/* Orbit Rings */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, ease: 'linear', repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-dashed border-primary/20"
        />
        <div className="absolute inset-0 aurora-bg opacity-30 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            style={{ y: yText }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 leading-[1.1] tracking-tight">
              Revolutionizing <span className="gradient-text text-glow">Restaurant</span> Success
            </h1>
            <p className="text-lg md:text-xl text-muted font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our mission is simple: we strive to make it easier for entrepreneurs around the world to do business, 
              and help them take their restaurants, cafes, and bars to the next level with DRM.
            </p>
          </motion.div>

          <motion.div 
            style={{ y: yImg }}
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 w-full max-w-2xl"
          >
            <div 
              className="relative group"
              style={{ perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            >
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full opacity-60 transition-opacity duration-1000 group-hover:opacity-100 animate-morph-blob" />
              
              <motion.div 
                animate={{ rotateX: tilt.x, rotateY: tilt.y }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(var(--primary-rgb),0.3)] border-2 border-surface-border/60 bg-surface/50 backdrop-blur-3xl"
              >
                {/* Reveal overlay */}
                <motion.div 
                  initial={{ x: '0%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  className="absolute inset-0 bg-primary z-20 pointer-events-none"
                />

                {/* Scanline */}
                <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)' }}
                />

                <img 
                  src="/blog/blog1.jpg" 
                  alt="DRM Team Culture" 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Corner Accents */}
                {[['top-4 left-4', 'border-t-2 border-l-2'], ['bottom-4 right-4', 'border-b-2 border-r-2']].map(([pos, borders], i) => (
                  <div key={i} className={`absolute ${pos} w-8 h-8 ${borders} border-primary/50 pointer-events-none z-10 transition-transform duration-500 rounded-sm group-hover:scale-110`} />
                ))}

                {/* Floating Element */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 z-30 glass-card px-5 py-4 rounded-2xl border-gradient shadow-2xl backdrop-blur-2xl"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mb-2 animate-pulse" />
                  <div className="text-sm font-black text-foreground">Next-Gen Tech</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
