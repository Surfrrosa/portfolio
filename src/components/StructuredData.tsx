function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": "https://shainapauley.com/#person",
    "name": "Shaina Pauley",
    "url": "https://shainapauley.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://shainapauley.com/og-image.png",
      "width": 1200,
      "height": 630
    },
    "sameAs": [
      "https://linkedin.com/in/shainapauley",
      "https://github.com/Surfrrosa",
      "https://x.com/sha1napauley"
    ],
    "jobTitle": "Technical Product Owner",
    "knowsAbout": [
      "Product Management",
      "AI-Native Development",
      "AI Product Development",
      "Claude Code",
      "AI Workflow Automation",
      "SaaS Development",
      "Technical Product Ownership",
      "Enterprise Software",
      "Product Strategy",
      "Agile Development",
      "AI Implementation Consulting"
    ],
    "description": "Technical Product Owner and AI-native builder with 7+ years enterprise experience. Building production software with AI in the terminal daily. Product strategy, AI workflows, and development process that scales.",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Certified Scrum Product Owner (CSPO)"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Certified ScrumMaster (CSM)"
      }
    ]
  }
}

function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": "https://shainapauley.com/#website",
    "url": "https://shainapauley.com",
    "name": "Shaina Pauley",
    "description": "Portfolio and writing on AI-native development, product management, and building production software with AI.",
    "publisher": { "@id": "https://shainapauley.com/#person" }
  }
}

function buildWebPageSchema() {
  return {
    "@type": "WebPage",
    "@id": "https://shainapauley.com/#webpage",
    "url": "https://shainapauley.com",
    "name": "Shaina Pauley | Technical Product Owner & AI-Native Builder",
    "isPartOf": { "@id": "https://shainapauley.com/#website" },
    "about": { "@id": "https://shainapauley.com/#person" },
    "datePublished": "2025-01-01",
    "dateModified": "2026-02-24",
    "description": "Technical Product Owner and AI-native builder with 7+ years enterprise experience. Building production software with AI in the terminal daily."
  }
}

function buildServiceOffer(name: string) {
  return { "@type": "Offer", "itemOffered": { "@type": "Service", name } }
}

function buildServiceSchema() {
  const services = [
    "AI-Native Product Development",
    "AI Implementation Consulting",
    "Technical Product Ownership",
    "SaaS Product Strategy",
    "AI Workflow Design"
  ]
  return {
    "@type": "ProfessionalService",
    "@id": "https://shainapauley.com/#service",
    "name": "Shaina Pauley - Product & AI Consulting",
    "provider": { "@id": "https://shainapauley.com/#person" },
    "serviceType": "AI Implementation and Product Management Consulting",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": services.map(buildServiceOffer)
    }
  }
}

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildWebSiteSchema(),
      buildWebPageSchema(),
      buildServiceSchema(),
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
