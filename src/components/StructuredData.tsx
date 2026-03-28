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
    "jobTitle": "AI Product Architect",
    "knowsAbout": [
      "AI Product Architecture",
      "Agentic Systems Design",
      "Multi-Agent Orchestration",
      "AI Evaluation Harnesses",
      "Context Architecture",
      "Specification Precision",
      "Failure Pattern Recognition",
      "Trust and Security Design",
      "Token Economics",
      "Claude Code",
      "AI-Native Development",
      "AI Workflow Automation",
      "Product Strategy",
      "Enterprise Software"
    ],
    "description": "AI Product Architect who designs agentic systems, builds evaluation harnesses, and architects context for production AI workflows. 7+ years enterprise product experience, now building multi-agent systems and shipping AI-native software daily.",
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
    "description": "Portfolio and writing on AI product architecture, agentic systems, multi-agent orchestration, and building production software with AI.",
    "publisher": { "@id": "https://shainapauley.com/#person" }
  }
}

function buildWebPageSchema() {
  return {
    "@type": "WebPage",
    "@id": "https://shainapauley.com/#webpage",
    "url": "https://shainapauley.com",
    "name": "Shaina Pauley | AI Product Architect",
    "isPartOf": { "@id": "https://shainapauley.com/#website" },
    "about": { "@id": "https://shainapauley.com/#person" },
    "datePublished": "2025-01-01",
    "dateModified": "2026-03-27",
    "description": "AI Product Architect who designs agentic systems, builds evaluation harnesses, and architects context for production AI workflows. 7+ years enterprise product experience."
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
    "@id": "https://shainapauley.com/#service",
    "name": "Shaina Pauley - AI Product Architecture",
    "provider": { "@id": "https://shainapauley.com/#person" },
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
