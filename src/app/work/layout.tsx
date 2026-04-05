import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Portfolio of AI-native projects built with agentic workflows: Synestrology (multi-agent synthesis engine with astronomical verification), Maestro CLI, The Absurdity Index, and enterprise product work.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Work by Shaina Pauley',
    description: 'AI-native projects built with agentic workflows: multi-agent systems, evaluation pipelines, CLI tools, data dashboards, and enterprise product architecture.',
    url: 'https://shainapauley.com/work',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
