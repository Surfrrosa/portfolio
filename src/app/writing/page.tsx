import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { getAllPosts, getContentPreview } from '@/lib/blog'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'stuff I\'m writing about',
  description: 'Thoughts on product management, AI, and building things that work.',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />

      <main className="px-4 lg:px-12 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            stuff I&apos;m writing about
          </h1>

          <a
            href="https://buttondown.com/shainapauley"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-teal-400 transition-colors mb-12 group"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Get notified when I post something new</span>
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {posts.length === 0 ? (
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-12 border border-white/10">
              <p className="text-zinc-400 text-center">
                No posts yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/writing/${encodeURIComponent(post.slug)}`}
                  className="block group"
                >
                  <article className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                        {post.title}
                      </h2>
                      {post.readTime && (
                        <span className="text-sm text-zinc-500 whitespace-nowrap">
                          {post.readTime}
                        </span>
                      )}
                    </div>

                    <p className="text-zinc-400 text-sm mb-4">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>

                    <p className="text-zinc-300 leading-relaxed mb-4">
                      {getContentPreview(post.content, 200)}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-teal-400/10 text-teal-400 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-4 text-teal-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                      Read more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
