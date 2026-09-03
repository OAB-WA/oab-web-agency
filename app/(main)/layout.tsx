import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites That Turn Local Searches Into Customers",
  description:
    "We build fast, conversion-focused websites for local service businesses and auto repair shops that want more calls, bookings, and quote requests. We work with auto repair shops, plumbers, HVAC companies, electricians, pest control, cleaners, landscapers, and other established service businesses.",
  keywords: [
    "web design for local service businesses",
    "auto repair website design",
    "auto repair shop websites",
    "plumber website design",
    "HVAC website",
    "contractor website",
    "local SEO",
    "conversion optimization",
    "lead generation websites",
    "service business web design",
  ],
  openGraph: {
    title: "Websites That Turn Local Searches Into Customers | OAB Web Agency",
    description:
      "We build fast, conversion-focused websites for local service businesses and auto repair shops that want more calls, bookings, and quote requests.",
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

