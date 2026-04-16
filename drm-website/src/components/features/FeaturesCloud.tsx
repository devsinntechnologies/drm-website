import React from 'react';

const FeaturesCloud = () => {
  const cards = [
    {
       title: "All your data in one place",
       desc: "Your products, inventory, orders, and customers are automatically updated and backed up in the cloud.",
       icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
       title: "Track your sales and growth",
       desc: "Detailed business reports help you to analyze and gain insight into your products, orders and payments.",
       icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    },
    {
       title: "Customized Requirements",
       desc: "DRM makes it easy for you to stay ahead of the competition, Integrate your business specific requirements.",
       icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          <span className="text-[#e26b48]">Cloud Based</span> <span className="text-[#1a2b4b] dark:text-gray-100">DRM</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {cards.map((card, i) => (
             <div key={i} className="glass-card bg-surface p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-surface-border flex flex-col items-center">
               <div className="w-20 h-20 mb-6 text-foreground opacity-80 flex items-center justify-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  </svg>
               </div>
               <h4 className="text-xl font-bold text-[#1a2b4b] dark:text-gray-100 mb-4">{card.title}</h4>
               <p className="text-muted text-sm leading-relaxed">{card.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
export default FeaturesCloud;
