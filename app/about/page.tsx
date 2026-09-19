import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Users, ShieldCheck, Clock, Wrench, HeartHandshake, Target, Sparkles, MapPin } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  title: "About Us | Mobile Care USA",
  description:
    "Learn the story behind Mobile Care USA — certified technicians, quality parts, and honest pricing across our mall-based repair stores in Georgia, Virginia, and North Carolina.",
  alternates: { canonical: "https://mobilecareusa.com/about" },
}

const stats = [
  { value: "6", label: "Store locations" },
  { value: "50k+", label: "Devices repaired" },
  { value: "4.8", label: "Average rating" },
  { value: "30-Day", label: "Repair warranty" },
]

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity first",
    description:
      "We give honest diagnostics and transparent quotes. If a repair isn't worth it, we'll tell you — no upsells, no surprises.",
  },
  {
    icon: Wrench,
    title: "Craftsmanship",
    description:
      "Our certified technicians use quality-tested parts and proven techniques so every repair holds up long after you leave.",
  },
  {
    icon: Clock,
    title: "Respect for your time",
    description:
      "Most repairs are done the same day in 30–45 minutes. Walk in, grab a coffee, and your device is ready before you know it.",
  },
  {
    icon: HeartHandshake,
    title: "People over transactions",
    description:
      "We treat every customer like a neighbor. That relationship — not a single sale — is what keeps our stores busy.",
  },
]

const milestones = [
  {
    year: "2015",
    title: "The first kiosk opens",
    description: "Mobile Care starts as a single mall kiosk with one goal: fast, fair, expert phone repair.",
  },
  {
    year: "2018",
    title: "Expanding across Georgia",
    description: "Growing demand takes us into flagship malls across the Atlanta and Augusta metro areas.",
  },
  {
    year: "2021",
    title: "Crossing state lines",
    description: "We open our first stores in Virginia and North Carolina, bringing the same standard of care.",
  },
  {
    year: "Today",
    title: "Six stores and counting",
    description: "Tens of thousands of repairs later, we remain a locally-run team obsessed with doing it right.",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark pt-24">
        <div className="absolute inset-0 circuit-pattern opacity-[0.06]" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-mint/20 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-4 py-1.5 text-sm font-medium text-brand-mint">
                <Sparkles className="h-4 w-4" />
                Our Story
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Repair experts your neighborhood can trust
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-lg leading-relaxed text-gray-300 sm:text-xl text-pretty">
                Mobile Care began with a simple idea: device repair should be fast, honest, and done by people who
                genuinely care. A decade later, that idea powers six stores across three states.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} variant="fade-up" delay={index * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-brand-mint sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-gray-300">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our Mission"
                title="Getting you back to like-new — the right way"
                subtitle="We're on a mission to make expert device repair accessible, transparent, and genuinely reassuring. No jargon, no pressure, just skilled technicians who treat your device like their own."
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-mint/15 text-brand-mintDark">
                    <Target className="h-5 w-5" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-brand-dark">Quality parts, every time.</span> We never cut
                    corners on components — because a cheap fix that fails isn't a fix at all.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-mint/15 text-brand-mintDark">
                    <Users className="h-5 w-5" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-semibold text-brand-dark">A team you'll remember.</span> Friendly, certified,
                    and happy to explain exactly what your device needs.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/locations">
                  <Button className="group bg-brand-dark text-white hover:bg-brand-dark/90 text-base px-6 py-6 rounded-xl font-semibold">
                    Visit a store
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-6 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-mint/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mint/15 text-brand-mintDark">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-brand-dark">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="From one kiosk to six stores"
              subtitle="A decade of doing right by our customers, one repair at a time."
            />
          </Reveal>
          <div className="relative mt-14">
            <div
              className="absolute left-4 top-0 hidden h-full w-px bg-gray-200 sm:left-1/2 sm:block"
              aria-hidden="true"
            />
            <div className="space-y-8 sm:space-y-0">
              {milestones.map((milestone, index) => (
                <Reveal key={milestone.year} variant="fade-up" delay={index * 100}>
                  <div
                    className={`relative sm:flex sm:items-center sm:gap-8 ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    } ${index > 0 ? "sm:-mt-8" : ""}`}
                  >
                    <div className="sm:w-1/2">
                      <div
                        className={`rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ${
                          index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                        }`}
                      >
                        <span className="inline-flex items-center rounded-full bg-brand-mint/15 px-3 py-1 text-sm font-bold text-brand-mintDark">
                          {milestone.year}
                        </span>
                        <h3 className="mt-3 font-display text-xl font-bold text-brand-dark">{milestone.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    <div
                      className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-mint ring-4 ring-gray-50 sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2"
                      aria-hidden="true"
                    />
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20">
        <div className="absolute inset-0 circuit-pattern opacity-10" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Come say hello at your nearest store
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Six locations across Georgia, Virginia, and North Carolina — no appointment needed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/locations">
                <Button className="group bg-brand-mint text-brand-dark hover:bg-brand-mintLight text-lg px-8 py-6 rounded-xl font-semibold">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find a Location
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 rounded-xl font-semibold"
                >
                  Explore services
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
