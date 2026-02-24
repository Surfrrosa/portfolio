import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Methodology',
  description: 'AI-native development methodology: Define the System, Build with Context, Harden, Ship & Maintain. Four phases for building production software with AI that holds up.',
  alternates: {
    canonical: '/method',
  },
  openGraph: {
    title: 'Methodology Quickie',
    description: 'AI-native development methodology: Define the System, Build with Context, Harden, Ship & Maintain. Four phases, no shortcuts.',
    url: 'https://shainapauley.com/method',
  },
}

export default function MethodLayout({ children }: { children: React.ReactNode }) {
  return children
}
