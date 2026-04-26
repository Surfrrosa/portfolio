import { BlogPost } from '@/lib/blog'
import { SITE_URL } from '@/lib/site'

interface WritingStructuredDataProps {
  posts: BlogPost[]
}

export default function WritingStructuredData({ posts }: WritingStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/writing`,
    name: 'Writing by Shaina Pauley',
    description: 'Writing about building with AI, product architecture, and what changes when the tools get this good.',
    url: `${SITE_URL}/writing`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts
        .filter((post) => !post.draft)
        .map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${SITE_URL}/writing/${post.slug}`,
          name: post.title,
        })),
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
