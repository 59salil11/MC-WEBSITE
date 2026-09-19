import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check, ShieldCheck, Unlock, BadgeCheck } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { DeviceCard } from "@/components/device-card"
import { preOwnedBrands, getPreOwnedBrand, groupModelsBySeries } from "@/lib/pre-owned"

export function generateStaticParams() {
  return preOwnedBrands.map((brand) => ({ brand: brand.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>
}): Promise<Metadata> {
  const { brand: slug } = await params
  const brand = getPreOwnedBrand(slug)
  if (!brand) return { title: "Not Found" }

  return {
    title: `Certified Pre-Owned ${brand.name} Phones | Mobile Care USA`,
    description: brand.description,
    alternates: { canonical: `https://mobilecareusa.com/pre-owned/${brand.slug}` },
  }
}

const promiseChips = [
  { icon: Unlock, label: "Fully unlocked" },
  { icon: BadgeCheck, label: "Never repaired" },
  { icon: ShieldCheck, label: "60-day warranty" },
]

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand: slug } = await params
  const brand = getPreOwnedBrand(slug)
  if (!brand) notFound()

  const series = groupModelsBySeries(brand.models)

  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-24">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/pre-owned"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-brand-mint"
          >
            <ArrowLeft className="h-4 w-4" />
            All brands
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div
                className={`flex h-14 w-fit items-center rounded-xl px-5 ${
                  brand.logoDark ? "bg-white/10 ring-1 ring-white/15" : "bg-white"
                }`}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  width={140}
                  height={48}
                  className="h-7 w-auto object-contain"
                />
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl text-balance">
                Certified Pre-Owned {brand.name}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-300 text-pretty">{brand.description}</p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {promiseChips.map((chip) => (
                  <li key={chip.label} className="flex items-center gap-2 text-sm font-medium text-gray-200">
                    <chip.icon className="h-4 w-4 text-brand-mint" />
                    {chip.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-brand-mint/10 sm:h-80 sm:w-80">
                <Image
                  src={brand.image || "/placeholder.svg"}
                  alt={`${brand.name} certified pre-owned phone`}
                  width={320}
                  height={320}
                  className="h-64 w-64 object-contain drop-shadow-2xl sm:h-72 sm:w-72"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device grid by series */}
      <section className="bg-brand-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {series.map((group) => (
              <div key={group.series}>
                <Reveal>
                  <div className="flex items-end justify-between border-b border-gray-200 pb-4">
                    <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">{group.series}</h2>
                    <span className="text-sm font-medium text-gray-500">
                      {group.models.length} {group.models.length === 1 ? "model" : "models"}
                    </span>
                  </div>
                </Reveal>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {group.models.map((model, index) => (
                    <Reveal key={model.slug} variant="fade-up" delay={(index % 4) * 80}>
                      <DeviceCard model={model} image={brand.image} brandName={brand.name} />
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Ready to grab your {brand.name}?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Availability and pricing vary by store. Visit a Mobile Care location to check current stock and take your
              certified device home today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/locations">
                <Button className="group bg-brand-mint text-brand-dark hover:bg-brand-mintLight text-lg px-8 py-6 rounded-xl font-semibold">
                  Find a Location
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/pre-owned">
                <Button
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl font-semibold"
                >
                  Browse other brands
                </Button>
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-gray-300">
              {promiseChips.map((chip) => (
                <li key={chip.label} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-brand-mint" /> {chip.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
