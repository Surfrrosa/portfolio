'use client'

import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content" className="fixed inset-0 bg-black">
        <h1 className="sr-only">About Shaina Pauley</h1>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/about-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-white text-sm font-mono whitespace-nowrap">
            contact:{' '}
            <a
              href="mailto:me@shainapauley.com"
              className="text-accent-teal hover:text-white transition-colors"
            >
              me@shainapauley.com
            </a>
          </p>
        </motion.div>
      </main>
    </>
  )
}
