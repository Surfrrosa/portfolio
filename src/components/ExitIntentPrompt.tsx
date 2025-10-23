'use client'

import React, { useEffect, useState } from 'react'

export default function ExitIntentPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  useEffect(() => {
    // Check if user has already interacted with the NPC dialog
    const hasInteractedWithNPC = localStorage.getItem('npc-dialog-interacted')
    if (hasInteractedWithNPC) {
      return // Don't show exit intent if they've already found the easter egg
    }

    // Check if user has seen this prompt before in this session
    const hasSeenPrompt = sessionStorage.getItem('exit-intent-shown')
    if (hasSeenPrompt) {
      setHasTriggered(true)
      return
    }

    const handleMouseOut = (e: MouseEvent) => {
      // Detect when mouse is moving toward top of viewport (exit intent)
      // This fires when cursor leaves the document through the top
      if (!e.relatedTarget && !hasTriggered && e.clientY < 10) {
        setShowPrompt(true)
        setHasTriggered(true)
        sessionStorage.setItem('exit-intent-shown', 'true')

        // Play exit sound
        const audio = new Audio('/sounds/user_leaving.wav')
        audio.volume = 0.4
        audio.play().catch(() => {}) // Ignore autoplay errors

        // Auto-hide after 8 seconds
        setTimeout(() => {
          setShowPrompt(false)
        }, 8000)
      }
    }

    // Use mouseout for exit-intent detection
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [hasTriggered])

  if (!showPrompt) return null

  return (
    <div className="fixed top-[75%] left-[140px] -translate-x-1/2 z-50 animate-fade-in pointer-events-none">
      {/* Text Bubble */}
      <div className="relative bg-zinc-950 border-[3px] border-white/90 rounded-sm px-5 py-3 shadow-2xl mb-4">
        {/* Inner border for classic layered look */}
        <div className="absolute inset-[6px] border border-white/30 rounded-sm pointer-events-none" />

        <p className="text-white text-sm font-mono tracking-wide relative z-10">
          ..wanna taco bout it?
        </p>

        {/* Pointer triangle pointing down */}
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
      </div>

      {/* Bouncing Arrow pointing down */}
      <div className="flex justify-center animate-bounce">
        <svg
          className="w-8 h-8 text-teal-400"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(45, 212, 207, 0.6))'
          }}
        >
          <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      </div>
    </div>
  )
}
