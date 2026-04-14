import React from 'react';

const SmartFeatures = () => {
  return (
    <section className="py-24 bg-surface/30 relative flex flex-col gap-24">
      <div className="container mx-auto px-4">
        
        {/* Section 1: Cloud DRM (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
          <div className="flex-1 w-full relative">
             <div className="w-full aspect-[4/3] rounded-2xl bg-surface border border-surface-border glass-card flex items-center justify-center p-8">
               {/* Replace with cloud DRM image */}
               <div className="text-center">
                 <svg className="w-24 h-24 text-primary opacity-80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                 <p className="text-muted text-sm mt-4">public/home/cloud-pos.svg</p>
               </div>
             </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              Centralized <span className="text-primary">Cloud Based DRM System</span>
            </h2>
            <h4 className="text-lg font-bold text-muted mb-4 uppercase tracking-wide">Advanced Offline Mode</h4>
            <ul className="space-y-4">
              {[
                "No need to worry about internet disconnection anymore.",
                "Data remains save on our live server and your local server as well",
                "Easy to Setup and Maintain"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="shrink-0 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center mt-1 mr-4">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <p className="text-lg text-muted">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 2: KDS (Text Left, Image Right) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mb-24">
          <div className="flex-1 w-full relative">
             <div className="w-full aspect-[4/3] rounded-2xl bg-surface border border-surface-border glass-card flex items-center justify-center p-8">
               {/* Replace with kitchen character image */}
               <div className="text-center">
                 <svg className="w-24 h-24 text-secondary opacity-80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>
                 <p className="text-muted text-sm mt-4">public/home/kds.svg</p>
               </div>
             </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              Kitchen <span className="text-primary">Display Terminal</span>
            </h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              Manage your menu, mark orders as ready, process payments, and track revenue, all from a single, intuitive interface. No more juggling between multiple screens.
            </p>
            <ul className="space-y-4">
              {[
                "Fire Faster",
                "Better communication",
                "Manage Whole Kitchen",
                "Measure and Improve cook timings",
                "Track individual cooked items",
                "Top customer service"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="shrink-0 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center mt-1 mr-4"></span>
                  <p className="text-lg text-muted">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 3: Table Ordering (Image Left, Text Right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 w-full relative">
             <div className="w-full aspect-[4/3] rounded-2xl bg-surface border border-surface-border glass-card flex items-center justify-center px-4 py-8">
               {/* Replace with Phone over Table image */}
               <div className="text-center">
                 <svg className="w-24 h-24 text-accent opacity-80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                 <p className="text-muted text-sm mt-4">public/home/table-ordering.svg</p>
               </div>
             </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              Restaurant <span className="text-primary">Table-Side</span> Ordering
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "Enhanced customer experience",
                "Increase Revenue with Upselling",
                "Improve Table Turnover with Faster Ordering",
                "Improved Order Accuracy",
                "Increase Productivity"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="shrink-0 w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center mt-1 mr-4"></span>
                  <p className="text-lg text-muted">{item}</p>
                </li>
              ))}
            </ul>

            {/* Store Buttons */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-surface border border-surface-border hover:border-primary hover:bg-surface-border transition-all rounded-lg text-foreground">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.07-.46-2.06-.48-3.13 0-1.01.45-2.03.62-2.96-.28-3.17-3.08-4.88-8.23-1.63-11.45C7.54 7.6 8.92 6.95 10.15 7c1.1.05 2.14.65 2.7 1.15.2.18.39.38.56.59.18-.21.37-.41.57-.6 1.05-.98 2.5-1.5 3.86-1.5 1.7.07 3.09.84 3.96 2 .05.07.1.15.15.22-1.92 1.02-2.6 3.01-1.35 4.67 1.05 1.39 2.58 1.94 3.23 2-2.28 3.51-4.74 5.75-6.78 4.75zM12.03 6.64c-.16-1.6 1.05-3.23 2.57-3.48 1.15-.19 2.22.44 2.8 1.48.51.92.57 2.05.08 2.92-1.28 2.27-3.8 2.37-4.99 1.48-.37-.28-.51-.38-.46-2.4z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-surface border border-surface-border hover:border-primary hover:bg-surface-border transition-all rounded-lg text-foreground">
                <svg className="w-6 h-6 text-[#3DDC84]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 15.187l-4.526-2.607 4.545-2.607c3.961 2.254 3.968 2.26 3.968 2.26s-3.928 2.229-3.987 2.954m-12.091 2.16l8.03-8.03 4.14 2.385-11.517 6.638c-.145-.246-.967-.803-.653-.993m.133-14.73l11.536 6.637-4.149 2.385-8.04-8.03c-.29-.204.436-.934.653-.992M3.197 4.116c-.024.186-.039.387-.039.605v14.542c0 .216.015.415.039.601l8.361-8.362-8.361-8.386z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SmartFeatures;
