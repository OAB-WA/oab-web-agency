import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

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
};

export default function StandaloneLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}

