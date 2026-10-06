import type { Metadata } from "next"
import { LocationJsonLd } from "@/components/json-ld"
import { getLocation } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Phone Repair Shop in Lynnhaven Mall, Tablet Repair & Laptop Repair Service in Lynnhaven Mall | Mobile Care USA",
  description:
    "Mobile Care USA at Lynnhaven Mall offers expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Lynnhaven Mall.",
  keywords: [
    "Mobile Phone Repair in Lynnhaven Mall",
    "iPhone repair in Lynnhaven Mall",
    "iPad repair in Lynnhaven Mall",
    "Tablet repair service in Lynnhaven Mall",
    "laptop repair service in Lynnhaven Mall",
    "smartwatch repair in Lynnhaven Mall",
    "screen repair service in Lynnhaven Mall",
  ],
  alternates: { canonical: "/locations/lynnhaven-mall" },
  openGraph: {
    title:
      "Phone Repair Shop in Lynnhaven Mall, Tablet Repair & Laptop Repair Service in Lynnhaven Mall | Mobile Care USA",
    description:
      "Mobile Care USA at Lynnhaven Mall offers expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Lynnhaven Mall.",
    url: "https://mobilecareusa.com/locations/lynnhaven-mall",
    images: [{ url: getLocation("lynnhaven-mall")?.image ?? "/store-interior.png", alt: "Mobile Care USA store" }],
    type: "website",
  },
}

export default function LynnhavenMallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationJsonLd slug="lynnhaven-mall" />
      {children}
    </>
  )
}
