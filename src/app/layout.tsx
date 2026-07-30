import React from "react";
import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DigiNizam — Complete ERP & POS System",
  description: "DigiNizam is a comprehensive cloud-based Point of Sale and ERP system. Manage orders, inventory, KDS, and more — all in one place.",
  icons: {
    icon: "/logo.png", // Apni logo file ko public folder mein is naam se rakhain (e.g., public/logo.png)
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col m-0 p-0 overflow-x-hidden bg-white text-[#08162D]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}