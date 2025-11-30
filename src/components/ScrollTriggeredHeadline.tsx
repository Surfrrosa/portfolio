'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ScrollTriggeredHeadlineProps {
  children: React.ReactNode
  className?: string
}

export default function ScrollTriggeredHeadline({ children, className }: ScrollTriggeredHeadlineProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: headlineRef,
    offset: ["start 80%", "end 20%"]
  })
  
  const distortionIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.8, 0])
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setIsInView(latest > 0.1 && latest < 0.9)
    })
    
    return unsubscribe
  }, [scrollYProgress])
  
  if (prefersReducedMotion) {
    return <h1 ref={headlineRef} className={className}>{children}</h1>
  }
  
  return (
    <motion.h1
      ref={headlineRef}
      className={className}
      style={{
        filter: useTransform(
          distortionIntensity,
          [0, 1],
          ['blur(0px) brightness(1)', 'blur(0.5px) brightness(1.1)']
        ),
        textShadow: useTransform(
          glowIntensity,
          [0, 1],
          ['none', '0 0 20px rgba(255,255,255,0.3)']
        ),
      }}
    >
      {children}
    </motion.h1>
  )
}
