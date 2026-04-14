import React from 'react';

const SupportWhy = () => {
  const points = [
    "Quick Order, fast payments, Stay mobile",
    "Table Management & Table Side Ordering",
    "Android/IOS app for real time monitoring",
    "White label ordering App",
    "Gives complete control on stock, finance",
    "Seamlessly integrated with web, app, others"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side Laptop Image (Reusing similar layout from FeaturesRecipe) */}
        <div className="flex-1 w-full bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-xl relative border border-gray-200 dark:border-gray-700">
           <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden relative flex flex-col">
              <div className="h-10 bg-[#e23f3f] w-full flex items-center px-4">
                 <span className="text-white font-bold tracking-widest text-sm">DRM</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                 <span className="text-muted/50 font-semibold italic text-sm">public/support/laptop-screenshot.png</span>
              </div>
           </div>
           <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-gray-300 dark:bg-gray-600 rounded-b-3xl" />
        </div>

        {/* Right Info */}
        <div className="flex-1 lg:pl-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#1a2b4b] dark:text-gray-100">Why</span> <span className="text-[#e26b48]">DRM</span>
          </h2>
          <p className="text-muted text-lg mb-8">
            Find the right Point of Sale Solution for your business
          </p>
          
          <ul className="space-y-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#38bdf8] flex items-center justify-center mr-4 shrink-0">
                   <svg className="w-5 h-5 text-[#38bdf8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-muted text-base">{point}</p>
              </li>
            ))}
          </ul>
          
          <a href="#" className="inline-flex flex-row items-center mt-10 text-muted hover:text-[#1a2b4b] transition-colors font-medium">
             View Details 
             <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
};
export default SupportWhy;
