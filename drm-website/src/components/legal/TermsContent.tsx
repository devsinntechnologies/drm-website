import React from 'react';

const TermsContent = () => {
  return (
    <section className="pt-32 pb-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-10 text-center">Terms and <span className="text-primary">Conditions</span></h1>
        
        <div className="glass-card p-8 md:p-12 rounded-3xl space-y-8 text-muted leading-relaxed">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h3>
            <p>
              By accessing and using DRM systems ("Service"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of the terms, you are prohibited from using the Service.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">2. Use License</h3>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on DRM's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">3. Subscription and Billing</h3>
            <p>
              Our Service is billed on a subscription basis. You will be billed in advance on a recurring and periodic basis depending on the type of subscription plan you select when purchasing a Subscription.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h3>
            <p>
              In no event shall DRM or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DRM's website.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at legal@drm.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsContent;
