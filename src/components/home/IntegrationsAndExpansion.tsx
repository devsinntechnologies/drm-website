import React from 'react';

const IntegrationsAndExpansion = () => {
  return (
    <section className="py-24 bg-surface/20 border-y border-surface-border">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* FBR Integration */}
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full group-hover:bg-accent/20 transition-all duration-500" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Mandatory FBR DRM Integration</h3>
            <p className="text-muted leading-relaxed mb-6">
              Our DRM Software can be fully integrated with major revenue authorities ensuring compliance without the headache.
            </p>
            <div className="flex flex-wrap gap-3">
              {['FBR', 'Sindh Revenue Board (SRB)', 'Punjab Revenue Authority (PRA)', 'KPRA'].map((auth, idx) => (
                <span key={idx} className="px-4 py-2 bg-surface border border-surface-border rounded-full text-sm font-medium text-foreground">
                  {auth}
                </span>
              ))}
            </div>
          </div>

          {/* Franchise Success */}
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-500" />
            <h3 className="text-2xl font-bold text-foreground mb-4">DRM Solution for Franchise Success</h3>
            <p className="text-muted leading-relaxed mb-6">
              Scale your business globally. Focus on business growth and reduce operational cost, monitor ROI and accelerate growth.
            </p>
            <ul className="space-y-3">
              {[
                "Franchise Order Management",
                "Set credit or other rules",
                "Monitor ROI securely"
              ].map((rule, idx) => (
                <li key={idx} className="flex items-center text-muted">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default IntegrationsAndExpansion;
