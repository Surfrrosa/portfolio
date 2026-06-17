'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Script from 'next/script'
import Sidebar from '@/components/Sidebar'
import PageHero from '@/components/PageHero'
import { useLenis } from '@/hooks/useLenis'

const CONTACT_EMAIL = 'me@shainapauley.com'
const CALENDLY_URL =
  'https://calendly.com/shainaep/30min?background_color=0B0C0E&text_color=ffffff&primary_color=E930A8&hide_landing_page_details=1&hide_gdpr_banner=1'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export default function Contact() {
  useLenis()
  const [copied, setCopied] = useState(false)

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else {
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`
    }
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
        <Sidebar />

        <main id="main-content" className="px-4 lg:px-12 py-8 lg:py-12">
          <div className="max-w-6xl mx-auto">
            <PageHero
              title="let's connect"
              subtitle="Pick a time that works, or drop me a line:-)"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div>
                  <h2 className="text-accent-teal text-lg font-semibold mb-4">What I Do</h2>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI product architecture and agentic systems design</li>
                    <li>• Specification design, evaluation systems, and context architecture</li>
                    <li>• Production software built and maintained with AI-native workflows</li>
                    <li>• Leading product when teams need direction</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-accent-teal text-lg font-semibold mb-4">Industries</h2>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI and machine learning systems</li>
                    <li>• SaaS and enterprise software</li>
                    <li>• Privacy-first consumer tools</li>
                    <li>• Media, journalism, and information design</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="bg-surface border border-white/10 rounded-2xl p-8 space-y-6">
                  <div>
                    <h2 className="text-white text-2xl font-semibold mb-2">
                      Book a 30-minute call
                    </h2>
                    <p className="text-gray-400 text-sm">
                      Free intro call. We talk through what you're building, what you need, and whether we're a fit.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openCalendly}
                    className="w-full bg-accent-teal hover:opacity-90 text-bg-base font-semibold py-3 px-6 rounded-lg transition-opacity"
                  >
                    Pick a time
                  </button>

                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <p className="text-gray-400 text-sm">What happens next:</p>
                    <ol className="space-y-2 text-gray-300 text-sm">
                      <li>1. You pick a slot that works for you.</li>
                      <li>2. We talk through what you're building.</li>
                      <li>3. We see if there's a fit.</li>
                    </ol>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-400 text-sm mb-3">Prefer email?</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-accent-teal hover:underline font-mono text-sm"
                      >
                        {CONTACT_EMAIL}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        aria-label="Copy email address to clipboard"
                        className="text-xs text-gray-300 hover:text-accent-teal px-3 py-1 border border-white/20 hover:border-accent-teal rounded transition-colors"
                      >
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-20 pt-16 border-t border-white/10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                <h2 className="text-white text-2xl md:text-3xl font-light tracking-wide">
                  Find me on
                </h2>

                <a
                  href="https://www.upwork.com/freelancers/~01678c95a70afbd270?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border-2 border-white/20 hover:border-accent-teal transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 w-64 h-28 flex items-center justify-center"
                >
                  <Image
                    src="/images/upwork-logo.png"
                    alt="Upwork"
                    width={220}
                    height={70}
                    className="object-contain transition-all duration-500 translate-y-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  )
}
