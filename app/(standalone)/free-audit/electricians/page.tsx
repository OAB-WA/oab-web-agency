import type { Metadata } from "next";
import FreeAuditLandingPage from "@/components/FreeAuditLandingPage";
import { FREE_AUDIT_COPY_ELECTRICIANS } from "@/lib/freeAuditCopy";

export const metadata: Metadata = {
  title: "Free Electrician Website Audit | Get More Calls & Booked Jobs",
  description:
    "Free website audit for US electricians. See exactly what's costing you leads—speed, mobile, local SEO. Delivered in 24 hours. No sales pitch.",
  keywords: [
    "electrician website audit",
    "free website audit electricians",
    "electrician website",
    "electrician leads",
    "electrician SEO",
    "electrician near me",
    "electrical contractor website",
    "US electricians",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Free Electrician Website Audit | Get More Calls & Booked Jobs",
    description:
      "Free website audit for US electricians. See what's costing you leads. Delivered in 24 hours. No sales pitch.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Electrician Website Audit",
    description:
      "Free website audit for electricians. Delivered in 24 hours. No sales pitch.",
  },
};

export default function FreeAuditElectriciansPage() {
  return (
    <FreeAuditLandingPage vertical="electricians" copy={FREE_AUDIT_COPY_ELECTRICIANS} />
  );
}
