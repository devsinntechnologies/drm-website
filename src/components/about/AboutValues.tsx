"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const values = [
  { t: "People First", d: "Our team is packed with people who help develop the company and are continuously growing.", i: "👥", c: "primary" },
  { t: "Simplicity", d: "DRM is the link between the complex world of business and the people who run it smoothly.", i: "✨", c: "secondary" },
  { t: "Empathy", d: "We create software that works for everyone. We never stop listening to our clients.", i: "❤️", c: "accent" },
  { t: "Innovation", d: "Never stop looking for new ideas. We believe great companies always rise to challenges.", i: "🚀", c: "primary" },
  { t: "Transparency", d: "Our pricing and practices are clear, honest, and built for long-term relationships.", i: "🛡️", c: "secondary" },
  { t: "Legacy", d: "Built on years of expertise across Pakistan, empowering local businesses to go global.", i: "🏛️", c: "accent" }
];

const AboutValues = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="noise-overlay opacity-5" />
      
      {/* Dynamic Background Glow based on hover */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none bg-${values[hoveredIndex].c}/10`}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Our Core <span className="gradient-text text-glow">Values</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-medium">
            The principles that guide our product, our team, and our relationship with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {values.map((v, i) => {
            const colorVar = `var(--${v.c})`;
            const isHovered = hoveredIndex === i;
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-10 rounded-[40px] border-2 border-surface-border/40 relative overflow-hidden group bg-surface/30 backdrop-blur-2xl"
                style={{
                  boxShadow: isHovered ? `0 30px 60px rgba(var(--${v.c}-rgb), 0.15)` : '0 10px 30px rgba(0,0,0,0.2)',
                  borderColor: isHovered ? `color-mix(in srgb, ${colorVar} 50%, transparent)` : undefined,
                  transition: 'box-shadow 0.4s ease, border-color 0.4s ease'
                }}
              >
                {/* Highlight Sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"
                  style={{ background: `radial-gradient(circle at top right, color-mix(in srgb, ${colorVar} 15%, transparent), transparent 70%)` }}
                />

                {/* Floating Icon */}
                <motion.div 
                  animate={isHovered ? { y: [-5, 5, -5], rotate: [0, 10, -10, 0] } : { y: 0, rotate: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-16 h-16 rounded-3xl flex items-center justify-center text-3xl mb-8 relative z-10"
                  style={{ 
                    background: `color-mix(in srgb, ${colorVar} 15%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${colorVar} 30%, transparent)`,
                    color: colorVar
                  }}
                >
                  {v.i}
                </motion.div>
                
                <h3 className="text-2xl font-extrabold text-foreground mb-4 relative z-10 transition-colors" style={{ color: isHovered ? colorVar : undefined }}>
                  {v.t}
                </h3>
                <p className="text-muted font-medium leading-relaxed relative z-10 tracking-wide">
                  {v.d}
                </p>

                {/* Background number outline */}
                <div className="absolute -bottom-4 -right-2 text-[120px] font-black opacity-5 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-4">
                  0{i + 1}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
