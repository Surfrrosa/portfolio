import React from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import StructuredData from '@/components/StructuredData'
import VideoBackground from '@/components/VideoBackground'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: {
    default: 'Shaina Pauley | I Build Products & Systems That Work',
    template: '%s | Shaina Pauley • Technical Product Owner'
  },
  description: 'Technical Product Owner and builder who loves prototyping, transforming data into dashboards, and designing workflows that accelerate teams and deliver measurable results.',
  keywords: ['Technical Product Owner', 'Product Manager', 'AI Product Development', 'SaaS Product Management', 'Enterprise Software', 'Product Strategy', 'AI Workflows', 'Agile Product Management', 'Shaina Pauley', 'CSPO', 'CSM'],
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
  },
  openGraph: {
    title: 'Shaina Pauley | I Build Products & Systems That Work',
    description: 'Technical Product Owner and builder who loves prototyping, transforming data into dashboards, and designing workflows that accelerate teams and deliver measurable results.',
    url: 'https://shainapauley.com',
    siteName: 'Shaina Pauley Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shaina Pauley - Technical Product Owner and AI Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaina Pauley | I Build Products & Systems That Work',
    description: 'Technical Product Owner and builder who loves prototyping, transforming data into dashboards, and designing workflows that accelerate teams and deliver measurable results.',
    images: ['/og-image.jpg'],
    creator: '@shainapauley',
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GY2TH8WC2G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GY2TH8WC2G');
          `}
        </Script>

        {/* Video Background */}
        <VideoBackground />
        {/* Global dark charcoal sheath over background */}
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
