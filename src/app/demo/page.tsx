import React from 'react';
import DemoHero from "@/components/demo/DemoHero";
import DemoForm from "@/components/demo/DemoForm";
import PricingPlans from "@/components/pricing/PricingPlans";
import PricingBenefits from "@/components/pricing/PricingBenefits";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-white text-[#08162D] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#0055FF]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <DemoHero />
        <DemoForm />

        {/* Pricing Section */}
        <section className="py-8 md:py-28 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#0055FF] bg-[#0055FF]/10 border border-[#0055FF]/20 px-4 py-2 rounded-xl mb-4">
              FLEXIBLE PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#08162D] tracking-tight">
              Best and flexible <span className="text-[#0055FF]">plans</span> that suit your business!
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto font-normal">
              Empower your operations with enterprise-grade POS solutions tailored for your business growth.
            </p>
          </div>
          <PricingPlans />
        </section>

        {/* Benefits Section */}
        <div className="border-t border-gray-200 bg-white">
          <PricingBenefits
            title="Benefits"
            highlight="of Point of Sale"
            subtitle="Guaranteed to save you time, increase the accuracy of your inventory, and help you make informed decisions for your business"
          />
        </div>
      </div>
    </main>
  );
}