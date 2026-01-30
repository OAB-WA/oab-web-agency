import type { Metadata } from "next";
import FreeRedesignLandingPage from "@/components/FreeRedesignLandingPage";
import { FREE_REDESIGN_COPY_ELECTRICIANS } from "@/lib/freeRedesignCopy";

export const metadata: Metadata = {
  title: "Free Electrician Website Redesign | More Calls & Booked Jobs | OAB Web Agency",
  description:
    "Apply for a free website redesign for your electrical contracting business. We build a new site designed to get you more calls and booked jobs, then replace your current one. No upfront cost. Application-based for electricians.",
  openGraph: {
    title: "Free Electrician Website Redesign | Built for More Calls | OAB Web Agency",
    description:
      "Apply for a free electrician website redesign designed to get more calls and booked jobs. New site, no upfront cost. Application-based for electrical contractors.",
  },
};

export default function FreeRedesignElectriciansPage() {
  return (
    <FreeRedesignLandingPage copy={FREE_REDESIGN_COPY_ELECTRICIANS} vertical="electricians" />
  );
}
