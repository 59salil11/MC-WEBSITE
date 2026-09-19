import Image from "next/image"
import { accessoryBrands } from "@/lib/brands"
import { cn } from "@/lib/utils"

export function BrandMarquee() {
  // Duplicate the list so the -50% translate loops seamlessly.
  const loop = [...accessoryBrands, ...accessoryBrands]

  return (
    <div
      className="brand-marquee group relative overflow-hidden"
      aria-label="Accessory brands we carry"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-24" />

      <ul className="brand-marquee-track">
        {loop.map((brand, i) => (
          <li key={`${brand.name}-${i}`} className="px-3 sm:px-4" aria-hidden={i >= accessoryBrands.length}>
            <div
              className={cn(
                "flex h-24 w-40 items-center justify-center rounded-xl border p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:w-48",
                brand.dark ? "border-neutral-800 bg-neutral-900" : "border-border bg-white",
              )}
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} logo`}
                width={160}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
