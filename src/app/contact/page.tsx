'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-bg-base/80 backdrop-blur-sm">
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
            <Link href="/contact" className="text-accent-teal">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Ready to discuss your next product challenge? I'd love to hear about 
              your vision and explore how we can bring it to life together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-bold mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-accent-teal mb-2">
                    What I Do
                  </h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Product Strategy &amp; Roadmapping</li>
                    <li>• AI Product Development</li>
                    <li>• SaaS Platform Optimization</li>
                    <li>• Cross-functional Team Leadership</li>
                    <li>• Data-Driven Decision Making</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-accent-teal mb-2">
                    Industries
                  </h3>
                  <ul className="text-gray-300 space-y-1">
                    <li>• AI &amp; Machine Learning</li>
                    <li>• SaaS &amp; Enterprise Software</li>
                    <li>• Healthcare &amp; Neuroscience</li>
                    <li>• Productivity &amp; Automation Tools</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-accent-teal mb-2">
                    Response Time
                  </h3>
                  <p className="text-gray-300">
                    I typically respond within 24 hours. For urgent inquiries, 
                    please mention it in your message.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honey pot for spam prevention */}
                <input
                  type="text"
                  name="website"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-surface border border-gray-600 rounded-lg focus:outline-none focus:border-accent-teal focus:ring-1 focus:ring-accent-teal transition-colors resize-vertical"
                    placeholder="Tell me about your project, challenges, or how I can help..."
                  />
                </div>

                {submitMessage && (
                  <div className="p-4 bg-accent-teal/20 border border-accent-teal/30 rounded-lg">
                    <p className="text-accent-teal">{submitMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-teal text-bg-base px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Contact Methods */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-8">
              Other Ways to Connect
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-300 text-sm">
                  Connect for professional networking and industry insights
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image src="/icons/send.png" alt="Email" width={24} height={24} />
                </div>
                <h3 className="font-semibold mb-2">Direct Email</h3>
                <p className="text-gray-300 text-sm">
                  For detailed project discussions and collaboration inquiries
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-teal/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image src="/icons/calendar-check.png" alt="Schedule" width={24} height={24} />
                </div>
                <h3 className="font-semibold mb-2">Schedule a Call</h3>
                <p className="text-gray-300 text-sm">
                  Book a consultation to discuss your product challenges
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
