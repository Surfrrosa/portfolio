import React from 'react'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import StructuredData from '@/components/StructuredData'
import VideoBackground from '@/components/VideoBackground'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Shaina Pauley | AI Product Architect',
    template: '%s | Shaina Pauley'
  },
  description: 'AI Product Architect who designs agentic systems, builds evaluation harnesses, and architects context for production AI workflows. 7+ years enterprise product experience, now building multi-agent systems and shipping AI-native software daily.',
  keywords: ['AI Product Architect', 'Agentic Systems Design', 'AI Evaluation Harnesses', 'Multi-Agent Orchestration', 'Context Architecture', 'AI Workflow Design', 'Specification Precision', 'Failure Pattern Recognition', 'Trust and Security Design', 'Token Economics', 'Claude Code', 'AI-Native Development', 'Product Architecture', 'Shaina Pauley'],
  authors: [{ name: 'Shaina Pauley', url: 'https://shainapauley.com' }],
  creator: 'Shaina Pauley',
  publisher: 'Shaina Pauley',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://shainapauley.com'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'Shaina Pauley | AI Product Architect',
    description: 'Designing agentic systems, evaluation harnesses, and context architecture for production AI. Building multi-agent workflows and shipping AI-native software daily.',
    url: 'https://shainapauley.com',
    siteName: 'Shaina Pauley',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shaina Pauley - AI Product Architect',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaina Pauley | AI Product Architect',
    description: 'Designing agentic systems, evaluation harnesses, and context architecture for production AI. Building multi-agent workflows and shipping AI-native software daily.',
    images: ['/og-image.png'],
    creator: '@sha1napauley',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="bg-bg-base text-white font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-surface focus:text-accent-teal focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        <VideoBackground />
        <div
          className="fixed inset-0 -z-10 pointer-events-none
                     bg-black/55 backdrop-blur-[1px]"
          aria-hidden="true"
        />
        {/* Optional subtle vignette for focus */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none
                     [mask-image:radial-gradient(75%_60%_at_55%_40%,#000_60%,transparent_100%)]
                     bg-black/20"
          aria-hidden="true"
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
