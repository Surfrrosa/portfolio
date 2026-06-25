'use client'

import React, { useEffect, useRef, useState } from 'react'

function MutedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
  )
}

function UnmutedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
  )
}

function BackgroundVideo({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        aria-hidden="true"
        className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay loop muted playsInline preload="metadata"
      >
        <source src="/videos/background-loop-safari.mp4" type="video/mp4" />
        <source src="/videos/background-loop-v3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

function MuteButton({ isMuted, onToggle }: { isMuted: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white/70 hover:text-white p-2 md:p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-white/30 cursor-pointer pointer-events-auto"
      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      title={isMuted ? 'Click to unmute' : 'Click to mute'}
    >
      {isMuted ? <MutedIcon /> : <UnmutedIcon />}
    </button>
  )
}

function fadeVolume(audio: HTMLAudioElement, target: number, durationMs: number): Promise<void> {
  return new Promise((resolve) => {
    const steps = 30
    const stepDuration = durationMs / steps
    const startVolume = audio.volume
    const delta = target - startVolume
    let currentStep = 0

    const interval = window.setInterval(() => {
      currentStep++
      const t = currentStep / steps
      audio.volume = Math.max(0, Math.min(1, startVolume + delta * t))
      if (currentStep >= steps) {
        window.clearInterval(interval)
        resolve()
      }
    }, stepDuration)
  })
}

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
  }, [])

  const toggleMute = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.volume = 0
      try {
        await audio.play()
      } catch {
        return
      }
      setIsMuted(false)
      fadeVolume(audio, 1, 800)
    } else {
      setIsMuted(true)
      await fadeVolume(audio, 0, 500)
      audio.pause()
    }
  }

  return (
    <>
      <BackgroundVideo videoRef={videoRef} />
      <audio
        ref={audioRef}
        src="/videos/background-audio.m4a"
        loop
        preload="auto"
        aria-hidden="true"
      />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
    </>
  )
}
