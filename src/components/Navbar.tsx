"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPhoneCall, FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<"products" | "services" | "contact" | null>(null);

  return (
    <header className="w-full bg-white border-b border-[#0055FF]/10 sticky top-0 z-50 shadow-sm m-0 p-0 relative">
      
      {/* Light Blue Left & Right Side Effects */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#0055FF]/10 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#0055FF]/10 to-transparent pointer-events-none z-0"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-1.5 flex items-center justify-between relative z-10">
        
        {/* Logo & Brand Name */}
        <div className="flex items-center">
          {/* Spacing reduced further with gap-0.5 */}
          <Link href="/" className="flex items-center gap-0.5 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11">
              <Image 
                src="/logo.png" 
                alt="DEVSINN Logo" 
                fill 
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            {/* Digi in Black, Nizam in Light Blue, Single Word */}
            <span className="text-lg sm:text-xl font-black tracking-tight flex items-center">
              <span className="text-black">Digi</span>
              <span className="text-[#0055FF]">Nizam</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 font-bold text-sm text-[#08162D]">
          <Link href="/" className="text-[#0055FF] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#0055FF] transition-colors">About</Link>
          
          {/* Products Mega Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0055FF] transition-colors py-2 font-bold cursor-pointer">
              Products <FiChevronDown size={14} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
            </button>

            {isProductsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 grid grid-cols-3 gap-8 mt-1 z-50 text-left">
                <div>
                  <h4 className="text-[#0055FF] text-xs mb-4 border-b border-gray-100 pb-2">
                    DIGI SOFT (RETAIL)
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-600 font-bold">
                    <li>
                      <Link 
                        href="/products/restaurant" 
                        onClick={() => setIsProductsOpen(false)}
                        className="hover:text-[#0055FF] transition-colors block"
                      >
                        Restaurant Solution
                      </Link>
                    </li>
                    <li><Link href="/products/supermarket" className="hover:text-[#0055FF] transition-colors block">Supermarket Solution</Link></li>
                    <li><Link href="/products/pharmacy" className="hover:text-[#0055FF] transition-colors block">Medical & Pharmacy Solution</Link></li>
                    <li><Link href="/products/books" className="hover:text-[#0055FF] transition-colors block">Books & Publishers Solution</Link></li>
                    <li><Link href="/products/bakery" className="hover:text-[#0055FF] transition-colors block">Sweets & Bakery Solution</Link></li>
                    <li><Link href="/products/distribution" className="hover:text-[#0055FF] transition-colors block">Distribution Solution</Link></li>
                    <li><Link href="/products/automobile" className="hover:text-[#0055FF] transition-colors block">Automobile Solution</Link></li>
                    <li><Link href="/products/apparel" className="hover:text-[#0055FF] transition-colors block">Apparel & Garments Solution</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#0055FF] font-black text-xs uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                    MORE SOLUTIONS
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-600 font-bold mb-6">
                    <li><Link href="/products/shoes" className="hover:text-[#0055FF] transition-colors block">Shoes & Bags Solution</Link></li>
                    <li><Link href="/products/crockery" className="hover:text-[#0055FF] transition-colors block">Crockery & Cutlery Solution</Link></li>
                    <li><Link href="/products/furniture" className="hover:text-[#0055FF] transition-colors block">Furniture Solution</Link></li>
                    <li><Link href="/products/vape" className="hover:text-[#0055FF] transition-colors block">Vape Shops</Link></li>
                    <li><Link href="/products/beauty" className="hover:text-[#0055FF] transition-colors block">Beauty & Cosmetics</Link></li>
                  </ul>

                  <h4 className="text-[#0055FF] font-black text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                    DIGI SOFT (INDUSTRIES)
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600 font-bold">
                    <li><Link href="/products/rice" className="hover:text-[#0055FF] transition-colors block">Rice ERP</Link></li>
                    <li><Link href="/products/flour" className="hover:text-[#0055FF] transition-colors block">Flour ERP</Link></li>
                    <li><Link href="/products/sugar" className="hover:text-[#0055FF] transition-colors block">Sugar ERP</Link></li>
                    <li><Link href="/products/textile" className="hover:text-[#0055FF] transition-colors block">Textile ERP</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[#0055FF] font-black text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                    CRM (FIELD FORCE)
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600 font-bold mb-4">
                    <li><Link href="/products/complaint" className="hover:text-[#0055FF] transition-colors block">Complaint Management System</Link></li>
                    <li><Link href="/products/sales-mgmt" className="hover:text-[#0055FF] transition-colors block">Sales Management System</Link></li>
                    <li><Link href="/products/tracking" className="hover:text-[#0055FF] transition-colors block">User Tracking Management</Link></li>
                  </ul>

                  <h4 className="text-[#0055FF] font-black text-xs uppercase tracking-wider mb-3 border-b border-gray-100 pb-2">
                    DIGI CLOUD & TRAC
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600 font-bold">
                    <li><Link href="/products/vps" className="hover:text-[#0055FF] transition-colors block">VPS Server & Dedicated Server</Link></li>
                    <li><Link href="/products/fbr" className="hover:text-[#0055FF] transition-colors block">FBR Digital Invoicing & Fiscalization</Link></li>
                    <li><Link href="/products/genprice" className="hover:text-[#0055FF] transition-colors block">GEN PRICE & GEN FINANCIAL</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0055FF] transition-colors py-2 font-bold cursor-pointer">
              Services <FiChevronDown size={14} className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[650px] bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-4 mt-1 z-50 text-left">
                <Link href="/services/software-solution" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">Software Solution</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Contemporary software solutions</p>
                </Link>

                <Link href="/services/hardware-support" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">Hardware Support</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Data recovery & diagnostics</p>
                </Link>

                <Link href="/services/mis-audit" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">MIS Audit</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Analyzing business activities</p>
                </Link>

                <Link href="/services/training" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">Training</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Technical & helpdesk support</p>
                </Link>

                <Link href="/services/web-development" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">Web Development</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Ecommerce & Web Apps</p>
                </Link>

                <Link href="/services/digital-marketing" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">Digital Marketing</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Market Audit, SEO, SEM, SMM</p>
                </Link>

                <Link href="/services/system-support" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">System Support</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Technical support & maintenance</p>
                </Link>

                <Link href="/services/hr-digitalization" className="p-3 rounded-xl border border-gray-100 hover:border-[#0055FF] hover:bg-[#0055FF]/5 transition-all group">
                  <h5 className="text-xs font-bold text-[#08162D] group-hover:text-[#0055FF] mb-1">HR Digitalization</h5>
                  <p className="text-[10px] text-gray-500 font-medium">Exploring New Digital Territories</p>
                </Link>
              </div>
            )}
          </div>

          <Link href="/clientele" className="hover:text-[#0055FF] transition-colors">Clientele</Link>
          
          {/* Contact Dropdown Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setIsContactOpen(true)}
            onMouseLeave={() => setIsContactOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0055FF] transition-colors py-2 font-bold cursor-pointer">
              Contact <FiChevronDown size={14} className={`transition-transform duration-200 ${isContactOpen ? 'rotate-180' : ''}`} />
            </button>

            {isContactOpen && (
              <div className="absolute top-full left-0 w-56 bg-white border border-gray-200 shadow-2xl rounded-2xl py-3 mt-1 z-50 text-left">
                <ul className="space-y-1 text-xs font-bold text-gray-700">
                  <li><Link href="/contact" className="px-4 py-2 hover:bg-[#0055FF]/5 hover:text-[#0055FF] transition-colors block">Contact Us</Link></li>
                  <li><Link href="/demo" className="px-4 py-2 hover:bg-[#0055FF]/5 hover:text-[#0055FF] transition-colors block">Get a Free Demo</Link></li>
                  <li><Link href="/partner" className="px-4 py-2 hover:bg-[#0055FF]/5 hover:text-[#0055FF] transition-colors block">Become a Partner</Link></li>
                  <li><Link href="/hiring" className="px-4 py-2 hover:bg-[#0055FF]/5 hover:text-[#0055FF] transition-colors block">We are hiring</Link></li>
                  <li><Link href="/privacy" className="px-4 py-2 hover:bg-[#0055FF]/5 hover:text-[#0055FF] transition-colors block">Privacy policy</Link></li>
                  <li><Link href="/blog" className="px-4 py-2 hover:bg-[#0055FF]/5 hover:text-[#0055FF] transition-colors block">Blog</Link></li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Call Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <a 
            href="tel:021111436832" 
            className="border border-[#0055FF]/20 hover:border-[#0055FF] px-4 py-1.5 rounded-xl flex items-center gap-2.5 transition-all bg-white shadow-[0_2px_10px_-2px_rgba(0,85,255,0.1)] hover:shadow-md"
          >
            <div className="w-8 h-8 rounded-lg bg-[#0055FF]/10 text-[#0055FF] flex items-center justify-center">
              <FiPhoneCall size={16} />
            </div>
            <div className="text-left">
              <span className="block text-[9px] uppercase font-bold text-gray-400 tracking-wider">Call Anytime</span>
              <span className="block text-xs font-black text-[#08162D]">03-000000000</span>
            </div>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-[#08162D] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 space-y-1.5 shadow-xl max-h-[70vh] overflow-y-auto relative z-20">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block font-bold text-xs text-[#0055FF] py-1.5"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block font-bold text-xs text-[#08162D] hover:text-[#0055FF] py-1.5"
          >
            About
          </Link>

          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={() => setOpenMobileSection(openMobileSection === "products" ? null : "products")}
              className="flex items-center justify-between w-full font-bold text-xs text-[#08162D] hover:text-[#0055FF] py-1.5"
            >
              <span>Products & Solutions</span>
              <FiChevronDown size={12} className={`transition-transform duration-200 ${openMobileSection === "products" ? "rotate-180" : ""}`} />
            </button>
            {openMobileSection === "products" && (
              <div className="pl-3 pt-1 pb-0.5 space-y-1">
                <Link href="/products/restaurant" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Restaurant</Link>
                <Link href="/products/supermarket" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Supermarket</Link>
                <Link href="/products/pharmacy" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Pharmacy</Link>
                <Link href="/products/books" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Books</Link>
                <Link href="/products/bakery" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Bakery</Link>
                <Link href="/products/distribution" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Distribution</Link>
                <Link href="/products/automobile" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Automobile</Link>
                <Link href="/products/apparel" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Apparel</Link>
                <Link href="/products/shoes" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Shoes & Bags</Link>
                <Link href="/products/crockery" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Crockery</Link>
                <Link href="/products/furniture" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Furniture</Link>
                <Link href="/products/vape" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Vape Shops</Link>
                <Link href="/products/beauty" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Beauty & Cosmetics</Link>
                <Link href="/products/rice" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Rice ERP</Link>
                <Link href="/products/flour" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Flour ERP</Link>
                <Link href="/products/sugar" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Sugar ERP</Link>
                <Link href="/products/textile" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Textile ERP</Link>
                <Link href="/products/complaint" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Complaint Management</Link>
                <Link href="/products/sales-mgmt" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Sales Management</Link>
                <Link href="/products/tracking" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">User Tracking</Link>
                <Link href="/products/vps" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">VPS & Dedicated</Link>
                <Link href="/products/fbr" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">FBR Digital</Link>
                <Link href="/products/genprice" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">GEN Price & Financial</Link>
              </div>
            )}
          </div>

          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={() => setOpenMobileSection(openMobileSection === "services" ? null : "services")}
              className="flex items-center justify-between w-full font-bold text-xs text-[#08162D] hover:text-[#0055FF] py-1.5"
            >
              <span>Services</span>
              <FiChevronDown size={12} className={`transition-transform duration-200 ${openMobileSection === "services" ? "rotate-180" : ""}`} />
            </button>
            {openMobileSection === "services" && (
              <div className="pl-3 pt-1 pb-0.5 space-y-1">
                <Link href="/services/software-solution" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Software Solution</Link>
                <Link href="/services/hardware-support" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Hardware Support</Link>
                <Link href="/services/mis-audit" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">MIS Audit</Link>
                <Link href="/services/training" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Training</Link>
                <Link href="/services/web-development" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Web Development</Link>
                <Link href="/services/digital-marketing" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Digital Marketing</Link>
                <Link href="/services/system-support" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">System Support</Link>
                <Link href="/services/hr-digitalization" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">HR Digitalization</Link>
              </div>
            )}
          </div>

          <Link 
            href="/clientele" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="block font-bold text-xs text-[#08162D] hover:text-[#0055FF] py-1.5"
          >
            Clientele
          </Link>

          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={() => setOpenMobileSection(openMobileSection === "contact" ? null : "contact")}
              className="flex items-center justify-between w-full font-bold text-xs text-[#08162D] hover:text-[#0055FF] py-1.5"
            >
              <span>Contact</span>
              <FiChevronDown size={12} className={`transition-transform duration-200 ${openMobileSection === "contact" ? "rotate-180" : ""}`} />
            </button>
            {openMobileSection === "contact" && (
              <div className="pl-3 pt-1 pb-0.5 space-y-1">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Contact Us</Link>
                <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Get a Free Demo</Link>
                <Link href="/partner" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Become a Partner</Link>
                <Link href="/hiring" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">We are hiring</Link>
                <Link href="/privacy" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Privacy Policy</Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-xs text-gray-600 hover:text-[#0055FF] py-0.5">Blog</Link>
              </div>
            )}
          </div>
          <div className="pt-2 border-t border-gray-100">
            <a 
              href="tel:021111436832" 
              className="w-full bg-[#0055FF] hover:bg-[#0044cc] text-white font-black text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-lg shadow-[#0055FF]/25 transition-all text-center block"
            >
              Call 03-000000000
            </a>
          </div>
        </div>
      )}
    </header>
  );
}