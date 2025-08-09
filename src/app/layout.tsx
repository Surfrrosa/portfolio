import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Shaina Pauley - Future-Ready Product Manager',
  description: 'Portfolio showcasing 7+ years of product management experience in AI-powered products and data-driven solutions.',
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
      </body>
    </html>
  )
}
