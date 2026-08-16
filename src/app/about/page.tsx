'use client'

import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'

export default function AboutPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />

      <main
        id="main-content"
        className="flex items-center justify-center min-h-screen px-4 lg:px-12 py-12 lg:py-20"
      >
        <h1 className="sr-only">About Shaina Pauley</h1>
        <motion.p
          className="text-white text-center leading-relaxed max-w-[70ch] mx-auto text-xl lg:text-[2rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          founder @{' '}
          <a
            href="https://synestrology.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-teal hover:text-white transition-colors"
          >
            Synestrology
          </a>
          , co-founder @{' '}
          <a
            href="https://slabcheck.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-teal hover:text-white transition-colors"
          >
            SlabCheck
          </a>
          , &amp; current grad student
        </motion.p>
      </main>
    </div>
  )
}
