import type { Metadata } from "next";
import FreeAuditLandingPage from "@/components/FreeAuditLandingPage";
import { FREE_AUDIT_COPY_HVAC } from "@/lib/freeAuditCopy";

export const metadata: Metadata = {
  title: "Free HVAC Website Audit | Get More Calls & Booked Jobs",
  description:
    "Free website audit for US HVAC companies. See exactly what's costing you leads—speed, mobile, local SEO. Delivered in 24 hours. No sales pitch.",
  keywords: [
    "HVAC website audit",
    "free website audit HVAC",
    "HVAC company website",
    "HVAC leads",
    "HVAC SEO",
    "furnace repair near me",
    "heating and cooling website",
    "US HVAC companies",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free HVAC Website Audit | Get More Calls & Booked Jobs",
    description:
      "Free website audit for US HVAC companies. See what's costing you leads. Delivered in 24 hours. No sales pitch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HVAC Website Audit",
    description:
      "Free website audit for HVAC companies. Delivered in 24 hours. No sales pitch.",
  },
};

export default function FreeAuditHVACPage() {
  return (
    <FreeAuditLandingPage vertical="hvac" copy={FREE_AUDIT_COPY_HVAC} />
  );
}
