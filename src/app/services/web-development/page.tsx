"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FiMonitor, 
  FiZap, 
  FiCode, 
  FiSmartphone, 
  FiSearch, 
  FiShield, 
  FiLayers, 
  FiCpu, 
  FiCheckCircle, 
  FiArrowRight 
} from "react-icons/fi";
import { motion } from "framer-motion";
import UnifiedValueMissionVision from "@/components/common/UnifiedValueMissionVision";
import Button from "@/components/ui/Button";

const productSuiteCards = [
  {
    title: "Custom Web Applications",
    desc: "Tailor-made web solutions designed to scale smoothly with your growing business operations and high traffic.",
    icon: <FiCode size={20} />
  },
  {
    title: "Responsive Mobile-First UI/UX",
    desc: "Flawless rendering and seamless experiences across smartphones, tablets, and large desktop viewports.",
    icon: <FiSmartphone size={20} />
  },
  {
    title: "Lightning-Fast Speed",
    desc: "Optimized codebases and modern architecture ensuring sub-second loading times and peak performance.",
    icon: <FiZap size={20} />
  },
  {
    title: "SEO & Search Ranking Ready",
    desc: "Built following strict search engine optimization guidelines to push your website to the top of Google results.",
    icon: <FiSearch size={20} />
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Advanced data encryption, secure authentication pipelines, and robust defense mechanisms against threats.",
    icon: <FiShield size={20} />
  },
  {
    title: "Seamless API Integrations",
    desc: "Connect your web platform effortlessly with third-party software, payment gateways, and CRM systems.",
    icon: <FiLayers size={20} />
  }
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-surface text-foreground font-sans">
      
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
            <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none text-primary tracking-wide drop-shadow-2xl">
              WEB DEVELOPMENT
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Product Suite Composition Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              SUITE COMPOSITION
            </span>
            <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
              Product Suite <span className="text-primary">Composition</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm font-normal">
              Cutting-edge web engineering tools and frameworks tailored to give your enterprise a distinct competitive edge.
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
              NEXT-GEN DEVELOPMENT
            </span>
            <h2 className="text-base sm:text-lg font-black text-foreground tracking-tight">
              We Convert Your <span className="text-primary">Idea Into a Reality</span>
            </h2>
            <p className="text-muted text-xs sm:text-sm leading-relaxed mb-3 font-normal">
              Our web engineering methodology combines striking design layouts with rock-solid backend infrastructure. We transform your concepts into high-speed digital products that captivate visitors and drive conversions.
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-center gap-2 font-bold text-xs text-foreground">
                <FiCheckCircle className="text-primary w-4 h-4 flex-shrink-0" /> Custom Web Architecture tailored to your unique workflows
              </li>
              <li className="flex items-center gap-2 font-bold text-xs text-foreground">
                <FiCheckCircle className="text-primary w-4 h-4 flex-shrink-0" /> Rigorous automated testing before production deployment
              </li>
              <li className="flex items-center gap-2 font-bold text-xs text-foreground">
                <FiCheckCircle className="text-primary w-4 h-4 flex-shrink-0" /> Continuous 24/7 post-launch optimization &amp; maintenance
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
              alt="Web Development Showcase" 
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
        value="Clean code, rigorous testing, and transparent delivery timelines on every web engagement."
        mission="Build fast, secure, and scalable web applications that turn your ideas into high-performing digital products."
        vision="Become the go-to web development partner for businesses that refuse to compromise on speed or quality."
      />

    </main>
  );
}