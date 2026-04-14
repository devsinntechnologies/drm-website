import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Order Placed",
      text: "The customer places the food order; the system tracks the order & prints out the receipt."
    },
    {
      title: "Payment Completed",
      text: "The customer uses a debit or credit card to complete the payment transaction effortlessly."
    },
    {
      title: "Inventory Synced",
      text: "The DRM system tracks the inventory as soon as the orders are completed."
    },
    {
      title: "Performance Tracked",
      text: "The system tracks staff performance by evaluating the time taken to complete the order."
    },
    {
      title: "Reports Generated",
      text: "The DRM system automatically generates the final reports of sales, orders, and inventory."
    }
  ];

  return (
    <section className="py-24 bg-background border-t border-surface-border">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How Does A Restaurant DRM System Works?</h2>
          <p className="text-muted">A seamless step-by-step workflow designed to save you time and increase efficiency.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-surface-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center md:justify-between flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Point */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-surface border-4 border-primary shadow-[0_0_15px_rgba(220,38,38,0.5)] transform -translate-x-1/2 flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-foreground">{idx + 1}</span>
                </div>

                <div className="hidden md:block w-[45%]" />

                <div className="w-full pl-20 md:pl-0 md:w-[45%]">
                  <div className="glass-card p-6 rounded-2xl">
                    <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                    <p className="text-muted">{step.text}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
