import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit for Texas Plumbers | Get 2-3x More Emergency Calls",
  description:
    "Texas plumbing companies: Get a free website audit showing how many emergency calls you're missing. Websites delivered in 1-2 weeks. Integrates with ServiceTitan & Jobber.",
  openGraph: {
    title: "Free Website Audit for Texas Plumbers | OAB Web Agency",
    description:
      "Get a free website audit showing how many emergency calls you're missing. Websites delivered in 1-2 weeks.",
  },
};

export default function PlumbersLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

