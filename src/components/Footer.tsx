"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaApple } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#08162D] pt-8 pb-6 border-t border-gray-200 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0055FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4 relative z-10">
        
        {/* Column 1: Brand Logo & Description */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-1 mb-5">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo.png" 
                alt="Brand Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <span className="text-3xl font-black tracking-tight">
              <span className="text-black">Digi</span>
              <span className="text-[#0055FF]">Nizam</span>
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-sm font-normal">
            We believe in teamwork and together we all can achieve more. We always focus on excellence by connecting with our clients as business partners, executing your thoughts and delivering your needs so you can focus on your core activities.
          </p>
          <div className="flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all shadow-sm">
              <FaFacebookF size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all shadow-sm">
              <FaInstagram size={15} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all shadow-sm">
              <FaTwitter size={15} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all shadow-sm">
              <FaLinkedinIn size={15} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-white hover:bg-[#0055FF] hover:border-[#0055FF] transition-all shadow-sm">
              <FaYoutube size={15} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-[#08162D] text-base font-medium uppercase tracking-wider mb-4 pl-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 font-medium">
            <li><Link href="/products/ecommerce" className="hover:text-[#0055FF] transition-colors">ECommerce Solutions</Link></li>
            <li><Link href="/products/field-force" className="hover:text-[#0055FF] transition-colors">CRM (FIELD FORCE)</Link></li>
            <li><Link href="/services/hr-digitalization" className="hover:text-[#0055FF] transition-colors">HR DIGITALIZATION</Link></li>
            <li><Link href="/demo" className="hover:text-[#0055FF] transition-colors">Get a Free Demo</Link></li>
            <li><Link href="/products/financial" className="hover:text-[#0055FF] transition-colors">Financial</Link></li>
            <li><Link href="/privacy" className="hover:text-[#0055FF] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-[#08162D] text-base font-medium uppercase tracking-wider mb-4 pl-3">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 font-medium">
            <li><Link href="/services/dedicated-server" className="hover:text-[#0055FF] transition-colors">Dedicated Server</Link></li>
            <li><Link href="/services/web-development" className="hover:text-[#0055FF] transition-colors">WEB DEVELOPMENT</Link></li>
            <li><Link href="/services/sms-branding" className="hover:text-[#0055FF] transition-colors">SMS Branding Solution</Link></li>
            <li><Link href="/services/app-development" className="hover:text-[#0055FF] transition-colors">Applications Development</Link></li>
            <li><Link href="/services/digital-marketing" className="hover:text-[#0055FF] transition-colors">DIGITAL MARKETING</Link></li>
            <li><Link href="/services/system-support" className="hover:text-[#0055FF] transition-colors">SYSTEM SUPPORT</Link></li>
            <li><Link href="/services/gen-price" className="hover:text-[#0055FF] transition-colors">PRICE</Link></li>
          </ul>
        </div>

        {/* Column 4: Technology Partners & App Download */}
        <div>
          <h3 className="text-[#08162D] text-base font-medium uppercase tracking-wider mb-4 pl-3">
            Technology Partners
          </h3>
          <div className="space-y-2 mb-5">
            <div className="bg-[#0055FF]/10 hover:bg-[#0055FF]/20 border border-[#0055FF]/20 transition-all p-2 rounded-xl text-center text-xs font-medium text-[#08162D]">
              PECS PARTNER
            </div>
            <div className="bg-[#0055FF]/10 hover:bg-[#0055FF]/20 border border-[#0055FF]/20 transition-all p-2 rounded-xl text-center text-xs font-medium text-[#08162D]">
              BIN JAFFER ENTERPRISES
            </div>
            <div className="bg-[#0055FF]/10 hover:bg-[#0055FF]/20 border border-[#0055FF]/20 transition-all p-2 rounded-xl text-center text-xs font-medium text-[#08162D]">
              CREATIVE SOLUTIONS
            </div>
          </div>

          <h4 className="text-[#08162D] text-base font-medium uppercase tracking-wider mb-2">Download Our App</h4>
          <div className="flex items-center gap-2">
            <a 
              href="#" 
              className="bg-[#0055FF] hover:bg-[#0044cc] px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 text-white transition-all text-xs font-medium uppercase tracking-widest shadow-lg shadow-[#0055FF]/20 w-full text-center"
            >
              <FaApple size={16} /> App Store
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Bar & Powered By */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 border-t border-gray-200 pt-6 text-sm text-gray-500 font-medium relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; {currentYear} All Rights Reserved.</div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-[#08162D]">Powered By Devsinn</span>
          <Image 
            src="/devsinnlogo0.svg" 
            alt="Devsinn Logo" 
            width={90} 
            height={30} 
            className="object-contain"
            priority
          />
        </div>
      </div>
    </footer>
  );
}