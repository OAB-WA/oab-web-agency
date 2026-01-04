import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageAnalytics from "@/components/PageAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "OAB Web Agency | High-Converting Websites for Service Businesses",
    template: "%s | OAB Web Agency",
  },
  description:
    "We build high-performance websites that turn visitors into calls and booked jobs. Specializing in website design, SEO, and conversion optimization for service-based businesses.",
  keywords: [
    "web design",
    "website development",
    "service business websites",
    "local SEO",
    "conversion optimization",
    "lead generation",
    "plumber websites",
    "HVAC websites",
    "contractor websites",
  ],
  authors: [{ name: "OAB Web Agency" }],
  creator: "OAB Web Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oabwebagency.com",
    siteName: "OAB Web Agency",
    title: "OAB Web Agency | High-Converting Websites for Service Businesses",
    description:
      "We build high-performance websites that turn visitors into calls and booked jobs. Specializing in website design, SEO, and conversion optimization for service-based businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OAB Web Agency | High-Converting Websites for Service Businesses",
    description:
      "We build high-performance websites that turn visitors into calls and booked jobs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/light/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/light/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/light/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/light/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/light/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">
        <GoogleAnalytics />
        <SchemaMarkup />
        <PageAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
