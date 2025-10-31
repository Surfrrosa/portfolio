'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Sidebar from '@/components/Sidebar'
import DiagramGallery from '@/components/DiagramGallery'

export default function Work() {
  const lenisRef = useRef<Lenis | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMedia, setModalMedia] = useState({ src: '', type: 'image' as 'image' | 'video' })

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
      
      <main className="px-4 lg:px-12 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-6 lg:mb-8"
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
            A showcase of data-driven solutions that have transformed user experiences and driven measurable business impact.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
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
                Prompt2Story ● AI-Powered User Story Generator
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
                    I designed and shipped an AI-powered platform that ingests unstructured input and outputs standardized, ready-to-use user stories. Including acceptance criteria, edge cases, and optional metadata, all aligned with Agile best practices.
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
                  <div className="text-gray-300 space-y-3">
                    <p>Launched on Product Hunt, gaining early adopters and valuable user feedback from the product community.</p>
                    <p>Positive early feedback from beta testers and peers in product management.</p>
                    <p>Streamlined the process of converting messy notes into Agile-ready user stories.</p>
                    <p>Designed to reduce backlog grooming time and improve cross-team clarity.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Workflow Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Agile Delivery</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h5 className="text-white/60 text-xs uppercase tracking-wider mb-4">Featured On</h5>
                <a
                  href="https://www.producthunt.com/products/prompt2story"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors group"
                >
                  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 4c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm3.5 12h-7v8h7c2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6h-3v-4h3c1.105 0 2 .895 2 2s-.895 2-2 2z"/>
                  </svg>
                  <span className="text-base font-semibold">Product Hunt</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="mt-8 space-y-6">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/prompt2story-preview.mp4', type: 'video' })
                    setIsModalOpen(true)
                  }}
                >
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

                <div className="text-center">
                  
                  <a
                    href="https://www.prompt2story.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                  >
                    Try It Live
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                  MVP Complete
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Enlighten ● Tao × Neuroscience Mindfulness App
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Mindfulness, nervous system regulation, and timeless Taoist wisdom in your pocket.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Most mindfulness apps expect users to actively seek out content, making it easy to forget or skip entirely. Few combine unpredictable Taoist insights with quick, evidence-based practices for an immediate state shift.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Enlighten delivers Tao Te Ching passages paired with neuroscience-backed micro-practices at beautifully timed moments. Features include a quote library with filters, favorites, customizable notifications, and minimal, distraction-free UX.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, UX design, user flows, high-level technical planning, user story creation, and roadmap development.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact (Projected)</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Provides fast, restorative nervous system resets without disrupting routine.</p>
                    <p>Bridges philosophy and neuroscience for practical daily use.</p>
                    <p>Makes Taoist wisdom accessible through modern, mobile-first design.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Status</h5>
                  <p className="text-gray-300 leading-relaxed">
                    MVP complete and ready for deployment.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mindfulness</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile UX</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Development</span>
              </div>

              <div className="mt-8">
                <div
                  className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/images/enlighten_portfolio_horizontal.png', type: 'image' })
                    setIsModalOpen(true)
                  }}
                >
                  <img
                    src="/images/enlighten_portfolio_horizontal.png"
                    alt="Enlighten app portfolio showcase featuring mobile screens for notifications, daily wisdom, micro-practice, library, and favorites"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Enterprise Telecom / API Integrations
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Nortal ● API-Driven Telecom Solutions for National Retailers
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Delivered prepaid activation, number port-in, add-a-line, and billing integrations for T-Mobile's largest retail partners.
              </h4>
              
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Secure Communications Modernization — Faster, Safer, Smarter
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    T-Mobile's prepaid services for major retailers like Walmart, Costco, and Best Buy required complex API integrations for activations, number porting, and service extensions. Without streamlined processes, onboarding new customers or adding lines was slow, error-prone, and frustrating.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    As Technical Product Owner, I managed the MAAD Lite prepaid API integration for national retailers, delivered Port-In capabilities for seamless number transfers, launched National Retailer Add-a-Line (AAL) functionality for existing customers, and improved cart, payment, and OTP retry performance for faster transactions.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Technical Product Owner managing API integrations, stakeholder coordination, performance optimization, and cross-team delivery for enterprise retail partnerships.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Reduced number porting time and errors, improving customer onboarding.</p>
                    <p>Implemented and streamlined prepaid activations across retail partners.</p>
                    <p>Boosted upsell opportunities through improved AAL process.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">API Integration</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Telecom</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Agile Delivery</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Enterprise Retail</span>
              </div>
              
              <DiagramGallery />
              
              <div className="text-center mt-8">
                <a 
                  href="https://nortal.com/about" 
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Live on App Store
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                PomodoroFlow ● Radically Simple Focus Timer
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                From start to focus in one tap, a minimal 25/5 pomodoro timer with zero clutter.
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Most pomodoro apps are overloaded with customization, making them distracting to set up and easy to abandon. I wanted a timer so simple it fades into the background, yet reliable enough to track focus cycles without breaking flow.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    PomodoroFlow delivers a distraction-free 25-minute focus / 5-minute break cycle with auto-progression, subtle chimes, and gentle haptic feedback. Sessions persist if the app is closed, and local notifications ensure you never miss a switch. Includes a "Fast Mode" for rapid QA and testing.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, UX design, feature scoping, implementation in Expo (React Native), local notification and audio integration, Git branching strategy, EAS build configuration.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-2">
                    <p>Created a seamless, minimal UX that keeps users focused without decision fatigue.</p>
                    <p>Improved testing speed with a dedicated developer mode.</p>
                    <p>Established safe, AI-assisted branch workflow to prevent future merge conflicts.</p>
                    <p className="text-green-400 font-medium">Now live on the iOS App Store, with Android version coming soon.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile Development</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Agile Development</span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="mb-2">
                    <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs tracking-wide">
                      Mobile App
                    </span>
                  </div>
                  <div
                    className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                    onClick={() => {
                      setModalMedia({ src: '/images/pomodoro-flow-app.jpg', type: 'image' })
                      setIsModalOpen(true)
                    }}
                  >
                    <img
                      src="/images/pomodoro-flow-app.jpg"
                      alt="PomodoroFlow app preview showing 25/5 timer interface"
                      className="w-48 h-auto object-contain mx-auto"
                    />
                  </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://apps.apple.com/us/app/pomodoroflow/id6753604260"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 px-6 py-4 rounded-xl transition-all group"
                  >
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="white"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="text-xl font-semibold text-white">App Store</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.surfrrosa.pomodoroflow&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 px-6 py-4 rounded-xl transition-all group"
                  >
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="white"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">Get it on</div>
                      <div className="text-xl font-semibold text-white">Google Play</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Fixed Wireless / Public Sector Innovation
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                WindTalker ● Real-Time Monitoring, RF Planning, and Field Deployments
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Delivering mission-critical network tools and rapid connectivity solutions for complex, high-stakes environments.
              </h4>
              
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Secure Communications Modernization — Faster, Safer, Smarter
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Fixed wireless networks in remote and tactical contexts require precision planning, real-time health visibility, and the ability to deploy infrastructure quickly — even in humanitarian or emergency situations.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    In dual roles as Product Owner and Business Analyst, I delivered Manager — a real-time network health monitoring platform with uptime alerts and performance analytics, Planner — an RF mapping and network planning tool for rapid, accurate deployment design, and Field Deployments — guided refugee camp mesh network setup and drone integration for public safety operations.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product Owner and Business Analyst managing network monitoring platforms, RF planning tools, and field deployment coordination for mission-critical environments.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Reduced network downtime and improved monitoring accuracy.</p>
                    <p>Cut RF planning time and increased deployment precision.</p>
                    <p>Provided life-critical communications in crisis and public safety scenarios.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Network Monitoring</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">RF Planning</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Emergency Deployments</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">SaaS Product Ownership</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Military and tactical communication systems required complex manual setup processes that delayed critical operations and created security vulnerabilities in high-stakes environments.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    WindTalker delivers automated secure communication deployment with instant frequency scanning, streamlined configuration workflows, and rapid onboarding protocols designed for mission-critical scenarios.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product strategy, UX research with military personnel, secure system architecture, deployment automation design, and field testing coordination.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4" aria-label="WindTalker visuals">
                <div className="relative rounded-lg border border-white/10 bg-black/30 p-6">
                  <h5 className="text-white font-semibold mb-6">WindTalker — Personas</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs uppercase tracking-wider">Operator</span>
                      </div>
                      <div className="text-gray-300 space-y-2 text-sm">
                        <p><strong>Goal:</strong> Reliable comms in the field</p>
                        <p><strong>Pain:</strong> Complex setup</p>
                        <p><strong>Environment:</strong> Remote tactical locations</p>
                        <p><strong>Challenge:</strong> Time-critical deployments</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs uppercase tracking-wider">Technician</span>
                      </div>
                      <div className="text-gray-300 space-y-2 text-sm">
                        <p><strong>Goal:</strong> Fast, correct deployment</p>
                        <p><strong>Pain:</strong> Long configuration time</p>
                        <p><strong>Environment:</strong> Field installations</p>
                        <p><strong>Challenge:</strong> Equipment compatibility</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs uppercase tracking-wider">Mission Lead</span>
                      </div>
                      <div className="text-gray-300 space-y-2 text-sm">
                        <p><strong>Goal:</strong> Operational readiness</p>
                        <p><strong>Pain:</strong> Delays due to tech issues</p>
                        <p><strong>Environment:</strong> Command centers</p>
                        <p><strong>Challenge:</strong> Mission-critical timing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg border border-white/10 bg-black/30 p-4">
                  <h5 className="text-white font-semibold mb-4">WindTalker — Impact Metrics</h5>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-3xl font-bold text-white" style={{textShadow: '0 0 20px rgba(96, 165, 250, 0.5)'}}>
                          6 hrs → 2 hrs
                        </div>
                        <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Time to Deploy</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-3xl font-bold text-white" style={{textShadow: '0 0 20px rgba(52, 211, 153, 0.5)'}}>
                          +22%
                        </div>
                        <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Reliability</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div>
                        <div className="text-3xl font-bold text-white" style={{textShadow: '0 0 20px rgba(167, 139, 250, 0.5)'}}>
                          −50%
                        </div>
                        <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Onboarding</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-lg border border-white/10 bg-black/30 p-4">
                  <h5 className="text-white font-semibold mb-4">WindTalker — Before / After</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">Before</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50 border border-slate-700">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          </svg>
                          <span className="text-gray-300 text-sm">Manual setup</span>
                          <svg className="w-3 h-3 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50 border border-slate-700">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">Frequency mapping</span>
                          <svg className="w-3 h-3 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/50 border border-slate-700">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span className="text-gray-300 text-sm">Extended training</span>
                          <svg className="w-3 h-3 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">After</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-green-900/20 border border-green-700/50">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="text-gray-300 text-sm">Automated setup</span>
                        </div>
                        
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-green-900/20 border border-green-700/50">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          <span className="text-gray-300 text-sm">Instant frequency scan</span>
                        </div>
                        
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-green-900/20 border border-green-700/50">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <span className="text-gray-300 text-sm">Quick start guide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <a 
                  href="https://windtalker.com/osmosis/" 
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Personal Passion Project
                </span>
              </div>

              <h3 className="text-white text-2xl font-display font-bold mb-4">
                ShainAI ● My RAG-Powered Second Brain
              </h3>

              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                AI-powered knowledge retrieval: instant access to technical details, decision history, and project context from across all my work.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    I generate tons of technical knowledge daily: architecture decisions, code patterns, debugging sessions, feature discussions. When that information lives across ChatGPT conversations, Git repos, note archives, and local files, finding specific details becomes a needle-in-haystack problem. What was that API approach I discussed three months ago? Why did I choose that architecture? What was the solution to that edge case? My brain remembers the concepts, but not all the specifics.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    I built a privacy-first RAG (Retrieval-Augmented Generation) system that ingests, indexes, and semantically searches across all my personal data sources. ShainAI automatically watches my local files, ingests my Git repos on commit, parses my ChatGPT exports, and imports my note archives. It then answers my questions by retrieving relevant context with citations. The system even ingests its own conversations with me, creating a meta-memory loop where my second brain remembers thinking with itself.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">What I Built</h5>
                  <p className="text-gray-300 leading-relaxed">
                    System architecture (RAG pipeline, vector embeddings, semantic search), full-stack development, AI orchestration and prompt engineering, auto-ingestion system design with real-time file watching and git hooks, UX/UI for conversational interface.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Gives me instant semantic search across my 1,000+ memories (ChatGPT history, Joplin notes, local files, GitHub repos).</p>
                    <p>Auto-ingestion pipeline watches my files, hooks into my git commits, and parses multiple formats (PDF, Word, images with OCR, .env files, ZIP archives).</p>
                    <p>Meta capability: Automatically saves its own conversations with me every 5 Q&A exchanges, making past ShainAI discussions searchable.</p>
                    <p className="text-cyan-400 font-medium">Built for privacy: 100% local deployment on my machine with no external dependencies and full data ownership.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">RAG Systems</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Vector Search</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Engineering</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Full-Stack</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="relative rounded-lg border border-white/10 bg-black/30 p-6">
                  <h5 className="text-white font-semibold mb-4">Tech Stack</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-cyan-400 font-semibold mb-2">Backend</div>
                      <div className="text-gray-300 space-y-1">
                        <p>• Node.js + Express</p>
                        <p>• PostgreSQL + pgvector</p>
                        <p>• Vector similarity search</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-semibold mb-2">Frontend</div>
                      <div className="text-gray-300 space-y-1">
                        <p>• Next.js 14 + TypeScript</p>
                        <p>• React + Tailwind CSS</p>
                        <p>• Markdown rendering</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-semibold mb-2">AI/ML</div>
                      <div className="text-gray-300 space-y-1">
                        <p>• OpenAI GPT-4 Turbo</p>
                        <p>• text-embedding-3-small</p>
                        <p>• 1536-dim embeddings</p>
                      </div>
                    </div>
                    <div>
                      <div className="text-cyan-400 font-semibold mb-2">Ingestion</div>
                      <div className="text-gray-300 space-y-1">
                        <p>• Custom parsers (PDF, Word)</p>
                        <p>• Tesseract OCR for images</p>
                        <p>• File watching (chokidar)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-lg border border-white/10 bg-black/30 p-4">
                  <h5 className="text-white font-semibold mb-4">Auto-Ingestion Highlights</h5>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>Real-time file monitoring across Desktop, Downloads, Documents with intelligent filtering</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>Git integration via post-commit hooks—every commit auto-ingests changed files</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>Multi-source imports: ChatGPT (343 conversations → 5,037 chunks), Joplin (400 notes → 1,315 chunks), local files (900+ scanned)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>Meta-memory: ShainAI auto-saves its own conversations, enabling queries like "What did I ask you about Floatless yesterday?"</p>
                    </div>
                  </div>
                </div>

                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/shainai-demo.mp4', type: 'video' })
                    setIsModalOpen(true)
                  }}
                >
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
                    <source src="/videos/shainai-demo.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Demo Video</p>
                      <p className="text-white font-semibold">ShainAI Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Enterprise SaaS / B2B Product Management
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                ConnectWise Manage ● Product Ownership Across Mobile, Communication, and CRM Platforms
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Delivered cross-platform enhancements to improve usability, communication, and data visibility for IT service providers.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    ConnectWise Manage serves thousands of IT professionals worldwide, but some workflows were outdated or inefficient — from mobile field operations to client communication and sales visibility. Users needed a faster, clearer, and more integrated experience across devices and departments.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    As Product Owner for CRM, Service, and System modules, I delivered Mobile App Updates – improved ticket management, remote access, and workflows for technicians on the go, Ticket Notes Redesign – added rich text formatting, inline images, avatars, and issue tags to improve clarity and reduce resolution times, and ConnectWise Now CRM Dashboards – built real-time sales and quote visibility into customizable dashboards, integrating pipeline, forecasting, and compliance metrics.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product Owner for CRM, Service, and System modules managing mobile UX improvements, communication redesigns, and data visualization enhancements for enterprise IT service providers.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Reduced mobile ticket handling time by ~25% and boosted app adoption by 40%.</p>
                    <p>Improved communication clarity and reduced note review time for technicians and clients.</p>
                    <p>Enabled instant CRM data access for sales teams, improving forecast accuracy and decision-making speed.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Ownership</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">SaaS</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile UX</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Data Visualization</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Communication UX</span>
              </div>

              <div className="mt-8">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-zinc-300">
                    ConnectWise Mobile App
                  </span>
                </div>
                <div
                  className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/images/connectwise-manage-showcase.png', type: 'image' })
                    setIsModalOpen(true)
                  }}
                >
                  <img
                    src="/images/connectwise-manage-showcase.png"
                    alt="ConnectWise Manage mobile app interfaces showing ticket management, time tracking, and CRM dashboards"
                    className="w-full h-auto max-h-64 md:max-h-72 object-contain"
                  />
                </div>
                <div className="mt-4">
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-wider text-zinc-300">
                      ConnectWise Now Dashboard
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40">
                        <img
                          src="/media/connectwise/dashboard-1.png"
                          alt="ConnectWise Now dashboard: service summary with trends"
                          className="w-full h-auto max-h-40 md:max-h-48 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40">
                        <img
                          src="/media/connectwise/dashboard-2.png"
                          alt="ConnectWise Now dashboard: device and patching status tiles"
                          className="w-full h-auto max-h-40 md:max-h-48 object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>


                <section
                  className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3"
                  aria-label="ConnectWise Release Notes"
                >
                  <div className="mb-2 text-sm font-semibold text-white/90">Release Notes</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/new-connectwise-mobile-app#:~:text=With%20our%20core%20values%20to%20guide%20us%2C,techs%20complete%20assigned%20tasks%20quickly%20and%20efficiently"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
                        title="ConnectWise Mobile App"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                        ConnectWise Mobile App
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/new-connectwise-manage-features"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
                        title="Ticket Notes"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                        Ticket Notes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/introducing-connectwise-now-a-new-dashboard-for-your-data"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
                        title="ConnectWise Now Dashboard"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                        ConnectWise Now Dashboard
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              
              <div className="text-center mt-8">
                <a 
                  href="https://www.connectwise.com/platform/psa?ref=header#features" 
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-sm font-semibold">
                  MVP Beta Testing
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Floatless ● Automated Payment Reconciliation & Dunning Platform
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Polite payment reminders, accurate records, and zero manual chasing all in one place.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Small businesses and agencies waste time manually reconciling payments, chasing overdue invoices, and tracking dunning communications. These tasks are repetitive, error-prone, and often lead to awkward client interactions.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Floatless automates payment reconciliation by integrating directly with Stripe and QuickBooks, generating polite, on-brand dunning messages, and tracking communication history. The platform also provides subscription metrics, ROI reporting, and payment health summaries, all in a minimalist, easy-to-use dashboard.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, UX design, data model architecture, API integration planning, workflow automation design, and go-to-market strategy.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact (Projected)</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Reduces overdue payments and manual follow-up time.</p>
                    <p>Improves cash flow visibility with real-time payment health metrics.</p>
                    <p>Creates a positive client experience through polite, professional reminders.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Status</h5>
                  <p className="text-gray-300 leading-relaxed">
                    MVP feature-complete; currently in closed beta testing.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Payment Automation</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">SaaS UX</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">API Integration</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
              </div>

              <div className="mt-8 space-y-6">
                <div className="relative rounded-lg border border-white/10 bg-black/30 p-6">
                  <h5 className="text-white font-semibold mb-6">Payment Automation Flow</h5>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Invoice Created</div>
                        <div>Stripe integration detects new charges</div>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Auto Reconciliation</div>
                        <div>Floatless matches payments to invoices</div>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">QuickBooks Sync</div>
                        <div>Records updated automatically</div>
                      </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Polite Reminders</div>
                        <div>Automated, on-brand dunning messages</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative rounded-lg border border-white/10 bg-black/30 p-4">
                  <h5 className="text-white font-semibold mb-4">Before vs After</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">Before Floatless</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-red-900/20 border border-red-700/50">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-300 text-sm">Manual payment tracking</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-red-900/20 border border-red-700/50">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-300 text-sm">Awkward follow-up calls</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-red-900/20 border border-red-700/50">
                          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-300 text-sm">Inconsistent record keeping</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">With Floatless</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-green-900/20 border border-green-700/50">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">Automated reconciliation</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-green-900/20 border border-green-700/50">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">Professional, polite reminders</span>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded-lg bg-green-900/20 border border-green-700/50">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-300 text-sm">Real-time payment health</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/floatless-marketing.mp4', type: 'video' })
                    setIsModalOpen(true)
                  }}
                >
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
                    <source src="/videos/floatless-marketing.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">Floatless</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://www.floatless.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                  >
                    See it live
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Active Competition
                </span>
              </div>

              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Copy-Move Forgery Detection ● Kaggle Competition
              </h3>

              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Pixel-level manipulation detection in biomedical gel images with rigorous ML experimentation.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Detecting near-duplicate regions in low-contrast scientific imagery is challenging. Repetitive textures and banding patterns create false positives, while competition constraints limit daily submissions and GPU time.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Approach</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Built an encoder-decoder pipeline with self-correlation stage to surface copy-move candidates. Established deterministic cross-validation, per-epoch metrics tracking, and automated submission pipeline with RLE formatting. Prioritized generalization over leaderboard chasing.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Model design, training strategy, experiment operations, CV setup, logging infrastructure, submission pipeline automation, and post-processing optimization.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Current Outcomes</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Steady validation gains with clear reductions in spurious detections on gel band regions.</p>
                    <p>Fully automated pipeline from checkpoint to CSV, shortening iteration cycles.</p>
                    <p>Reproducible experiment design with pinned configs and visual sanity checks.</p>
                  </div>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Next Steps</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Enable test-time augmentation, run post-processing sweeps, train complementary model for ensemble, and publish full reproducibility kit post-competition.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">PyTorch</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">ML Ops</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Kaggle</span>
              </div>

              <div className="mt-8">
                <div className="relative rounded-lg border border-white/10 bg-black/30 p-6">
                  <h5 className="text-white font-semibold mb-4">Experiment Pipeline</h5>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Deterministic CV</div>
                        <div>Fixed seeds & validation splits</div>
                      </div>
                    </div>

                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Metrics Tracking</div>
                        <div>Per-epoch logs & checkpoints</div>
                      </div>
                    </div>

                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-sm text-gray-300">
                        <div className="font-semibold text-white">Auto Submission</div>
                        <div>Checkpoint → RLE → CSV</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Return to Top Button */}
          <div className="mt-16 mb-8 text-center">
            <button
              onClick={() => {
                if (lenisRef.current) {
                  lenisRef.current.scrollTo(0, { duration: 1.5 })
                }
              }}
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium glitch-hover transition-colors group"
              aria-label="Return to top of page"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </main>

      {/* Media Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-[95vw] h-[95vh]">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              ✕ Close
            </button>
            {modalMedia.type === 'video' ? (
              <video
                className="w-full h-full object-contain rounded-lg"
                controls
                autoPlay
                loop
                onClick={(e) => e.stopPropagation()}
              >
                <source src={modalMedia.src} type="video/mp4" />
                <source src={modalMedia.src.replace('.mp4', '.webm')} type="video/webm" />
              </video>
            ) : (
              <img
                src={modalMedia.src}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
