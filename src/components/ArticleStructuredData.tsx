interface ArticleStructuredDataProps {
  title: string
  description: string
  publishedTime: string
  tags: string[]
  url: string
}

export default function ArticleStructuredData({
  title,
  description,
  publishedTime,
  tags,
  url
}: ArticleStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: 'Shaina Pauley',
      url: 'https://shainapauley.com',
      jobTitle: 'Technical Product Owner',
    },
    publisher: {
      '@type': 'Person',
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
