import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get 2-3x More Phone Calls From Your Website | Free Audit",
  description:
    "High-converting websites for service businesses. Get 2-3x more phone calls and booked jobs. Free website audit shows exactly how many leads you're missing. Delivered in 1-2 weeks.",
  keywords: [
    "service business websites",
    "lead-generating websites",
    "high-converting websites",
    "website for plumbers",
    "website for HVAC companies",
    "website for electricians",
    "local SEO websites",
    "fast loading websites",
    "mobile-friendly websites",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Get 2-3x More Phone Calls From Your Website | Free Audit",
    description:
      "High-converting websites for service businesses. Get 2-3x more phone calls and booked jobs. Free website audit.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get 2-3x More Phone Calls From Your Website",
    description: "High-converting websites for service businesses. Free website audit.",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

