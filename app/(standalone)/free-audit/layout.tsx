import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get 2-3x More Phone Calls From Your Website | Free Audit",
  description:
    "Get a free website audit showing exactly what's costing you leads. Delivered in 24 hours. No sales pitch. Just clear priorities and quick wins.",
  keywords: [
    "service business websites",
    "lead-generating websites",
    "lead-generating websites",
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
      "Get a free website audit showing exactly what's costing you leads. Delivered in 24 hours. No sales pitch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get 2-3x More Phone Calls From Your Website",
    description:
      "Get a free website audit showing exactly what's costing you leads. Delivered in 24 hours. No sales pitch.",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

