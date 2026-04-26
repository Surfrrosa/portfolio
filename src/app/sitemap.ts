import { MetadataRoute } from 'next'
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Get all published blog posts (excludes drafts)
  const slugs = getAllPostSlugs()
  const blogPosts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug)
      if (!post) return null
      return {
        url: `${SITE_URL}/writing/${slug}`,
        lastModified: post.date ? new Date(post.date) : currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null)

  return [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/method`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogPosts,
  ]
}
