'use client'

import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import { PHASES } from '@/lib/phases'

function MethodContent() {
  const searchParams = useSearchParams()
  const [highlightedPhase, setHighlightedPhase] = useState<string | null>(null)

  useEffect(() => {
    const phase = searchParams.get('phase')
    if (phase) {
      setHighlightedPhase(phase)
      // Scroll to the phase section
      setTimeout(() => {
        const element = document.getElementById(phase)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
      // Remove highlight after 3 seconds
      setTimeout(() => {
        setHighlightedPhase(null)
      }, 3000)
    }
  }, [searchParams])

  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />

      <main className="px-4 lg:px-12 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Method in my Madness
          </motion.h1>

          <motion.p
            className="text-white text-xl md:text-2xl leading-relaxed max-w-3xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            My 5-phase framework for transforming ideas into lasting impact.
          </motion.p>

          <div className="space-y-16">
            {PHASES.map((phase, index) => (
              <motion.section
                key={phase.key}
                id={phase.key}
                className={`
                  bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border-2
                  transition-all duration-500
                  ${
                    highlightedPhase === phase.key
                      ? 'border-teal-400 shadow-[0_0_30px_rgba(45,212,207,0.3)]'
                      : 'border-white/10'
                  }
                `}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{phase.emoji}</div>
                  <div>
                    <h2 className="text-white text-3xl font-display font-bold mb-2">
                      {index + 1}. {phase.title}
                    </h2>
                    <p className="text-teal-400 text-lg font-semibold">
                      {phase.objective}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/[0.02] rounded-lg p-4 border border-white/10">
                    <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">
                      Action
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{phase.action}</p>
                  </div>

                  <div className="bg-teal-500/10 rounded-lg p-4 border border-teal-400/20">
                    <h3 className="text-teal-400 font-semibold mb-2 text-sm uppercase tracking-wider">
                      Reward
                    </h3>
                    <p className="text-gray-200 leading-relaxed font-semibold">{phase.reward}</p>
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-white/60 mb-6">Ready to start your quest?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 hover:border-teal-400/60 text-teal-400 px-6 py-3 rounded-xl transition-all group"
            >
              Book a Session
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default function MethodPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
        <Sidebar />
        <main className="px-4 lg:px-12 py-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-white text-4xl">Loading...</div>
          </div>
        </main>
      </div>
    }>
      <MethodContent />
    </Suspense>
  )
}
