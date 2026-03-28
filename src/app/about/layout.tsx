import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'AI Product Architect with 7+ years enterprise experience. Designs agentic systems, builds evaluation harnesses, and architects context for production AI workflows. CSPO and CSM certified.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Shaina Pauley',
    description: 'AI Product Architect with 7+ years enterprise experience. Designs agentic systems, evaluation harnesses, and context architecture for production AI workflows.',
    url: 'https://shainapauley.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
