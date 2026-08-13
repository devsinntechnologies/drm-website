"use client";

import React from "react";
import Button from "@/components/ui/Button";

export default function SiteCTA({
  title = "Book a Demo",
  description = "Book a free demo and see how DigiNizam POS software streamlines billing, inventory, and operations for your business.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-12 md:py-16 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2
          className="font-semibold tracking-tight mb-3 text-white"
          style={{ fontSize: "clamp(30px, 4.2vw, 46px)", lineHeight: 1.12 }}
        >
          {title}
        </h2>
        <p className="type-body text-white/70 max-w-xl mx-auto mb-7">{description}</p>
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
