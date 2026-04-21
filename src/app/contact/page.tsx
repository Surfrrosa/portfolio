'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import PageHero from '@/components/PageHero'
import { useLenis } from '@/hooks/useLenis'

const CONTACT_EMAIL = 'shaina@slabcheck.app'

export default function Contact() {
  useLenis()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = `New message from ${formData.name}`
    const body = `${formData.message}\n\n---\nReply to: ${formData.email}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      
      <main id="main-content" className="px-4 lg:px-12 py-8 lg:py-12">
        <div className="max-w-6xl mx-auto">
          <PageHero
            title="let's connect"
            subtitle="Got something you're building and need help with? Tell me about it below and I'll send you a link to book a free 30-minute call."
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

              <div>
                <h2 className="text-accent-teal text-lg font-semibold mb-4">Response Time</h2>
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
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-teal transition-colors"
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
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-teal transition-colors"
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
                    className="w-full px-4 py-3 bg-slate-800/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-teal transition-colors resize-none"
                    placeholder="Give me the quick version: what are you building and what do you need help with?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-400 text-center">
                  This opens your mail client. Prefer direct?{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent-teal hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </form>
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
  )
}
