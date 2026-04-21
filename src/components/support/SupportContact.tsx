"use client";
import React from 'react';
import { motion } from 'framer-motion';

const SupportContact = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card rounded-[48px] p-12 md:p-20 border border-primary/20 bg-primary/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-foreground mb-8"
            >
              Ready to <span className="gradient-text">scale</span> your business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted leading-relaxed font-bold mb-12"
            >
              Join thousands of successful restaurant owners who trust DRM for their daily operations. 
              Get your free demo setup in less than 24 hours.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-2xl glow-primary text-lg"
              >
                Contact Sales
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass-card border border-primary/30 text-primary font-black rounded-2xl text-lg hover:bg-primary/5 transition-all"
              >
                Request a Demo
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportContact;
