import type { Metadata } from "next"
import { LocationJsonLd } from "@/components/json-ld"
import { getLocation } from "@/lib/locations"

export const metadata: Metadata = {
  title:
    "Phone Repair Shop in Great Lakes Mall, Tablet repair & Laptop Repair Service in Great Lakes Mall | Mobile Care USA",
  description:
    "Get fast, reliable phone repair in Great Lakes Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
  keywords: [
    "Mobile Phone Repair in Great Lakes Mall",
    "iPhone repair in Great Lakes Mall",
    "iPad repair in Great Lakes Mall",
    "Tablet repair service in Great Lakes Mall",
    "laptop repair service in Great Lakes Mall",
    "smartwatch repair in Great Lakes Mall",
    "screen repair service in Great Lakes Mall",
  ],
  alternates: { canonical: "/locations/great-lakes-crossing" },
  openGraph: {
    title:
      "Phone Repair Shop in Great Lakes Mall, Tablet repair & Laptop Repair Service in Great Lakes Mall | Mobile Care USA",
    description:
      "Get fast, reliable phone repair in Great Lakes Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
    url: "https://mobilecareusa.com/locations/great-lakes-crossing",
    images: [{ url: getLocation("great-lakes-crossing")?.image ?? "/store-interior.png", alt: "Mobile Care USA store" }],
    type: "website",
  },
}

export default function GreatLakesMallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationJsonLd slug="great-lakes-crossing" />
      {children}
    </>
  )
}
