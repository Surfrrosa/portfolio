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
    ? `https://shainapauley.com${ogImage}`
    : 'https://shainapauley.com/og-image.png'

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
      '@id': 'https://shainapauley.com/#person',
      name: 'Shaina Pauley',
      url: 'https://shainapauley.com',
      jobTitle: 'Technical Product Owner',
    },
    publisher: {
      '@type': 'Person',
      '@id': 'https://shainapauley.com/#person',
      name: 'Shaina Pauley',
      url: 'https://shainapauley.com',
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
      '@id': 'https://shainapauley.com/#website',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
