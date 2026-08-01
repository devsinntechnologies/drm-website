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

const elevateCards = [
  {
    title: "Custom Web Applications",
    desc: "Tailor-made web solutions designed to scale smoothly with your growing business operations and high traffic.",
    icon: <FiCode className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Responsive Mobile-First UI/UX",
    desc: "Flawless rendering and seamless experiences across smartphones, tablets, and large desktop viewports.",
    icon: <FiSmartphone className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Lightning-Fast Speed",
    desc: "Optimized codebases and modern architecture ensuring sub-second loading times and peak performance.",
    icon: <FiZap className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "SEO & Search Ranking Ready",
    desc: "Built following strict search engine optimization guidelines to push your website to the top of Google results.",
    icon: <FiSearch className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Enterprise-Grade Security",
    desc: "Advanced data encryption, secure authentication pipelines, and robust defense mechanisms against threats.",
    icon: <FiShield className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Seamless API Integrations",
    desc: "Connect your web platform effortlessly with third-party software, payment gateways, and CRM systems.",
    icon: <FiLayers className="w-6 h-6 text-[#0055FF]" />
  },
];

const whatWeDoCards = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end front-end and back-end web engineering using next-generation frameworks and tools.",
    icon: <FiCpu className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "E-Commerce Portals",
    desc: "High-converting online storefronts equipped with secure checkout flows and inventory control.",
    icon: <FiMonitor className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "CMS & Admin Dashboards",
    desc: "Intuitive content management systems and custom administrative control panels built for efficiency.",
    icon: <FiLayers className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Cloud & Hosting Architecture",
    desc: "Reliable, scalable cloud server deployments ensuring 99.9% uptime for your digital assets.",
    icon: <FiZap className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Legacy System Modernization",
    desc: "Transform outdated web platforms into modern, high-speed, secure web applications.",
    icon: <FiCode className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Ongoing Maintenance & Support",
    desc: "24/7 technical monitoring, regular security patches, and instant feature updates.",
    icon: <FiCheckCircle className="w-6 h-6 text-[#0055FF]" />
  },
];

const performanceCards = [
  {
    title: "Core Web Vitals Optimization",
    desc: "Achieve top-tier scores in Google's core web metrics for superior UX and ranking.",
    icon: <FiZap className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Advanced Caching Strategies",
    desc: "Implement edge caching and optimized content delivery networks for instant page loads.",
    icon: <FiCpu className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Clean, Scalable Code Architecture",
    desc: "Modular component design that minimizes technical debt and makes future expansion easy.",
    icon: <FiCode className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Cross-Browser Compatibility",
    desc: "Rigorously tested across Chrome, Safari, Firefox, and Edge for uniform performance.",
    icon: <FiMonitor className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Image & Asset Optimization",
    desc: "Automatic next-gen format conversion and compression to keep payload sizes minimal.",
    icon: <FiLayers className="w-6 h-6 text-[#0055FF]" />
  },
  {
    title: "Scalable Traffic Handling",
    desc: "Architected to absorb massive traffic spikes smoothly without performance degradation.",
    icon: <FiShield className="w-6 h-6 text-[#0055FF]" />
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D] font-sans">
      
      {/* 1. Hero Section with Video Background (Strictly No Bluish Overlay) */}
      <section className="relative min-h-[calc(100vh-70px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden border-b border-gray-200 bg-[#08162D]">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/webdevhero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 w-full py-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-white bg-black/60 border border-white/20 px-3 py-1 rounded-xl mb-3 shadow-lg backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 align-middle">The <span className="text-white">Digi</span><span className="text-[#0055FF]">Nizam</span> <Image src="/logo.png" alt="Logo" width={14} height={14} className="object-contain inline-block" /></span> WEB DEVELOPMENT SOLUTIONS
            </span>
            <h1 className="text-base sm:text-lg font-black leading-tight text-white tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 0px 4px rgba(0,0,0,0.8)' }}>
              Engineering <span className="text-[#0055FF]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>Digital Excellence</span>
            </h1>
            <p className="text-xs md:text-sm text-gray-100 font-medium leading-relaxed mt-3 mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Transform your brand's online presence with high-performance, custom-built web applications designed to engage users and maximize conversions.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-xl group"
              >
                Get a Free Demo <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Elevate Your Digital Presence Section (6 Boxes) */}
      <section className="py-6 md:py-10 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
              CAPABILITIES
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Elevate Your <span className="text-[#0055FF]">Digital Presence</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal">
              Cutting-edge tools and frameworks tailored to give your business an unfair competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {elevateCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">{card.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed font-normal">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Image Showcase Section (webdev.png) */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
              NEXT-GEN DEVELOPMENT
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Built for Modern Enterprises &amp; <span className="text-[#0055FF]">Scalable Growth</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 font-normal">
              Our web engineering methodology combines striking design layouts with rock-solid backend infrastructure. We build products that engage visitors instantly and retain them as loyal customers.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 font-bold text-xs text-[#08162D]">
                <FiCheckCircle className="text-[#0055FF] w-4 h-4 flex-shrink-0" /> Custom Architecture tailored to your specific workflows
              </li>
              <li className="flex items-center gap-2 font-bold text-xs text-[#08162D]">
                <FiCheckCircle className="text-[#0055FF] w-4 h-4 flex-shrink-0" /> Rigorous automated testing before production release
              </li>
              <li className="flex items-center gap-2 font-bold text-xs text-[#08162D]">
                <FiCheckCircle className="text-[#0055FF] w-4 h-4 flex-shrink-0" /> Dedicated post-launch optimization & support teams
              </li>
            </ul>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0055FF] text-white font-black text-xs uppercase tracking-widest rounded-xl shadow-md hover:bg-[#0044cc] transition-all"
            >
              Start Your Project <FiArrowRight />
            </Link>
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
              className="w-auto max-h-[280px] object-contain rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. What We Do Section (6 Boxes) */}
      <section className="py-6 md:py-10 bg-white border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
              OUR EXPERTISE
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              What <span className="text-[#0055FF]">We Do</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal">
              Comprehensive web development services designed to take your digital products from concept to market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDoCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">{card.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed font-normal">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Built for Performance Section (6 Boxes) */}
      <section className="py-6 md:py-10 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 px-3 py-1 rounded-xl mb-2 border border-[#0055FF]/20">
              OPTIMIZATION
            </span>
            <h2 className="text-base sm:text-lg font-black text-[#08162D] tracking-tight">
              Built for <span className="text-[#0055FF]">Performance</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm font-normal">
              Uncompromising standards in speed, responsiveness, and architectural efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {performanceCards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-[#0055FF] hover:shadow-xl transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center mb-3 group-hover:bg-[#0055FF] group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <h3 className="text-base font-black text-[#08162D] mb-1.5 group-hover:text-[#0055FF] transition-colors">{card.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed font-normal">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}