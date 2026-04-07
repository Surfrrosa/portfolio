'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import BottomCTAs from '@/components/BottomCTAs'
import { useLenis } from '@/hooks/useLenis'

export default function AboutPage() {
  useLenis({ duration: 1.1, orientation: 'vertical', gestureOrientation: 'vertical', infinite: false })

  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />

      <main id="main-content" className="flex flex-col px-4 lg:px-12 py-12 lg:py-20">
        <h1 className="sr-only">About Shaina Pauley</h1>
        <motion.div
          className="text-center relative w-full max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            className="text-white leading-relaxed max-w-[70ch] mx-auto text-zinc-200 text-xl lg:text-[2rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <strong className="font-bold">AI Product Architect</strong> and <strong className="font-bold">builder</strong> who ships production software with AI in the terminal every day.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Image
              src="/images/cspo-badge.png"
              alt="CSPO Certified"
              width={52}
              height={52}
              className="inline-block"
            />
            <span className="text-zinc-400 text-xs lg:text-base tracking-wide">
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
            <span className="text-zinc-400 text-xs lg:text-base tracking-wide">
              CSM (Certified ScrumMaster)
            </span>
          </motion.div>
        </motion.div>

        <section className="mt-16 lg:mt-24">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 lg:mb-8">Proven Impact & Approach</h2>
            <ul className="space-y-6 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-accent-teal mr-4 mt-1">•</span>
                <span><strong>7+ Years in the Trenches</strong> ● secure authentication, REST APIs, CRM, migrations, dashboards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-teal mr-4 mt-1">•</span>
                <span><strong>AI Systems Architect</strong> ● specification design, evaluation systems, agentic workflows, production guardrails.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-teal mr-4 mt-1">•</span>
                <span><strong>Fluent in Tech + People</strong> ● bridging engineering, design, leadership, and stakeholders.</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent-teal mr-4 mt-1">•</span>
                <span><strong>Impact, Not Just Output</strong> ● every feature tied to tangible, trackable results.</span>
              </li>
            </ul>
          </div>

          <div className="mt-24 lg:mt-32">
            <BottomCTAs />
          </div>

          <div className="max-w-4xl mx-auto text-white mt-24 lg:mt-32">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-accent-teal">What's an AI Product Architect?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I sit between the technical and the strategic. I can read code, debug agent failures, and talk to stakeholders. I own the what and the why, then build the structure that makes complex systems reliable in production.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-accent-teal">How do you use AI in product work?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I architect the systems that AI works inside. That means writing the specifications agents follow, building evaluation pipelines that catch errors before they ship, and designing context architecture so every session picks up where the last one left off. I orchestrate multi-agent workflows for everything from astronomical verification to content generation. I push back constantly, validate everything, and take full ownership of what ships.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-accent-teal">What types of teams do you work with?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Product-focused teams across industries: SaaS, enterprise tools, consumer apps. From 1:1 work with founders to early-stage and scale-up. Teams that value shipping over endless planning.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-accent-teal">What's your typical engagement look like?</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Building things, designing how AI systems work, making sure what ships actually holds up, and leading product when teams need it. I work with people who need someone technical enough to get in the code and sharp enough to know what to prioritize. I also love helping teams work together better. Open communication, everyone feeling heard, and genuine alignment.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-accent-teal">What's your availability?</h3>
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
