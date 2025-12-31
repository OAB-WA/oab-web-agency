import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 15-minute strategy call or get a free website audit. Let's discuss how we can help your service business get more leads. Get in touch today.",
  keywords: [
    "contact web design agency",
    "free website audit",
    "web design consultation",
    "service business web design contact",
  ],
  openGraph: {
    title: "Contact Us | OAB Web Agency",
    description:
      "Book a free 15-minute strategy call or get a free website audit.",
    type: "website",
    url: "https://oabwebagency.com/contact",
  },
  alternates: {
    canonical: "https://oabwebagency.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

