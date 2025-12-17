import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import Sidebar from '@/components/Sidebar'
import MDXContent from '@/components/MDXContent'
import ArticleStructuredData from '@/components/ArticleStructuredData'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: 'Shaina Pauley', url: 'https://shainapauley.com' }],
    creator: 'Shaina Pauley',
    publisher: 'Shaina Pauley',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Shaina Pauley'],
      tags: post.tags,
      url: `https://shainapauley.com/writing/${slug}`,
      siteName: 'Shaina Pauley Portfolio',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@shainapauley',
    },
    alternates: {
      canonical: `/writing/${slug}`,
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <ArticleStructuredData
        title={post.title}
        description={post.excerpt}
        publishedTime={post.date}
        tags={post.tags || []}
        url={`https://shainapauley.com/writing/${slug}`}
      />
      <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
        <Sidebar />

      <main className="px-4 lg:px-12 py-12 lg:py-20">
        <article className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Writing
          </Link>

          {/* Article container with dark background */}
          <div className="bg-zinc-950 rounded-2xl p-8 lg:p-12 border border-white/10">
            {/* Post header */}
            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-zinc-400 text-sm">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.readTime && (
                  <>
                    <span className="text-zinc-600">•</span>
                    <span>{post.readTime}</span>
                  </>
                )}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
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
            </header>

            {/* Post content */}
            <MDXContent>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </MDXContent>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-white/10">
              <Link
                href="/writing"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to all posts
              </Link>
            </footer>
          </div>
        </article>
      </main>
    </div>
    </>
  )
}
