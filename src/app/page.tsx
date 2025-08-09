'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import WebGLTextDistortion from '@/components/WebGLTextDistortion'

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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-display font-bold">
            SP
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="hover:text-accent-teal transition-colors">
              Home
            </Link>
            <Link href="/work" className="hover:text-accent-teal transition-colors">
              Work
            </Link>
            <Link href="/contact" className="hover:text-accent-teal transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ y: 0 }}
          animate={{ y: -50 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-teal rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-teal rounded-full blur-3xl opacity-10"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* WebGL Text Distortion Component */}
          <WebGLTextDistortion text="Future-Ready Product Management" />
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            7+ years building AI-powered products and data-driven solutions that shape the future
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              href="/work"
              className="inline-block bg-accent-teal text-bg-base px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300"
            >
              View Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              About
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-300 mb-6">
                  I'm a product manager with 7+ years of experience building AI-powered products 
                  and data-driven solutions. I specialize in transforming complex technical 
                  capabilities into user-friendly products that drive real business value.
                </p>
                <p className="text-lg text-gray-300">
                  My expertise spans SaaS platforms, AI workflows, and neuroscience-adjacent 
                  tools, with a track record of leading cross-functional teams to deliver 
                  innovative solutions at scale.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-accent-teal">
                  Core Expertise
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI Product Strategy &amp; Development</li>
                  <li>• Data-Driven Product Management</li>
                  <li>• SaaS Platform Modernization</li>
                  <li>• Cross-Functional Team Leadership</li>
                  <li>• User Experience Optimization</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
