import React from 'react';

const FeaturesSalient = () => {
  const salientFeatures = [
    { title: "Quick Setup Custom Menu", icon: "path" },
    { title: "Infinite Modifiers", icon: "path" },
    { title: "Loyalty Programs", icon: "path" },
    { title: "Kitchen Management", icon: "path" },
    { title: "Product Management", icon: "path" },
    { title: "Inventory Management", icon: "path" },
    { title: "Ingredient Level Control", icon: "path" },
    { title: "Table Management", icon: "path" },
    { title: "Mobile Order Takers", icon: "path" },
    { title: "Self Service Kiosk", icon: "path" },
    { title: "Payment Flexibility", icon: "path" },
    { title: "Customer Feedback", icon: "path" },
    { title: "Multi User", icon: "path" },
    { title: "Branch / Franchise Management", icon: "path" },
    { title: "Wait-queue Management", icon: "path" },
    { title: "Secure & Reliable System", icon: "path" },
    { title: "Touch Screen Enabled", icon: "path" },
    { title: "Order Booking via Tab or iPad", icon: "path" },
    { title: "Analytical Reports", icon: "path" },
    { title: "Tax / Discount Options", icon: "path" }
  ];

  return (
    <section className="py-24 bg-background border-t border-surface-border/50">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-[#1a2b4b] dark:text-gray-100">Salient</span> <span className="text-[#e26b48]">Features</span>
        </h2>
        <p className="text-muted font-medium text-sm md:text-base mb-16 uppercase tracking-wider">
          One-Stop Restaurant Management Solution
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {salientFeatures.map((feat, i) => (
            <div key={i} className="bg-surface glass-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-surface-border flex items-center justify-start gap-4">
              <div className="w-14 h-14 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                {/* Placeholder Icon */}
                <svg className="w-8 h-8 text-primary opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-[#1a2b4b] dark:text-gray-100 font-bold text-[15px] leading-tight text-left">
                {feat.title.split(' ').map((word, index) => (
                   <React.Fragment key={index}>
                     {word}
                     {index === 1 && <br />}
                     {index !== 1 && ' '}
                   </React.Fragment>
                ))}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSalient;
