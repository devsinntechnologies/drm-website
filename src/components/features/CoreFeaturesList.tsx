import React from 'react';

const CoreFeaturesList = () => {
  const allFeatures = [
    {
      title: "Real-time Order Management",
      desc: "Process orders instantly across all devices without losing any data.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    },
    {
      title: "Intelligent Inventory Tracking",
      desc: "Get notified when stock runs low and auto-generate purchase orders.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    },
    {
      title: "Advanced Kitchen Display",
      desc: "Eliminate paper tickets and improve kitchen communication drastically.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
    },
    {
      title: "Customer Loyalty Programs",
      desc: "Keep your customers coming back with points, VIP tiers, and rewards.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    },
    {
      title: "Offline Mode",
      desc: "Internet down? No problem. Continue selling and auto-sync when online.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243-4.243a5 5 0 000 7.072M2.5 12a9.5 9.5 0 0019 0" />
    },
    {
      title: "In-depth Analytics & Reports",
      desc: "Make data-driven decisions with real-time insights and reports.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allFeatures.map((feat, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-surface border border-surface-border flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feat.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
              <p className="text-muted leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesList;
