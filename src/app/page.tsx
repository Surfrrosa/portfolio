'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import Lenis from 'lenis'
import Sidebar from '../components/Sidebar'
import { heroMotion, isR3FDisabled } from '../lib/heroMotion.config'
import dynamic from 'next/dynamic'

const GlassLensOverlay = dynamic(() => import('../components/GlassLensOverlay'), { ssr: false })

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const scrollScale = useTransform(scrollYProgress, [0, 0.4, 1], [1, heroMotion.scaleMid, 1])

  const mouseRotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [heroMotion.tiltXDeg, -heroMotion.tiltXDeg]),
    { damping: heroMotion.damping * 100, stiffness: heroMotion.stiffness }
  )
  const mouseRotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-heroMotion.tiltYDeg, heroMotion.tiltYDeg]),
    { damping: heroMotion.damping * 100, stiffness: heroMotion.stiffness }
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    if (prefersReducedMotion) {
      mouseX.set(0)
      mouseY.set(0)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
    
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
      smoothWheel: !prefersReducedMotion,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      mouseX.set(x)
      mouseY.set(y)
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      lenis.destroy()
      window.removeEventListener('mousemove', handleMouseMove)
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [mouseX, mouseY, prefersReducedMotion])

  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      
      <main className="relative">
        {/* Sticky hero section with 140vh height for scroll effects */}
        <section ref={heroRef} className="sticky top-0 h-[140vh] flex flex-col justify-center items-center px-6 lg:px-12">
          <motion.div
            className="text-center"
            style={prefersReducedMotion ? {} : {
              y: scrollY,
              scale: scrollScale,
              rotateX: mouseRotateX,
              rotateY: mouseRotateY,
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {/* 3D perspective container for parallax effect */}
            <div 
              className="relative"
              style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              <h1 className="h1-display text-white mb-8">
                <span 
                  className="block"
                  style={{ transform: 'translateZ(0px)' }}
                >
                  Future-proof
                </span>
                <span 
                  className="block"
                  style={{ transform: 'translateZ(-10px)' }}
                >
                  Product
                </span>
                <span 
                  className="block"
                  style={{ transform: 'translateZ(-20px)' }}
                >
                  Management
                </span>
              </h1>
            </div>
            
            <motion.p
              className="text-white text-xl leading-relaxed max-w-[70ch] mx-auto text-zinc-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I turn messy requirements into shipped outcomes with 7+ years of experience with AI-powered products &amp; data-driven platforms
            </motion.p>
          </motion.div>
        </section>
        
        {/* Glass lens overlay */}
        {!prefersReducedMotion && !isR3FDisabled && (
          <GlassLensOverlay heroRef={heroRef} />
        )}
        
        {/* Content below hero for scroll testing */}
        <section className="min-h-screen bg-black/20 p-12">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8">More Content</h2>
            <p className="text-lg leading-relaxed">
              This section provides content below the hero to test the sticky parallax effects.
              The hero section should remain sticky for 140vh while this content scrolls underneath.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
