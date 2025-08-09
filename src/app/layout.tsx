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
        {children}
      </body>
    </html>
  )
}
