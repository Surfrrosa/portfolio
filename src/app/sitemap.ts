import { MetadataRoute } from 'next'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shainapauley.com'
  const currentDate = new Date()

  // Get all published blog posts (excludes drafts)
  const slugs = getAllPostSlugs()
  const blogPosts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      return {
        url: `${baseUrl}/writing/${slug}`,
        lastModified: post.date ? new Date(post.date) : currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/writing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/method`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogPosts,
  ]
}
