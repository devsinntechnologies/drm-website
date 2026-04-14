import React from 'react';

const SupportHero = () => {
  return (
    <section className="pt-32 pb-16 bg-surface/30 text-center px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <h1 className="text-5xl font-extrabold text-foreground mb-6">How can we <span className="text-primary">help</span> you?</h1>
      <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
        Our dedicated support team is available 24/7. Explore our resources or get in touch with us directly.
      </p>
      
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto relative">
        <input 
          type="text" 
          placeholder="Search for articles, guides, or help topics..." 
          className="w-full py-4 pl-12 pr-4 rounded-xl bg-surface border border-surface-border text-foreground focus:outline-none focus:border-primary transition-colors"
        />
        <svg className="w-6 h-6 text-muted absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
    </section>
  );
};

export default SupportHero;
