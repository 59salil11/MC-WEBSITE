"use client"

import { useEffect } from "react"
import Script from "next/script"

const RESIZE_OBSERVER_LOOP = "ResizeObserver loop"

export function ElfsightReviews() {
  useEffect(() => {
    // The Elfsight widget resizes its own iframe inside a ResizeObserver callback, which makes
    // browsers report this benign warning as an uncaught error. Swallow only that message.
    const ignoreResizeObserverLoop = (event: ErrorEvent) => {
      if (event.message?.includes(RESIZE_OBSERVER_LOOP)) {
        event.stopImmediatePropagation()
        event.preventDefault()
      }
    }
    window.addEventListener("error", ignoreResizeObserverLoop, true)
    return () => window.removeEventListener("error", ignoreResizeObserverLoop, true)
  }, [])

  return (
    <>
      <Script id="elfsight-platform" src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
      <div className="elfsight-app-d3c7508c-be91-4856-8b11-894c2c0e7d75" data-elfsight-app-lazy />
    </>
  )
}
