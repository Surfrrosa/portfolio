import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Shaina Pauley for product ownership, AI implementation consulting, fractional product leadership, or collaboration opportunities.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Shaina Pauley',
    description: 'Get in touch for product ownership, AI implementation consulting, or collaboration opportunities.',
    url: 'https://shainapauley.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
