"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Point of Sale', href: '/features/pos' },
        { name: 'Inventory Sync', href: '/features/inventory' },
        { name: 'Kitchen Terminal (KDS)', href: '/features/kds' },
        { name: 'Cloud DRM', href: '/features/cloud' },
        { name: 'Rider App', href: '/features/rider' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact Us', href: '/contact' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Video Tutorials', href: '/support/videos' },
        { name: 'Legal Terms', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'FAQ', href: '/support#faq' }
      ]
    }
  ];

  return (
    <footer className="pt-24 pb-12 bg-background relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <Link href="/" className="inline-block mb-10 group relative">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400 }} className="flex items-center gap-3">
                <div className="relative h-10 w-auto md:h-12">
                  <img src={`/logo.png?v=${Date.now()}`} alt="DRM Logo" className="h-full w-auto object-contain object-left" />
                </div>
                <span className="text-2xl md:text-3xl font-black tracking-tighter gradient-text text-glow">
                  DRM
                </span>
              </motion.div>
              {/* Logo Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
            
            <p className="text-muted text-lg leading-relaxed mb-10 max-w-sm font-medium">
              We are revolutionizing restaurant operations with the most powerful cloud-based DRM and Point of Sale ecosystem.
            </p>
            
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, idx) => (
                <motion.a 
                  key={social} 
                  href="#" 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -5, scale: 1.15, rotate: 5 }}
                  className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors shadow-lg"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {footerLinks.map((group, i) => (
              <motion.div 
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + (0.1 * i), duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-surface-border" />
                  <h4 className="text-foreground font-black text-xs uppercase tracking-[0.2em]">{group.title}</h4>
                </div>
                
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="text-muted font-bold text-sm hover:text-foreground transition-colors flex items-center group/link relative"
                      >
                        <motion.span 
                          initial={{ width: 0, opacity: 0 }}
                          whileHover={{ width: 12, opacity: 1 }}
                          transition={{ ease: "easeOut", duration: 0.3 }}
                          className="h-0.5 bg-primary mr-3 rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"
                        />
                        <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="pt-10 border-t border-surface-border/40 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-muted font-bold text-xs uppercase tracking-widest">
            © {currentYear} devsinn technologies. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-black text-muted tracking-widest">
            {['Terms', 'Privacy'].map(item => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="uppercase hover:text-primary transition-colors relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            <Link href="/status" className="hover:text-primary transition-colors flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-surface-border">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
              SYSTEM STATUS
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
