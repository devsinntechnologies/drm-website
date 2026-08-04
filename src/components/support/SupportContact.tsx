"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const SupportContact = () => {
  return (
    <section className="py-6 md:py-8 lg:py-8 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-card rounded-[48px] p-6 md:p-20 border border-primary/20 bg-primary/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-4"
            >
              Ready to <span className="text-primary">scale</span> your business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-muted leading-relaxed font-medium mb-4 md:mb-4"
            >
              Join thousands of successful restaurant owners who trust DRM for their daily operations.
              Get your free demo setup in less than 24 hours.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button href="/contact" variant="primary" size="lg">
                Contact Sales
              </Button>
              <Button href="/demo" variant="secondary" size="lg">
                Request a Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportContact;
