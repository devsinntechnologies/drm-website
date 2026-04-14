import React from 'react';

const DemoHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-6 tracking-tight">
          DRM <span className="text-primary">Demo</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto leading-relaxed">
          Book a demo and see how <span className="font-bold text-foreground">DRM</span> can transform your business operations.
        </p>
        
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-surface-border" />
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Experience the future</span>
          <div className="h-px w-12 bg-surface-border" />
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
