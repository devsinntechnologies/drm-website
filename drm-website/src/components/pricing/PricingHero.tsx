import React from 'react';

const PricingHero = () => {
  return (
    <section className="pt-32 pb-16 bg-surface/30 text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Simple, transparent <span className="text-primary">Pricing</span></h1>
      <p className="text-xl text-muted max-w-2xl mx-auto">
        Choose the perfectly tailored plan for your DRM system. No hidden fees. No surprises.
      </p>
    </section>
  );
};

export default PricingHero;
