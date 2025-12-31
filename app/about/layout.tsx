import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "OAB Web Agency specializes in high-converting websites for service-based businesses. We focus on performance, SEO, and conversion optimization.",
  openGraph: {
    title: "About Us | OAB Web Agency",
    description:
      "OAB Web Agency specializes in high-converting websites for service-based businesses.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

