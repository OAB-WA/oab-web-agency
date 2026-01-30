import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Redesign (Case Study Program) | Service-Based Businesses | OAB Web Agency",
  description:
    "Apply for a free website redesign built to get you more calls and booked jobs. We build a new site and replace your current one; no upfront cost. Application-based; not everyone qualifies. For service-based businesses.",
  openGraph: {
    title: "Free Website Redesign | Built for More Calls & Booked Jobs | OAB Web Agency",
    description:
      "Apply for a free website redesign designed to get you more calls and booked jobs. New site, no upfront cost. Application-based for service-based businesses.",
  },
};

export default function FreeRedesignLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
