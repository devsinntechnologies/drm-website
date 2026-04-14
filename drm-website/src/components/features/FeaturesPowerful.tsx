import React from 'react';

const FeaturesPowerful = () => {
  const rightCards = [
    {
      title: "Fast Order Taking",
      desc: "Quickly take and send orders to the kitchen — perfect for dine-in, takeaway, or delivery.",
    },
    {
      title: "Works on All Devices",
      desc: "Run your DRM on tablet, phone, or desktop — stay flexible on the floor or counter.",
    },
    {
      title: "Fully Custom Menus",
      desc: "Easily edit menu items, sizes, modifiers, and pricing anytime — even during service.",
    },
    {
      title: "Modern, Easy Interface",
      desc: "A clean layout your team can learn in minutes — no tech skills needed.",
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Text */}
        <div className="flex-1 lg:pr-12">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#1a2b4b] dark:text-gray-100 mb-4 leading-[1.1]">
            Powerful <br />Features to <span className="text-[#e26b48]">Run Your Restaurant</span>
          </h2>
          <p className="text-muted mb-6 mt-8 leading-relaxed text-lg">
            Your restaurant will run faster and smoother with these powerful tools. Designed to simplify operations, boost sales, and improve customer service — all in one system.
          </p>
          <p className="text-muted leading-relaxed text-lg mb-8">
            From faster order-taking to real-time sales and smart inventory — our DRM gives you everything you need to manage your restaurant with ease and boost your bottom line.
          </p>
          <a href="#" className="flex items-center text-muted hover:text-primary transition-colors font-semibold">
            Read more about restaurant DRM features
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>

        {/* Right Side: Masonry-style Staggered Cards */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          <div className="flex flex-col gap-6 mt-0 sm:mt-12">
            {rightCards.slice(0, 2).map((card, i) => (
              <div key={i} className="bg-surface glass-card p-8 rounded-tr-[50px] rounded-br-[10px] rounded-bl-[50px] rounded-tl-[10px] shadow-sm hover:shadow-lg transition-shadow border border-surface-border relative">
                {/* Mock Icon Circle */}
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 relative">
                  <svg className="w-8 h-8 text-[#1a2b4b] dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#fb565b] rounded-full border-2 border-surface flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#1a2b4b] dark:text-gray-100 mb-3">{card.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {rightCards.slice(2, 4).map((card, i) => (
              <div key={i} className="bg-surface glass-card p-8 rounded-tl-[50px] rounded-bl-[10px] rounded-br-[50px] rounded-tr-[10px] shadow-sm hover:shadow-lg transition-shadow border border-surface-border relative">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-6 relative">
                  <svg className="w-8 h-8 text-[#1a2b4b] dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#fb565b] rounded-full border-2 border-surface flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#1a2b4b] dark:text-gray-100 mb-3">{card.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesPowerful;
