"use client"

import { useEffect } from "react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

export function ServicesReviews({ className = "" }: { className?: string }) {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What our customers say"
            subtitle="Thousands of locals trust Mobile Care to keep their devices running. Here's what they think."
            className="mb-12"
          />
        </Reveal>
        <div className="elfsight-app-d3c7508c-be91-4856-8b11-894c2c0e7d75" data-elfsight-app-lazy></div>
      </div>
    </section>
  )
}
