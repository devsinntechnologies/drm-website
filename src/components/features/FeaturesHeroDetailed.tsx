"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHero from "@/components/common/PageHero";

const FeaturesHeroDetailed = () => {
  return (
    <>
      <PageHero
        label="Features"
        title="POS & Inventory Management Software Features"
        description="Explore the tools DigiNizam provides for billing, inventory, reporting and day-to-day business operations, with workflows configured to your business."
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
              alt="DigiNizam POS and inventory management workflow"
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
