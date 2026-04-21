"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <AnimatePresence>
        {/* Support Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
          whileHover={{ scale: 1.1 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <button className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group/btn">
            <motion.div 
               animate={{ y: [0, -2, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="relative z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </motion.div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          </button>
          
          {/* Label tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-foreground text-background text-xs font-black rounded-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap uppercase tracking-widest">
            24/7 Live Support
          </div>
        </motion.div>

        {/* Scroll to Top */}
        {showScrollTop && (
          <motion.div 
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <button 
              onClick={scrollToTop}
              className="w-16 h-16 bg-surface/50 backdrop-blur-xl border border-surface-border text-foreground rounded-full shadow-2xl flex items-center justify-center hover:border-primary/50 group"
            >
              <svg className="w-6 h-6 text-primary transition-transform group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingWidgets;
