'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Sidebar from '@/components/Sidebar'
import ExitIntentPrompt from '@/components/ExitIntentPrompt'

// TV hotspot positions (percentages relative to the GIF container)
const tvHotspots = [
  {
    id: 'work',
    label: 'Work',
    href: '/work',
    // Top left TV (hello world)
    top: '24%',
    left: '14%',
    width: '18%',
    height: '18%',
    labelTop: '55%', // Label position within hotspot
  },
  {
    id: 'writing',
    label: 'Writing',
    href: '/writing',
    // Top right TV
    top: '24%',
    left: '68%',
    width: '18%',
    height: '18%',
    labelTop: '55%',
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    // Bottom left TV (video of her)
    top: '45%',
    left: '8%',
    width: '22%',
    height: '38%',
    labelTop: '60%',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    // Bottom right TV (crowd)
    top: '45%',
    left: '65%',
    width: '22%',
    height: '38%',
    labelTop: '60%',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      <ExitIntentPrompt />

      <main className="flex flex-col items-center px-4 lg:px-12 h-auto lg:min-h-screen pt-0 lg:justify-center relative overflow-visible">
        <motion.div
          className="text-center relative w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* GIF container with hotspots */}
          <div
            className="overflow-visible relative mx-auto mt-0 lg:-mt-32 w-[95vw] lg:w-[70vw]"
            style={{
              maxWidth: '1600px'
            }}
          >
            {/* The GIF */}
            <img
              src="/images/hero-banner.gif"
              alt="Navigate by clicking on the TV screens"
              className="w-full h-auto"
            />

            {/* Clickable TV hotspots */}
            {tvHotspots.map((tv) => (
              <Link
                key={tv.id}
                href={tv.href}
                className="absolute group cursor-pointer"
                style={{
                  top: tv.top,
                  left: tv.left,
                  width: tv.width,
                  height: tv.height,
                }}
              >
                {/* Clickable area */}
                <div className="w-full h-full" />

                {/* Label that appears on hover (desktop only) */}
                <span
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-black text-white text-lg font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap hidden lg:block"
                  style={{
                    top: tv.labelTop,
                    textShadow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)'
                  }}
                >
                  {tv.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile hint */}
          <motion.p
            className="text-zinc-500 text-sm font-mono mt-1 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            tap a screen to explore
          </motion.p>
        </motion.div>
      </main>
    </div>
  )
}
