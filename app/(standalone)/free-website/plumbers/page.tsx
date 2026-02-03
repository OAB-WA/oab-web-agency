import type { Metadata } from "next";
import FreeWebsiteLandingPage from "@/components/FreeWebsiteLandingPage";
import { FREE_WEBSITE_COPY_PLUMBERS } from "@/lib/freeWebsiteCopy";

export const metadata: Metadata = {
  title: "Free Plumber Website | More Calls & Booked Jobs | OAB Web Agency",
  description:
    "Apply for a free website for your plumbing business. We build a full site designed to get you more calls and booked jobs. No upfront cost. Application-based for plumbing companies.",
  openGraph: {
    title: "Free Plumber Website | Built for More Calls | OAB Web Agency",
    description:
      "Apply for a free plumber website designed to get more calls and booked jobs. Full site, no upfront cost. Application-based for plumbing businesses.",
  },
};

export default function FreeWebsitePlumbersPage() {
  return (
    <FreeWebsiteLandingPage copy={FREE_WEBSITE_COPY_PLUMBERS} vertical="plumbers" />
  );
}
