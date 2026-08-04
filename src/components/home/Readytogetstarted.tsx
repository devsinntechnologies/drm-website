"use client";

import React from "react";
import Button from "@/components/ui/Button";

export const ReadyToGetStartedSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2
          className="font-semibold tracking-tight mb-3 text-white"
          style={{ fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.12 }}
        >
          Ready to get started?
        </h2>
        <p className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-7 leading-relaxed">
          Book a free demo and see how DigiNizam streamlines POS, inventory, and operations for your business.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/demo" variant="primary" size="lg">
            Get free demo
          </Button>
          <Button
            href="/contact"
            variant="secondary"
            size="lg"
            className="!bg-transparent !text-white !border-white/25 hover:!border-primary hover:!bg-primary/10"
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStartedSection;
