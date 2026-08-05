"use client";

import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import PageHero from "@/components/common/PageHero";

export default function AboutHero() {
  return (
    <>
      <PageHero
        label="About DigiNizam"
        title="Built for businesses that want to operate smarter"
        description="DigiNizam delivers ERP, POS, and digital tools that help teams run retail and operations with clarity—guided strategy, tailored setup, and reliable support."
        align="left"
      >
        <Button href="/contact" variant="primary" size="md" className="mt-6">
          Start a project <FiArrowRight />
        </Button>
      </PageHero>

      <section className="pb-12 md:pb-16 bg-background border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative w-full max-w-4xl mx-auto h-[280px] sm:h-[360px] rounded-2xl overflow-hidden border border-surface-border"
          >
            <Image
              src="/wecare.jpg"
              alt="DigiNizam team and history"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
