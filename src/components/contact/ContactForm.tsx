import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-8">Get in touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mr-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Our Headquarters</h4>
                  <p className="text-muted">10-10, Software Technology Park,<br />Ferozpur Road, Lahore, Pakistan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mr-4 text-secondary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Email Us</h4>
                  <p className="text-muted">info@drm.com<br />support@drm.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-xl bg-surface border border-surface-border flex items-center justify-center mr-4 text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Call Us</h4>
                  <p className="text-muted">+92 (42) 35972044<br />+92 345 7588886</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-primary text-foreground" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-primary text-foreground" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-primary text-foreground" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-surface border border-surface-border rounded-xl focus:outline-none focus:border-primary text-foreground" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary-hover shadow-lg transition-transform transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
