'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'

function MutedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
  )
}

function UnmutedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
  )
}

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsMuted(nextMuted)
    if (!nextMuted) {
      video.play().catch(() => {})
    }
  }

  return (
    <>
      <Sidebar />
      <main id="main-content" className="fixed inset-0 bg-black">
        <h1 className="sr-only">About Shaina Pauley</h1>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/about-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 max-w-[min(92vw,640px)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-white/60 text-xs font-mono text-center leading-relaxed">
            now playing: let&apos;s all go to the lobby (1957) + a colour box (1935) · public domain
          </p>
          <div className="flex items-center justify-center gap-4 mt-1">
            <p className="text-white text-sm font-mono">
              contact:{' '}
              <a
                href="mailto:me@shainapauley.com"
                className="text-accent-teal hover:text-white transition-colors"
              >
                me@shainapauley.com
              </a>
            </p>
            <button
              type="button"
              onClick={toggleMute}
              className="text-white/70 hover:text-white transition-colors"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              title={isMuted ? 'Click to unmute' : 'Click to mute'}
            >
              {isMuted ? <MutedIcon /> : <UnmutedIcon />}
            </button>
          </div>
        </motion.div>
      </main>
    </>
  )
}
