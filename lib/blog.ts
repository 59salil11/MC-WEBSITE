import blogData from "./blog-data.json"

export type BlogPost = {
  slug: string
  title: string
  metaDescription: string
  keywords: string[]
  content: string
}

const posts = blogData as BlogPost[]

export function getAllPosts(): BlogPost[] {
  return posts
}

export function getPostSlugs(): string[] {
  return posts.map((post) => post.slug)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug)
}

// Derive a short topical category label from the title for card badges.
export function getPostCategory(post: BlogPost): string {
  return /iphone/i.test(post.title) ? "iPhone Repair" : "Phone Repair"
}

// Estimate reading time from the stripped HTML content.
export function getReadingTime(post: BlogPost): number {
  const words = post.content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

// Plain-text excerpt for listing cards, taken from the first paragraph(s).
export function getExcerpt(post: BlogPost, maxLength = 160): string {
  const text = post.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
  if (text.length <= maxLength) return text
  return text.slice(0, text.lastIndexOf(" ", maxLength)).trim() + "…"
}
