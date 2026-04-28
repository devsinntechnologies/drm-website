"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

const easeStandard: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeExit: [number, number, number, number] = [0.4, 0, 0.2, 1];

const testimonials = [
  {
    name: 'Wasabi',
    quote:
      'DRM is simple for our staff having powerful features for managing cafe operations and help us to serve faster.',
    logo: '/pricing/wasabi_logo.jpg',
    background: '/pricing/map_bg.jpg',
  },
  {
    name: 'Cafe Central',
    quote:
      'The setup was smooth, the team adapted quickly, and our order flow became much more organized within days.',
    logo: '/blog/blog1.jpg',
    background: '/pricing/map_bg.jpg',
  },
  {
    name: 'Urban Bites',
    quote:
      'Inventory tracking and reporting gave us much better control over daily operations and reduced manual work.',
    logo: '/blog/blog2.jpg',
    background: '/pricing/map_bg.jpg',
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 90 : -90,
    scale: 0.985,
    filter: 'blur(4px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: easeStandard,
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  exit: (direction: number) => ({
    opacity: 0.35,
    x: direction > 0 ? -90 : 90,
    scale: 0.985,
    filter: 'blur(4px)',
    transition: {
      duration: 0.45,
      ease: easeExit,
    },
  }),
};

const childVariants: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 40 : -40,
    y: 12,
  }),
  center: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeStandard,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
    y: -12,
    transition: {
      duration: 0.4,
      ease: easeExit,
    },
  }),
};

const PricingTestimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const active = testimonials[activeIndex];

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  const next = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  const swipeConfidenceThreshold = 80;

  useEffect(() => {
    if (isPaused) return;

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  return (
    <section className="py-8 md:py-10 bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center mb-8 md:mb-10">
          What Our <span className="text-primary">Clients Say?</span>
        </h2>

        <div className="relative">
          <div
            className="relative mt-4 md:mt-6 py-3 md:py-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative min-h-[24rem] sm:min-h-[26rem] md:min-h-[24rem]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  if (info.offset.x <= -swipeConfidenceThreshold) {
                    next();
                  } else if (info.offset.x >= swipeConfidenceThreshold) {
                    prev();
                  }
                }}
                className="absolute inset-0 w-full flex flex-col md:flex-row items-center justify-center cursor-grab active:cursor-grabbing"
              >
                <motion.div
                  custom={direction}
                  variants={childVariants}
                  className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#1a202c] relative flex items-center justify-center md:-mr-16 z-0 shadow-2xl overflow-hidden shrink-0"
                >
                  <div className="absolute inset-0 opacity-20">
                    <Image src={active.background} alt="Client Background" fill className="object-cover" />
                  </div>

                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-surface-border border-4 border-white flex items-center justify-center shadow-lg md:-translate-x-12 overflow-hidden relative z-10">
                    <Image src={active.logo} alt={`${active.name} Logo`} fill className="object-cover" />
                  </div>

                  <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-secondary z-20" />
                  <div className="absolute top-[60%] -left-12 w-10 h-10 rounded-full bg-accent/40 z-20" />
                </motion.div>

                <motion.div
                  custom={direction}
                  variants={childVariants}
                  className="relative z-10 w-[calc(100%-1rem)] max-w-lg -mt-10 sm:-mt-8 md:mt-0 md:-ml-12 p-6 md:p-10 glass-card bg-surface rounded-xl border border-surface-border shadow-[-10px_0_30px_rgba(0,0,0,0.05)] text-center md:text-left"
                >
                  <span className="text-primary text-4xl leading-none absolute top-6 left-6 font-serif">"</span>
                  <p className="text-muted leading-relaxed relative z-10 mb-6 italic pl-8 pr-4">
                    {active.quote}
                  </p>
                  <span className="text-primary text-4xl leading-none absolute bottom-12 right-6 font-serif">"</span>
                  <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest text-center mt-4">
                    {active.name}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-10 bg-primary' : 'w-3 bg-muted/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTestimonial;
