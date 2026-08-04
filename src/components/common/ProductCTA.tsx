"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function ProductCTA({
  title = "See DigiNizam in action",
  description = "Book a free demo and discover how DigiNizam fits your operations.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-10 md:py-12 bg-navy text-white relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
        <p className="text-sm sm:text-base text-white/70 mb-7 max-w-xl mx-auto">{description}</p>
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
}
