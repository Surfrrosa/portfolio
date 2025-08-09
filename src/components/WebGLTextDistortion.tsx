'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface WebGLTextProps {
  text: string
}

export default function WebGLTextDistortion({ text }: WebGLTextProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isClient) {
    return (
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-center">
        {text}
      </h1>
    )
  }

  const distortionAmount = Math.sin(scrollY * 0.01) * 2
  const chromaticOffset = Math.sin(scrollY * 0.005) * 3

  return (
    <div className="h-32 md:h-40 mb-6 w-full relative overflow-hidden">
      {/* Main text with CSS-based distortion effects */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-center absolute inset-0 flex items-center justify-center"
        style={{
          transform: `skewX(${distortionAmount}deg) translateY(${Math.sin(scrollY * 0.003) * 5}px)`,
          filter: `hue-rotate(${scrollY * 0.1}deg)`,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {text}
      </motion.h1>

      {/* Chromatic aberration layers */}
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-center absolute inset-0 flex items-center justify-center text-red-500 opacity-30"
        style={{
          transform: `skewX(${distortionAmount}deg) translateY(${Math.sin(scrollY * 0.003) * 5}px) translateX(${chromaticOffset}px)`,
          mixBlendMode: 'screen',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      >
        {text}
      </motion.h1>

      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-center absolute inset-0 flex items-center justify-center text-cyan-400 opacity-30"
        style={{
          transform: `skewX(${distortionAmount}deg) translateY(${Math.sin(scrollY * 0.003) * 5}px) translateX(${-chromaticOffset}px)`,
          mixBlendMode: 'screen',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        {text}
      </motion.h1>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .motion-reduce-disable {
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
