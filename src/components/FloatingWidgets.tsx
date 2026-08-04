"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWidgets = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 16 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.6 }}
        className="relative group"
      >
        <Link
          href="/contact"
          aria-label="Contact support"
          className="w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-[var(--shadow-btn)] flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </Link>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-surface border border-surface-border text-foreground text-[10px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap uppercase tracking-wider">
          Contact support
        </div>
      </motion.div>

      <AnimatePresence>
        {showScrollTop ? (
          <motion.div
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 12 }}
          >
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-12 h-12 bg-surface border border-surface-border text-foreground rounded-full shadow-[var(--shadow-card)] flex items-center justify-center hover:border-primary/40 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default FloatingWidgets;
