import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website (Case Study Program) | Service-Based Businesses | OAB Web Agency",
  description:
    "Apply for a free website built to get you more calls and booked jobs. Full site, no upfront cost. Application-based; not everyone qualifies. For service-based businesses.",
  openGraph: {
    title: "Free Website | Built for More Calls & Booked Jobs | OAB Web Agency",
    description:
      "Apply for a free website designed to get you more calls and booked jobs. Full site, no upfront cost. Application-based for service-based businesses.",
  },
};

export default function FreeWebsiteLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
