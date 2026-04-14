import React from 'react';

const SupportService = () => {
  return (
    <section className="py-24 bg-surface/20 text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-[#e26b48]">Service</span> <span className="text-[#1a2b4b] dark:text-gray-100">& Support</span>
        </h2>
        <p className="text-muted max-w-3xl mx-auto mb-16 leading-relaxed">
          At DRM Point of Sale we not just provide you with point of sale systems but with support and training so that you will always be able to deal with any problems that may arise.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Training Box */}
          <div className="bg-surface glass-card p-10 md:p-14 rounded-xl shadow-sm border border-surface-border text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-8 relative">
              <svg className="w-10 h-10 text-[#1a2b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              <div className="absolute -bottom-1 -right-1 bg-[#10b981] rounded-full w-7 h-7 flex items-center justify-center text-white border-2 border-surface"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
            </div>
            <h3 className="text-2xl font-bold text-[#1a2b4b] dark:text-gray-100 mb-6">Training</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              We will provide you training at the time of installation to make sure all the key team members understand how to use it. You can use our interactive video and slide show to gain a better understanding of the systems and learn to operate them easily. To get you off to a start, our systems can be switched to training mode wherein real data is used for real training of employees without recording any transactions.
            </p>
            <p className="font-bold text-[#1a2b4b] dark:text-gray-200">
              92-42-35972044 <span className="text-muted font-normal">or</span> trainings@drm.com
            </p>
          </div>

          {/* Support Box */}
          <div className="bg-surface glass-card p-10 md:p-14 rounded-xl shadow-sm border border-surface-border text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-8 relative">
              <svg className="w-10 h-10 text-[#1a2b4b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <div className="absolute -bottom-1 -right-1 bg-[#10b981] rounded-full w-7 h-7 flex items-center justify-center text-white border-2 border-surface"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>
            </div>
            <h3 className="text-2xl font-bold text-[#1a2b4b] dark:text-gray-100 mb-6">Support</h3>
            <p className="text-muted text-sm leading-relaxed mb-6">
              In terms of support, there are a number of support services that we offer through different channels. <strong>These are: On-site Support, Phone Support, Remote Dial-in Support.</strong> You can choose to have any of these services included in your package. We'll be happy to discuss these options in detail with you to make sure you choose the best package for your business.
            </p>
            <p className="font-bold text-[#1a2b4b] dark:text-gray-200">
              92-42-35972044 <span className="text-muted font-normal">or</span> support@drm.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SupportService;
