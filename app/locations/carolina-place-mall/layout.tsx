import type { Metadata } from "next"

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
  openGraph: {
    title:
      "Phone Repair Shop in Carolina Place Mall, Tablet Repair & Laptop Repair Service in Carolina Place Mall | Mobile Care USA",
    description:
      "Mobile Care USA at Carolina Place Mall provides expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Carolina Place Mall.",
    url: "https://mobilecareusa.com/locations/carolina-place-mall",
    type: "website",
  },
}

export default function CarolinaPlaceMallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
