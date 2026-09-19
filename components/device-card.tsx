import Image from "next/image"
import { ShieldCheck } from "lucide-react"
import type { PreOwnedModel } from "@/lib/pre-owned"

interface DeviceCardProps {
  model: PreOwnedModel
  image: string
  brandName: string
}

export function DeviceCard({ model, image, brandName }: DeviceCardProps) {
  const visibleColors = model.colors.slice(0, 6)
  const extraColors = model.colors.length - visibleColors.length

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex aspect-square items-center justify-center bg-gray-50 p-8">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${brandName} ${model.name}`}
          width={320}
          height={320}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-1.5" aria-label="Available colors">
          {visibleColors.map((color) => (
            <span
              key={color.name}
              title={color.name}
              className="h-4 w-4 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: color.hex }}
            />
          ))}
          {extraColors > 0 && <span className="text-xs font-medium text-gray-400">+{extraColors}</span>}
        </div>

        <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-mintDark">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
          Certified Pre-Owned
        </span>

        <h3 className="mt-2 font-display text-lg font-bold leading-snug text-brand-dark">{model.name}</h3>

        <p className="mt-1 text-sm text-gray-500">{model.storage.join(" · ")}</p>

        <div className="mt-auto pt-4">
          <p className="text-sm text-gray-500">
            From{" "}
            <span className="font-display text-xl font-bold text-brand-dark">${model.priceFrom.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </article>
  )
}
