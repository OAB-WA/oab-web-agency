import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website redesign, performance optimization, local SEO, and conversion optimization for service-based businesses. Get more leads, calls, and booked jobs. Specializing in plumbers, HVAC, electricians, and contractors.",
  keywords: [
    "website redesign",
    "performance optimization",
    "local SEO services",
    "conversion optimization",
    "service business websites",
    "plumber website services",
    "HVAC website optimization",
  ],
  openGraph: {
    title: "Services | OAB Web Agency",
    description:
      "Website redesign, performance optimization, local SEO, and conversion optimization for service-based businesses.",
    type: "website",
    url: "https://oabwebagency.com/services",
  },
  alternates: {
    canonical: "https://oabwebagency.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

