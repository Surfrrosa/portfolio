'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import WebGLHeroText from '@/components/WebGLHeroText'

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
    <main className="min-h-screen">
      {/* Header - Sticky with backdrop blur */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
        <nav className="p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-display font-bold">
              SP
            </Link>
            <div className="flex gap-8">
              <Link href="/work" className="hover:text-teal-400 transition-colors">
                Work
              </Link>
              <Link href="/contact" className="hover:text-teal-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Radial glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,.2),transparent_60%)]"></div>
        
        <div className="relative z-10 text-center w-full px-6">
          {/* WebGL Headline with dominant viewport sizing */}
          <WebGLHeroText 
            text="Future-Proof Product Management"
            className="font-display font-black leading-tight w-full"
            style={{
              fontSize: 'clamp(3rem, 14vw, 20rem)',
              height: 'clamp(300px, 60vh, 600px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              letterSpacing: '-0.04em'
            }}
          />
          
          {/* Subhead */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I turn messy requirements into shipped outcomes. 7+ years building AI-powered products &amp; data-driven platforms that stay ahead of change.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/work"
              className="bg-teal-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-300 transition-colors duration-300"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="border border-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/5 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-full border border-white/10 px-6 py-3 text-zinc-400">
              7+ years
            </div>
            <div className="rounded-full border border-white/10 px-6 py-3 text-zinc-400">
              5 shipped AI products
            </div>
            <div className="rounded-full border border-white/10 px-6 py-3 text-zinc-400">
              &gt;$3M ARR impact
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Selected Work
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">Prompt2Story</h3>
              <p className="text-teal-400 mb-4">+38% task completion</p>
              <Link href="/work" className="text-teal-400 hover:underline">
                Case study →
              </Link>
            </motion.div>

            <motion.div
              className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">ConnectWise Manage</h3>
              <p className="text-teal-400 mb-4">25% churn reduction</p>
              <Link href="/work" className="text-teal-400 hover:underline">
                Case study →
              </Link>
            </motion.div>

            <motion.div
              className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">AI Workflow Toolkits</h3>
              <p className="text-teal-400 mb-4">50% productivity increase</p>
              <Link href="/work" className="text-teal-400 hover:underline">
                Case study →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Product manager focused on AI tools &amp; data-driven platforms. I translate ambiguity into roadmaps, coordinate cross-functional teams, and ship.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-teal-400">
                Core Expertise
              </h3>
              <ul className="space-y-2 text-zinc-300">
                <li>AI Product Strategy</li>
                <li>Data-Driven PM</li>
                <li>Team Leadership</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Footer */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 mb-8">
              Have a product challenge? I typically reply within 24 hours.
            </p>
            <Link
              href="/contact"
              className="bg-teal-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-300 transition-colors duration-300"
            >
              Send a Message
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
