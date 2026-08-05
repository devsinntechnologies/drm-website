"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

export default function StickyDemoBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-0 inset-x-0 z-[90] px-4 pb-4 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto pointer-events-auto rounded-2xl border border-surface-border bg-surface/95 backdrop-blur-md shadow-[0_20px_50px_-20px_rgba(8,22,45,0.35)] px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-foreground">Ready to modernize your POS?</p>
              <p className="text-xs text-muted">Free demo · No commitment · Setup guidance included</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Button href="/demo" variant="primary" size="md">
                Book demo
              </Button>
              <Link
                href="/pricing"
                className="text-xs font-semibold text-primary hover:text-primary-hover px-3 py-2"
              >
                View pricing
              </Link>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
