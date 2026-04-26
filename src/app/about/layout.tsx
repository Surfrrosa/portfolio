import { buildRouteMetadata } from '@/lib/metadata'

export const metadata = buildRouteMetadata({
  title: 'About',
  slug: '/about',
  description: 'AI Product Architect with 7+ years enterprise experience. Designs agentic systems, builds evaluation harnesses, and architects context for production AI workflows. CSPO and CSM certified.',
  ogTitle: 'About Shaina Pauley',
  ogDescription: 'AI Product Architect with 7+ years enterprise experience. Designs agentic systems, evaluation harnesses, and context architecture for production AI workflows.',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
