import type { Metadata } from "next"
import { LocationJsonLd } from "@/components/json-ld"
import { getLocation } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Phone Repair Shop in Perimeter Mall, Tablet Repair & Laptop Repair Service in Perimeter Mall | Mobile Care USA",
  description:
    "Get fast, reliable phone repair at Perimeter Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
  keywords: [
    "Mobile Phone Repair in Perimeter Mall",
    "iPhone repair in Perimeter Mall",
    "iPad repair in Perimeter Mall",
    "Tablet repair service in Perimeter Mall",
    "laptop repair service in Perimeter Mall",
    "smartwatch repair in Perimeter Mall",
    "screen repair service in Perimeter Mall",
  ],
  alternates: { canonical: "/locations/perimeter-mall" },
  openGraph: {
    title:
      "Phone Repair Shop in Perimeter Mall, Tablet Repair & Laptop Repair Service in Perimeter Mall | Mobile Care USA",
    description:
      "Get fast, reliable phone repair at Perimeter Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
    url: "https://mobilecareusa.com/locations/perimeter-mall",
    images: [{ url: getLocation("perimeter-mall")?.image ?? "/store-interior.png", alt: "Mobile Care USA store" }],
    type: "website",
  },
}

export default function PerimeterMallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationJsonLd slug="perimeter-mall" />
      {children}
    </>
  )
}
