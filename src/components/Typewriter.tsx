'use client'

import React, { useEffect, useState, useRef } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  onComplete?: () => void
  skipToEnd?: boolean
}

export default function Typewriter({
  text,
  speed = 30,
  onComplete,
  skipToEnd = false
}: TypewriterProps) {
  const [visibleText, setVisibleText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio when component mounts (after user clicks smiley)
  useEffect(() => {
    audioRef.current = new Audio('/sounds/dialogue_blip.wav')
    audioRef.current.volume = 0.3 // Keep it subtle
    // Audio is created after user interaction (smiley click), so it should work on mobile
  }, [])

  useEffect(() => {
    if (skipToEnd) {
      setVisibleText(text)
      setCurrentIndex(text.length)
      onComplete?.()
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        const currentChar = text[currentIndex]
        setVisibleText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)

        // Play blip sound for non-space characters
        if (currentChar !== ' ' && currentChar !== '\n' && audioRef.current) {
          // Clone and play to allow rapid successive sounds
          const audio = audioRef.current.cloneNode() as HTMLAudioElement
          audio.volume = 0.3
          audio.play().catch(() => {}) // Ignore autoplay errors
        }
      }, speed)
      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete, skipToEnd])

  // Reset when text changes
  useEffect(() => {
    setVisibleText('')
    setCurrentIndex(0)
  }, [text])

  return <span>{visibleText}</span>
}
