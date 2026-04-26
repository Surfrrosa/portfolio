import { buildRouteMetadata } from '@/lib/metadata'

export const metadata = buildRouteMetadata({
  title: 'Work',
  slug: '/work',
  description: 'Portfolio of AI-native projects built with agentic workflows: Synestrology (multi-agent synthesis engine with astronomical verification), Maestro CLI, The Absurdity Index, and enterprise product work.',
  ogTitle: 'Work by Shaina Pauley',
  ogDescription: 'AI-native projects built with agentic workflows: multi-agent systems, evaluation pipelines, CLI tools, data dashboards, and enterprise product architecture.',
})

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
