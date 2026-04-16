import React from 'react';

const FeaturesKDS = () => {
  const tabs = [
    { title: "Kitchen Display Terminal", active: true },
    { title: "DRM TableTab", active: false },
    { title: "DRM Insights", active: false },
    { title: "DRM Rider App", active: false },
  ];

  const points = [
    "Displays Customers' Orders In Real-Time",
    "Reduce Errors, Improve Communication, And Efficiency",
    "Enhanced Concentration On Food Preparation",
    "Integration With DRM Ensures Inventory Management",
    "Accurate And Timely orders ensure an improved customer experience"
  ];

  return (
    <section className="py-24 bg-background border-t border-surface-border/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Vertical Tabs */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab, i) => (
              <div 
                key={i} 
                className={`py-4 px-6 border font-medium text-lg cursor-pointer transition-colors ${
                  tab.active 
                  ? 'bg-[#e26b48] border-[#e26b48] text-white' 
                  : 'bg-surface border-surface-border text-muted hover:border-primary/50'
                }`}
              >
                {tab.title}
              </div>
            ))}
          </div>

          {/* Column 2: Title and description */}
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2b4b] dark:text-gray-100 leading-[1.1] mb-2">
              Kitchen
            </h2>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#e26b48] leading-[1.1] mb-2">
              Display
            </h2>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1a2b4b] dark:text-gray-100 leading-[1.1] mb-6">
              Terminal
            </h2>
            <p className="text-muted text-sm leading-relaxed mt-4">
              The kitchen display terminal is one of the key components of a restaurant business
            </p>
          </div>

          {/* Column 3: Chef Image */}
          <div className="bg-[#cca16f] aspect-square lg:aspect-auto rounded-lg flex items-center justify-center relative overflow-hidden shadow-sm border border-surface-border/50">
            <span className="text-white/80 font-semibold italic text-sm">public/features/chef-kds.png</span>
          </div>

          {/* Column 4: Red Checklist */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-6">
              {points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-[#ef4444] mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-muted text-sm leading-relaxed font-medium">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesKDS;
