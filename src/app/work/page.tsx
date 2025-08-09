'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 'prompt2story',
    title: 'Prompt2Story',
    subtitle: 'AI-Powered Storytelling Platform',
    description: 'Revolutionary AI tool that transforms simple prompts into compelling narratives, serving 10K+ users with 95% satisfaction rate.',
    impact: '10K+ users, 95% satisfaction, 40% faster content creation',
    tags: ['AI/ML', 'Product Strategy', 'User Experience'],
    featured: true,
    image: '/images/prompt2story-preview.jpg',
    link: 'https://prompt2story.com'
  },
  {
    id: 'connectwise',
    title: 'ConnectWise Manage',
    subtitle: 'SaaS Platform Modernization',
    description: 'Led modernization of legacy PSA platform, improving user experience and reducing churn by 25%.',
    impact: '25% churn reduction, 40% faster workflows',
    tags: ['SaaS', 'Platform Modernization', 'UX Strategy'],
    featured: false,
    image: '/images/connectwise-preview.jpg'
  },
  {
    id: 'enlighten',
    title: 'Enlighten',
    subtitle: 'Neuroscience-Adjacent Tool',
    description: 'Developed data-driven insights platform for neuroscience research, enabling faster discovery cycles.',
    impact: '60% faster research cycles, 15+ research partnerships',
    tags: ['Data Analytics', 'Research Tools', 'B2B SaaS'],
    featured: false,
    image: '/images/enlighten-preview.jpg'
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflow Toolkits',
    subtitle: 'Automation & Efficiency Suite',
    description: 'Built comprehensive AI workflow automation tools that increased team productivity by 50%.',
    impact: '50% productivity increase, 200+ automated workflows',
    tags: ['AI Automation', 'Workflow Optimization', 'Team Productivity'],
    featured: false,
    image: '/images/ai-workflows-preview.jpg'
  }
]

export default function Work() {
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
            <Link href="/work" className="text-accent-teal">
              Work
            </Link>
            <Link href="/contact" className="hover:text-accent-teal transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Selected Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A showcase of AI-powered products and data-driven solutions that have 
              transformed user experiences and driven measurable business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-surface rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-accent-teal/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block bg-accent-teal/20 text-accent-teal px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Featured Project
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {project.title}
                  </h2>
                  <h3 className="text-xl text-accent-teal mb-6">
                    {project.subtitle}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-accent-teal">Impact</h4>
                    <p className="text-gray-300">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-bg-base text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-teal hover:underline font-medium"
                    >
                      Visit Live Site →
                    </a>
                  )}
                </div>
                <div className="bg-gray-800 flex items-center justify-center min-h-[300px]">
                  <div className="text-center text-gray-400">
                    <div className="w-16 h-16 bg-accent-teal/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Image src="/icons/send.png" alt="Project" width={24} height={24} />
                    </div>
                    <p>Project Preview</p>
                    <p className="text-sm">{project.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Other Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-surface rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-accent-teal/10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-800 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="w-12 h-12 bg-accent-teal/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Image src="/icons/linkedin.png" alt="Project" width={20} height={20} />
                    </div>
                    <p className="text-sm">{project.title}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">
                    {project.title}
                  </h3>
                  <h4 className="text-accent-teal mb-3 text-sm">
                    {project.subtitle}
                  </h4>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs text-gray-400 mb-1">Impact</p>
                    <p className="text-sm text-gray-300">{project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-bg-base text-gray-400 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how I can help drive your product vision forward.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-teal text-bg-base px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-accent-teal/25 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
