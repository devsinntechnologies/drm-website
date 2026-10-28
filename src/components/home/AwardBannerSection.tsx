"use client";

import React, { useRef, useSyncExternalStore } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const HEADING_PARTS = ["Multi-Outlet", "POS &", "Business", "Management"] as const;

const BODY = "Connect inventory, sales, purchases and operational records across the locations included in your setup.";

const bodyWords = BODY.split(" ");

const easeOut = [0.16, 1, 0.3, 1] as const;

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

// Scroll-linked "auto-write" reveal: unreached words are hidden; each word
// un-blurs and rises into place as it scrolls past ~70% of the viewport.
function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = Math.min(1, (index + 1.6) / total);

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);
  const blur = useTransform(progress, [start, end], [10, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className="inline-block mr-[0.22em] mb-[0.08em] will-change-transform"
    >
      {word === "DigiNizam" ? (
        <>
          <span className="text-foreground">Digi</span>
          <span className="text-primary">Nizam</span>
        </>
      ) : (
        <span className="text-foreground">{word}</span>
      )}
      {" "}
    </motion.span>
  );
}

export default function AwardBannerSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  // Server snapshot is `false`, so hydration matches; the real preference applies right after.
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, () => false);
  const fullyShown = useMotionValue(1);

  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });

  // 0 when the paragraph top reaches 75% of the viewport; 1 when its bottom reaches 65%.
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ["start 75%", "end 65%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 420,
    damping: 32,
    mass: 0.28,
  });

  return (
    <section
      className="relative overflow-hidden px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-16 bg-surface section-soft-edge"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-10 sm:mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary mb-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Multi-Store Control
          </motion.div>

          <motion.h2
            ref={headingRef}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.028, delayChildren: 0.04 },
              },
            }}
            className="mt-3 max-w-[720px] mx-auto leading-tight tracking-tight text-foreground font-semibold"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)", lineHeight: 1.15 }}
          >
            {HEADING_PARTS.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-flex overflow-hidden align-bottom mr-[0.22em] -my-[0.15em] py-[0.15em]"
              >
                <motion.span
                  className="inline-block will-change-transform"
                  variants={{
                    hidden: { opacity: 0, y: "110%" },
                    visible: {
                      opacity: 1,
                      y: "0%",
                      transition: { duration: 0.38, ease: easeOut },
                    },
                  }}
                >
                  {word}{" "}
                </motion.span>
              </span>
            ))}
          </motion.h2>
        </div>

        <div className="max-w-[920px] mx-auto text-center">
          <p
            ref={bodyRef}
            className="font-semibold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.85rem] leading-[1.28] tracking-tight flex flex-wrap justify-center"
          >
            {bodyWords.map((word, i) => (
              <ScrollWord
                key={`${word}-${i}`}
                word={word}
                index={i}
                total={bodyWords.length}
                progress={reduceMotion ? fullyShown : smoothProgress}
              />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
