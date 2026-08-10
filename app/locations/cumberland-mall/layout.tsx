import type { Metadata } from "next"

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
  openGraph: {
    title:
      "Phone Repair Shop in Cumberland Mall, Tablet Repair & Laptop Repair Service in Cumberland Mall | Mobile Care USA",
    description:
      "Mobile Care USA at Cumberland Mall offers expert phone, tablet, and laptop repair services. Fast, reliable, and affordable device care to keep you connected. Visit us today for professional repair solutions in Cumberland Mall.",
    url: "https://mobilecareusa.com/locations/cumberland-mall",
    type: "website",
  },
}

export default function CumberlandMallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
