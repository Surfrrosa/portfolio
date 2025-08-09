'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Sidebar from '@/components/Sidebar'
import ScrollTriggeredHeadline from '@/components/ScrollTriggeredHeadline'

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      
      <main className="flex flex-col justify-end items-center px-6 lg:px-12 pb-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ScrollTriggeredHeadline className="h1-display text-white mb-8">
            Future-proof<br/>Product<br/>Management
          </ScrollTriggeredHeadline>
          
          <motion.p
            className="text-white text-xl leading-relaxed max-w-[70ch] mx-auto text-zinc-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I turn messy requirements into shipped outcomes with 7+ years of experience with AI-powered products &amp; data-driven platforms
          </motion.p>
        </motion.div>
        
        {/* Additional content for scroll testing */}
        <section className="min-h-screen mt-20 p-12">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8">More Content</h2>
            <p className="text-lg leading-relaxed mb-6">
              This section provides content below the hero to test the scroll-triggered headline effects.
              Scroll up and down to see the effect activate when the headline comes into view.
            </p>
            <p className="text-lg leading-relaxed">
              The effect should only activate when scrolling over the "Future-proof Product Management" headline,
              creating a subtle distortion and glow effect that responds to scroll position.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
