import React from 'react';

const PrivacyContent = () => {
  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-10 text-center">Privacy <span className="text-secondary">Policy</span></h1>
        
        <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8 text-muted leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Information Collection</h3>
            <p>
              We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form using our DRM systems.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">How Do We Use Your Information?</h3>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To personalize your experience and better respond to your individual needs.</li>
              <li>To improve our DRM website and terminal services.</li>
              <li>To improve customer service and support needs.</li>
              <li>To process transactions securely.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">How Do We Protect Your Information?</h3>
            <p>
              We implement a variety of high-level security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information on our cloud servers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h3>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website and DRM infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
