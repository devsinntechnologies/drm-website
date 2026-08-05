import React from "react";
import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BRAND_LOGO_SRC } from "@/components/common/Logo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import StickyDemoBar from "@/components/common/StickyDemoBar";

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
  title: "DigiNizam — AI-Powered ERP & POS for Modern Retail",
  description:
    "FBR-ready POS, smart inventory, and multi-branch control for restaurants, pharmacies, and retail across Pakistan. Book a free demo.",
  icons: {
    icon: BRAND_LOGO_SRC,
  },
  openGraph: {
    title: "DigiNizam — AI-Powered ERP & POS",
    description: "Run every store from one intelligent platform. FBR-ready, cloud-synced, built for Pakistan.",
    type: "website",
  },
};

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
      <body className="min-h-screen flex flex-col m-0 p-0 overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingWidgets />
        <StickyDemoBar />
        <Footer />
      </body>
    </html>
  );
}
