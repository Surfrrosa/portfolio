import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Technical Product Owner with 7+ years enterprise experience and AI-native builder. CSPO and CSM certified. Bridging engineering, design, leadership, and stakeholders.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Shaina Pauley',
    description: 'Technical Product Owner with 7+ years enterprise experience and AI-native builder. Bridging engineering, design, leadership, and stakeholders.',
    url: 'https://shainapauley.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
