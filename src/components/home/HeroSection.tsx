"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import Button from "@/components/ui/Button";
import ProductScreen from "@/components/common/ProductScreen";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";

const easeOut = [0.16, 1, 0.3, 1] as const;

const ROTATING_INDUSTRIES = ["Restaurants", "Retail Stores", "Pharmacies", "Snooker Clubs"] as const;
const TYPE_SPEED_MS = 55;
const DELETE_SPEED_MS = 28;
const HOLD_FULL_MS = 1700;
const HOLD_EMPTY_MS = 300;

/** Types out, holds, then deletes each word in `words` on a loop. Respects reduced-motion and stays hydration-safe by starting from the fully-typed first word. */
function useTypewriter(words: readonly string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState<string>(words[0]);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "waiting">("holding");

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const currentWord = words[wordIndex];
    const delay =
      phase === "holding" ? HOLD_FULL_MS : phase === "waiting" ? HOLD_EMPTY_MS : phase === "deleting" ? DELETE_SPEED_MS : TYPE_SPEED_MS;

    const timer = setTimeout(() => {
      if (phase === "typing") {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setPhase("holding");
        }
      } else if (phase === "holding") {
        setPhase("deleting");
      } else if (phase === "deleting") {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setPhase("waiting");
        }
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [phase, text, wordIndex, words]);

  return text;
}

export default function HeroSection() {
  const typedIndustry = useTypewriter(ROTATING_INDUSTRIES);

  return (
    <section className="hero-section bg-navy text-white section-soft-edge section-soft-edge--dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_75%_35%,rgba(0,85,255,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="max-w-lg"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
              AI-powered retail OS
            </span>

            <h1 className="font-semibold text-white tracking-tight mb-3 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1]">
              POS Software for Growing Businesses in Pakistan
            </h1>

            <p
              className="flex items-center gap-0.5 text-sm sm:text-base font-semibold text-secondary tracking-wide mb-5"
              aria-hidden="true"
            >
              Built for {typedIndustry}
              <span className="animate-caret-blink inline-block w-[2px] h-[1em] bg-secondary ml-0.5" />
            </p>
            <span className="sr-only">
              Built for restaurants, retail stores, pharmacies, and snooker clubs
            </span>

            <p className="text-base text-white/70 leading-relaxed mb-7">
              DigiNizam POS software helps you manage billing, inventory, orders and daily operations from one platform—built for restaurants and retail across Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="/demo" variant="primary" size="lg">
                Book free demo
              </Button>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[var(--radius-btn)] text-sm font-semibold border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08] transition-all"
              >
                <FiPhone className="w-4 h-4 text-secondary" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
            className="w-full lg:max-w-none"
          >
            <ProductScreen
              src="/originalheroimage.png"
              alt="DigiNizam POS terminal, scanner, and receipt printer"
              variant="showcase"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
