import type { Metadata } from "next"
import { LocationJsonLd } from "@/components/json-ld"
import { getLocation } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Phone Repair Shop in Southlake Mall, Tablet Repair & Laptop Repair Service in Southlake Mall | Mobile Care USA",
  description:
    "Mobile Care USA at Southlake Mall provides expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Southlake Mall.",
  keywords: [
    "Mobile Phone Repair in Southlake Mall",
    "iPhone repair in Southlake Mall",
    "iPad repair in Southlake Mall",
    "Tablet repair service in Southlake Mall",
    "laptop repair service in Southlake Mall",
    "smartwatch repair in Southlake Mall",
    "screen repair service in Southlake Mall",
  ],
  alternates: { canonical: "/locations/southlake-mall" },
  openGraph: {
    title:
      "Phone Repair Shop in Southlake Mall, Tablet Repair & Laptop Repair Service in Southlake Mall | Mobile Care USA",
    description:
      "Mobile Care USA at Southlake Mall provides expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Southlake Mall.",
    url: "https://mobilecareusa.com/locations/southlake-mall",
    images: [{ url: getLocation("southlake-mall")?.image ?? "/store-interior.png", alt: "Mobile Care USA store" }],
    type: "website",
  },
}

export default function SouthlakeMallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationJsonLd slug="southlake-mall" />
      {children}
    </>
  )
}
