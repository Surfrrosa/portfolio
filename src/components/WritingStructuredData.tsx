import { BlogPost } from '@/lib/blog'

interface WritingStructuredDataProps {
  posts: BlogPost[]
}

export default function WritingStructuredData({ posts }: WritingStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://shainapauley.com/writing',
    name: 'Writing by Shaina Pauley',
    description: 'Thoughts on AI-native development, product management, building with Claude Code, and what happens when a product owner starts shipping code.',
    url: 'https://shainapauley.com/writing',
    isPartOf: { '@id': 'https://shainapauley.com/#website' },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts
        .filter((post) => !post.draft)
        .map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://shainapauley.com/writing/${post.slug}`,
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
