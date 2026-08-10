import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Clock, MapPin } from "lucide-react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getPostBySlug, getPostSlugs, getPostCategory, getReadingTime } from "@/lib/blog"
import "./article.css"

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Article Not Found | Mobile Care USA" }

  const url = `https://mobilecareusa.com/blog/${post.slug}`
  return {
    title: `${post.title} | Mobile Care USA`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | Mobile Care USA`,
      description: post.metaDescription,
      url,
      type: "article",
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    keywords: post.keywords.join(", "),
    url: `https://mobilecareusa.com/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Mobile Care USA",
    },
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <article className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-mint transition-colors text-sm mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-brand-mint/15 text-brand-dark text-xs font-semibold px-3 py-1">
              {getPostCategory(post)}
            </span>
            <span className="inline-flex items-center gap-1 text-gray-500 text-xs">
              <Clock className="h-3.5 w-3.5" />
              {getReadingTime(post)} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-8 text-balance">{post.title}</h1>

          <div className="article-content" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* In-article CTA */}
          <div className="mt-12 rounded-2xl bg-brand-dark p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white mb-3 text-balance">
                Need a Repair Today? Visit Mobile Care USA
              </h2>
              <p className="text-gray-300 mb-6 text-pretty">
                Most repairs completed in 30-45 minutes with a 30-day warranty. Find your nearest Atlanta-area location.
              </p>
              <Link href="/locations">
                <Button className="bg-brand-mint text-brand-dark hover:bg-brand-mintLight text-lg px-8 py-6">
                  <MapPin className="mr-2 h-5 w-5" />
                  Find a Location
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
