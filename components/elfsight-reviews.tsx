import Script from "next/script"

export function ElfsightReviews() {
  return (
    <>
      <Script id="elfsight-platform" src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
      <div className="elfsight-app-d3c7508c-be91-4856-8b11-894c2c0e7d75" data-elfsight-app-lazy />
    </>
  )
}
