import React from 'react';

const LoyaltyAndInsights = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Hassle-Free Customer Loyalty & Promotions */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1 order-2 lg:order-1 relative">
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative w-full glass-card rounded-2xl flex items-center justify-center overflow-hidden">
                <img src="/home/loyalty-mockup.png" alt="Loyalty App" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Hassle-Free <span className="text-primary">Customer Loyalty</span> & Promotions
            </h3>
            <p className="text-muted text-lg mb-8">
              Drive customer loyalty with our DRM. Get your own loyalty app, save money, and improve the customer experience. Delight your guests with categorised point-based rewards and special customer offerings.
            </p>

            <ul className="space-y-4">
              {[
                "Get your own loyalty app",
                "Categorize Point-based rewards",
                "Customer offerings (Birthday / VIPs)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Insights on the Go */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              <span className="text-secondary">Insights</span> on the Go
            </h3>
            <p className="text-muted text-lg mb-8">
              Stay updated while on the go. Monitor daily operations remotely. Compare outlets, filter by time & menu, and make perfectly informed decisions.
            </p>

            <ul className="space-y-4">
              {[
                "Monitor daily operations remotely",
                "Comparison outlet, time & menu wise",
                "Do informed decisions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-foreground">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 relative">
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
              <div className="relative w-full glass-card rounded-2xl flex items-center justify-center overflow-hidden">
                <img src="/home/insights-mockup.png" alt="Insights Dashboard" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LoyaltyAndInsights;
