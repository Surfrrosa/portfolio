'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import DiagramGallery from '@/components/DiagramGallery'
import { EnlightenCarousel } from '@/components/EnlightenCarousel'
import { useLenis } from '@/hooks/useLenis'

export default function Work() {
  const lenisRef = useLenis()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMedia, setModalMedia] = useState({ src: '', type: 'image' as 'image' | 'video' })

  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      
      <main id="main-content" className="px-4 lg:px-12 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            stuff I&apos;ve been working on
          </motion.h1>
          
          <motion.p
            className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            An eclectic mix of corporate, client, and personal.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                SlabCheck ● Pokemon TCG Grading Decision Tool
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                Scan a card. See the math. Make a smarter grading decision.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Pokemon card collectors spend hundreds on grading fees with no way to know if it&apos;s worth it. The math is opaque: grade probability, market prices at each grade, fees, turnaround times. Most people guess, and most guesses lose money.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A mobile app that identifies any Pokemon card from a photo, then runs a data-driven valuation model under the hood. The result is a clear recommendation in seconds: grade it, sell it raw, or list it on eBay.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product lead. Working with a designer to shape the experience from concept through MVP. Owning product strategy, technical architecture, and development.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Status</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Working MVP with card scanning, identification, and value breakdown</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Computer vision for instant card identification from a single photo</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Proprietary valuation model that weighs grade probability, market prices, and fees</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Gathering early access interest now</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">React Native</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Expo</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Supabase</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Computer Vision</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Vercel</span>
              </div>

              <div className="mt-8 space-y-6">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/slabcheck-demo.mp4', type: 'video' })
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
                    <source src="/videos/slabcheck-demo.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">SlabCheck</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://slabcheck.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    Join the Waitlist
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
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Prism ● Media Bias Awareness Tool
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                See the full spectrum of your news diet, no effort required.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    People don&apos;t realize their news consumption is lopsided. Existing tools require manual effort and don&apos;t surface patterns passively.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A Chrome extension that silently tracks news sources you read, matches them against 2,700+ rated sources from Media Bias/Fact Check, and computes a Perspective Diversity Score. Visualizes your Left/Center/Right distribution, detects blind spots, and generates shareable retro-styled cards of your media diet.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Solo builder. Product concept, design, development, Chrome Web Store launch.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>2,700+ rated news sources from Media Bias/Fact Check database</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Zero network requests, all data stays local in IndexedDB</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Diversity Score algorithm factoring entropy, variety, quality, and breadth</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Weekly summary reports and shareable Canvas-rendered media diet cards</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Chrome Extension</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">IndexedDB</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Canvas API</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Manifest V3</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Privacy-First</span>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                    onClick={() => {
                      setModalMedia({ src: '/images/prism-promo-marquee.png', type: 'image' })
                      setIsModalOpen(true)
                    }}
                  >
                    <img
                      src="/images/prism-promo-marquee.png"
                      alt="Prism Chrome extension promo showing media bias spectrum visualization"
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                </div>

                <div>
                  <div
                    className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                    onClick={() => {
                      setModalMedia({ src: '/images/prism-screenshot-3.png', type: 'image' })
                      setIsModalOpen(true)
                    }}
                  >
                    <img
                      src="/images/prism-screenshot-3.png"
                      alt="Prism bias badge explainer showing Left through Right ratings with example sources"
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://chromewebstore.google.com/detail/prism/pbhmchohngpdjmldjfdlomjfgkjfegfc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    Chrome Web Store
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
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Synestrology ● Astrology × Human Design × Numerology Synthesis Engine
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                The only platform that weaves three self-discovery systems into a single personalized reading.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Astrology, Human Design, and Numerology each offer deep personal insight, but they exist in silos. No product synthesizes all three into a unified narrative, forcing people to piece together fragmented readings across multiple sites.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A full-stack synthesis engine that calculates natal charts (Swiss Ephemeris), Human Design bodygraphs, and Pythagorean numerology profiles, then feeds all three into an AI synthesis layer that generates 3,000+ word personalized readings delivered as branded PDFs. Includes a free Cosmic Blueprint tool combining all three systems.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Founder and product architect. Designed the verification pipeline, context architecture, and evaluation system. Product strategy, UX, SEO, and go-to-market.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Only combined astrology + Human Design + numerology calculator on the web</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Swiss Ephemeris precision (0.001 arcsecond accuracy) for natal chart calculations</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Full e-commerce pipeline: Stripe checkout → AI generation → branded PDF → email delivery</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>257 passing tests, CI/CD pipeline, rate limiting, retry queue with exponential backoff</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Python / FastAPI</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Swiss Ephemeris</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Synthesis</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Stripe</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">PDF Generation</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">SEO</span>
              </div>

              <div className="mt-8 space-y-6">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/synestrology-preview.mp4', type: 'video' })
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
                    <source src="/videos/synestrology-preview.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">Synestrology</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://www.synestrology.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    Visit Synestrology
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="https://www.synestrology.com/tools/cosmic-blueprint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    Use the Free Tool
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
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Declassify ● Sourced Reporting on the 2026 Iran War
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                Every number cited. Every claim linked. No editorializing.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    The Pentagon revoked press credentials from every major news outlet during Operation Epic Fury. With traditional media locked out, the public lost access to verified, centralized reporting on an active military conflict.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A sourced reporting dashboard that aggregates casualty figures, economic impact data, and operational details from international outlets, government releases, and NGOs. Every single number links to its source. Contested figures are presented side by side with no editorial judgment. Includes a timeline, impact analysis across 10+ categories, and a media blackout visualization showing which outlets lost credentials and which kept them.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Solo builder. Research pipeline, editorial framework, information architecture, data binding system, accessibility, daily source monitoring and updates.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>54+ external source citations across dashboard, timeline, and impact pages</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Daily automated broken link checking via GitHub Actions</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Zero dependencies: pure HTML/CSS/JS, no build step, progressive enhancement throughout</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Full keyboard navigation, screen reader support, reduced motion respect</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Information Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Accessibility</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Zero Dependencies</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">CI/CD</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Brutalist Design</span>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                    onClick={() => {
                      setModalMedia({ src: '/images/declassify-og.png', type: 'image' })
                      setIsModalOpen(true)
                    }}
                  >
                    <img
                      src="/images/declassify-og.png"
                      alt="Declassify social card with redacted title treatment and tagline: sourced reporting on the 2026 Iran war"
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://declassify.news"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    Visit Site
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Surfrrosa/declassify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    GitHub
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
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                CrunchBox ● Client-Side File Conversion Tools
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                Convert, compress, and merge files. Everything stays in your browser.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    File conversion sites upload your documents to their servers, plaster ads everywhere, and harvest your data. For something as simple as compressing a PDF, you shouldn&apos;t need to trust a stranger with your files.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A suite of client-side file tools where every conversion happens in the browser. HEIC to JPG, WebP to JPG, PDF compression, PDF merging, and image compression with quality control. No files ever leave your machine.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Solo builder. Product concept, brand identity, development, Stripe integration, Sentry monitoring, launch.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>5 conversion tools: HEIC, WebP, PDF compress, PDF merge, image compress</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>100% client-side processing via pdf-lib, heic-to (libheif WASM), Canvas API</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Freemium model with Stripe subscription billing</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Sentry error monitoring and logging for proactive issue detection</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Astro</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">pdf-lib</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">WASM</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Stripe</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Sentry</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Privacy-First</span>
              </div>

              <div className="mt-8 space-y-6">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/crunchbox.mp4', type: 'video' })
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
                    <source src="/videos/crunchbox.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">CrunchBox</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://crunchbox.lol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
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
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Maestro ● AI Development Process CLI
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                The missing process layer for AI-assisted development.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    AI coding tools start every session fresh. Without documented context, teams lose naming conventions, architecture decisions, and security requirements between sessions. The output is fast but undirected.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A CLI that scaffolds and enforces development process. Scans your codebase to generate CLAUDE.md, session logs, security checklists, and .env templates. Scores project health across audit, quality, security, and dependency categories. Integrates with CI pipelines and git hooks for continuous enforcement.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, CLI architecture, scoring algorithms, npm publishing. Built with AI-assisted development and dogfooded across 12 personal projects.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Published on npm as maestro-dev, installable globally</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>12-check audit scoring (0-100) plus 7-category code quality grading (A-F)</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Full CI integration with GitHub Actions workflow</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Dogfooded across repos to validate every feature before shipping</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Node.js / TypeScript</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">CLI Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">npm Publishing</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Static Analysis</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Git Hooks</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">CI/CD</span>
              </div>

              <div className="mt-8 space-y-6">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/maestro-demo.mp4', type: 'video' })
                    setIsModalOpen(true)
                  }}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/maestro-demo.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://www.npmjs.com/package/maestro-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    npm Package
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Surfrrosa/maestro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    GitHub
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
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                What Changed ● Automatic Webpage Diff Tracker
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                See exactly what&apos;s different when you revisit any page.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Every change-detection tool requires you to predict which pages will change and set up watchers ahead of time. Nobody does that.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A Chrome extension that flips the model. It silently snapshots every page you visit using Mozilla&apos;s Readability for smart content extraction, then shows you a clean word-level diff the moment you return. SHA-256 deduplication keeps storage minimal, and configurable significance thresholds filter out noise from A/B tests and dynamic feeds.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Solo builder. Product concept, architecture, development, Chrome Web Store launch.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Zero-config automatic tracking on every page you visit</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>~5 KB average snapshot vs ~200 KB raw HTML via Readability extraction</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>~70% revisit deduplication via SHA-256 content hashing</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>SPA navigation support with automatic re-capture</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Chrome Extension</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">IndexedDB</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Readability.js</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">jsdiff</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Manifest V3</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Privacy-First</span>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                    onClick={() => {
                      setModalMedia({ src: '/images/what-changed-screenshot.png', type: 'image' })
                      setIsModalOpen(true)
                    }}
                  >
                    <img
                      src="/images/what-changed-screenshot.png"
                      alt="What Changed landing page showing automatic webpage diff tracking with highlighted text changes"
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://chromewebstore.google.com/detail/what-changed/beaielclimdopobfbaeibgmpnlmnfpjf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    Chrome Web Store
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
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Enlighten ● Tao × Neuroscience Mindfulness App
              </h3>
              
              <h4 className="text-accent-teal text-lg font-semibold mb-6">
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
                    Product concept, UX design, and technical planning. Wrote the user stories and roadmap.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact (6-Month Targets)</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">→</span><span>750-1,500 downloads with organic growth</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">→</span><span>4-6% Day 30 retention (indie app benchmark)</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">→</span><span>100-200 weekly active users engaging 2-3x per week</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">→</span><span>Fast nervous system resets without disrupting routine</span></p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Status</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Available now on iOS App Store and Google Play.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mindfulness</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile UX</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Development</span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://apps.apple.com/us/app/enlighten-daily-wisdom/id6756754380"
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
                  href="https://play.google.com/store/apps/details?id=com.enlighten.wisdomapp"
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

              <EnlightenCarousel
                onSlideClick={(index) => {
                  setModalMedia({
                    src: `/images/enlighten${index + 1}.PNG`,
                    type: 'image'
                  })
                  setIsModalOpen(true)
                }}
              />

              <div className="text-center mt-8">
                <a
                  href="https://enlighten-kappa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                >
                  View Landing Page
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
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                The Absurdity Index ● Data-Driven Social Research
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                When the economy is &apos;strong&apos; but everyone&apos;s struggling, that gap is worth measuring.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Official statistics often lag reality and miss the psychological toll of modern challenges like healthcare nightmares, housing despair, and AI dependency.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A research dashboard tracking 8 metrics of modern absurdity through a 40/60 formula combining official data with social sentiment analysis across YouTube, Reddit, and TikTok.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Research design, data collection, UX/UI design, brutalist aesthetic, deployment. Built with AI.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>3,200+ real data points collected across 8 societal metrics</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>7 data sources: YouTube, Reddit, TikTok, Hacker News, CFPB, Bluesky, FRED</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Fully automated weekly data pipeline running on GitHub Actions</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Current overall score: 38/100, with wage stagnation and healthcare leading the crisis</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Research Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Data Collection</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Social Sentiment</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Python</span>
              </div>

              <div className="mt-8 space-y-6">
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalMedia({ src: '/videos/absurdity-index-preview.mp4', type: 'video' })
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
                    <source src="/videos/absurdity-index-preview.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">The Absurdity Index</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                <div className="flex gap-4">
                  <a
                    href="https://absurdity-index.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center group inline-flex items-center justify-center"
                  >
                    View Dashboard
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="https://absurdity-index.vercel.app/methodology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center group inline-flex items-center justify-center"
                  >
                    Methodology
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </a>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <a
                    href="/writing/the-absurdity-index"
                    className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium">Read the full article: The Absurdity Index</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Nortal ● API-Driven Telecom Solutions for National Retailers
              </h3>
              
              <h4 className="text-accent-teal text-lg font-semibold mb-6">
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
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Delivered 3 major API integrations on time for T-Mobile's largest retail partners</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Streamlined prepaid activations across Walmart, Costco, and Best Buy</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Reduced number porting errors and improved customer onboarding flow</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">✓</span><span>Zero critical production bugs across enterprise retail integrations</span></p>
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
                  className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
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
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                ConnectWise Manage ● Product Ownership Across Mobile, Communication, and CRM Platforms
              </h3>
              
              <h4 className="text-accent-teal text-lg font-semibold mb-6">
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
                        className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80"
                        title="ConnectWise Mobile App"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-teal"></span>
                        ConnectWise Mobile App
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/new-connectwise-manage-features"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80"
                        title="Ticket Notes"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-teal"></span>
                        Ticket Notes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/introducing-connectwise-now-a-new-dashboard-for-your-data"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80"
                        title="ConnectWise Now Dashboard"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-teal"></span>
                        ConnectWise Now Dashboard
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              
              <div className="text-center mt-8">
                <a 
                  href="https://www.connectwise.com/platform/psa?ref=header#features" 
                  className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
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
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Pale Blue Dot ● Interactive Pixel-Art Tribute
              </h3>

              <h4 className="text-accent-teal text-lg font-semibold mb-6">
                An 8-bit love letter to Carl Sagan and the Voyager 1 photograph.
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Concept</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A single-page web experience that renders a procedural pixel-art space scene at 320x180 pixels. Stars drift in parallax layers, nebula clouds glow in deep purple, and one quiet, steady pixel sits at the center: Earth.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">The Experience</h5>
                  <p className="text-gray-300 leading-relaxed">
                    A boot sequence types out a transmission from the Voyager Deep Space Network. The starfield reveals, the nebula fades in, and an amber sign points to the dot: YOU ARE HERE. Press play to hear Sagan read the excerpt, or read it as RPG-style dialogue typed out one passage at a time.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Solo builder. Concept, creative direction, visual design, procedural generation, audio integration. Built with vanilla JavaScript and Canvas API, no framework.
                  </p>
                </div>

                <div>
                  <h5 className="text-white font-semibold mb-2">Technical Highlights</h5>
                  <div className="text-gray-300 space-y-3">
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Procedural starfield, nebula, and sparkle stars drawn pixel-by-pixel</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>CRT shader effects: scanlines, vignette, film grain, chromatic aberration</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>3-layer parallax creating the illusion of flying through space</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>RPG-style typewriter dialogue for accessibility</span></p>
                    <p className="flex items-start"><span className="text-accent-teal mr-2">&#10003;</span><span>Zero dependencies. Pure HTML, CSS, Canvas API</span></p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Vanilla JS</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Canvas API</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Procedural Generation</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Pixel Art</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Web Audio</span>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div
                    className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                    onClick={() => {
                      setModalMedia({ src: '/videos/pale-blue-dot-preview.mp4', type: 'video' })
                      setIsModalOpen(true)
                    }}
                  >
                    <video
                      src="/videos/pale-blue-dot-preview.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-6">
                  <a
                    href="https://palebluedot.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-teal hover:text-accent-teal/80 transition-colors group"
                  >
                    Experience it
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="mt-16 mb-8 flex justify-center items-center gap-8">
            <button
              onClick={() => {
                if (lenisRef.current) {
                  lenisRef.current.scrollTo(0, { duration: 1.5 })
                }
              }}
              className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 font-medium glitch-hover transition-colors group"
              aria-label="Return to top of page"
            >
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
            <span className="text-white/20">|</span>
            <a
              href="https://surfrrosa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 font-medium glitch-hover transition-colors group"
            >
              see a different side of my work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="fixed top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold z-50 bg-black/50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all"
            aria-label="Close modal"
          >
            ✕
          </button>
          <div className="relative w-[95vw] h-[95vh]">
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
