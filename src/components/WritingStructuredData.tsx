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
    description: 'Writing about building with AI, product architecture, and what changes when the tools get this good.',
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
