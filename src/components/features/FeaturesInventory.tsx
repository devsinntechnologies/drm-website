import React from 'react';

const FeaturesInventory = () => {
  const points = [
    { title: "Manage unlimited stores", desc: "with the #1 DRM Software" },
    { title: "DRM has no limit,", desc: "Manage unlimited items/products" },
    { title: "Cloud DRM", desc: "Manage variations with ease colours, sizes, batches" },
    { title: "DRM Software,", desc: "Inventory is adjusted with each sale, purchase and return action" },
    { title: "Bulk Import & Export", desc: "Use template to build your product list in minutes." },
    { title: "Real time updates", desc: "Whether sell in-store, online or on-the-go" },
    { title: "Advance Inventory", desc: "Manage separate inventory for each and every store location" },
    { title: "Multiple outlets", desc: "It takes only minutes to set-up and start using new outlet or store" },
    { title: "Real-time sync", desc: "No more multiple inventories or guesswork" },
  ];

  return (
    <section className="py-24 bg-surface/30 border-t border-surface-border/50">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side Tablet Image */}
        <div className="flex-1 w-full bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-lg relative border border-gray-200 dark:border-gray-700">
           <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden relative flex items-center justify-center">
              <span className="text-muted/50 font-semibold italic text-sm">public/features/tablet-inventory.png</span>
           </div>
        </div>

        {/* Right Info */}
        <div className="flex-1 lg:pl-8">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#e26b48] mb-2 leading-tight">
            Inventory
          </h2>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#1a2b4b] dark:text-gray-100 mb-10 leading-tight">
            Management
          </h2>
          
          <ul className="space-y-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-5 h-5 text-[#10b981] mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-muted text-[15px] leading-relaxed">
                  <strong className="text-foreground/80 font-semibold">{point.title}</strong> {point.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default FeaturesInventory;
