import React from "react";
import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationJsonLd } from "@/lib/seo";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "POS Software Pakistan | DigiNizam",
    template: "%s",
  },
  description:
    "DigiNizam POS software helps businesses manage billing, inventory, orders and daily operations from one platform. Explore the solution and book a demo.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "POS Software Pakistan | DigiNizam",
    description:
      "DigiNizam POS software helps businesses manage billing, inventory, orders and daily operations from one platform.",
    url: SITE_URL,
    siteName: "DigiNizam",
    type: "website",
    images: [
      {
        url: "/og-logo.png",
        width: 1200,
        height: 1200,
        alt: "DigiNizam",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/og-logo.png"],
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
        <Footer />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
