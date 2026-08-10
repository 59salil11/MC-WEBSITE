import type { Metadata } from "next"

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
  openGraph: {
    title: "Phone Repair Shop in Augusta Mall, Tablet repair & Laptop Repair Service in Augusta Mall | Mobile Care USA",
    description:
      "Get fast, reliable phone repair in Augusta Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
    url: "https://mobilecareusa.com/locations/augusta-mall",
    type: "website",
  },
}

export default function AugustaMallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
