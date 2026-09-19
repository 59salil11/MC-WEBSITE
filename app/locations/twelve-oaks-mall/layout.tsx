import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Phone Repair Shop in Twelve Oaks Mall, Tablet repair & Laptop Repair Service in Twelve Oaks Mall | Mobile Care USA",
  description:
    "Get fast, reliable phone repair in Twelve Oaks Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
  keywords: [
    "Mobile Phone Repair in Twelve Oaks Mall",
    "iPhone repair in Twelve Oaks Mall",
    "iPad repair in Twelve Oaks Mall",
    "Tablet repair service in Twelve Oaks Mall",
    "laptop repair service in Twelve Oaks Mall",
    "smartwatch repair in Twelve Oaks Mall",
    "screen repair service in Twelve Oaks Mall",
  ],
  openGraph: {
    title:
      "Phone Repair Shop in Twelve Oaks Mall, Tablet repair & Laptop Repair Service in Twelve Oaks Mall | Mobile Care USA",
    description:
      "Get fast, reliable phone repair in Twelve Oaks Mall with Mobile Care USA. We also provide expert tablet and laptop repair services, including cracked screen replacement, battery upgrades, software fixes, and full diagnostics for iPhone, Samsung, MacBook, iPad, and more. Affordable pricing, trusted technicians, and same-day service to keep your devices running smoothly.",
    url: "https://mobilecareusa.com/locations/twelve-oaks-mall",
    type: "website",
  },
}

export default function TwelveOaksMallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
