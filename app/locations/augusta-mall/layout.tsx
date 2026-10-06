import type { Metadata } from "next"
import { LocationJsonLd } from "@/components/json-ld"
import { getLocation } from "@/lib/locations"

export const metadata: Metadata = {
  title: "Phone Repair Shop in Augusta Mall, Tablet repair & Laptop Repair Service in Augusta Mall | Mobile Care USA",
  description:
    "Get fast, reliable phone repair in Augusta Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
  keywords: [
    "Mobile Phone Repair in Augusta Mall",
    "iPhone repair in Augusta Mall",
    "iPad repair in Augusta Mall",
    "Tablet repair service in Augusta Mall",
    "laptop repair service in Augusta Mall",
    "smartwatch repair in Augusta Mall",
    "screen repair service in Augusta Mall",
  ],
  alternates: { canonical: "/locations/augusta-mall" },
  openGraph: {
    title: "Phone Repair Shop in Augusta Mall, Tablet repair & Laptop Repair Service in Augusta Mall | Mobile Care USA",
    description:
      "Get fast, reliable phone repair in Augusta Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
    url: "https://mobilecareusa.com/locations/augusta-mall",
    images: [{ url: getLocation("augusta-mall")?.image ?? "/store-interior.png", alt: "Mobile Care USA store" }],
    type: "website",
  },
}

export default function AugustaMallLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocationJsonLd slug="augusta-mall" />
      {children}
    </>
  )
}
