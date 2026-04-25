"use client";
import React from 'react';
import Link from 'next/link';

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
    <footer className="pt-20 pb-10 bg-background relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />

      <div className="absolute inset-0 aurora-bg opacity-25" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8 group relative">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-auto md:h-12">
                  <img src={`/logo.png?v=${Date.now()}`} alt="DRM Logo" className="h-full w-auto object-contain object-left" />
                </div>
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-primary">
                  DRM
                </span>
              </div>
            </Link>

            <p className="text-muted text-base leading-relaxed mb-8 max-w-sm font-medium">
              We are revolutionizing restaurant operations with the most powerful cloud-based DRM and Point of Sale ecosystem.
            </p>

            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, idx) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-xs font-bold text-muted hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {social.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
            {footerLinks.map((group, i) => (
              <div key={group.title}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary/70" />
                  <h4 className="text-foreground font-black text-xs uppercase tracking-[0.2em]">{group.title}</h4>
                </div>

                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted font-semibold text-sm hover:text-foreground transition-colors flex items-center group relative"
                      >
                        <span className="h-0.5 w-0 bg-primary mr-0 rounded-full group-hover:w-3 group-hover:mr-3 transition-all duration-300" />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-surface-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
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

            <Link href="/status" className="hover:text-primary transition-colors flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-surface-border text-[11px]">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              SYSTEM STATUS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
