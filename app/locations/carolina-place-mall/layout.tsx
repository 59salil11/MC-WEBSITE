import type { Metadata } from "next"
import { LocationJsonLd } from "@/components/json-ld"
import { getLocation } from "@/lib/locations"

export const metadata: Metadata = {
  title:
    "Phone Repair Shop in Carolina Place Mall, Tablet Repair & Laptop Repair Service in Carolina Place Mall | Mobile Care USA",
  description:
    "Mobile Care USA at Carolina Place Mall provides expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Carolina Place Mall.",
  keywords: [
    "Mobile Phone Repair in Carolina Place Mall",
    "iPhone repair in Carolina Place Mall",
    "iPad repair in Carolina Place Mall",
    "Tablet repair service in Carolina Place Mall",
    "laptop repair service in Carolina Place Mall",
    "smartwatch repair in Carolina Place Mall",
    "screen repair service in Carolina Place Mall",
  ],
  alternates: { canonical: "/locations/carolina-place-mall" },
  openGraph: {
    title:
      "Phone Repair Shop in Carolina Place Mall, Tablet Repair & Laptop Repair Service in Carolina Place Mall | Mobile Care USA",
    description:
      "Mobile Care USA at Carolina Place Mall provides expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Carolina Place Mall.",
    url: "https://mobilecareusa.com/locations/carolina-place-mall",
    images: [{ url: getLocation("carolina-place-mall")?.image ?? "/store-interior.png", alt: "Mobile Care USA store" }],
    type: "website",
  },
}

export default function CarolinaPlaceMallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationJsonLd slug="carolina-place-mall" />
      {children}
    </>
  )
}
