"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Sarah Rahman',
    role: 'Cafe Owner',
    text: 'DRM transformed our kitchen operations. The speed of order processing and inventory accuracy is now on another level.',
    rating: 5,
    emoji: '☕',
    color: 'bg-red-500',
  },
  {
    name: 'Ahmed Malik',
    role: 'Restaurant Manager',
    text: 'The best investment we made this year. I can monitor all branches directly from my phone.',
    rating: 5,
    emoji: '🍽️',
    color: 'bg-orange-500',
  },
  {
    name: 'Zeba Khan',
    role: 'Founder, Foodie Hub',
    text: 'Scaling our franchise became super easy. Their support team is always there.',
    rating: 5,
    emoji: '🚀',
    color: 'bg-red-500',
  },
  {
    name: 'Omar Siddiqui',
    role: 'Chain Restaurant Owner',
    text: 'The KDS reduced kitchen errors and improved our speed significantly.',
    rating: 5,
    emoji: '🏆',
    color: 'bg-yellow-500',
  },
  {
    name: 'Fatima Noor',
    role: 'F&B Director',
    text: 'FBR integration is now effortless. Everything is automated and stress-free.',
    rating: 5,
    emoji: '📊',
    color: 'bg-red-500',
  },
  {
    name: 'Bilal Chaudhry',
    role: 'Franchise Manager',
    text: 'Managing multiple outlets is now simple and fully controlled from one dashboard.',
    rating: 5,
    emoji: '🌟',
    color: 'bg-orange-500',
  },
];

const doubled = reviews;

function TiltCard({ review }: { review: typeof reviews[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -12;
    setRotate({ x, y });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      className="w-[340px] shrink-0 px-2"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        className={`p-8 rounded-[28px] relative group overflow-hidden shadow-lg transition-all duration-500 h-[260px] flex flex-col justify-between ${review.color}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Big quote mark */}
        <div className="absolute top-4 right-6 text-8xl font-black leading-none text-white/10 select-none pointer-events-none">
          "
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, j) => (
            <motion.svg
              key={j}
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: j * 0.08, type: 'spring', stiffness: 500 }}
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>

        {/* Review text */}
        <p className="text-base text-white italic mb-6 leading-relaxed">
          "{review.text}"
        </p>

        {/* User info */}
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-xl shadow-md">
            {review.emoji}
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">{review.name}</h4>
            <p className="text-xs text-white/80">{review.role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="py-8 md:py-10 bg-gradient-to-tr from-red-200 via-orange-100 to-orange-100 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 mb-5 md:mb-6 text-center">
        <span className="section-label">Wall of Love</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Trusted by <span className="text-primary">Restaurateurs</span>
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Join 1000+ restaurants running smarter and faster with DRM.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-18 gap-x-3">
    {reviews.map((review, i) => (
      <TiltCard key={i} review={review} />
    ))}
  </div>
</div>
    </section>
  );
};

export default Testimonials;