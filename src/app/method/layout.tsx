import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Methodology',
  description: 'AI-native development methodology for agentic systems: Define the System, Build with Context, Harden, Ship & Maintain. Specification precision, evaluation design, context architecture, and failure pattern recognition built into every phase.',
  alternates: {
    canonical: '/method',
  },
  openGraph: {
    title: 'Methodology Quickie',
    description: 'AI-native development methodology for agentic systems: specification precision, evaluation design, context architecture, and failure pattern recognition built into every phase.',
    url: 'https://shainapauley.com/method',
  },
}

export default function MethodLayout({ children }: { children: React.ReactNode }) {
  return children
}
