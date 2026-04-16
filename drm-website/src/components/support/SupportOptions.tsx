import React from 'react';

const SupportOptions = () => {
  const options = [
    {
      title: "Knowledge Base",
      desc: "Browse our articles and tutorials.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    },
    {
      title: "Live Chat",
      desc: "Chat with a support agent instantly.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    },
    {
      title: "Email Support",
      desc: "Send us an email and we'll reply within 2 hours.",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <div key={i} className="p-8 rounded-2xl border border-surface-border bg-surface text-center hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {opt.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{opt.title}</h3>
              <p className="text-muted">{opt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
