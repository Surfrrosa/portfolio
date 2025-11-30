'use client'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://shainapauley.com/#person",
        "name": "Shaina Pauley",
        "url": "https://shainapauley.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://shainapauley.com/images/shaina-pauley-profile.jpg",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://linkedin.com/in/shainapauley",
          "https://github.com/Surfrrosa"
        ],
        "jobTitle": "Technical Product Owner",
        "worksFor": {
          "@type": "Organization",
          "name": "Product Management Consultant"
        },
        "knowsAbout": [
          "Product Management",
          "AI Product Development",
          "SaaS Development",
          "Technical Product Ownership",
          "Enterprise Software",
          "Product Strategy",
          "Agile Development"
        ],
        "description": "Technical Product Owner and AI builder with 7+ years enterprise experience. Building what lasts. Exploring what's next."
      },
      {
        "@type": "WebSite",
        "@id": "https://shainapauley.com/#website",
        "url": "https://shainapauley.com",
        "name": "Shaina Pauley - Technical Product Owner Portfolio",
        "description": "Portfolio showcasing enterprise product management experience, AI workflows, and SaaS product development.",
        "publisher": {
          "@id": "https://shainapauley.com/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://shainapauley.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://shainapauley.com/#webpage",
        "url": "https://shainapauley.com",
        "name": "Shaina Pauley - Building what lasts. Exploring what's next.",
        "isPartOf": {
          "@id": "https://shainapauley.com/#website"
        },
        "about": {
          "@id": "https://shainapauley.com/#person"
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-09-29",
        "description": "Technical Product Owner and AI builder with 7+ years enterprise experience. Specializing in AI workflows, secure SaaS products, and measurable business impact."
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://shainapauley.com/#service",
        "name": "Product Management Consulting",
        "provider": {
          "@id": "https://shainapauley.com/#person"
        },
        "serviceType": "Product Management Consulting",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Product Management Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Product Strategy"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SaaS Product Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Technical Product Ownership"
              }
            }
          ]
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}