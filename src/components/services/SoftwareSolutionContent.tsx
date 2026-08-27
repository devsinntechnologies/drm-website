"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiClock, FiShield, FiSmartphone, FiAward, FiCheckCircle,
  FiTrendingUp, FiServer, FiArrowRight, FiCode, FiCpu,
  FiLayers, FiGlobe, FiDatabase, FiCloud, FiActivity
} from "react-icons/fi";
import { motion } from "framer-motion";
import UnifiedValueMissionVision from "@/components/common/UnifiedValueMissionVision";
import Button from "@/components/ui/Button";

const whatWeDoCards = [
  {
    title: "Custom App Development",
    desc: "Scalable web and mobile applications engineered with clean code architecture and optimal performance.",
    icon: <FiCode size={20} />
  },
  {
    title: "Digital Transformation",
    desc: "Modernizing legacy systems into agile, automated cloud-native environments for maximum efficiency.",
    icon: <FiCpu size={20} />
  },
  {
    title: "Enterprise Integration",
    desc: "Connecting third-party APIs, CRMs, ERPs, and databases into a unified corporate ecosystem.",
    icon: <FiLayers size={20} />
  },
  {
    title: "Cloud & DevOps Engineering",
    desc: "Automated CI/CD pipelines, multi-cloud deployments, and serverless infrastructure management.",
    icon: <FiCloud size={20} />
  },
  {
    title: "UI/UX Product Design",
    desc: "User-centric wireframing, interactive prototyping, and design systems built for high conversion.",
    icon: <FiGlobe size={20} />
  },
  {
    title: "Big Data & Analytics",
    desc: "Advanced data warehousing, business intelligence dashboards, and predictive reporting pipelines.",
    icon: <FiDatabase size={20} />
  }
];

export default function SoftwareSolutionContent() {
  return (
    <main className="min-h-screen bg-surface text-foreground">

      {/* 1. Hero Section (Video Background) - Resized Blue Overlay Text & Compact Height */}
      <section className="relative w-full h-[60vh] min-h-[400px] max-h-[560px] overflow-hidden bg-black hero-section border-b border-surface-border">
        <div className="absolute inset-0 z-0 h-full w-full">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-90">
            <source src="/softwaresolution.mp4" type="video/mp4" />
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
              SOFTWARE SOLUTION
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. What We Do Section - Background: bg-surface */}
      <section className="py-4 md:py-6 bg-surface border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-5">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              OUR EXPERTISE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              What <span className="text-primary">We Do</span>
            </h2>
            <p className="text-muted text-xs sm:text-[13px] font-normal">
              DigiNizam delivers end-to-end digital engineering services designed to accelerate growth, automate complex processes, and future-proof your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeDoCards.map((card, idx) => (
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
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-4 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-xl mb-1.5 border border-primary/20">
              SOFTWARE WORKFLOW
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
              We Convert Your <span className="text-primary">Idea Into a Reality</span>
            </h2>
            <p className="text-muted text-xs sm:text-[13px] leading-relaxed mb-2 font-normal">
              Transform legacy processes into agile, digitized workflows. Built on a complete cloud infrastructure that scales securely alongside your organization under DigiNizam expert guidance.
            </p>
            <p className="text-muted text-[11px] sm:text-xs leading-relaxed mb-4 font-normal">
              Provide your team with intuitive dashboards, real-time collaboration tools, and role-based access permissions that boost daily productivity and minimize administrative friction.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-2 rounded-xl mb-5">
              <FiServer size={16} /> Enterprise Cloud &amp; Scalable Infrastructure
            </div>
            <div>
              <Button href="/contact" variant="primary" size="md">
                Talk to our engineers <FiArrowRight />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/softwareworkflow.png"
              alt="Empower Your Entire Workforce Workflow"
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
        value="Engineering excellence and long-term partnerships over one-off delivery."
        mission="Modernize legacy processes into agile, automated, cloud-native systems that scale with your business."
        vision="Be the trusted software engineering partner for enterprises undergoing digital transformation across the region."
      />

    </main>
  );
}
