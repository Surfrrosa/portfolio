'use client'

import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Sidebar from '@/components/Sidebar'
import { TextScrambleEffect } from '@/components/TextScrambleEffect'
import BottomCTAs from '@/components/BottomCTAs'
import ExitIntentPrompt from '@/components/ExitIntentPrompt'

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
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
      <ExitIntentPrompt />

      <main className="flex flex-col justify-center items-center px-4 lg:px-12 min-h-screen pt-4 lg:pt-0">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <TextScrambleEffect
            className="h1-display text-white mb-8"
            lines={["Building what", "lasts. Exploring", "what's next."]}
            threshold={0.6}
            duration={1200}
            lineStagger={250}
            id="hero-headline"
            once
          />
          
          <motion.p
            className="text-white text-xl leading-relaxed max-w-[70ch] mx-auto text-zinc-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Technical Product Owner and builder who loves prototyping, transforming data into dashboards, and designing workflows that accelerate teams and deliver measurable results.
          </motion.p>
        </motion.div>
        
        {/* Proven Impact & Approach section */}
        <section className="min-h-screen mt-12 lg:mt-20 p-4 lg:p-12">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Proven Impact & Approach</h2>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-teal-400 mr-4 mt-1">•</span>
                <span><strong>7+ Years in the Trenches</strong> ● secure authentication, REST APIs, CRM, migrations, dashboards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-4 mt-1">•</span>
                <span><strong>AI as a Co-Pilot</strong> ● automation, intelligent tooling, workflows that streamline delivery.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-4 mt-1">•</span>
                <span><strong>Fluent in Tech + People</strong> ● bridging engineering, design, leadership, and stakeholders.</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-4 mt-1">•</span>
                <span><strong>Impact, Not Just Output</strong> ● every feature tied to tangible, trackable results.</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-48">
            <BottomCTAs />
          </div>
        </section>
      </main>
    </div>
  )
}
