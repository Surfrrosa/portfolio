import { SITE_URL } from '@/lib/site'

interface ArticleStructuredDataProps {
  title: string
  description: string
  publishedTime: string
  tags: string[]
  url: string
  ogImage?: string
}

export default function ArticleStructuredData({
  title,
  description,
  publishedTime,
  tags,
  url,
  ogImage
}: ArticleStructuredDataProps) {
  const imageUrl = ogImage
    ? `${SITE_URL}${ogImage}`
    : `${SITE_URL}/og-image.png`

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Shaina Pauley',
      url: SITE_URL,
      jobTitle: 'AI Product Architect',
    },
    publisher: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Shaina Pauley',
      url: SITE_URL,
    },
    datePublished: publishedTime,
    dateModified: publishedTime,
    keywords: tags.join(', '),
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
