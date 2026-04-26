import type { Metadata } from 'next'
import { SITE_URL } from './site'

interface RouteMetadataArgs {
  title: string
  slug: string
  description: string
  ogTitle?: string
  ogDescription?: string
}

export function buildRouteMetadata({
  title,
  slug,
  description,
  ogTitle,
  ogDescription,
}: RouteMetadataArgs): Metadata {
  return {
    title,
    description,
    alternates: { canonical: slug },
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: `${SITE_URL}${slug}`,
    },
  }
}
