import React from 'react';

const FeaturesHeroDetailed = () => {
  return (
    <section className="pt-32 pb-24 bg-surface/30 relative overflow-hidden text-center">
      {/* Decorative floating background elements (placeholder SVG items) */}
      <div className="absolute top-20 left-10 opacity-20 hidden md:block">
        <svg className="w-24 h-24 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>
      <div className="absolute top-40 right-20 opacity-20 hidden md:block">
        <svg className="w-20 h-20 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><circle cx="12" cy="12" r="10" /></svg>
      </div>
      <div className="absolute bottom-10 left-1/4 opacity-20 hidden md:block">
        <svg className="w-16 h-16 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1}><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        {/* Large Faded Icon Top Center */}
        <div className="flex justify-center mb-6 opacity-30">
          <svg className="w-32 h-32 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={0.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1a2b4b] dark:text-gray-100 mb-6 tracking-tight">
          Restaurant Point of Sale System
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed uppercase tracking-widest font-semibold">
          DRM is a <span className="text-foreground">comprehensive point of sale system</span>, it's <span className="text-foreground">Simple, Quick & Scalable</span>
        </p>
      </div>
    </section>
  );
};

export default FeaturesHeroDetailed;
