import { SITE_URL } from '@/lib/site'

function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    "name": "Shaina Pauley",
    "url": SITE_URL,
    "image": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/og-image.png`,
      "width": 1200,
      "height": 630
    },
    "sameAs": [
      "https://linkedin.com/in/shainapauley",
      "https://github.com/Surfrrosa",
      "https://x.com/sha1napauley"
    ],
    "jobTitle": "AI Product Architect",
    "knowsAbout": [
      "AI Product Architecture",
      "Agentic Systems Design",
      "Multi-Agent Orchestration",
      "AI Evaluation Harnesses",
      "Context Architecture",
      "Claude Code",
      "AI-Native Development",
      "Product Strategy"
    ],
    "description": "AI Product Architect. I design the systems AI works inside: specifications, evaluation pipelines, context that persists between sessions. 7+ years in product, now building with AI every day.",
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
    "@id": `${SITE_URL}/#website`,
    "url": SITE_URL,
    "name": "Shaina Pauley",
    "description": "Portfolio and writing on building with AI, product architecture, and what changes when the tools get this good.",
    "publisher": { "@id": `${SITE_URL}/#person` }
  }
}

function buildWebPageSchema() {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    "url": SITE_URL,
    "name": "Shaina Pauley | AI Product Architect",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#person` },
    "datePublished": "2025-01-01",
    "dateModified": "2026-03-27",
    "description": "AI Product Architect. I design the systems AI works inside: specifications, evaluation pipelines, context that persists between sessions."
  }
}

function buildServiceOffer(name: string) {
  return { "@type": "Offer", "itemOffered": { "@type": "Service", name } }
}

function buildServiceSchema() {
  const services = [
    "AI Product Architecture",
    "Agentic Systems Design",
    "Multi-Agent Orchestration",
    "AI Evaluation and Quality Systems",
    "Context Architecture and AI Workflow Design"
  ]
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    "name": "Shaina Pauley - AI Product Architecture",
    "provider": { "@id": `${SITE_URL}/#person` },
    "serviceType": "AI Product Architecture and Agentic Systems Design",
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
