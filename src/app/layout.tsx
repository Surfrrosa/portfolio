import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Shaina Pauley',
  description: 'Portfolio showcasing 7+ years of product management experience in data-driven solutions.',
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
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-bg-base text-white font-body antialiased">
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
