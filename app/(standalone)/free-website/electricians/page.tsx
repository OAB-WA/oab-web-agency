import type { Metadata } from "next";
import FreeWebsiteLandingPage from "@/components/FreeWebsiteLandingPage";
import { FREE_WEBSITE_COPY_ELECTRICIANS } from "@/lib/freeWebsiteCopy";

export const metadata: Metadata = {
  title: "Free Electrician Website | More Calls & Booked Jobs | OAB Web Agency",
  description:
    "Apply for a free website for your electrical contracting business. We build a full site designed to get you more calls and booked jobs. No upfront cost. Application-based for electricians.",
  openGraph: {
    title: "Free Electrician Website | Built for More Calls | OAB Web Agency",
    description:
      "Apply for a free electrician website designed to get more calls and booked jobs. Full site, no upfront cost. Application-based for electrical contractors.",
  },
};

export default function FreeWebsiteElectriciansPage() {
  return (
    <FreeWebsiteLandingPage copy={FREE_WEBSITE_COPY_ELECTRICIANS} vertical="electricians" />
  );
}
