"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com",
    },
  ];

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Blog", href: "/blog" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Legal Terms", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "FAQ", href: "/support#faq" },
      ],
    },
  ];

  return (
    <>
      <footer className="pt-20 flex justify-between pb-10 relative overflow-hidden bg-[#FFFFFF] text-[#08162D]">
        {/* Pure White Background */}
        <div className="absolute inset-0 bg-[#FFFFFF] z-0" />
        
        {/* Subtle top border using Dark Navy Blue / Royal Blue shade */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#0055FF]/20 to-transparent" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-8 group relative">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-auto md:h-16">
                    <img
                      src="/Group_11-removebg-preview.png"
                      alt="DRM Logo"
                      className="h-full w-auto object-contain object-left bg-transparent"
                    />
                  </div>
                </div>
              </Link>

              <p className="text-[#08162D]/70 text-base leading-relaxed mb-8 max-w-sm font-medium">
                We are revolutionizing restaurant operations with the most
                powerful cloud-based DRM and Point of Sale ecosystem.
              </p>

              <div className="flex gap-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-10 h-10 rounded-xl bg-[#08162D]/5 border border-[#0055FF]/20
                      flex items-center justify-center
                      text-lg text-[#0055FF]
                      hover:text-[#FFFFFF] hover:bg-[#0055FF]
                      hover:border-[#0055FF]
                      transition-all duration-300
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-3 gap-8">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#0055FF]" />
                    <h4 className="text-[#0055FF] font-bold text-xs uppercase tracking-[0.2em]">
                      {group.title}
                    </h4>
                  </div>

                  <ul className="space-y-4">
                    {group.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-[#08162D]/80 hover:text-[#0055FF] font-semibold text-sm transition-colors flex items-center group relative"
                        >
                          <span className="h-0.5 w-0 bg-[#0055FF] mr-0 rounded-full group-hover:w-3 group-hover:mr-3 transition-all duration-300" />
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
          <div className="pt-8 border-t border-[#08162D]/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[#08162D]/60 font-bold text-xs uppercase tracking-widest text-center md:text-left">
              © {currentYear} devsinn technologies. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs font-black text-[#08162D]/80 tracking-widest">
              {["Terms", "Privacy"].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="uppercase hover:text-[#0055FF] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#0055FF] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;