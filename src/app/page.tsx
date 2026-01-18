'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
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

      <main className="flex flex-col justify-center items-center px-4 lg:px-12 min-h-screen pt-4 lg:pt-0 relative overflow-visible">
        <motion.div
          className="text-center relative w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div
            className="mb-0 overflow-visible relative mx-auto -mt-40"
            style={{
              width: '70vw',
              maxWidth: '1600px'
            }}
          >
            <img
              src="/images/hero-banner.gif"
              alt="I'm glad you're here"
              className="w-full h-auto"
            />
          </div>

          <motion.p
            className="text-white leading-relaxed max-w-[70ch] mx-auto text-zinc-200"
            style={{ fontSize: '2rem' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm a <strong className="font-bold">Technical Product Owner</strong> and builder who loves prototyping, transforming data into dashboards, and designing workflows that accelerate teams and deliver measurable results.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Image
              src="/images/cspo-badge.png"
              alt="CSPO Certified"
              width={52}
              height={52}
              className="inline-block"
            />
            <span className="text-zinc-400 text-base tracking-wide">
              CSPO (Certified Scrum Product Owner)
            </span>
            <span className="text-zinc-500 text-lg">•</span>
            <Image
              src="/images/csm-badge.png"
              alt="CSM Certified"
              width={60}
              height={60}
              className="inline-block"
            />
            <span className="text-zinc-400 text-base tracking-wide">
              CSM (Certified ScrumMaster)
            </span>
          </motion.div>
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

          <div className="mt-24 lg:mt-32">
            <BottomCTAs />
          </div>

          {/* FAQ Section for AI Search Optimization */}
          <div className="max-w-4xl mx-auto text-white mt-24 lg:mt-32">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-teal-400">What's a Technical Product Owner?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I bridge the gap between engineering and business. I can read code, design APIs, write technical specs, and talk to stakeholders. I own the why, what, when, and where, which sets up a clean handoff for engineering to own the how.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-teal-400">How do you use AI in product work?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I use AI to move faster on execution by building features, drafting content, and analyzing options. I iterate and push back often, validating everything. I take full ownership for my work as well as any tools I use. AI is tremendous for speed, not a replacement for judgment or accountability.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-teal-400">What types of teams do you work with?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Product-focused teams across industries: SaaS, enterprise tools, consumer apps. From 1:1 work with founders to early-stage and scale-up. Teams that value shipping over endless planning.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-teal-400">What's your typical engagement look like?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Product ownership roles, consulting projects, fractional product leadership, and custom deliverables. I work with teams who need someone technical enough to spec features and business-savvy enough to prioritize ruthlessly. I also love helping teams work together better. Open communication, everyone feeling heard, and genuine alignment.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-teal-400">What's your availability?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Open to new opportunities. Contact me to discuss your product challenges and see if we're a good fit.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
