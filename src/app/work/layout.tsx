import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Portfolio of AI-assisted projects: Synestrology synthesis engine, Maestro CLI for AI development process, Prompt2Story user story generator, The Absurdity Index data dashboard, and more.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Work by Shaina Pauley',
    description: 'Portfolio of AI-assisted projects: synthesis engines, CLI tools, data dashboards, mobile apps, and enterprise product work.',
    url: 'https://shainapauley.com/work',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
