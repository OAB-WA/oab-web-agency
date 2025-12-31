import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Results",
  description:
    "See real results from service businesses we've helped. Increased leads, faster websites, and better rankings.",
  openGraph: {
    title: "Case Studies & Results | OAB Web Agency",
    description:
      "See real results from service businesses we've helped. Increased leads, faster websites, and better rankings.",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

