import type { Metadata } from "next";
import FreeAuditLandingPage from "@/components/FreeAuditLandingPage";
import { FREE_AUDIT_COPY_PLUMBERS } from "@/lib/freeAuditCopy";

export const metadata: Metadata = {
  title: "Free Plumber Website Audit | Get More Calls & Booked Jobs",
  description:
    "Free website audit for US plumbers. See exactly what's costing you leads—speed, mobile, local SEO. Delivered in 24 hours. No sales pitch.",
  keywords: [
    "plumber website audit",
    "free website audit plumbers",
    "plumber website",
    "plumber leads",
    "plumber SEO",
    "plumber near me",
    "plumbing company website",
    "US plumbers",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free Plumber Website Audit | Get More Calls & Booked Jobs",
    description:
      "Free website audit for US plumbers. See what's costing you leads. Delivered in 24 hours. No sales pitch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Plumber Website Audit",
    description:
      "Free website audit for plumbers. Delivered in 24 hours. No sales pitch.",
  },
};

export default function FreeAuditPlumbersPage() {
  return (
    <FreeAuditLandingPage vertical="plumbers" copy={FREE_AUDIT_COPY_PLUMBERS} />
  );
}
