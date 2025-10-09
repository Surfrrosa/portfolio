'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'

export default function Contact() {
  const lenisRef = useRef<Lenis | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: any = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed");

      setSubmitStatus('success')
      if (typeof form.reset === "function") form.reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            Let's Connect
          </motion.h1>
          
          <motion.p
            className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Have a product challenge, idea, or opportunity you want to explore? Let's discuss your vision and how we can tackle it together.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div>
                <h3 className="text-teal-400 text-lg font-semibold mb-4">What I Do</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Product strategy, roadmapping, and MVP definition</li>
                  <li>• Product design &amp; development workflows</li>
                  <li>• SaaS platform optimization &amp; feature delivery</li>
                  <li>• Cross-functional team leadership &amp; alignment</li>
                  <li>• Data-driven product decisions & consulting</li>
                </ul>
              </div>

              <div>
                <h3 className="text-teal-400 text-lg font-semibold mb-4">Industries</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AI &amp; machine learning solutions</li>
                  <li>• SaaS and enterprise software</li>
                  <li>• Healthcare &amp; neuroscience innovation</li>
                  <li>• Productivity &amp; automation tools</li>
                </ul>
              </div>

              <div>
                <h3 className="text-teal-400 text-lg font-semibold mb-4">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond within 24 hours.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-center">
                      ✅ Message sent successfully! I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-center">
                      ❌ Failed to send message. Please try again or email me directly at shainaep@gmail.com
                    </p>
                  </div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Find Me On Section - Standalone at bottom */}
          <motion.div
            className="mt-20 pt-16 border-t border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide">
                Find me on
              </h3>

              <a
                href="https://www.upwork.com/freelancers/~01678c95a70afbd270?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border-2 border-white/20 hover:border-teal-400 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 w-64 h-28 flex items-center justify-center"
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

              <span className="text-white text-4xl md:text-5xl font-serif italic">&</span>

              <a
                href="#"
                className="group relative overflow-hidden rounded-2xl border-2 border-white/10 opacity-40 cursor-not-allowed w-64 h-28 flex items-center justify-center"
                title="Coming soon"
              >
                <Image
                  src="/images/contra-logo.png"
                  alt="Contra"
                  width={260}
                  height={110}
                  className="object-contain"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
