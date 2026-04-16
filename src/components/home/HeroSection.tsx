import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background abstract shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12 pt-20">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Manage your entire business in <span className="text-primary">one place</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto lg:mx-0">
            Streamline your orders, manage inventory, and boost customer satisfaction — all from one smart system. More than just a DRM, it’s the recipe for smooth operations and business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/demo">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:bg-primary-hover transition-all duration-300 transform hover:-translate-y-1">
                Book a Demo
              </button>
            </Link>
            <Link href="/pricing">
              <button className="px-8 py-4 bg-surface border border-surface-border text-foreground font-semibold rounded-lg hover:bg-surface-border transition-all duration-300">
                View Pricing
              </button>
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 opacity-70">
            <span className="text-sm font-semibold tracking-wider uppercase text-muted">Trusted by 1000+ businesses</span>
          </div>
        </div>

        {/* Hero Image Mockup */}
        <div className="flex-1 w-full relative">
          <div className="relative w-full max-w-xl mx-auto rounded-xl bg-surface border border-surface-border shadow-2xl flex items-center justify-center overflow-hidden glass-card">
            <img src="/home/hero-mockup.png" alt="DRM Dashboard Mockup" className="w-full h-auto block" />
          </div>

          {/* Floating elements for 3D effect */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-surface border border-surface-border rounded-xl shadow-lg animate-bounce flex items-center justify-center delay-150 glass-card">
            <span className="text-primary font-bold text-xl">+45%</span>
            <span className="text-xs text-muted absolute bottom-2">Sales</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
