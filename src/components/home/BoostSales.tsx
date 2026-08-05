"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function BoostSalesSection() {
  return (
    <section className="py-12 md:py-16 bg-background section-soft-edge relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] right-0 w-[520px] h-[360px] bg-primary/8 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Sales optimization
            </span>

            <h2
              className="font-semibold tracking-tight text-foreground mb-4"
              style={{ fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.12 }}
            >
              Boost your sales with{" "}
              <span className="text-foreground">Digi</span>
              <span className="text-primary">Nizam</span> POS
            </h2>

            <p className="text-sm md:text-base text-muted leading-relaxed mb-4 max-w-md">
              Faster checkout, flexible payments, and promotions that help you sell more—without slowing the counter.
            </p>

            <p className="text-sm md:text-base text-muted leading-relaxed max-w-md">
              Run discounts, loyalty rewards, and commission tracking from one place so every sale stays clear and profitable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.08 }}
            className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-44 sm:h-56 rounded-2xl overflow-hidden">
                <Image
                  src="/salesolution'.jpg"
                  alt="DigiNizam POS sales solution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden">
                <Image
                  src="/receipt.jpg"
                  alt="Receipt printing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative h-full min-h-[320px] sm:min-h-[420px] rounded-2xl overflow-hidden mt-6 sm:mt-10">
              <Image
                src="/cashier.jpg"
                alt="Cashier using DigiNizam POS"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
