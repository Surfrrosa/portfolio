'use client'

import React, { useEffect, useState, useRef } from 'react'

function playBlip(audioRef: React.RefObject<HTMLAudioElement | null>) {
  if (!audioRef.current) return
  const audio = audioRef.current.cloneNode() as HTMLAudioElement
  audio.volume = 0.3
  audio.play().catch(() => {})
}

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

  // Initialize audio on mount
  useEffect(() => {
    audioRef.current = new Audio('/sounds/dialogue_blip.wav')
    audioRef.current.volume = 0.3 // Keep it subtle
  }, [])

  useEffect(() => {
    if (skipToEnd) {
      setVisibleText(text)
      setCurrentIndex(text.length)
      onComplete?.()
      return
    }

    if (currentIndex >= text.length) {
      if (currentIndex === text.length) onComplete?.()
      return
    }

    const timeout = setTimeout(() => {
      const currentChar = text[currentIndex]
      setVisibleText(text.substring(0, currentIndex + 1))
      setCurrentIndex(currentIndex + 1)

      if (currentChar !== ' ' && currentChar !== '\n') playBlip(audioRef)
    }, speed)
    return () => clearTimeout(timeout)
  }, [currentIndex, text, speed, onComplete, skipToEnd])

  // Reset when text changes
  useEffect(() => {
    setVisibleText('')
    setCurrentIndex(0)
  }, [text])

  return <span>{visibleText}</span>
}
