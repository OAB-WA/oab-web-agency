import type { Metadata } from "next";
import FreeWebsiteLandingPage from "@/components/FreeWebsiteLandingPage";
import { FREE_WEBSITE_COPY_HVAC } from "@/lib/freeWebsiteCopy";

export const metadata: Metadata = {
  title: "Free HVAC Website | More Calls & Booked Jobs | OAB Web Agency",
  description:
    "Apply for a free website for your HVAC company. We build a full site designed to get you more calls and booked jobs. No upfront cost. Application-based for HVAC businesses.",
  openGraph: {
    title: "Free HVAC Website | Built for More Calls | OAB Web Agency",
    description:
      "Apply for a free HVAC website designed to get more calls and booked jobs. Full site, no upfront cost. Application-based for HVAC companies.",
  },
};

export default function FreeWebsiteHVACPage() {
  return (
    <FreeWebsiteLandingPage copy={FREE_WEBSITE_COPY_HVAC} vertical="hvac" />
  );
}
