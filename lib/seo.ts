import { locations, type StoreLocation } from "@/lib/locations"

export const SITE_URL = "https://mobilecareusa.com"
export const SITE_NAME = "Mobile Care USA"
export const DEFAULT_OG_IMAGE = {
  url: "/store-interior.png",
  width: 1536,
  height: 1024,
  alt: "Inside a Mobile Care USA phone repair store",
}

const DAY_NAMES: Record<string, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
}
const WEEK = Object.values(DAY_NAMES)

function expandDays(label: string): string[] {
  const [start, end] = label.split(/\s*[–-]\s*/).map((d) => DAY_NAMES[d.trim().slice(0, 3).toLowerCase()])
  if (!start) return []
  if (!end) return [start]
  const from = WEEK.indexOf(start)
  const to = WEEK.indexOf(end)
  return WEEK.slice(from, to + 1)
}

function to24h(time: string): string {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!match) return time.trim()
  let hours = Number(match[1]) % 12
  if (match[3].toUpperCase() === "PM") hours += 12
  return `${String(hours).padStart(2, "0")}:${match[2]}`
}

function openingHours(hours: StoreLocation["hours"]) {
  return hours.flatMap(({ day, time }) => {
    const [opens, closes] = time.split(/\s*[–-]\s*/)
    const dayOfWeek = expandDays(day)
    if (!opens || !closes || dayOfWeek.length === 0) return []
    return [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek,
        opens: to24h(opens),
        closes: to24h(closes),
      },
    ]
  })
}

export function locationSchema(location: StoreLocation) {
  const url = `${SITE_URL}/locations/${location.slug}`
  return [
    {
      "@context": "https://schema.org",
      "@type": "MobilePhoneStore",
      "@id": `${url}#store`,
      name: `${SITE_NAME} – ${location.name}`,
      url,
      image: location.image,
      telephone: location.phone.replace(/\s+/g, ""),
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.city,
        addressRegion: location.state,
        postalCode: location.zip,
        addressCountry: "US",
      },
      hasMap: location.directionsUrl,
      openingHoursSpecification: openingHours(location.hours),
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      makesOffer: ["Phone repair", "Tablet repair", "Laptop repair", "Smartwatch repair", "Pre-owned phones"].map(
        (name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }),
      ),
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" },
      { name: location.name, path: `/locations/${location.slug}` },
    ]),
  ]
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  }
}

export function organizationSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.png`,
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", bestRating: "5" },
      department: locations.map((location) => ({ "@id": `${SITE_URL}/locations/${location.slug}#store` })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ]
}
