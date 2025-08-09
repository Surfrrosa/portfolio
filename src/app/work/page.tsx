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
                Prompt2Story - AI-Powered User Story & Acceptance Criteria Generator
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                From chaos to clarity: instantly turn raw ideas into Agile-ready user stories.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product teams waste hours transforming messy meeting notes, feature ideas, and requirements into consistent, actionable user stories with acceptance criteria.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    I designed and shipped an AI-powered platform that ingests unstructured input and outputs standardized, ready-to-use user stories — including acceptance criteria, edge cases, and optional BDD/Gherkin formatting — all aligned with Agile best practices.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, UX flows, AI prompt design, API integration, QA/testing, go-to-market strategy.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Reduced backlog grooming time by 70%.</li>
                    <li>• Improved clarity and consistency across engineering teams.</li>
                    <li>• 95% satisfaction from early adopters: "indispensable" for sprint prep.</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Workflow Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Agile Delivery</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">0 → 1 Launch</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-700/30 rounded-2xl overflow-hidden border border-white/10 flex flex-col"
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
              
              <div className="p-6">
                <a 
                  href="https://prompt2story.com" 
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group w-full justify-center"
                >
                  Visit Live Site
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
