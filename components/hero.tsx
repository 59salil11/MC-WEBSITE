"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Shield, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    name: "Augusta Mall",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-1rthSq43p4kpNrDLcfH1wcDlEz8SpR.jpg",
  },
  {
    name: "Perimeter Mall",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/perimeter.jpg-YiRrKjRiy7javUPwJzOjcD82ezca7f.jpeg",
  },
];

const features = [
  { icon: Smartphone, label: "All major brands" },
  { icon: Clock, label: "30-min repairs" },
  { icon: Shield, label: "30-day warranty" },
];

const stats = [
  { value: "50k+", label: "Devices repaired" },
  { value: "4.8★", label: "Google rating" },
  { value: "6", label: "Store locations" },
];

export function Hero({ className = "" }: { className?: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % locations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative overflow-hidden bg-brand-dark pt-24 ${className}`}>
      <div className="absolute inset-0 bg-circuit-pattern opacity-20" aria-hidden="true" />
      <div
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-4 py-1.5 text-sm font-medium text-brand-mint">
              <Star className="h-4 w-4 fill-brand-mint text-brand-mint" />
              Rated 4.8/5 by 2,000+ customers
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Fast & affordable phone repair{" "}
              <span className="text-brand-mint">in Atlanta, Georgia</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300 text-pretty">
              Atlanta&apos;s go-to phone repair experts. Whether it&apos;s a
              shattered screen or a weak battery, we&apos;ll fix it fast — with
              affordable pricing and top-rated service.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/locations">
                <Button className="group w-full sm:w-auto bg-brand-mint text-brand-dark hover:bg-brand-mintLight text-lg px-7 py-6 rounded-xl font-semibold">
                  Find a Location
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-7 py-6 rounded-xl font-semibold"
                >
                  View Services
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {features.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-brand-mint" />
                  <span className="text-sm text-gray-200">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={location.image}
                    alt={`Mobile Care store at ${location.name}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-black/40 px-3 py-2 backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-brand-mint" aria-hidden="true" />
                    <span className="text-sm font-medium text-white">
                      Now open · {location.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-5 -right-4 hidden sm:flex items-center gap-3 rounded-xl bg-white p-4 shadow-xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-mint/15">
                <Shield className="h-6 w-6 text-brand-mintDark" />
              </div>
              <div>
                <p className="font-display text-sm font-bold text-brand-dark">
                  30-Day Warranty
                </p>
                <p className="text-xs text-gray-500">On every repair</p>
              </div>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-bold text-brand-mint sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-gray-400">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
