import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for website design, SEO, and conversion optimization. Packages starting from $1,200. Get a custom quote for your service business website. No hidden fees.",
  keywords: [
    "website design pricing",
    "web design cost",
    "SEO pricing",
    "website redesign cost",
    "service business website pricing",
    "affordable web design",
  ],
  openGraph: {
    title: "Pricing | OAB Web Agency",
    description:
      "Transparent pricing for website design, SEO, and conversion optimization for service businesses.",
    type: "website",
    url: "https://oabwebagency.com/pricing",
  },
  alternates: {
    canonical: "https://oabwebagency.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

