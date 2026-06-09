'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import DiagramGallery from '@/components/DiagramGallery'
import { EnlightenCarousel } from '@/components/EnlightenCarousel'
import { Checkmark } from '@/components/Checkmark'
import { TechStackTags } from '@/components/TechStackTags'
import { ExternalLink } from '@/components/ExternalLink'
import { MediaButton } from '@/components/MediaButton'
import { ProjectCard } from '@/components/ProjectCard'
import { ProjectHeader } from '@/components/ProjectHeader'
import { ProjectSection, ProjectText, ProjectBullets } from '@/components/ProjectSection'
import { useLenis } from '@/hooks/useLenis'

type ModalMedia = { src: string; type: 'image' | 'video' }

export default function Work() {
  const lenisRef = useLenis()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMedia, setModalMedia] = useState<ModalMedia>({ src: '', type: 'image' })

  const openMedia = (media: ModalMedia) => {
    setModalMedia(media)
    setIsModalOpen(true)
  }

  useEffect(() => {
    if (!isModalOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = originalOverflow
    }
  }, [isModalOpen])

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

            <ProjectCard>
              <ProjectHeader
                title="SlabCheck ● Pokemon TCG Grading Decision Tool"
                tagline="Scan a card. See the math. Make a smarter grading decision."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    Pokemon card collectors spend hundreds on grading fees with no way to know if it&apos;s worth it. The math is opaque: grade probability, market prices at each grade, fees, turnaround times. Most people guess, and most guesses lose money.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    A mobile app that identifies any Pokemon card from a photo, then runs a data-driven valuation model under the hood. The result is a clear recommendation in seconds: grade it, sell it raw, or list it on eBay.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Co-founder. Shaping the experience from concept through MVP. Owning product strategy, technical architecture, and development.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Status">
                  <ProjectBullets>
                    <Checkmark>Working MVP with card scanning, identification, and value breakdown</Checkmark>
                    <Checkmark>Card identification via specialized TCG recognition API</Checkmark>
                    <Checkmark>Set tracking with completion progress across 207 Pokemon TCG sets</Checkmark>
                    <Checkmark>Proprietary valuation model that weighs grade probability, market prices, and fees</Checkmark>
                    <Checkmark>Gathering early access interest now</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['React Native', 'Expo', 'TypeScript', 'Supabase', 'Vercel']} />

              <div className="mt-8 space-y-6">
                <MediaButton
                  aspectVideo
                  label="Enlarge SlabCheck demo video"
                  onClick={() => openMedia({ src: '/videos/slabcheck-demo.mp4', type: 'video' })}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement
                      target.style.display = 'none'
                      const fallback = target.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  >
                    <source src="/videos/slabcheck-demo.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">SlabCheck</p>
                    </div>
                  </div>
                </MediaButton>

                <div className="flex justify-center gap-6">
                  <ExternalLink href="https://slabcheck.app">Join the Waitlist</ExternalLink>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard>
              <ProjectHeader
                title="Prism ● Media Bias Awareness Tool"
                tagline="See the full spectrum of your news diet, no effort required."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    People don&apos;t realize their news consumption is lopsided. Existing tools require manual effort and don&apos;t surface patterns passively.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    A Chrome extension that silently tracks news sources you read, matches them against 2,700+ rated sources from Media Bias/Fact Check, and computes a Perspective Diversity Score. Visualizes your Left/Center/Right distribution, detects blind spots, and generates shareable retro-styled cards of your media diet.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Solo builder. Product concept, design, development, Chrome Web Store launch.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact">
                  <ProjectBullets>
                    <Checkmark>2,700+ rated news sources from Media Bias/Fact Check database</Checkmark>
                    <Checkmark>Zero network requests, all data stays local in IndexedDB</Checkmark>
                    <Checkmark>Diversity Score algorithm factoring entropy, variety, quality, and breadth</Checkmark>
                    <Checkmark>Weekly summary reports and shareable Canvas-rendered media diet cards</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['Chrome Extension', 'TypeScript', 'IndexedDB', 'Canvas API', 'Manifest V3', 'Privacy-First']} />

              <div className="mt-8 space-y-6">
                <MediaButton
                  onClick={() => openMedia({ src: '/images/prism-promo-marquee.png', type: 'image' })}
                >
                  <img
                    src="/images/prism-promo-marquee.png"
                    alt="Prism Chrome extension promo showing media bias spectrum visualization"
                    className="w-full h-auto object-contain mx-auto"
                  />
                </MediaButton>

                <MediaButton
                  onClick={() => openMedia({ src: '/images/prism-screenshot-3.png', type: 'image' })}
                >
                  <img
                    src="/images/prism-screenshot-3.png"
                    alt="Prism bias badge explainer showing Left through Right ratings with example sources"
                    className="w-full h-auto object-contain mx-auto"
                  />
                </MediaButton>

                <div className="flex justify-center gap-6">
                  <ExternalLink href="https://chromewebstore.google.com/detail/prism/pbhmchohngpdjmldjfdlomjfgkjfegfc">
                    Chrome Web Store
                  </ExternalLink>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard>
              <ProjectHeader
                title="Synestrology ● Astrology × Human Design × Numerology Synthesis Engine"
                tagline="The only platform that weaves three self-discovery systems into a single personalized reading."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    Astrology, Human Design, and Numerology each offer deep personal insight, but they exist in silos. No product synthesizes all three into a unified narrative, forcing people to piece together fragmented readings across multiple sites.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    A full-stack synthesis engine that calculates natal charts (Swiss Ephemeris), Human Design bodygraphs, and Pythagorean numerology profiles, then feeds all three into an AI synthesis layer that generates 3,000+ word personalized readings delivered as branded PDFs. Includes a free Cosmic Blueprint tool combining all three systems.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Founder and product architect. Designed the verification pipeline, context architecture, and evaluation system. Product strategy, UX, SEO, and go-to-market.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact">
                  <ProjectBullets>
                    <Checkmark>Only combined astrology + Human Design + numerology calculator on the web</Checkmark>
                    <Checkmark>Swiss Ephemeris precision (0.001 arcsecond accuracy) for natal chart calculations</Checkmark>
                    <Checkmark>Full e-commerce pipeline: Stripe checkout → AI generation → branded PDF → email delivery</Checkmark>
                    <Checkmark>257 passing tests, CI/CD pipeline, rate limiting, retry queue with exponential backoff</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['Python / FastAPI', 'Swiss Ephemeris', 'AI Synthesis', 'Stripe', 'PDF Generation', 'SEO']} />

              <div className="mt-8 space-y-6">
                <MediaButton
                  aspectVideo
                  label="Enlarge Synestrology preview video"
                  onClick={() => openMedia({ src: '/videos/synestrology-preview.mp4', type: 'video' })}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement
                      target.style.display = 'none'
                      const fallback = target.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  >
                    <source src="/videos/synestrology-preview.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">Synestrology</p>
                    </div>
                  </div>
                </MediaButton>

                <div className="flex justify-center gap-6">
                  <ExternalLink href="https://www.synestrology.com/">Visit Synestrology</ExternalLink>
                  <ExternalLink href="https://www.synestrology.com/tools/cosmic-blueprint">Use the Free Tool</ExternalLink>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard delay={0.55}>
              <ProjectHeader
                title="CrunchBox ● Client-Side File Conversion Tools"
                tagline="Convert, compress, and merge files. Everything stays in your browser."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    File conversion sites upload your documents to their servers, plaster ads everywhere, and harvest your data. For something as simple as compressing a PDF, you shouldn&apos;t need to trust a stranger with your files.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    A suite of client-side file tools where every conversion happens in the browser. HEIC to JPG, WebP to JPG, PDF compression, PDF merging, and image compression with quality control. No files ever leave your machine.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Solo builder. Product concept, brand identity, development, Stripe integration, Sentry monitoring, launch.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact">
                  <ProjectBullets>
                    <Checkmark>5 conversion tools: HEIC, WebP, PDF compress, PDF merge, image compress</Checkmark>
                    <Checkmark>100% client-side processing via pdf-lib, heic-to (libheif WASM), Canvas API</Checkmark>
                    <Checkmark>Freemium model with Stripe subscription billing</Checkmark>
                    <Checkmark>Sentry error monitoring and logging for proactive issue detection</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['Astro', 'pdf-lib', 'WASM', 'Stripe', 'Sentry', 'Privacy-First']} />

              <div className="mt-8 space-y-6">
                <MediaButton
                  aspectVideo
                  label="Enlarge CrunchBox demo video"
                  onClick={() => openMedia({ src: '/videos/crunchbox.mp4', type: 'video' })}
                >
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement
                      target.style.display = 'none'
                      const fallback = target.nextElementSibling as HTMLElement
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  >
                    <source src="/videos/crunchbox.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-accent-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">CrunchBox</p>
                    </div>
                  </div>
                </MediaButton>

                <div className="flex justify-center gap-6">
                  <ExternalLink href="https://crunchbox.lol">Try It Live</ExternalLink>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard delay={0.6}>
              <ProjectHeader
                title="Maestro ● AI Development Process CLI"
                tagline="The missing process layer for AI-assisted development."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    AI coding tools start every session fresh. Without documented context, teams lose naming conventions, architecture decisions, and security requirements between sessions. The output is fast but undirected.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    A CLI that scaffolds and enforces development process. Scans your codebase to generate CLAUDE.md, session logs, security checklists, and .env templates. Scores project health across audit, quality, security, and dependency categories. Integrates with CI pipelines and git hooks for continuous enforcement.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Product concept, CLI architecture, scoring algorithms, npm publishing. Built with AI-assisted development and dogfooded across 12 personal projects.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact">
                  <ProjectBullets>
                    <Checkmark>Published on npm as maestro-dev, installable globally</Checkmark>
                    <Checkmark>12-check audit scoring (0-100) plus 7-category code quality grading (A-F)</Checkmark>
                    <Checkmark>Full CI integration with GitHub Actions workflow</Checkmark>
                    <Checkmark>Dogfooded across repos to validate every feature before shipping</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['Node.js / TypeScript', 'CLI Design', 'npm Publishing', 'Static Analysis', 'Git Hooks', 'CI/CD']} />

              <div className="mt-8 space-y-6">
                <MediaButton
                  aspectVideo
                  label="Enlarge Maestro demo video"
                  onClick={() => openMedia({ src: '/videos/maestro-demo.mp4', type: 'video' })}
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
                </MediaButton>

                <div className="flex justify-center gap-6">
                  <ExternalLink href="https://www.npmjs.com/package/maestro-dev">npm Package</ExternalLink>
                  <ExternalLink href="https://github.com/Surfrrosa/maestro">GitHub</ExternalLink>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard delay={0.65}>
              <ProjectHeader
                title="What Changed ● Automatic Webpage Diff Tracker"
                tagline="See exactly what&apos;s different when you revisit any page."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    Every change-detection tool requires you to predict which pages will change and set up watchers ahead of time. Nobody does that.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    A Chrome extension that flips the model. It silently snapshots every page you visit using Mozilla&apos;s Readability for smart content extraction, then shows you a clean word-level diff the moment you return. SHA-256 deduplication keeps storage minimal, and configurable significance thresholds filter out noise from A/B tests and dynamic feeds.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Solo builder. Product concept, architecture, development, Chrome Web Store launch.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact">
                  <ProjectBullets>
                    <Checkmark>Zero-config automatic tracking on every page you visit</Checkmark>
                    <Checkmark>~5 KB average snapshot vs ~200 KB raw HTML via Readability extraction</Checkmark>
                    <Checkmark>~70% revisit deduplication via SHA-256 content hashing</Checkmark>
                    <Checkmark>SPA navigation support with automatic re-capture</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['Chrome Extension', 'TypeScript', 'IndexedDB', 'Readability.js', 'jsdiff', 'Manifest V3', 'Privacy-First']} />

              <div className="mt-8 space-y-6">
                <MediaButton
                  onClick={() => openMedia({ src: '/images/what-changed-screenshot.png', type: 'image' })}
                >
                  <img
                    src="/images/what-changed-screenshot.png"
                    alt="What Changed landing page showing automatic webpage diff tracking with highlighted text changes"
                    className="w-full h-auto object-contain mx-auto"
                  />
                </MediaButton>

                <div className="flex justify-center gap-6">
                  <ExternalLink href="https://chromewebstore.google.com/detail/what-changed/beaielclimdopobfbaeibgmpnlmnfpjf">
                    Chrome Web Store
                  </ExternalLink>
                </div>
              </div>
            </ProjectCard>

            <ProjectCard delay={0.65}>
              <ProjectHeader
                title="Enlighten ● Tao × Neuroscience Mindfulness App"
                tagline="Mindfulness, nervous system regulation, and timeless Taoist wisdom in your pocket."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    Most mindfulness apps expect users to actively seek out content, making it easy to forget or skip entirely. Few combine unpredictable Taoist insights with quick, evidence-based practices for an immediate state shift.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    Enlighten delivers Tao Te Ching passages paired with neuroscience-backed micro-practices at beautifully timed moments. Features include a quote library with filters, favorites, customizable notifications, and minimal, distraction-free UX.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Product concept, UX design, and technical planning. Wrote the user stories and roadmap.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact (6-Month Targets)">
                  <ProjectBullets>
                    <Checkmark marker="→">750-1,500 downloads with organic growth</Checkmark>
                    <Checkmark marker="→">4-6% Day 30 retention (indie app benchmark)</Checkmark>
                    <Checkmark marker="→">100-200 weekly active users engaging 2-3x per week</Checkmark>
                    <Checkmark marker="→">Fast nervous system resets without disrupting routine</Checkmark>
                  </ProjectBullets>
                </ProjectSection>

                <ProjectSection label="Status">
                  <ProjectText>Available now on iOS App Store and Google Play.</ProjectText>
                </ProjectSection>
              </div>

              <TechStackTags tags={['Mindfulness', 'Mobile UX', 'Product Strategy', 'AI Development']} />

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://apps.apple.com/us/app/enlighten-daily-wisdom/id6756754380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 px-6 py-4 rounded-xl transition-all group"
                >
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="white"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-xl font-semibold text-white">App Store</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.enlighten.wisdomapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-white/20 px-6 py-4 rounded-xl transition-all group"
                >
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" fill="white"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-xl font-semibold text-white">Google Play</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <EnlightenCarousel
                onSlideClick={(index) => {
                  openMedia({
                    src: `/images/enlighten${index + 1}.PNG`,
                    type: 'image',
                  })
                }}
              />

              <div className="text-center mt-8">
                <ExternalLink href="https://enlighten-kappa.vercel.app/">View Landing Page</ExternalLink>
              </div>
            </ProjectCard>

            <ProjectCard delay={0.7}>
              <ProjectHeader
                title="Nortal ● API-Driven Telecom Solutions for National Retailers"
                tagline="Delivered prepaid activation, number port-in, add-a-line, and billing integrations for T-Mobile's largest retail partners."
                subtitle="Secure Communications Modernization — Faster, Safer, Smarter"
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    T-Mobile&apos;s prepaid services for major retailers like Walmart, Costco, and Best Buy required complex API integrations for activations, number porting, and service extensions. Without streamlined processes, onboarding new customers or adding lines was slow, error-prone, and frustrating.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    As Technical Product Owner, I managed the MAAD Lite prepaid API integration for national retailers, delivered Port-In capabilities for seamless number transfers, launched National Retailer Add-a-Line (AAL) functionality for existing customers, and improved cart, payment, and OTP retry performance for faster transactions.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Technical Product Owner managing API integrations, stakeholder coordination, performance optimization, and cross-team delivery for enterprise retail partnerships.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact">
                  <ProjectBullets>
                    <Checkmark>Delivered 3 major API integrations on time for T-Mobile&apos;s largest retail partners</Checkmark>
                    <Checkmark>Streamlined prepaid activations across Walmart, Costco, and Best Buy</Checkmark>
                    <Checkmark>Reduced number porting errors and improved customer onboarding flow</Checkmark>
                    <Checkmark>Zero critical production bugs across enterprise retail integrations</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['API Integration', 'Telecom', 'Agile Delivery', 'Enterprise Retail']} />

              <DiagramGallery />

              <div className="text-center mt-8">
                <ExternalLink href="https://nortal.com/about">Visit Website</ExternalLink>
              </div>
            </ProjectCard>

            <ProjectCard delay={0.75}>
              <ProjectHeader
                title="ConnectWise Manage ● CRM/PSA Platform Product Ownership"
                tagline="Owned CRM, Service, and System modules for a platform used by thousands of IT service providers to manage sales pipelines, service delivery, and customer lifecycle."
              />

              <div className="space-y-6">
                <ProjectSection label="Problem">
                  <ProjectText>
                    ConnectWise Manage is the CRM and professional services automation platform for the managed services industry. Sales teams lacked real-time pipeline visibility, reporting took days, and legacy UI and APIs slowed adoption. The platform needed modernization across CRM dashboards, mobile workflows, and integrations.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Solution">
                  <ProjectText>
                    Owned companies &amp; contacts, quoting, sales funnel, and procurement modules. Built ConnectWise Now CRM Dashboards with real-time pipeline visibility, quote tracking, and sales forecasting. Redesigned ticket communication with rich text, inline images, and issue tagging. Led AngularJS to React migration and legacy API to REST conversion across the platform.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Product Owner for CRM modules: companies &amp; contacts, quoting system, sales funnel, and procurement. Owned sales pipeline visibility, customer lifecycle features, and platform modernization across a PSA platform serving thousands of IT service providers.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Impact">
                  <ProjectBullets>
                    <ProjectText>Reduced mobile ticket handling time by ~25% and boosted app adoption by 40%.</ProjectText>
                    <ProjectText>Improved communication clarity and reduced note review time for technicians and clients.</ProjectText>
                    <ProjectText>Enabled instant CRM data access for sales teams, improving forecast accuracy and decision-making speed.</ProjectText>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['CRM', 'SaaS', 'Sales Pipeline', 'Service Management', 'Platform Modernization']} />

              <div className="mt-8">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-zinc-300">
                    ConnectWise Mobile App
                  </span>
                </div>
                <MediaButton
                  onClick={() => openMedia({ src: '/images/connectwise-manage-showcase.png', type: 'image' })}
                >
                  <img
                    src="/images/connectwise-manage-showcase.png"
                    alt="ConnectWise Manage mobile app interfaces showing ticket management, time tracking, and CRM dashboards"
                    className="w-full h-auto max-h-64 md:max-h-72 object-contain"
                  />
                </MediaButton>
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
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80"
                        title="ConnectWise Mobile App"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-teal" aria-hidden="true"></span>
                        ConnectWise Mobile App
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/new-connectwise-manage-features"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80"
                        title="Ticket Notes"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-teal" aria-hidden="true"></span>
                        Ticket Notes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/introducing-connectwise-now-a-new-dashboard-for-your-data"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80"
                        title="ConnectWise Now Dashboard"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-teal" aria-hidden="true"></span>
                        ConnectWise Now Dashboard
                      </a>
                    </li>
                  </ul>
                </section>
              </div>

              <div className="text-center mt-8">
                <ExternalLink href="https://www.connectwise.com/platform/psa?ref=header#features">Visit Website</ExternalLink>
              </div>
            </ProjectCard>

            <ProjectCard>
              <ProjectHeader
                title="Pale Blue Dot ● Interactive Pixel-Art Tribute"
                tagline="An 8-bit love letter to Carl Sagan and the Voyager 1 photograph."
              />

              <div className="space-y-6">
                <ProjectSection label="Concept">
                  <ProjectText>
                    A single-page web experience that renders a procedural pixel-art space scene at 320x180 pixels. Stars drift in parallax layers, nebula clouds glow in deep purple, and one quiet, steady pixel sits at the center: Earth.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="The Experience">
                  <ProjectText>
                    A boot sequence types out a transmission from the Voyager Deep Space Network. The starfield reveals, the nebula fades in, and an amber sign points to the dot: YOU ARE HERE. Press play to hear Sagan read the excerpt, or read it as RPG-style dialogue typed out one passage at a time.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="My Role">
                  <ProjectText>
                    Solo builder. Concept, creative direction, visual design, procedural generation, audio integration. Built with vanilla JavaScript and Canvas API, no framework.
                  </ProjectText>
                </ProjectSection>

                <ProjectSection label="Technical Highlights">
                  <ProjectBullets>
                    <Checkmark>Procedural starfield, nebula, and sparkle stars drawn pixel-by-pixel</Checkmark>
                    <Checkmark>CRT shader effects: scanlines, vignette, film grain, chromatic aberration</Checkmark>
                    <Checkmark>3-layer parallax creating the illusion of flying through space</Checkmark>
                    <Checkmark>RPG-style typewriter dialogue for accessibility</Checkmark>
                    <Checkmark>Zero dependencies. Pure HTML, CSS, Canvas API</Checkmark>
                  </ProjectBullets>
                </ProjectSection>
              </div>

              <TechStackTags tags={['Vanilla JS', 'Canvas API', 'Procedural Generation', 'Pixel Art', 'Web Audio']} />

              <div className="mt-8 space-y-6">
                <MediaButton
                  label="Enlarge Pale Blue Dot preview video"
                  onClick={() => openMedia({ src: '/videos/pale-blue-dot-preview.mp4', type: 'video' })}
                >
                  <video
                    src="/videos/pale-blue-dot-preview.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </MediaButton>

                <div className="flex justify-center gap-6">
                  <ExternalLink href="https://palebluedot.sh">Experience it</ExternalLink>
                </div>
              </div>
            </ProjectCard>

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
              <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
            <span className="text-white/20" aria-hidden="true">|</span>
            <a
              href="https://surfrrosa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 font-medium glitch-hover transition-colors group"
            >
              see a different side of my work
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
