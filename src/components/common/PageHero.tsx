"use client";

import React from "react";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function PageHero({
  label,
  title,
  description,
  children,
  align = "center",
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <section className="pt-24 pb-10 md:pt-28 md:pb-12 bg-background section-soft-edge relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-primary/8 blur-[140px] rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className={`max-w-3xl flex flex-col ${alignClass}`}
        >
          <span className="section-label">{label}</span>
          <h1 className="type-page-heading text-foreground tracking-tight">{title}</h1>
          {description ? (
            <p className="type-body text-muted mt-4 leading-relaxed max-w-2xl">{description}</p>
          ) : null}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
