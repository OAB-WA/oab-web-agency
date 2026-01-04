import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Converting Websites for Service Businesses",
  description:
    "Your website should bring you leads — not just look good. We build high-performance websites that turn visitors into calls and booked jobs for service-based businesses. We work with plumbers, HVAC companies, electricians, landscapers, roofers, and other service businesses.",
  keywords: [
    "web design for service businesses",
    "plumber website design",
    "HVAC website",
    "contractor website",
    "local SEO",
    "conversion optimization",
    "lead generation websites",
    "service business web design",
  ],
  openGraph: {
    title: "High-Converting Websites for Service Businesses | OAB Web Agency",
    description:
      "Your website should bring you leads — not just look good. We build high-performance websites that turn visitors into calls and booked jobs.",
    type: "website",
    url: "https://oabwebagency.com",
  },
  alternates: {
    canonical: "https://oabwebagency.com",
  },
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

