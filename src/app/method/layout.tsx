import { buildRouteMetadata } from '@/lib/metadata'

export const metadata = buildRouteMetadata({
  title: 'Methodology',
  slug: '/method',
  description: 'AI-native development methodology for agentic systems: Define the System, Build with Context, Harden, Ship & Maintain. Specification precision, evaluation design, context architecture, and failure pattern recognition built into every phase.',
  ogTitle: 'Methodology Quickie',
  ogDescription: 'AI-native development methodology for agentic systems: specification precision, evaluation design, context architecture, and failure pattern recognition built into every phase.',
})

export default function MethodLayout({ children }: { children: React.ReactNode }) {
  return children
}
