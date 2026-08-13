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
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4WD5FEECW3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-4WD5FEECW3');`,
          }}
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "y0pl00mkld");`,
          }}
        ></script>
      </head>
      <body className="min-h-screen flex flex-col m-0 p-0 overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingWidgets />
        {/* <StickyDemoBar /> */}
        <Footer />
      </body>
    </html>
  );
}
