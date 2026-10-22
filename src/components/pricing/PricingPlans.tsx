"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const steps = [
  {
    title: "Book a Demo",
    description: "Start with a live walkthrough of billing, inventory, reporting and the workflows relevant to your business.",
  },
  {
    title: "Discuss Your Requirements",
    description: "If you want to proceed after the demo, discuss your outlets, billing counters, required modules and setup needs with our team.",
  },
  {
    title: "Agree on Pricing",
    description: "DigiNizam does not currently have fixed published pricing. Pricing is discussed and agreed around your business requirements.",
  },
];

export default function PricingPlans() {
  return (
    <section className="py-10 md:py-14 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <span className="section-label">How pricing works</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Demo First, Then Discuss Pricing
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto items-stretch">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`surface-card p-6 flex flex-col h-full relative card-hover ${index === 1 ? "border-primary ring-1 ring-primary/20" : ""}`}
            >
              <span className="text-primary text-sm font-semibold mb-3">Step {index + 1}</span>
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.description}</p>
            </motion.article>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button href="/demo" variant="primary" size="lg">
            Book a Demo to Discuss Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
