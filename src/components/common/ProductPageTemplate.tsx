"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";
import SectionHeader from "@/components/common/SectionHeader";
import SiteCTA from "@/components/common/SiteCTA";
import ProductClientele from "@/components/common/ProductClientele";
import ProductCertificates from "@/components/common/ProductCertificates";

export type ProductModule = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export type ProductPageProps = {
  label: string;
  title: React.ReactNode;
  description: string;
  heroMedia?: { type: "video" | "image"; src: string; alt?: string };
  overview: {
    title: React.ReactNode;
    description: string;
    badge?: string;
    image: string;
    imageAlt: string;
  };
  features: {
    title: string;
    description: string;
    highlights: string[];
    image: string;
    imageAlt: string;
  };
  modules: ProductModule[];
  cta?: { title: string; description: string };
};

export default function ProductPageTemplate({
  label,
  title,
  description,
  heroMedia,
  overview,
  features,
  modules,
  cta,
}: ProductPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHero label={label} title={title} description={description} />

      {heroMedia ? (
        <section className="pb-12 md:pb-16 bg-background border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[280px] sm:h-[420px] rounded-2xl overflow-hidden border border-surface-border"
            >
              {heroMedia.type === "video" ? (
                <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                  <source src={heroMedia.src} type="video/mp4" />
                </video>
              ) : (
                <Image src={heroMedia.src} alt={heroMedia.alt ?? label} fill className="object-cover" />
              )}
            </motion.div>
          </div>
        </section>
      ) : null}

      <SectionShell glow>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <SectionHeader
              label="Solution overview"
              title={overview.title}
              description={overview.description}
              className="mb-0"
            />
            {overview.badge ? (
              <p className="mt-6 text-sm font-semibold text-primary">{overview.badge}</p>
            ) : null}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-surface-border aspect-[4/3]"
          >
            <Image src={overview.image} alt={overview.imageAlt} fill className="object-cover" />
          </motion.div>
        </div>
      </SectionShell>

      <SectionShell tone="background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-surface-border aspect-[4/3] order-2 lg:order-1"
          >
            <Image src={features.image} alt={features.imageAlt} fill className="object-cover" />
          </motion.div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <SectionHeader
              label="Key features"
              title={features.title}
              description={features.description}
              className="mb-0"
            />
            <ul className="mt-6 space-y-3">
              {features.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 type-body text-muted">
                  <FiCheckCircle className="text-primary shrink-0" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader
          align="center"
          label="Modules"
          title="Everything you need in one suite"
          description="Purpose-built tools for front-of-house and back-office teams."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="p-5 rounded-2xl border border-surface-border bg-surface hover:border-primary transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all">
                {mod.icon}
              </div>
              <h2 className="type-card-title text-foreground mb-1.5 group-hover:text-primary transition-colors">
                {mod.title}
              </h2>
              <p className="type-body text-muted">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SiteCTA
        title={cta?.title ?? "See DigiNizam in action"}
        description={cta?.description ?? "Book a free demo tailored to your business."}
      />
      <ProductClientele bgLight={true} />
      <ProductCertificates bgLight={false} />
    </main>
  );
}
