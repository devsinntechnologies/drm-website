"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EcosystemSection = () => {
  const items = [
    { title: "Point of Sale", status: "Active", icon: "💻", desc: "Lightning-fast order entry" },
    { title: "Inventory Management", status: "Active", icon: "📦", desc: "Real-time stock tracking" },
    { title: "Kitchen Display (KDS)", status: "Active", icon: "🍳", desc: "Instant kitchen comms" },
    { title: "Online Ordering", status: "Active", icon: "🌐", desc: "Multi-channel orders" },
    { title: "Insights Dashboard", status: "Active", icon: "📊", desc: "Live business analytics" },
    { title: "Rider Management", status: "Beta", icon: "🛵", desc: "Delivery tracking" },
    { title: "Loyalty App", status: "Active", icon: "🎁", desc: "Customer engagement" },
    { title: "Table-Side Ordering", status: "Active", icon: "📱", desc: "Tableside experience" },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const centralY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Noise Texture */}
      <div className="noise-overlay opacity-5" />

      {/* Animated conic gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none animate-spin-conic"
        style={{
          background: 'conic-gradient(from 0deg, transparent 80%, rgba(239,68,68,0.06) 90%, transparent 100%)',
          filter: 'blur(30px)',
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="section-label">Full Stack Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            One <span className="text-primary">Complete System</span> <br />
            For All Your Units
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto">
            Everything works together — seamlessly, reliably, and beautifully.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, type: 'spring', stiffness: 220 }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ scale: 1.06, y: -8 }}
              className="glass-card p-6 rounded-3xl border-2 border-surface-border/60 text-center group cursor-default relative overflow-hidden flex flex-col items-center justify-center backdrop-blur-2xl bg-surface/40"
              style={{
                boxShadow: hovered === i
                  ? '0 20px 50px rgba(var(--primary-rgb), 0.25), inset 0 1px 0 rgba(255,255,255,0.05)'
                  : '0 8px 32px rgba(0,0,0,0.2)',
                borderColor: hovered === i
                  ? 'color-mix(in srgb, var(--primary) 50%, transparent)'
                  : undefined,
                transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
              }}
            >
              {/* Animated bg gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Scanline flash */}
              {hovered === i && (
                <motion.div
                  initial={{ top: '-100%' }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute left-0 right-0 h-1/3 bg-gradient-to-b from-transparent via-white/4 to-transparent pointer-events-none"
                />
              )}

              {/* Status dot */}
              <div className="absolute top-3 right-3">
                <span className={`flex items-center gap-1 text-[9px] font-black uppercase tracking-widest ${item.status === 'Active' ? 'text-emerald-400' : 'text-orange-400'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Active' ? 'bg-emerald-400' : 'bg-orange-400'} animate-pulse`} />
                </span>
              </div>

              <motion.div
                animate={hovered === i ? { scale: 1.3, rotate: 10 } : { scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="text-5xl mb-4 relative z-10"
              >
                {item.icon}
              </motion.div>

              <h3 className="font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors relative z-10 text-sm leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] text-muted relative z-10 mt-1">{item.desc}</p>

              <div className="relative z-10 mt-3">
                <span className={`inline-block text-[9px] uppercase font-black tracking-widest px-3 py-1 rounded-lg border ${item.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-orange-500/10 text-orange-400 border-orange-500/20'}`}>
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full border-gradient">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-bold text-foreground">8 modules. 1 platform. Zero complications.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
