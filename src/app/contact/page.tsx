'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
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

              <div>
                <h3 className="text-teal-400 text-lg font-semibold mb-4">Find Me On</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.upwork.com/freelancers/~01678c95a70afbd270?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/50 rounded-lg transition-all group"
                  >
                    <svg className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" viewBox="0 0 102 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.18 14.87c-1.99 0-3.85-.87-5.26-2.35-.37 1.72-1.04 3.82-1.84 5.56l-.14.29-6.32 14.5-4.82-1.99 4.54-10.47c-1.57-1.71-2.52-4.03-2.52-6.55 0-5.32 4.31-9.63 9.63-9.63s9.63 4.31 9.63 9.63-4.31 9.63-9.63 9.63l-.14-.01.14.01zm0-15.26c-3.11 0-5.63 2.52-5.63 5.63s2.52 5.63 5.63 5.63 5.63-2.52 5.63-5.63-2.52-5.63-5.63-5.63zM49.99 2.93h4.64v21.81h-4.64zM67.99 24.74l-7.76-13.42v13.42h-4.64V2.93h4.64l7.76 13.42V2.93h4.64v21.81zM102 24.74l-10-21.81h5.23l7.23 16.18 7.23-16.18H117l-10 21.81zM0 13.86C0 6.2 6.2 0 13.86 0s13.86 6.2 13.86 13.86-6.2 13.86-13.86 13.86S0 21.52 0 13.86zm4 0c0 5.44 4.42 9.86 9.86 9.86s9.86-4.42 9.86-9.86-4.42-9.86-9.86-9.86S4 8.42 4 13.86z"/>
                    </svg>
                    <span className="text-white text-sm font-medium">Upwork</span>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-400/50 rounded-lg transition-all group opacity-50 cursor-not-allowed"
                    title="Coming soon"
                  >
                    <svg className="w-6 h-6 text-white" viewBox="0 0 120 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.5 0C8.28 0 0 8.28 0 18.5S8.28 37 18.5 37 37 28.72 37 18.5 28.72 0 18.5 0zm0 32C10.56 32 4 25.44 4 17.5S10.56 3 18.5 3 33 9.56 33 17.5 26.44 32 18.5 32z"/>
                      <path d="M50.4 8.2h4.8v11.6c0 3.2-2.4 5.6-5.6 5.6s-5.6-2.4-5.6-5.6V8.2h4.8v11.2c0 .8.4 1.2 1.2 1.2s1.2-.4 1.2-1.2V8.2zM72.4 8.2h4.8v16.4h-4.8l-4.8-8v8h-4.8V8.2h4.8l4.8 8v-8zM91.6 8.2h-6.8v16.4h-4.8V8.2h-6.8V3.8h18.4v4.4zM104.8 8.2h-4.8v11.2c0 .8-.4 1.2-1.2 1.2s-1.2-.4-1.2-1.2V8.2h-4.8v11.6c0 3.2 2.4 5.6 5.6 5.6s5.6-2.4 5.6-5.6V8.2h4.8zM120 24.6l-6.8-10h2.4c2.4 0 4.4-2 4.4-4.4s-2-4.4-4.4-4.4h-6.8v18.8h4.8v-8.4l4 8.4H120z"/>
                    </svg>
                    <span className="text-white text-sm font-medium">Contra</span>
                    <span className="text-xs text-gray-400">(Soon)</span>
                  </a>
                </div>
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
        </div>
      </main>
    </div>
  )
}
