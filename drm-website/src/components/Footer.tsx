import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-surface-border pt-16 pb-8 text-muted mt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="DRM Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-foreground tracking-wide">DRM</span>
            </div>
            <p className="max-w-md">
              Complete DRM solution for restaurants, retail stores & grocery shops. Manage your entire business in one place seamlessly.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-bold mb-4">Legal Info</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="text-muted hover:text-primary hover:underline transition-all underline-offset-4 decoration-primary/30">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-muted hover:text-primary hover:underline transition-all underline-offset-4 decoration-primary/30">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-surface-border text-sm flex flex-col md:flex-row items-center justify-between text-muted">
          <p>&copy; {new Date().getFullYear()} DRM Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
