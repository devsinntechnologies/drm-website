import React from 'react';

const EcosystemSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          The Ultimate <span className="text-primary">Online Ecosystem</span>
        </h2>
        <p className="text-muted text-lg mb-16">
          Launch a Food Ordering Website or App for your Customers. Get instant orders directly to your DRM effortlessly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Consumer App */}
          <div className="glass-card p-8 rounded-3xl group">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Consumer Website & App</h4>
            <ul className="space-y-3 mb-8">
              <li className="text-muted">Seamless Food Ordering Service</li>
              <li className="text-muted">Enhance Restaurant Awareness</li>
              <li className="text-muted">Ease of Order and Payment</li>
              <li className="text-muted">Accelerate Business Sales</li>
            </ul>
            <div className="w-full h-48 bg-surface-border/50 rounded-xl flex items-center justify-center">
              <span className="text-muted text-sm border border-dashed border-muted/50 p-4 rounded">Consumer App Mockup</span>
            </div>
          </div>

          {/* Rider App */}
          <div className="glass-card p-8 rounded-3xl group">
            <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Rider App & Delivery</h4>
            <ul className="space-y-3 mb-8">
              <li className="text-muted">Real-time rider tracking & updates</li>
              <li className="text-muted">Quick order assignment</li>
              <li className="text-muted">Route optimization to save fuel</li>
              <li className="text-muted">Faster deliveries & happy customers</li>
            </ul>
             <div className="w-full h-48 bg-surface-border/50 rounded-xl flex items-center justify-center">
              <span className="text-muted text-sm border border-dashed border-muted/50 p-4 rounded">Rider App Mockup</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcosystemSection;
