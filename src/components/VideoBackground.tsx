'use client'

import React, { useEffect, useRef, useState } from 'react'

type AudioRefs = {
  context: React.RefObject<AudioContext | null>
  buffer: React.RefObject<AudioBuffer | null>
  source: React.RefObject<AudioBufferSourceNode | null>
  gain: React.RefObject<GainNode | null>
}

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

async function initAudioContext(refs: AudioRefs): Promise<boolean> {
  if (refs.context.current) return true

  try {
    const AC = window.AudioContext || (window as any).webkitAudioContext
    ;(refs.context as React.MutableRefObject<AudioContext | null>).current = new AC()
    ;(refs.gain as React.MutableRefObject<GainNode | null>).current = refs.context.current!.createGain()
    refs.gain.current!.gain.value = 0
    refs.gain.current!.connect(refs.context.current!.destination)

    const response = await fetch('/videos/background-audio.m4a')
    const arrayBuffer = await response.arrayBuffer()
    ;(refs.buffer as React.MutableRefObject<AudioBuffer | null>).current = await refs.context.current!.decodeAudioData(arrayBuffer)
    return true
  } catch {
    return false
  }
}

function startPlayback(refs: AudioRefs) {
  if (!refs.buffer.current || !refs.gain.current || !refs.context.current) return

  refs.source.current?.stop()

  const source = refs.context.current.createBufferSource()
  source.buffer = refs.buffer.current
  source.loop = true
  source.connect(refs.gain.current)
  source.start()
  ;(refs.source as React.MutableRefObject<AudioBufferSourceNode | null>).current = source

  const now = refs.context.current.currentTime
  refs.gain.current.gain.cancelScheduledValues(now)
  refs.gain.current.gain.linearRampToValueAtTime(0, now)
  refs.gain.current.gain.linearRampToValueAtTime(1, now + 0.8)
}

function stopPlayback(refs: AudioRefs) {
  if (!refs.gain.current || !refs.context.current) return

  const now = refs.context.current.currentTime
  refs.gain.current.gain.cancelScheduledValues(now)
  refs.gain.current.gain.linearRampToValueAtTime(refs.gain.current.gain.value, now)
  refs.gain.current.gain.linearRampToValueAtTime(0, now + 0.5)

  setTimeout(() => {
    refs.source.current?.stop()
    ;(refs.source as React.MutableRefObject<AudioBufferSourceNode | null>).current = null
  }, 600)
}

function BackgroundVideo({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement | null> }) {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        className="absolute min-w-full min-h-full w-auto h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay loop muted playsInline preload="auto"
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

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRefs: AudioRefs = {
    context: useRef<AudioContext | null>(null),
    buffer: useRef<AudioBuffer | null>(null),
    source: useRef<AudioBufferSourceNode | null>(null),
    gain: useRef<GainNode | null>(null),
  }
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    videoRef.current?.play().catch(() => {})
    return () => {
      audioRefs.source.current?.stop()
      audioRefs.context.current?.close()
    }
  }, [])

  const toggleMute = async () => {
    const ready = await initAudioContext(audioRefs)
    if (!ready) return

    if (audioRefs.context.current?.state === 'suspended') {
      await audioRefs.context.current.resume()
    }

    if (isMuted) startPlayback(audioRefs)
    else stopPlayback(audioRefs)
    setIsMuted(!isMuted)
  }

  return (
    <>
      <BackgroundVideo videoRef={videoRef} />
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
    </>
  )
}
