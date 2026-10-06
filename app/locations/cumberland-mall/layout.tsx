import type { Metadata } from "next"
import { LocationJsonLd } from "@/components/json-ld"
import { getLocation } from "@/lib/locations"

export const metadata: Metadata = {
  title:
    "Phone Repair Shop in Cumberland Mall, Tablet Repair & Laptop Repair Service in Cumberland Mall | Mobile Care USA",
  description:
    "Mobile Care USA at Cumberland Mall offers expert phone, tablet, and laptop repair services. Fast, reliable, and affordable device care to keep you connected. Visit us today for professional repair solutions in Cumberland Mall.",
  keywords: [
    "Mobile Phone Repair in Cumberland Mall",
    "iPhone repair in Cumberland Mall",
    "iPad repair in Cumberland Mall",
    "Tablet repair service in Cumberland Mall",
    "laptop repair service in Cumberland Mall",
    "smartwatch repair in Cumberland Mall",
    "screen repair service in Cumberland Mall",
  ],
  alternates: { canonical: "/locations/cumberland-mall" },
  openGraph: {
    title:
      "Phone Repair Shop in Cumberland Mall, Tablet Repair & Laptop Repair Service in Cumberland Mall | Mobile Care USA",
    description:
      "Mobile Care USA at Cumberland Mall offers expert phone, tablet, and laptop repair services. Fast, reliable, and affordable device care to keep you connected. Visit us today for professional repair solutions in Cumberland Mall.",
    url: "https://mobilecareusa.com/locations/cumberland-mall",
    images: [{ url: getLocation("cumberland-mall")?.image ?? "/store-interior.png", alt: "Mobile Care USA store" }],
    type: "website",
  },
}

export default function CumberlandMallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationJsonLd slug="cumberland-mall" />
      {children}
    </>
  )
}
