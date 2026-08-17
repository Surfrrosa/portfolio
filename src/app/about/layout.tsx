import { buildRouteMetadata } from '@/lib/metadata'

export const metadata = buildRouteMetadata({
  title: 'about',
  slug: '/about',
  description: 'hi, it me. founder @ synestrology & co-founder @ SlabCheck.',
  ogTitle: 'about shaina pauley',
  ogDescription: 'hi, it me. founder @ synestrology & co-founder @ SlabCheck.',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
