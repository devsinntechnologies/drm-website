import React from 'react';
import Link from 'next/link';

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic",
      price: "$29",
      period: "/month",
      desc: "Perfect for small cafes and startups.",
      features: ["1 Terminal", "Basic Reporting", "Email Support", "Cloud Backup"],
      highlighted: false
    },
    {
      title: "Standard",
      price: "$79",
      period: "/month",
      desc: "Ideal for growing restaurants and retail.",
      features: ["5 Terminals", "Advanced Analytics", "24/7 Support", "Inventory Management", "Loyalty Features"],
      highlighted: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      desc: "For large franchises and chains.",
      features: ["Unlimited Terminals", "Custom Integrations", "Dedicated Manager", "API Access", "White Labeling"],
      highlighted: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-8 rounded-3xl border flex flex-col ${plan.highlighted ? 'glass-card border-primary shadow-[0_0_30px_rgba(220,38,38,0.15)] relative scale-105 z-10' : 'bg-surface border-surface-border'}`}>
              {plan.highlighted && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Most Popular</div>}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
              <p className="text-muted text-sm mb-6 h-10">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted font-medium">{plan.period}</span>
              </div>
              
              <ul className="mb-10 space-y-4 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-muted">
                    <svg className={`w-5 h-5 mr-3 ${plan.highlighted ? 'text-primary' : 'text-secondary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/demo" className="w-full">
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlighted ? 'bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg' : 'bg-surface-border text-foreground hover:bg-muted/20'}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
