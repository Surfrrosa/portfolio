'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Sidebar from '@/components/Sidebar'

export default function Work() {
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
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      
      <main className="px-6 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-white text-5xl md:text-6xl lg:text-7xl font-display leading-tight mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Selected Work
          </motion.h1>
          
          <motion.p
            className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A showcase of AI-powered products and data-driven solutions that have transformed user experiences and driven measurable business impact.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Project
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Prompt2Story
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-4">
                AI-Powered Storytelling Platform
              </h4>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Revolutionary AI tool that transforms simple prompts into compelling narratives, serving 10K+ users with 95% satisfaction rate.
              </p>
              
              <div className="mb-6">
                <h5 className="text-white font-semibold mb-2">Impact</h5>
                <p className="text-gray-300 text-sm">
                  10K+ users, 95% satisfaction, 40% faster content creation
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI/ML</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">User Experience</span>
              </div>
              
              <a 
                href="https://prompt2story.com" 
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors font-semibold"
              >
                Visit Live Site →
              </a>
            </motion.div>

            <motion.div
              className="bg-slate-700/30 rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                >
                  <source src="/videos/prompt2story-preview.webm" type="video/webm" />
                  <source src="/videos/prompt2story-preview.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Project Preview</p>
                    <p className="text-white font-semibold">Prompt2Story</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
