"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { services } from "@/lib/services"

const locations = [
  { name: "Augusta Mall", path: "/locations/augusta-mall" },
  { name: "Perimeter Mall", path: "/locations/perimeter-mall" },
  { name: "Cumberland Mall", path: "/locations/cumberland-mall" },
  { name: "Southlake Mall", path: "/locations/southlake-mall" },
  { name: "Lynnhaven Mall", path: "/locations/lynnhaven-mall" },
  { name: "Carolina Place Mall", path: "/locations/carolina-place-mall" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkColor = scrolled
    ? "text-brand-dark hover:text-brand-mintDark"
    : "text-white/90 hover:text-white"

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MC%20LOGO-XowG6Q2hKUlDImWUZUx6UDaRQp4r2h.png"
              alt="Mobile Care Logo"
              width={400}
              height={133}
              priority
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-11" : "h-14 brightness-0 invert"
              }`}
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center gap-1.5 rounded-full px-4 text-[0.95rem] font-medium transition-colors hover:bg-transparent ${linkColor}`}
                >
                  Services
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 rounded-xl p-2">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full cursor-pointer rounded-lg font-semibold">
                    All Services
                  </Link>
                </DropdownMenuItem>
                {services.map((service) => (
                  <DropdownMenuItem key={service.slug} asChild>
                    <Link href={`/services/${service.slug}`} className="w-full cursor-pointer rounded-lg">
                      {service.shortName}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center gap-1.5 rounded-full px-4 text-[0.95rem] font-medium transition-colors hover:bg-transparent ${linkColor}`}
                >
                  Locations
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 rounded-xl p-2">
                {locations.map((location) => (
                  <DropdownMenuItem key={location.path} asChild>
                    <Link href={location.path} className="w-full cursor-pointer rounded-lg">
                      {location.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/blog"
              className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${linkColor}`}
            >
              Blog
            </Link>

            <Link href="/locations" className="ml-3">
              <Button
                className={`rounded-full px-5 font-semibold shadow-sm transition-colors ${
                  scrolled
                    ? "bg-brand-dark text-white hover:bg-brand-dark/90"
                    : "bg-brand-mint text-brand-dark hover:bg-brand-mintLight"
                }`}
              >
                Find a Location
              </Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${scrolled ? "text-brand-dark" : "text-white hover:bg-white/10 hover:text-white"}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex flex-col space-y-4">
                <div className="py-2">
                  <Link href="/services" className="mb-2 block text-xl font-semibold">
                    Services
                  </Link>
                  <div className="space-y-2 pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block text-lg text-gray-600 hover:text-brand-mintDark"
                      >
                        {service.shortName}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-2">
                  <p className="mb-2 text-xl font-semibold">Locations</p>
                  <div className="space-y-2 pl-4">
                    {locations.map((location) => (
                      <Link
                        key={location.path}
                        href={location.path}
                        className="block text-lg text-gray-600 hover:text-brand-mintDark"
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/blog" className="block py-2 text-xl font-semibold">
                  Blog
                </Link>
                <Link href="/locations" className="w-full pt-2">
                  <Button className="w-full rounded-full bg-brand-mint font-semibold text-brand-dark hover:bg-brand-mintLight">
                    Find a Location
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
