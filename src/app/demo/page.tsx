import React from 'react';
import DemoHero from "@/components/demo/DemoHero";
import DemoForm from "@/components/demo/DemoForm";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingBenefits from "@/components/pricing/PricingBenefits";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background">
      <DemoHero />
      <DemoForm />
      
      {/* Reusing existing components as requested */}
      <section className="bg-surface/30">
        <div className="container mx-auto px-4 pt-16 -mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Best and flexible <span className="text-primary">plans</span> that suit your business!
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.
          </p>
        </div>
        <PricingPlans />
      </section>

      <PricingBenefits 
        title="Benefits" 
        highlight="of Point of Sale" 
        subtitle="Guaranteed to save you time, increase the accuracy of your inventory, and help you make informed decisions for your business"
      />
    </main>
  );
}
