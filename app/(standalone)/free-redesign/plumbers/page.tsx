import type { Metadata } from "next";
import FreeRedesignLandingPage from "@/components/FreeRedesignLandingPage";
import { FREE_REDESIGN_COPY_PLUMBERS } from "@/lib/freeRedesignCopy";

export const metadata: Metadata = {
  title: "Free Plumber Website Redesign | More Calls & Booked Jobs | OAB Web Agency",
  description:
    "Apply for a free website redesign for your plumbing business. We build a new site designed to get you more calls and booked jobs, then replace your current one. No upfront cost. Application-based for plumbing companies.",
  openGraph: {
    title: "Free Plumber Website Redesign | Built for More Calls | OAB Web Agency",
    description:
      "Apply for a free plumber website redesign designed to get more calls and booked jobs. New site, no upfront cost. Application-based for plumbing businesses.",
  },
};

export default function FreeRedesignPlumbersPage() {
  return (
    <FreeRedesignLandingPage copy={FREE_REDESIGN_COPY_PLUMBERS} vertical="plumbers" />
  );
}
