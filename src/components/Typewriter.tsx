'use client'

import React, { useEffect, useState } from 'react'

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

  useEffect(() => {
    if (skipToEnd) {
      setVisibleText(text)
      setCurrentIndex(text.length)
      onComplete?.()
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setVisibleText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
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
