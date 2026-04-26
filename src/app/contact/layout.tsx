import { buildRouteMetadata } from '@/lib/metadata'

export const metadata = buildRouteMetadata({
  title: 'Contact',
  slug: '/contact',
  description: 'Get in touch with Shaina Pauley for AI product architecture, agentic systems design, evaluation harness development, or collaboration on AI-native projects.',
  ogTitle: 'Contact Shaina Pauley',
  ogDescription: 'Get in touch for AI product architecture, agentic systems design, or collaboration on AI-native projects.',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
