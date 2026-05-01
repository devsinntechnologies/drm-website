"use client";
import React from 'react';
import Link from 'next/link';

const stats = [
  { value: '1000+', label: 'Happy Businesses' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '24/7', label: 'Expert Support' },
  { value: '15+', label: 'Years Experience' },
];

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden ">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-900"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="/resturant.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-linear-to-b from-orange-100 via-background/20 to-red-100" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,68,68,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(249,115,22,0.15),transparent_45%)]" /> */}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col items-center pt-20 pb-4 md:pb-6 relative">

        {/* Text Content */}
        <div className="w-full text-center max-w-4xl mx-auto">
          

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 leading-[1.05]">
            Auto'mate your
            <span className="text-primary block mt-2">
              Resturant
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black/85 mb-8 md:mb-10 leading-relaxed">
            Manage orders, inventory, kitchen performance, and customer loyalty—all in one cloud platform.          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Link href="/demo">
              <button className="shimmer-btn border-2 border-primary relative overflow-hidden px-8 py-4 bg-primary text-primary-foreground font-bold text-base rounded-xl glow-primary transition-all duration-300 group">
                <span className="absolute inset-0 w-1/3 h-full bg-white/10 skew-x-[-20deg] -translate-x-full group-hover:animate-spotlight-scan pointer-events-none" />
                Book a Free Demo →
              </button>
            </Link>
            <Link href="/pricing">
              <button className="px-8 py-4 bg-transparent border-2 border-surface-border text-foreground font-semibold text-base rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                View Pricing
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-surface-border/40">
            {stats.map((stat, i) => (
              <div key={i} className="text-center glass-card p-4 rounded-2xl relative overflow-hidden">
                <div className="text-2xl font-black text-primary text-glow relative z-10">{stat.value}</div>
                <div className="text-xs text-muted font-bold mt-1 uppercase tracking-wider relative z-10">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
