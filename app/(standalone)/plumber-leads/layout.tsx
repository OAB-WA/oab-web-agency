import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit for US Plumbing Companies | Get 2-3x More Emergency Calls",
  description:
    "US plumbing companies: Get a free website audit showing how many emergency calls you're missing. Delivered in 24 hours. No sales pitch. See exactly what's costing you leads.",
  openGraph: {
    title: "Free Website Audit for US Plumbing Companies | OAB Web Agency",
    description:
      "Get a free website audit showing how many emergency calls you're missing. Delivered in 24 hours. No sales pitch.",
  },
};

export default function PlumberLeadsLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
