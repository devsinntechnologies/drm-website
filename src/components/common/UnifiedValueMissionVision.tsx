"use client";

import React from "react";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

interface UnifiedValueMissionVisionProps {
  bgLight?: boolean;
  mission?: string;
  vision?: string;
  value?: string;
}

const defaults = {
  value:
    "Integrity, continuous innovation, and engineering excellence. We build transparent partnerships and software that delivers measurable ROI.",
  mission:
    "Empower modern businesses with software and cloud tools that simplify workflows, automate operations, and boost efficiency.",
  vision:
    "Become the most trusted digital partner for retail and enterprise operations across Pakistan and beyond.",
};

export default function UnifiedValueMissionVision({
  bgLight = false,
  mission = defaults.mission,
  vision = defaults.vision,
  value = defaults.value,
}: UnifiedValueMissionVisionProps) {
  const cards = [
    { title: "Our Value", body: value, icon: <FiHeart size={20} /> },
    { title: "Our Mission", body: mission, icon: <FiTarget size={20} /> },
    { title: "Our Vision", body: vision, icon: <FiEye size={20} /> },
  ];

  return (
    <section
      className={`py-10 md:py-12 ${bgLight ? "bg-surface" : "bg-background"} border-b border-surface-border relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="section-label">Our guiding principles</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Value, mission &amp; <span className="text-primary">vision</span>
          </h2>
          <p className="text-muted text-sm sm:text-base mt-2">
            The principles behind every DigiNizam product and partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="surface-card p-5 flex flex-col card-hover"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
