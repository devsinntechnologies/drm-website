import React from 'react';

const FeaturesModules = () => {
  const modules = [
    "Vendor Management",
    "Purchase Management",
    "Inventory Control",
    "Customer Management",
    "Financials Management",
    "BI & Analytics",
    "Sales & Point of Sale",
    "Recipe Management",
    "Loyalty & Reward Points"
  ];

  return (
    <section className="py-24 bg-surface/30 border-t border-surface-border/50">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Title and List */}
        <div className="flex-1">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-10 leading-tight">
            <span className="text-[#e26b48]">Point of Sale</span> <br />
            <span className="text-[#1a2b4b] dark:text-gray-100">Modules</span>
          </h2>
          
          <ul className="space-y-5">
            {modules.map((mod, i) => (
              <li key={i} className="flex items-center">
                <svg className="w-5 h-5 text-[#10b981] mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-muted text-[15px] font-medium">
                  {mod}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Graphic/Image */}
        <div className="flex-1 w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 relative flex items-center justify-center min-h-[400px]">
           <span className="text-muted/50 font-semibold italic text-sm text-center">
             public/features/cashier-desk.png <br/> (Cartoon Cashier Graphic)
           </span>
        </div>

      </div>
    </section>
  );
};

export default FeaturesModules;
