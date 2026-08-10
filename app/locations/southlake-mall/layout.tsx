import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Phone Repair Shop in Southlake Mall, Tablet Repair & Laptop Repair Service in Southlake Mall | Mobile Care USA",
  description:
    "Mobile Care USA at Southlake Mall provides expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Southlake Mall.",
  keywords: [
    "Mobile Phone Repair in Southlake Mall",
    "iPhone repair in Southlake Mall",
    "iPad repair in Southlake Mall",
    "Tablet repair service in Southlake Mall",
    "laptop repair service in Southlake Mall",
    "smartwatch repair in Southlake Mall",
    "screen repair service in Southlake Mall",
  ],
  openGraph: {
    title:
      "Phone Repair Shop in Southlake Mall, Tablet Repair & Laptop Repair Service in Southlake Mall | Mobile Care USA",
    description:
      "Mobile Care USA at Southlake Mall provides expert phone, tablet, and laptop repair services. Fast, affordable, and reliable device care to keep you connected. Visit us today for professional repair solutions in Southlake Mall.",
    url: "https://mobilecareusa.com/locations/southlake-mall",
    type: "website",
  },
}

export default function SouthlakeMallLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
