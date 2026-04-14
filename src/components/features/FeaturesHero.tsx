import React from 'react';

const FeaturesHero = () => {
  return (
    <section className="pt-32 pb-16 bg-surface/30 text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
      <h1 className="text-5xl font-extrabold text-foreground mb-6">Powerful <span className="text-secondary">Features</span> to run your business</h1>
      <p className="text-xl text-muted max-w-3xl mx-auto">
        Everything you need to manage your restaurant or retail store efficiently. Built to scale with your ambitions.
      </p>
    </section>
  );
};

export default FeaturesHero;
