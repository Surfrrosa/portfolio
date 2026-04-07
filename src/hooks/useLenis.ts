'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface LenisOptions {
  duration?: number
  orientation?: 'vertical' | 'horizontal'
  gestureOrientation?: 'vertical' | 'horizontal' | 'both'
  smoothWheel?: boolean
  wheelMultiplier?: number
  touchMultiplier?: number
  infinite?: boolean
}

export function useLenis(options: LenisOptions = {}) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      ...options,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return lenisRef
}
