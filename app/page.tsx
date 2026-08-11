import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { WhyChooseUs } from "@/components/why-choose-us"
import { DeviceCategories } from "@/components/device-categories"
import { TechTips } from "@/components/tech-tips"
import { Testimonials } from "@/components/testimonials"
import { Locations } from "@/components/locations"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <WhyChooseUs className="py-16 sm:py-24" />
      <DeviceCategories className="py-16 sm:py-24" />
      <TechTips className="py-16 sm:py-24" />
      <Locations className="py-16 sm:py-24" />
      <Testimonials className="py-16 sm:py-24" />
      <FAQ className="py-16 sm:py-24" />
      <Footer />
    </main>
  )
}
