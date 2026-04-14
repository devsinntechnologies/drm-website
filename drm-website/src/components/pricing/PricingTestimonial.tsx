import React from 'react';

const PricingTestimonial = () => {
  return (
    <section className="py-24 bg-surface/30 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
          What Our <span className="text-primary">Clients Say?</span>
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-center mt-12 py-12">
          
          {/* Abstract dark shape background with logo */}
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#1a202c] relative flex items-center justify-center -mr-16 z-0 shadow-2xl">
             {/* Map background placeholder (light blue map effect) */}
             <div className="absolute inset-0 bg-blue-100/5 rounded-full pointer-events-none" />
             
             {/* The Logo Circle */}
             <div className="w-32 h-32 rounded-full bg-primary border-4 border-white flex items-center justify-center shadow-lg -translate-x-12">
               <span className="text-xl font-bold text-white tracking-widest uppercase">LOGO</span>
             </div>
             
             {/* Little floating decorative circles */}
             <div className="absolute top-1/2 -left-8 w-4 h-4 rounded-full bg-secondary" />
             <div className="absolute top-[60%] -left-12 w-10 h-10 rounded-full bg-accent/40" />
          </div>

          {/* The white quote card */}
          <div className="relative z-10 w-full max-w-lg -mt-16 md:mt-0 md:-ml-12 p-8 md:p-12 glass-card bg-surface rounded-xl border border-surface-border shadow-[-10px_0_30px_rgba(0,0,0,0.05)] text-center md:text-left">
            <span className="text-primary text-4xl leading-none absolute top-6 left-6 font-serif">"</span>
            <p className="text-muted leading-relaxed relative z-10 mb-6 italic pl-8 pr-4">
              DRM is simple for our staff having powerful features for managing cafe operations and help us to serve faster.
            </p>
            <span className="text-primary text-4xl leading-none absolute bottom-12 right-6 font-serif">"</span>
            <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest text-center mt-4">Wasabi</p>
          </div>
          
        </div>

        {/* Slider Details */}
        <div className="flex justify-center mt-8 gap-2">
          <div className="w-10 h-2 rounded-full bg-primary" />
          <div className="w-3 h-2 rounded-full bg-muted/30" />
          <div className="w-3 h-2 rounded-full bg-muted/30" />
        </div>

      </div>
    </section>
  );
};

export default PricingTestimonial;
