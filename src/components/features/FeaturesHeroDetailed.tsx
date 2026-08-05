"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";
import SectionShell from "@/components/common/SectionShell";

const FeaturesHeroDetailed = () => {
  return (
    <>
      <PageHero
        label="Core technology"
        title={
          <>
            Restaurant <span className="text-primary">point of sale</span> system
          </>
        }
        description="A comprehensive ecosystem designed to be simple, quick, and scalable—empowering modern restaurateurs with enterprise-grade tools."
      />

      <section className="pb-10 md:pb-12 bg-background border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-surface-border"
          >
            <Image
              src="/features/feature-hero-v2.png"
              alt="Restaurant POS software dashboard"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FeaturesHeroDetailed;
