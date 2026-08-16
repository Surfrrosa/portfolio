import { buildRouteMetadata } from '@/lib/metadata'

export const metadata = buildRouteMetadata({
  title: 'work',
  slug: '/work',
  description: 'founder work: synestrology, slabcheck, prism, and other builds.',
  ogTitle: 'work by shaina pauley',
  ogDescription: 'founder work: synestrology, slabcheck, prism, and other builds.',
})

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
