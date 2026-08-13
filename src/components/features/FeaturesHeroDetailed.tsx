"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

const FeaturesHeroDetailed = () => {
  return (
    <>
      <PageHero
        label="Restaurant inventory"
        title="Restaurant Inventory Software in Pakistan"
        description="Manage restaurant stock and inventory with DigiNizam. Improve visibility, connect stock with operations, and reduce manual inventory work."
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
              alt="Restaurant inventory software in Pakistan"
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
