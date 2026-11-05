"use client";

import React from "react";
import Image from "next/image";
import {
  FiZap,
  FiCode,
  FiSmartphone,
  FiSearch,
  FiShield,
  FiLayers,
  FiCheckCircle,
  FiArrowRight
} from "react-icons/fi";
import { motion } from "framer-motion";
import UnifiedValueMissionVision from "@/components/common/UnifiedValueMissionVision";
import Button from "@/components/ui/Button";

const productSuiteCards = [
  {
    title: "Custom Web Applications",
    desc: "Business websites, portals and web applications built around your workflows and ready to grow with your business.",
    icon: <FiCode size={20} />
  },
  {
    title: "Responsive, Mobile-First Design",
    desc: "Layouts designed for smartphones first, then tablets and desktops, so every visitor gets a usable experience.",
    icon: <FiSmartphone size={20} />
  },
  {
    title: "Performance-Focused Builds",
    desc: "Optimized code, images and hosting choices that help pages load quickly and support good Core Web Vitals.",
    icon: <FiZap size={20} />
  },
  {
    title: "SEO-Ready Structure",
    desc: "Clean page structure, metadata, sitemaps and technical SEO foundations so search engines can crawl and understand your site. No one can guarantee rankings.",
    icon: <FiSearch size={20} />
  },
  {
    title: "Secure Development Practices",
    desc: "HTTPS, protected sign-in and regularly updated dependencies built in from the start of the project.",
    icon: <FiShield size={20} />
  },
  {
    title: "API Integrations",
    desc: "Connect your website or web app with the CRM, business software and third-party services you already use, where they provide an API.",
    icon: <FiLayers size={20} />
  }
];

export default function WebDevelopmentContent() {
  return (
    <div className="min-h-screen bg-surface text-foreground font-sans">

      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/webdevhero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center px-6 text-center bg-black/40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
              Web Development Services
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Product Suite Composition Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              WHAT WE BUILD
            </span>
            <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
              Web Development <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm font-normal">
              From business websites to custom web applications, DigiNizam builds fast, responsive and search-friendly web projects for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {productSuiteCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-surface p-5 rounded-2xl border border-surface-border shadow-sm hover:border-primary hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h3 className="text-base font-black text-foreground mb-1.5 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-muted text-xs leading-relaxed font-normal">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. We Convert Your Idea Into a Reality Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-2 border border-primary/20">
              HOW WE WORK
            </span>
            <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
              From Brief to <span className="text-primary">Launch</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-3 font-normal">
              Every project starts with your goals, audience and required features. DigiNizam then designs, builds and tests the site or application before it goes live, and stays available after launch.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-center gap-2 font-bold text-xs text-foreground">
                <FiCheckCircle className="text-primary w-4 h-4 flex-shrink-0" /> Structure and features planned around your business goals
              </li>
              <li className="flex items-center gap-2 font-bold text-xs text-foreground">
                <FiCheckCircle className="text-primary w-4 h-4 flex-shrink-0" /> Testing across devices and browsers before launch
              </li>
              <li className="flex items-center gap-2 font-bold text-xs text-foreground">
                <FiCheckCircle className="text-primary w-4 h-4 flex-shrink-0" /> Post-launch support backed by DigiNizam&apos;s 24/7 support
              </li>
            </ul>
            <Button href="/contact" variant="primary" size="md">
              Start your web project <FiArrowRight />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/webdev.png"
              alt="Person using a laptop showing a DigiNizam business dashboard with sales, orders and stock alerts"
              width={420}
              height={280}
              className="w-auto max-h-[300px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. Our Value, Our Mission, Our Vision (Unified Section) - Background: bg-surface */}
      <UnifiedValueMissionVision
        bgLight={false}
        value="Clean code, careful testing and clear communication on every web project."
        mission="Build fast, secure, and scalable web applications that turn your ideas into high-performing digital products."
        vision="Be a go-to web development partner for businesses worldwide that care about speed, quality and usability."
      />

    </div>
  );
}
