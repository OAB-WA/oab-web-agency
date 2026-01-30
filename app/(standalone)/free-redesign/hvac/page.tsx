import type { Metadata } from "next";
import FreeRedesignLandingPage from "@/components/FreeRedesignLandingPage";
import { FREE_REDESIGN_COPY_HVAC } from "@/lib/freeRedesignCopy";

export const metadata: Metadata = {
  title: "Free HVAC Website Redesign | More Calls & Booked Jobs | OAB Web Agency",
  description:
    "Apply for a free website redesign for your HVAC company. We build a new site designed to get you more calls and booked jobs, then replace your current one. No upfront cost. Application-based for HVAC businesses.",
  openGraph: {
    title: "Free HVAC Website Redesign | Built for More Calls | OAB Web Agency",
    description:
      "Apply for a free HVAC website redesign designed to get more calls and booked jobs. New site, no upfront cost. Application-based for HVAC companies.",
  },
};

export default function FreeRedesignHVACPage() {
  return (
    <FreeRedesignLandingPage copy={FREE_REDESIGN_COPY_HVAC} vertical="hvac" />
  );
}
