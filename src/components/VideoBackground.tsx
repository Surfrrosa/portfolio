'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const audioBufferRef = useRef<AudioBuffer | null>(null)
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [audioReady, setAudioReady] = useState(false)

  useEffect(() => {
    // Start video muted
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error)
      })
    }

    return () => {
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop()
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  const toggleMute = async () => {
    // Initialize audio on first interaction (required for mobile)
    if (!audioContextRef.current) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext
        audioContextRef.current = new AudioContext()
        gainNodeRef.current = audioContextRef.current.createGain()
        gainNodeRef.current.gain.value = 0
        gainNodeRef.current.connect(audioContextRef.current.destination)

        // Load audio file (M4A for universal browser compatibility)
        const response = await fetch('/videos/background-audio.m4a')
        const arrayBuffer = await response.arrayBuffer()
        audioBufferRef.current = await audioContextRef.current.decodeAudioData(arrayBuffer)
        setAudioReady(true)
      } catch (error) {
        console.error('Audio initialization failed:', error)
        return
      }
    }

    if (!audioBufferRef.current || !gainNodeRef.current) return

    // Resume AudioContext (required for iOS/Safari)
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }

    if (isMuted) {
      // Start playing gapless loop
      if (sourceNodeRef.current) {
        sourceNodeRef.current.stop()
      }

      const source = audioContextRef.current.createBufferSource()
      source.buffer = audioBufferRef.current
      source.loop = true // Gapless loop!
      source.connect(gainNodeRef.current)
      source.start()
      sourceNodeRef.current = source

      // Fade in
      const now = audioContextRef.current.currentTime
      gainNodeRef.current.gain.cancelScheduledValues(now)
      gainNodeRef.current.gain.linearRampToValueAtTime(0, now)
      gainNodeRef.current.gain.linearRampToValueAtTime(1, now + 0.8)

      setIsMuted(false)
    } else {
      // Fade out
      const now = audioContextRef.current.currentTime
      gainNodeRef.current.gain.cancelScheduledValues(now)
      gainNodeRef.current.gain.linearRampToValueAtTime(gainNodeRef.current.gain.value, now)
      gainNodeRef.current.gain.linearRampToValueAtTime(0, now + 0.5)

      // Stop after fade
      setTimeout(() => {
        if (sourceNodeRef.current) {
          sourceNodeRef.current.stop()
          sourceNodeRef.current = null
        }
      }, 600)

      setIsMuted(true)
    }
  }

  return (
    <>
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/background-loop-safari.mp4" type="video/mp4" />
          <source src="/videos/background-loop-v3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mute/Unmute button - separate from video container */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white/70 hover:text-white p-2 md:p-3 rounded-full transition-all duration-300 border border-white/10 hover:border-white/30 cursor-pointer pointer-events-auto"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        title={isMuted ? 'Click to unmute' : 'Click to mute'}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
    </>
  )
}
