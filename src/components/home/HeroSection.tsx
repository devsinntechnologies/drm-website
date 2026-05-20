"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-background overflow-hidden h-[100vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="text-[#35A000]">RMS</span>{" "}
              <span className="text-[#0F172A]">
                All-In-One Restaurant
              </span>
              <br />
              <span className="text-[#35A000]">
                Management System
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              RMS is a modern restaurant management system by Dev’s Inn
              Technologies. It combines POS, inventory, billing,
              analytics, customer management, website integration,
              and mobile apps in one powerful platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <Link
                href="/buy-now"
                className="bg-[#35A000] hover:bg-[#2e8b00] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Buy Now!
              </Link>

              <Link
                href="/demo"
                className="border border-gray-300 hover:border-[#35A000] hover:text-[#35A000] bg-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 text-center"
              >
                Live Demo
              </Link>
            </div>
          </div>

          {/* Right Side Images */}
          <div className="relative flex justify-center items-center">

            {/* Main Desktop */}
            <div className="relative w-full max-w-[650px]">
              <Image
                src="/bhojon-all-in-one-restaurant-management-software.png"
                alt="Restaurant Dashboard"
                width={900}
                height={600}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;