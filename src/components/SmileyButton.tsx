'use client'

import React, { useState, useRef, useEffect } from 'react'
import NpcDialog from './NpcDialog'

interface SmileyButtonProps {
  children: React.ReactNode
}

export default function SmileyButton({ children }: SmileyButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showBubble, setShowBubble] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showExclamation, setShowExclamation] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout>()

  // Check if user has interacted before
  useEffect(() => {
    const hasInteracted = localStorage.getItem('npc-dialog-interacted')
    if (!hasInteracted) {
      setShowExclamation(true)
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
    // Show bubble after a short delay
    hoverTimeoutRef.current = setTimeout(() => {
      setShowBubble(true)
    }, 200)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setShowBubble(false)
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
  }

  const handleClick = () => {
    // Open dialog immediately on click
    setIsDialogOpen(true)
    setShowBubble(false)
    // Hide exclamation and mark as interacted
    setShowExclamation(false)
    localStorage.setItem('npc-dialog-interacted', 'true')
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    // Return focus to button
    setTimeout(() => {
      buttonRef.current?.focus()
    }, 100)
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-400/60 focus:ring-offset-2 focus:ring-offset-black rounded-lg transition-all"
        aria-label="Open framework quest dialog"
      >
        {/* Gold 3D Exclamation Point */}
        {showExclamation && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 animate-float pointer-events-none">
            <div
              className="text-5xl font-black"
              style={{
                textShadow: `
                  0 2px 0 #B8860B,
                  0 3px 0 #996515,
                  0 4px 0 #7A5010,
                  0 5px 0 #5C3C0A,
                  0 6px 8px rgba(0, 0, 0, 0.5),
                  0 0 20px rgba(255, 215, 0, 0.6)
                `,
                background: 'linear-gradient(180deg, #FFD700 0%, #FFA500 50%, #B8860B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8))'
              }}
            >
              !
            </div>
          </div>
        )}

        {/* Shimmer wrapper */}
        <div className="relative animate-shimmer">
          {children}
        </div>

        {/* Classic RPG speech box on hover */}
        {showBubble && (
          <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 z-50 animate-fade-in">
            <div className="relative bg-zinc-950 border-[3px] border-white/90 rounded-sm px-5 py-3 shadow-2xl">
              {/* Inner border for classic layered look */}
              <div className="absolute inset-[6px] border border-white/30 rounded-sm pointer-events-none" />

              <p className="text-white text-sm font-mono tracking-wide relative z-10">
                Wanna talk about it?
              </p>

              {/* Pixel-style pointer triangle */}
              <div className="absolute right-full top-1/2 -translate-y-1/2 mr-[3px]">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="drop-shadow-lg">
                  <rect x="9" y="0" width="3" height="3" fill="white" fillOpacity="0.9"/>
                  <rect x="6" y="3" width="6" height="3" fill="white" fillOpacity="0.9"/>
                  <rect x="3" y="6" width="9" height="3" fill="white" fillOpacity="0.9"/>
                  <rect x="0" y="9" width="12" height="3" fill="white" fillOpacity="0.9"/>
                  <rect x="0" y="12" width="12" height="3" fill="#09090b"/>
                  <rect x="3" y="15" width="9" height="3" fill="#09090b"/>
                  <rect x="6" y="18" width="6" height="3" fill="#09090b"/>
                  <rect x="9" y="21" width="3" height="3" fill="#09090b"/>
                </svg>
              </div>
            </div>
          </div>
        )}
      </button>

      <NpcDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </>
  )
}
