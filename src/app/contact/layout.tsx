import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Shaina Pauley for AI product architecture, agentic systems design, evaluation harness development, or collaboration on AI-native projects.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Shaina Pauley',
    description: 'Get in touch for AI product architecture, agentic systems design, or collaboration on AI-native projects.',
    url: 'https://shainapauley.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
