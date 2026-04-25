"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Sarah Rahman',
    role: 'Cafe Owner',
    text: 'DRM transformed our kitchen operations. The speed of order processing and the accuracy of our inventory is now on another level.',
    rating: 5,
    emoji: '☕',
  },
  {
    name: 'Ahmed Malik',
    role: 'Restaurant Manager',
    text: 'The best investment we made this year. The insights dashboard helps me monitor sales across all three branches from my phone.',
    rating: 5,
    emoji: '🍽️',
  },
  {
    name: 'Zeba Khan',
    role: 'Founder, Foodie Hub',
    text: 'Scaling our franchise was a breeze with DRM integration. Their support team is literally available whenever we need them.',
    rating: 5,
    emoji: '🚀',
  },
  {
    name: 'Omar Siddiqui',
    role: 'Chain Restaurant Owner',
    text: 'The KDS alone saved us 30% on kitchen errors. Our cook times are faster and customers leave happier than ever before.',
    rating: 5,
    emoji: '🏆',
  },
  {
    name: 'Fatima Noor',
    role: 'F&B Director',
    text: 'FBR integration was seamless. We went from dreading tax season to having it fully automated. No stress at all!',
    rating: 5,
    emoji: '📊',
  },
  {
    name: 'Bilal Chaudhry',
    role: 'Franchise Manager',
    text: 'Managing 7 outlets used to feel impossible. With DRM we have everything visible and controlled from one place.',
    rating: 5,
    emoji: '🌟',
  },
];

const doubled = [...reviews, ...reviews];

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
        className="glass-card p-8 rounded-[28px] border-gradient relative group overflow-hidden backdrop-blur-2xl bg-surface/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] transition-shadow duration-500"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Big quote mark */}
        <div className="absolute top-4 right-6 text-8xl font-black leading-none text-primary/5 group-hover:text-primary/10 transition-colors select-none pointer-events-none">
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
              className="w-4 h-4 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>

        <p className="text-base text-muted italic mb-6 leading-relaxed">"{review.text}"</p>

        <div className="flex items-center gap-3 mt-auto">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl shadow-lg animate-energy-pulse">
            {review.emoji}
          </div>
          <div>
            <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
            <p className="text-xs text-muted">{review.role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <section className="py-32 bg-surface/20 relative overflow-hidden">
      {/* Heavy Noise Overlay */}
      <div className="noise-overlay opacity-10" />

      {/* Aurora backdrops */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="section-label">Wall of Love</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
            Trusted by <span className="text-primary">Restaurateurs</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Join 1000+ restaurants that run smoother, smarter, and more profitably with DRM.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative overflow-hidden mb-6" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div className="animate-marquee gap-0 flex">
          {doubled.map((review, i) => (
            <TiltCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 reversed */}
      <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <div
          className="flex gap-0"
          style={{
            animation: 'marquee 50s linear infinite reverse',
            width: 'max-content',
          }}
        >
          {[...doubled].reverse().map((review, i) => (
            <TiltCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
