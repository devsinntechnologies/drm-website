"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const cards = [
  {
    title: "Why choose us",
    desc: "Cost-efficient, fast delivery, and practical systems built for real business operations.",
  },
  {
    title: "Our mission",
    desc: "Partner with teams to simplify operations and grow with reliable software.",
  },
  {
    title: "Our vision",
    desc: "Scalable management tools that keep everyday operations smooth—locally and globally.",
  },
];

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-surface border-b border-surface-border relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[360px] bg-primary/8 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: easeOut }}
          className="max-w-2xl mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            We care for your business
          </span>
          <h2
            className="font-semibold tracking-tight text-foreground"
            style={{ fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.12 }}
          >
            Who we are
          </h2>
          <p className="text-sm md:text-base text-muted mt-3 leading-relaxed max-w-xl">
            A team focused on practical retail software that helps businesses run cleaner every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="lg:col-span-5 relative min-h-[320px] sm:min-h-[420px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/whoweare.jpg"
              alt="DigiNizam team and partnership"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="lg:col-span-7 flex flex-col justify-center divide-y divide-surface-border">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06, ease: easeOut }}
                className="group flex gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span className="text-[11px] font-bold tabular-nums text-muted/70 pt-1.5 shrink-0 group-hover:text-primary transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted leading-relaxed mt-1 max-w-lg">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
