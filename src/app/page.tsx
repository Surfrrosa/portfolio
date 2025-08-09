'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
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
    <div className="min-h-screen grid lg:grid-cols-[320px_1fr]">
      <Sidebar />
      
      <main className="flex flex-col justify-center items-center px-6 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="h1-display text-white mb-8">
            Future-proof<br/>Product<br/>Management
          </h1>
          
          <motion.p
            className="text-white text-xl leading-relaxed max-w-[70ch] mx-auto text-zinc-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I turn messy requirements into shipped outcomes with 7+ years of experience with AI-powered products &amp; data-driven platforms
          </motion.p>
        </motion.div>
      </main>
    </div>
  )
}
