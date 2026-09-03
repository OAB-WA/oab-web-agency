import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Repair Shop Website Design & Local SEO | OAB Web Agency",
  description:
    "We build fast, high-converting websites for independent auto repair shops. Turn local drivers searching on Google into phone calls, scheduled bays, and high-ticket repair jobs.",
  keywords: [
    "auto repair website design",
    "auto repair shop websites",
    "mechanic web design",
    "auto repair SEO",
    "auto repair marketing",
    "auto repair shop lead generation",
    "brake repair website",
  ],
  openGraph: {
    title: "Auto Repair Shop Website Design & Local SEO | OAB Web Agency",
    description:
      "Fast, conversion-focused websites for independent auto repair shops that want more calls and scheduled bays.",
    type: "website",
    url: "https://oabwebagency.com/auto-repair-websites",
  },
  alternates: {
    canonical: "https://oabwebagency.com/auto-repair-websites",
  },
};

export default function AutoRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
