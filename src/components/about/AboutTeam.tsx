"use client";
import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Ahmed Khan', role: 'Founder & CEO', image: '/blog/blog1.jpg' },
  { name: 'Sarah Malik', role: 'Head of Operations', image: '/blog/blog2.jpg' },
  { name: 'Zeeshan Ahmed', role: 'Lead Architect', image: '/blog/blog3.jpg' },
  { name: 'Maria Siddiqui', role: 'Support Director', image: '/blog/blog4.jpg' },
];

const AboutTeam = () => {
  return (
    <section className="py-32 bg-surface/10 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-label">The Experts</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Meet the <span className="text-primary text-glow">Team</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto font-medium">
            The minds behind the software. We're a team of innovators, engineers, and creatives building the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, type: 'spring', stiffness: 100 }}
              className="group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <motion.div 
                whileHover={{ rotateY: 10, rotateX: 5, y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative overflow-hidden rounded-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.4)] mb-6 aspect-[3/4] border-2 border-surface-border/40 bg-surface/50 backdrop-blur-md"
              >
                {/* Glow behind image on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px] z-0" />
                
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 relative z-10"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500 z-20" />
                
                {/* Social icons pop up */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex justify-center gap-4 translate-y-full group-hover:-translate-y-8 transition-transform duration-500 ease-out z-30">
                  {['🔗', '✉️'].map(icon => (
                    <motion.span 
                      key={icon} 
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="w-12 h-12 rounded-full glass-card border-gradient flex items-center justify-center text-xl shadow-xl hover:bg-primary transition-colors text-white"
                    >
                      {icon}
                    </motion.span>
                  ))}
                </div>

                <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 absolute right-0 top-0 animate-pulse" />
                </div>
              </motion.div>
              
              <div className="text-center">
                <h4 className="text-xl font-extrabold text-foreground mb-1 group-hover:text-primary transition-colors">{m.name}</h4>
                <p className="text-muted font-black text-xs tracking-widest uppercase">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
