import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { getAllPosts, getPostCategory, getReadingTime, getExcerpt } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Phone & iPhone Repair Blog | Mobile Care USA Atlanta, Georgia",
  description:
    "Expert guides and tips on mobile phone and iPhone repair in Atlanta, Georgia. Learn about screen repairs, battery replacement, water damage, and choosing the right repair shop.",
  keywords: [
    "Phone Repair Atlanta",
    "iPhone Repair Atlanta",
    "Mobile Phone Repair in Atlanta, Georgia",
    "iPhone Repair Service in Atlanta, Georgia",
    "Smartphone Repair Atlanta",
  ],
  alternates: { canonical: "https://mobilecareusa.com/blog" },
  openGraph: {
    title: "Phone & iPhone Repair Blog | Mobile Care USA Atlanta, Georgia",
    description:
      "Expert guides and tips on mobile phone and iPhone repair in Atlanta, Georgia from the team at Mobile Care USA.",
    url: "https://mobilecareusa.com/blog",
    type: "website",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-brand-mint/10 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-mint font-semibold uppercase tracking-wide text-sm mb-3">Mobile Care Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4 text-balance">
            Phone Repair Tips &amp; Guides for Atlanta, Georgia
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl text-pretty">
            Expert advice on smartphone and iPhone repair, from cracked screens and battery replacement to choosing a
            trusted local repair shop.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="pb-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-2xl border border-gray-200 overflow-hidden hover:border-brand-mint transition-colors"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 bg-brand-dark relative min-h-[220px] flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
                  <span className="relative text-brand-mint text-6xl font-bold">Top 10</span>
                </div>
                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center rounded-full bg-brand-mint/15 text-brand-dark text-xs font-semibold px-3 py-1">
                      {getPostCategory(featured)}
                    </span>
                    <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
                      <Clock className="h-3.5 w-3.5" />
                      {getReadingTime(featured)} min read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3 group-hover:text-brand-mint transition-colors text-balance">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-pretty">{getExcerpt(featured, 200)}</p>
                  <span className="inline-flex items-center gap-2 text-brand-mint font-semibold">
                    Read article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-gray-200 p-6 hover:border-brand-mint hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center rounded-full bg-brand-mint/15 text-brand-dark text-xs font-semibold px-3 py-1">
                    {getPostCategory(post)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
                    <Clock className="h-3.5 w-3.5" />
                    {getReadingTime(post)} min read
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-mint transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 flex-1 text-pretty">{getExcerpt(post)}</p>
                <span className="inline-flex items-center gap-2 text-brand-mint font-semibold text-sm">
                  Read article
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
