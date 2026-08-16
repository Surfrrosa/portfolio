import { SITE_URL } from '@/lib/site'

function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    "name": "Shaina Pauley",
    "url": SITE_URL,
    "image": [
      {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/shaina-headshot-1.jpg`,
        "width": 800,
        "height": 1056
      },
      {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/shaina-headshot-2.jpg`,
        "width": 800,
        "height": 1010
      }
    ],
    "sameAs": [
      "https://linkedin.com/in/shainapauley",
      "https://github.com/Surfrrosa",
      "https://x.com/sha1napauley"
    ],
    "jobTitle": "Founder",
    "knowsAbout": [
      "Synestrology",
      "SlabCheck",
      "Astrology Software",
      "Human Design",
      "Pokemon TCG Grading",
      "AI Product Architecture",
      "Agentic Systems Design",
      "Claude Code"
    ],
    "description": "Founder of Synestrology and co-founder of SlabCheck. Building both full-time while starting a master's in biomedical neuroscience at the University of Florida.",
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
    "name": "it me | shaina pauley",
    "isPartOf": { "@id": `${SITE_URL}/#website` },
    "about": { "@id": `${SITE_URL}/#person` },
    "datePublished": "2025-01-01",
    "dateModified": "2026-08-16",
    "description": "Founder of Synestrology and co-founder of SlabCheck."
  }
}

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildWebSiteSchema(),
      buildWebPageSchema(),
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
