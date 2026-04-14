import React from 'react';

const FeaturesChef = () => {
  const points = [
    { title: "Point of sale,", desc: "diversify revenue streams, and scale your business" },
    { title: "Integrated e-Comm,", desc: "designed to scale with your business and deliver strong ROI" },
    { title: "Integrated payments", desc: "Selling is a breeze with our intuitive, Cloud DRM" },
    { title: "Loyalty", desc: "Tailor a custom loyalty program that encourages customers to keep coming." },
    { title: "Inventory counts", desc: "Enjoy peace of mind with our reliable, secure platform" },
    { title: "Customer Display System,", desc: "Engage your customers and streamline checkouts" },
    { title: "Multi-store", desc: "Opt the right solution now, and expand as you grow" },
    { title: "Reporting", desc: "Make smarter business decisions with real-time insights" }
  ];

  return (
    <section className="py-24 bg-background border-t border-surface-border/50">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Chef Image */}
        <div className="flex-1 w-full bg-[#cca16f] rounded-2xl aspect-[4/3] relative overflow-hidden shadow-md flex items-center justify-center">
           {/* Mockup for the Chef Cartoon Image */}
           <span className="text-white/80 font-semibold italic text-sm">public/features/chef-kitchen.png</span>
        </div>

        {/* Right Info */}
        <div className="flex-1 lg:pl-8">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#e26b48] leading-tight mb-2">Simplify Operations</h3>
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a2b4b] dark:text-white leading-tight mb-10">Amplify Success</h3>
          
          <ul className="space-y-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-[#10b981] mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <p className="text-muted text-sm leading-relaxed"><strong className="text-foreground/80 font-bold">{point.title}</strong> {point.desc}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
export default FeaturesChef;
