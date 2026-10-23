"use client"

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"

// The products shown, in the order they go onto the phone.
const STEPS = [
  {
    name: "iPhone 17 Pro",
    detail: "We fit accessories to your exact model.",
    photo: "/accessories/iphone-17-pro.webp",
  },
  {
    name: "Clear MagSafe case",
    detail: "Crystal-clear shell with a built-in magnetic ring.",
    photo: "/accessories/clear-magsafe-case.webp",
  },
  {
    name: "3-in-1 magnetic wireless charger",
    detail: "Snaps onto the case and charges at up to 15W.",
    photo: "/accessories/wireless-charger.webp",
  },
  {
    name: "Privacy glass screen protector",
    detail: "9H tempered glass that darkens the screen from the side.",
    photo: "/accessories/privacy-glass-box.webp",
  },
] as const

// When each piece goes on, in ms after the section comes into view.
const TIMELINE: [string, number][] = [
  ["has-case", 900],
  ["has-pad", 2700],
  ["is-front", 4500],
  ["has-glass", 6000],
  ["is-done", 7600],
]

const STATE_CLASSES = TIMELINE.map(([name]) => name)

/** Which caption is lit for a given set of applied classes. */
function activeStep(applied: string[]) {
  if (applied.includes("has-glass")) return 3
  if (applied.includes("has-pad")) return 2
  if (applied.includes("has-case")) return 1
  return 0
}

/**
 * A phone that gets its case, then a MagSafe charger, then turns around and
 * gets privacy glass. Plays once when the section is about half in view
 * (time-based, not tied to scroll), with a replay button at the end. All motion
 * is CSS transforms and opacity; see "Accessory assembly" in globals.css.
 */
export function AccessoryAssembly({ children }: { children?: ReactNode }) {
  const root = useRef<HTMLDivElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const [applied, setApplied] = useState<string[]>([])

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout)
    setApplied([])
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setApplied(STATE_CLASSES)
      return
    }
    // Give the reset a frame so the pieces fly in again on replay.
    timers.current = TIMELINE.map(([name, at]) =>
      setTimeout(() => setApplied((prev) => [...prev, name]), at + 60),
    )
  }, [])

  useEffect(() => {
    const el = stage.current
    if (!el) return
    // Start once most of the phone is on screen, so the whole build is seen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        play()
      },
      { threshold: 0.7 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      timers.current.forEach(clearTimeout)
    }
  }, [play])

  const active = activeStep(applied)
  const done = applied.includes("is-done")

  return (
    <div ref={root} className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
      {/* heading and captions */}
      <div>
        {children}
        <ol className={`space-y-1.5 ${children ? "mt-8" : ""}`}>
          {STEPS.map((step, i) => (
            <li
              key={step.name}
              className={`flex items-center gap-4 rounded-[1.25rem] p-2.5 transition-all duration-700 ${
                active === i ? "bg-white/[0.07] opacity-100" : active > i ? "opacity-70" : "opacity-40"
              }`}
            >
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white">
                <Image src={step.photo} alt={step.name} fill sizes="64px" className="object-contain p-1.5" />
              </span>
              <span>
                <span className="flex items-center gap-2 font-display text-lg font-semibold text-white">
                  <span
                    className={`h-2 w-2 rounded-full transition-colors duration-700 ${
                      active >= i && applied.length > 0 ? "bg-brand-mint" : "bg-white/25"
                    }`}
                  />
                  {step.name}
                </span>
                <span className="mt-0.5 block text-[0.95rem] text-white/65">{step.detail}</span>
              </span>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={play}
          className={`mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium text-white transition-all duration-500 hover:border-white/70 ${
            done ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          Play it again
        </button>
      </div>
      {/* stage */}
      <div
        ref={stage}
        className={`asm relative flex justify-center pb-12 pt-2 ${applied.join(" ")}`}
        aria-hidden="true"
      >
        <div className="asm-stage">
          <div className="asm-shadow" />
          <div className="asm-rig">
            <div className="asm-flip">
              {/* back of the phone */}
              <div className="asm-face asm-back">
                <div className="asm-body">
                  <div className="asm-plateau">
                    <span className="asm-lens" style={{ left: "6%", top: "9%" }} />
                    <span className="asm-lens" style={{ left: "37%", top: "31%" }} />
                    <span className="asm-lens" style={{ left: "6%", top: "53%" }} />
                    <span className="asm-flash" />
                    <span className="asm-lidar" />
                  </div>
                  <span className="asm-logo" />
                </div>
                <div className="asm-case">
                  <span className="asm-case-lip" />
                  <span className="asm-ring" />
                  <span className="asm-glint" />
                </div>
                <div className="asm-pad">
                  <Image src="/accessories/charger-pad.webp" alt="" fill sizes="160px" className="rounded-full" />
                </div>
                <span className="asm-badge">Charging · 15W</span>
              </div>

              {/* front of the phone */}
              <div className="asm-face asm-front">
                <div className="asm-body asm-screen-frame">
                  <div className="asm-screen">
                    <span className="asm-island" />
                    <span className="asm-time">9:41</span>
                    <span className="asm-date">Mobile Care</span>
                    <span className="asm-privacy" />
                  </div>
                </div>
                <div className="asm-case asm-case-front" />
                <div className="asm-glass">
                  <Image src="/accessories/privacy-glass.webp" alt="" fill sizes="300px" />
                  <span className="asm-sheen" />
                </div>
                <span className="asm-badge asm-badge-front">Privacy on</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
