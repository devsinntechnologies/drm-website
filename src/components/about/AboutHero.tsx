"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function AboutHero() {
  return (
    <section className="bg-background text-foreground min-h-[calc(100dvh-60px)] flex items-center justify-center relative overflow-hidden border-b border-surface-border py-8 px-4 sm:px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="section-label">About DigiNizam</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4 tracking-tight">
            Built for businesses that want to operate smarter
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed mb-6 max-w-xl">
            DigiNizam delivers ERP, POS, and digital tools that help teams run retail and operations with clarity—guided strategy, tailored setup, and reliable support.
          </p>

          <div className="space-y-2">
            <span className="block text-xs font-semibold uppercase tracking-wider text-muted">Ready to transform?</span>
            <Button href="/contact" variant="primary" size="md">
              Start a project <FiArrowRight />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[420px] h-[280px] sm:h-[320px] lg:h-[360px] rounded-2xl overflow-hidden border border-surface-border shadow-[var(--shadow-card)] group">
            <Image
              src="/wecare.jpg"
              alt="DigiNizam team and history"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-[11px] font-bold uppercase tracking-widest bg-primary px-2.5 py-1 rounded-lg">
                Our legacy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
