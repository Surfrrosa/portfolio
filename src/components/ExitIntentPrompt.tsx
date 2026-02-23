'use client'

import React, { useEffect, useState } from 'react'

function PixelPointer() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[3px]">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none" className="drop-shadow-lg">
        <rect x="0" y="0" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="3" y="3" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="6" y="6" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="9" y="9" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="12" y="9" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="15" y="6" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="18" y="3" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="21" y="0" width="3" height="3" fill="white" fillOpacity="0.9"/>
        <rect x="3" y="3" width="3" height="3" fill="#09090b"/>
        <rect x="6" y="6" width="3" height="3" fill="#09090b"/>
        <rect x="9" y="9" width="3" height="3" fill="#09090b"/>
        <rect x="12" y="9" width="3" height="3" fill="#09090b"/>
        <rect x="15" y="6" width="3" height="3" fill="#09090b"/>
        <rect x="18" y="3" width="3" height="3" fill="#09090b"/>
      </svg>
    </div>
  )
}

function BouncingArrow() {
  return (
    <div className="flex justify-center animate-bounce">
      <svg
        className="w-8 h-8 text-teal-400"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ filter: 'drop-shadow(0 0 8px rgba(45, 212, 207, 0.6))' }}
      >
        <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    </div>
  )
}

function SpeechBubble() {
  return (
    <div className="relative bg-zinc-950 border-[3px] border-white/90 rounded-sm px-5 py-3 shadow-2xl mb-4">
      <div className="absolute inset-[6px] border border-white/30 rounded-sm pointer-events-none" />
      <p className="text-white text-sm font-mono tracking-wide relative z-10">
        ..wanna taco bout it?
      </p>
      <PixelPointer />
    </div>
  )
}

export default function ExitIntentPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('npc-dialog-interacted')) return

    if (sessionStorage.getItem('exit-intent-shown')) {
      setHasTriggered(true)
      return
    }

    const handleMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget || hasTriggered || e.clientY >= 10) return

      setShowPrompt(true)
      setHasTriggered(true)
      sessionStorage.setItem('exit-intent-shown', 'true')

      const audio = new Audio('/sounds/user_leaving.wav')
      audio.volume = 0.4
      audio.play().catch(() => {})

      setTimeout(() => setShowPrompt(false), 8000)
    }

    document.addEventListener('mouseout', handleMouseOut)
    return () => document.removeEventListener('mouseout', handleMouseOut)
  }, [hasTriggered])

  if (!showPrompt) return null

  return (
    <div className="fixed top-[65%] left-[123px] -translate-x-1/2 z-50 animate-fade-in pointer-events-none">
      <SpeechBubble />
      <BouncingArrow />
    </div>
  )
}
