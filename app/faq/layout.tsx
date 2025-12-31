import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about OAB Web Agency's website design, development, and SEO services for service-based businesses. Get answers about pricing, timelines, and our process.",
  keywords: [
    "web design FAQ",
    "website design questions",
    "SEO FAQ",
    "service business website FAQ",
    "web design cost FAQ",
  ],
  openGraph: {
    title: "FAQ | OAB Web Agency",
    description:
      "Frequently asked questions about website design, development, and SEO services for service-based businesses.",
    type: "website",
    url: "https://oabwebagency.com/faq",
  },
  alternates: {
    canonical: "https://oabwebagency.com/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

