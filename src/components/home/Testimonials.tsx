import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "DRM is simple for our staff having powerful features for managing restaurant operations and help us to serve faster.",
      name: "Happy Restaurant Owner",
      role: "CEO"
    },
    {
      text: "Software, hardware and support gives us peace of mind and lets us focus on our day-to-day retail business. The team has been easy to deal with.",
      name: "Retail Manager",
      role: "Operations Manager"
    },
    {
      text: "We installed the Point of sale system in 2010, we are now completely satisfied that we made the correct decision. Very user friendly.",
      name: "Cafe Director",
      role: "Founder"
    }
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Testimonials</h2>
        <h3 className="text-4xl font-bold text-foreground mb-16">What Our Clients Say?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="glass-card p-10 rounded-2xl flex flex-col items-center text-center">
              <div className="mb-6 opacity-30 text-primary">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-muted leading-relaxed mb-8 flex-1 italic">
                "{review.text}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-surface-border mb-3 border-2 border-primary overflow-hidden">
                   {/* Avatar placeholder */}
                   <div className="w-full h-full bg-gradient-to-tr from-primary to-secondary opacity-50" />
                </div>
                <h5 className="font-bold text-foreground">{review.name}</h5>
                <p className="text-sm text-muted">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
