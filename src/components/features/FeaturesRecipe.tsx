import React from 'react';

const FeaturesRecipe = () => {
  const points = [
    { title: "Exceptional user interface & experience" },
    { title: "Cloud DRM Works on any Device with advanced offline mode" },
    { title: "Analytics Customize your reports to know how your store is performing." },
    { title: "Streamline inventory prevent stockouts, and grow profits." },
    { title: "DRM makes it easy to add new outlets as your business grows" }
  ];

  return (
    <section className="py-24 bg-surface/30">
      
      <div className="container mx-auto px-4 max-w-5xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b4b] dark:text-gray-100 mb-4">
          Discover how <span className="text-[#e26b48]">DRM</span> system can help!
        </h2>
        <p className="text-muted mt-6 max-w-3xl mx-auto">
          <strong>Sign up now</strong> and Get instant access, Includes unlimited employees, unlimited customers, unlimited inventory items and free weekday phone support during business hours.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-16 mt-20">
        
        {/* Left Side */}
        <div className="flex-1 lg:pr-8">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#1a2b4b] dark:text-gray-100 leading-tight mb-10">
            The Recipe for <br/><span className="text-[#e26b48]">Restaurant Success</span>
          </h3>
          <ul className="space-y-6">
            {points.map((point, i) => (
              <li key={i} className="flex items-start">
                <svg className="w-6 h-6 text-[#10b981] mr-4 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                <p className="text-muted text-lg leading-relaxed"><span className="font-semibold text-foreground/80">{point.title.split(' ')[0]} {point.title.split(' ')[1]}</span> {point.title.split(' ').slice(2).join(' ')}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Laptop Image */}
        <div className="flex-1 w-full bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-2xl relative border border-gray-200 dark:border-gray-700">
           {/* Mockup Screen inner */}
           <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden relative flex flex-col">
              {/* Header Bar */}
              <div className="h-10 bg-[#e23f3f] w-full flex items-center px-4">
                 <span className="text-white font-bold tracking-widest text-sm">DRM</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                 <span className="text-muted/50 font-semibold italic text-sm">public/features/laptop-screenshot.png</span>
              </div>
           </div>
           {/* Laptop Bottom Lip */}
           <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-gray-300 dark:bg-gray-600 rounded-b-3xl" />
        </div>

      </div>
    </section>
  );
};

export default FeaturesRecipe;
