import React from 'react';

const SupportContact = () => {
  return (
    <section className="py-24 bg-background border-t border-surface-border">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Placeholder for Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-2xl leading-none">D</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-[#1a2b4b] dark:text-gray-100">Customer</span> <span className="text-[#e26b48]">Support</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[#1a2b4b] dark:text-gray-200 mb-6 font-medium">
          Call: 92-42-35972044 or email: info@drm.com
        </p>
        
        <p className="text-muted text-sm uppercase tracking-widest font-semibold">
          24/7 customer care is provided, our Experts will help you get up and running in no time.
        </p>

      </div>
    </section>
  );
};

export default SupportContact;
