import React from 'react';

interface PricingBenefitsProps {
  title?: string;
  highlight?: string;
  subtitle?: string;
}

const PricingBenefits: React.FC<PricingBenefitsProps> = ({
  title = "Benefits",
  highlight = "of Point of Sale",
  subtitle = "Guaranteed to save you time, increase the accuracy of your inventory, and help to you make informed decisions for your business"
}) => {
  const benefits = [
    {
      title: "Connected Platform",
      desc: "Accessible from cloud, wherever you are.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    },
    {
      title: "24/7 Support",
      desc: "Real people with real solutions, here when you need them",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: "Reliable offline Mode",
      desc: "Keeps your business running when the wifi isn't",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243-4.243a5 5 0 000 7.072M2.5 12a9.5 9.5 0 0019 0" />
    },
    {
      title: "Seamless Integrations",
      desc: "Synced with partners you trust",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-surface-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          {title} <span className="text-primary">of DRM</span>
        </h2>
        
        <p className="text-muted max-w-2xl mx-auto mb-16 text-lg">
          {subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-surface-border bg-surface flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform shadow-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {benefit.icon}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-sm text-muted max-w-[200px] leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingBenefits;
