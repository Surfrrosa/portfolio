import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

export default function NotFound() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      <main id="main-content" className="flex items-center justify-center px-4 lg:px-12">
        <div className="text-center">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-accent-teal mb-4">
            404
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            This page doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 transition-colors"
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
            Back to home
          </Link>
        </div>
      </main>
    </div>
  )
}
