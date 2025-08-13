'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import Sidebar from '@/components/Sidebar'
import DiagramGallery from '@/components/DiagramGallery'
import PomodoroMedia from '@/components/PomodoroMedia'

export default function Work() {
  const lenisRef = useRef<Lenis | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

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
            Selected Work
          </motion.h1>
          
          <motion.p
            className="text-white text-xl md:text-2xl leading-relaxed max-w-4xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A showcase of AI-powered products and data-driven solutions that have transformed user experiences and driven measurable business impact.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-teal-500/20 text-teal-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Project
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Prompt2Story - AI-Powered User Story Generator
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                From chaos to clarity: instantly turn raw ideas into Agile-ready user stories.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product teams waste hours transforming messy meeting notes, feature ideas, and requirements into consistent, actionable user stories with acceptance criteria.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    I designed and shipped an AI-powered platform that ingests unstructured input and outputs standardized, ready-to-use user stories. Including acceptance criteria, edge cases, and optional metadata, all aligned with Agile best practices.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, UX flows, AI prompt design, API integration, QA/testing, go-to-market strategy.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Positive early feedback from beta testers and peers in product management.</p>
                    <p>Streamlined the process of converting messy notes into Agile-ready user stories.</p>
                    <p>Designed to reduce backlog grooming time and improve cross-team clarity.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Workflow Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Agile Delivery</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
              </div>

              <div className="mt-8 space-y-6">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  >
                    <source src="/videos/prompt2story-preview.webm" type="video/webm" />
                    <source src="/videos/prompt2story-preview.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-slate-700/30 flex items-center justify-center" style={{ display: 'none' }}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Project Preview</p>
                      <p className="text-white font-semibold">Prompt2Story</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a 
                    href="https://prompt2story.com" 
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors group"
                  >
                    Visit Live Site
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">
                  In Development
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Enlighten – Tao × Neuroscience Mindfulness App
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Mindfulness, nervous system regulation, and timeless Taoist wisdom — in your pocket.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Most mindfulness apps expect users to actively seek out content, making it easy to forget or skip entirely. Few combine unpredictable Taoist insights with quick, evidence-based practices for an immediate state shift.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Enlighten delivers Tao Te Ching passages paired with neuroscience-backed micro-practices at beautifully timed moments. Features include a quote library with filters, favorites, customizable notifications, and minimal, distraction-free UX.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, UX design, user flows, high-level technical planning, user story creation, and roadmap development.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact (Projected)</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Provides fast, restorative nervous system resets without disrupting routine.</p>
                    <p>Bridges philosophy and neuroscience for practical daily use.</p>
                    <p>Makes Taoist wisdom accessible through modern, mobile-first design.</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Status</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Currently in late-stage design and prototype development.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mindfulness</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile UX</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">AI Development</span>
              </div>

              <div className="mt-8">
                <div 
                  className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalImage('/images/enlighten_portfolio_horizontal.png')
                    setIsModalOpen(true)
                  }}
                >
                  <img
                    src="/images/enlighten_portfolio_horizontal.png"
                    alt="Enlighten app portfolio showcase featuring mobile screens for notifications, daily wisdom, micro-practice, library, and favorites"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Mobile Development
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Pomodoro Flow – Radically Simple Focus Timer
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                From start to focus in one tap, a minimal 25/5 pomodoro timer with zero clutter.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Most pomodoro apps are overloaded with customization, making them distracting to set up and easy to abandon. I wanted a timer so simple it fades into the background, yet reliable enough to track focus cycles without breaking flow.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Pomodoro Flow delivers a distraction-free 25-minute focus / 5-minute break cycle with auto-progression, subtle chimes, and gentle haptic feedback. Sessions persist if the app is closed, and local notifications ensure you never miss a switch. Includes a "Fast Mode" for rapid QA and testing.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product concept, UX design, feature scoping, implementation in Expo (React Native), local notification & audio integration, Git branching strategy, EAS build configuration.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Created a seamless, minimal UX that keeps users focused without decision fatigue.</p>
                    <p>Improved testing speed with a dedicated developer mode.</p>
                    <p>Established safe, AI-assisted branch workflow to prevent future merge conflicts.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile Development</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Design</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Agile Development</span>
              </div>

              <div className="mt-8">
                <div className="mb-2">
                  <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs tracking-wide">
                    Mobile App
                  </span>
                </div>
                <div 
                  className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalImage('/images/pomodoro-flow-app.jpg')
                    setIsModalOpen(true)
                  }}
                >
                  <img
                    src="/images/pomodoro-flow-app.jpg"
                    alt="Pomodoro Flow app preview showing 25/5 timer interface"
                    className="w-48 h-auto object-contain mx-auto"
                  />
                </div>
                <div className="mt-4 mb-2">
                  <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs tracking-wide">
                    Web App
                  </span>
                </div>
                <PomodoroMedia />
              </div>
            </motion.div>

            <motion.div
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Enterprise Telecom / API Integrations
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                Nortal — API-Driven Telecom Solutions for National Retailers
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Delivered prepaid activation, number port-in, add-a-line, and billing integrations for T-Mobile's largest retail partners.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    T-Mobile's prepaid services for major retailers like Walmart, Costco, and Best Buy required complex API integrations for activations, number porting, and service extensions. Without streamlined processes, onboarding new customers or adding lines was slow, error-prone, and frustrating.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    As Technical Product Owner, I managed the MAAD Lite prepaid API integration for national retailers, delivered Port-In capabilities for seamless number transfers, launched National Retailer Add-a-Line (AAL) functionality for existing customers, and improved cart, payment, and OTP retry performance for faster transactions.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Technical Product Owner managing API integrations, stakeholder coordination, performance optimization, and cross-team delivery for enterprise retail partnerships.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Reduced number porting time and errors, improving customer onboarding.</p>
                    <p>Implemented and streamlined prepaid activations across retail partners.</p>
                    <p>Boosted upsell opportunities through improved AAL process.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">API Integration</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Telecom</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Agile Delivery</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Enterprise Retail</span>
              </div>
              
              <DiagramGallery />
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Fixed Wireless / Public Sector Innovation
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                WindTalker — Real-Time Monitoring, RF Planning, and Field Deployments
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Delivering mission-critical network tools and rapid connectivity solutions for complex, high-stakes environments.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Fixed wireless networks in remote and tactical contexts require precision planning, real-time health visibility, and the ability to deploy infrastructure quickly — even in humanitarian or emergency situations.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    In dual roles as Product Owner and Business Analyst, I delivered Manager — a real-time network health monitoring platform with uptime alerts and performance analytics, Planner — an RF mapping and network planning tool for rapid, accurate deployment design, and Field Deployments — guided refugee camp mesh network setup and drone integration for public safety operations.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product Owner and Business Analyst managing network monitoring platforms, RF planning tools, and field deployment coordination for mission-critical environments.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Reduced network downtime and improved monitoring accuracy.</p>
                    <p>Cut RF planning time and increased deployment precision.</p>
                    <p>Provided life-critical communications in crisis and public safety scenarios.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Network Monitoring</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">RF Planning</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Emergency Deployments</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">SaaS Product Ownership</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="mb-4">
                <span className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Enterprise SaaS / B2B Product Management
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-display font-bold mb-4">
                ConnectWise Manage — Product Ownership Across Mobile, Communication, and CRM Platforms
              </h3>
              
              <h4 className="text-teal-400 text-lg font-semibold mb-6">
                Delivered cross-platform enhancements to improve usability, communication, and data visibility for IT service providers.
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="text-white font-semibold mb-2">Problem</h5>
                  <p className="text-gray-300 leading-relaxed">
                    ConnectWise Manage serves thousands of IT professionals worldwide, but some workflows were outdated or inefficient — from mobile field operations to client communication and sales visibility. Users needed a faster, clearer, and more integrated experience across devices and departments.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Solution</h5>
                  <p className="text-gray-300 leading-relaxed">
                    As Product Owner for CRM, Service, and System modules, I delivered Mobile App Updates – improved ticket management, remote access, and workflows for technicians on the go, Ticket Notes Redesign – added rich text formatting, inline images, avatars, and issue tags to improve clarity and reduce resolution times, and ConnectWise Now CRM Dashboards – built real-time sales and quote visibility into customizable dashboards, integrating pipeline, forecasting, and compliance metrics.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">My Role</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Product Owner for CRM, Service, and System modules managing mobile UX improvements, communication redesigns, and data visualization enhancements for enterprise IT service providers.
                  </p>
                </div>
                
                <div>
                  <h5 className="text-white font-semibold mb-2">Impact</h5>
                  <div className="text-gray-300 space-y-3">
                    <p>Reduced mobile ticket handling time by ~25% and boosted app adoption by 40%.</p>
                    <p>Improved communication clarity and reduced note review time for technicians and clients.</p>
                    <p>Enabled instant CRM data access for sales teams, improving forecast accuracy and decision-making speed.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Product Ownership</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">SaaS</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Mobile UX</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Data Visualization</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">Communication UX</span>
              </div>

              <div className="mt-8">
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-zinc-300">
                    ConnectWise Mobile App
                  </span>
                </div>
                <div 
                  className="relative rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => {
                    setModalImage('/images/connectwise-manage-showcase.png')
                    setIsModalOpen(true)
                  }}
                >
                  <img
                    src="/images/connectwise-manage-showcase.png"
                    alt="ConnectWise Manage mobile app interfaces showing ticket management, time tracking, and CRM dashboards"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <section
                  className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  aria-label="ConnectWise Release Notes"
                >
                  <div className="mb-2 text-sm font-semibold text-white/90">Release Notes</div>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/new-connectwise-mobile-app#:~:text=With%20our%20core%20values%20to%20guide%20us%2C,techs%20complete%20assigned%20tasks%20quickly%20and%20efficiently"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
                        title="ConnectWise Mobile App"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                        ConnectWise Mobile App
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/new-connectwise-manage-features"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
                        title="Ticket Notes"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                        Ticket Notes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.connectwise.com/blog/introducing-connectwise-now-a-new-dashboard-for-your-data"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300"
                        title="ConnectWise Now Dashboard"
                      >
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-400"></span>
                        ConnectWise Now Dashboard
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              ✕ Close
            </button>
            <img
              src={modalImage}
              alt={modalImage.includes('enlighten') 
                ? "Enlighten app portfolio showcase featuring mobile screens for notifications, daily wisdom, micro-practice, library, and favorites"
                : modalImage.includes('connectwise')
                ? "ConnectWise Manage mobile app interfaces showing ticket management, time tracking, and CRM dashboards"
                : "Pomodoro Flow app screenshot showing the minimal timer interface with focus and break modes"
              }
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
