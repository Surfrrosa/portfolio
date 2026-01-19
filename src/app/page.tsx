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
    top: '5%',
    left: '12%',
    width: '22%',
    height: '35%',
  },
  {
    id: 'writing',
    label: 'Writing',
    href: '/writing',
    // Top right TV
    top: '5%',
    left: '66%',
    width: '22%',
    height: '35%',
  },
  {
    id: 'about',
    label: 'About',
    href: '/about',
    // Bottom left TV (video of her)
    top: '42%',
    left: '5%',
    width: '25%',
    height: '42%',
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    // Bottom right TV (crowd)
    top: '42%',
    left: '62%',
    width: '26%',
    height: '42%',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      <ExitIntentPrompt />

      <main className="flex flex-col justify-center items-center px-4 lg:px-12 min-h-screen pt-4 lg:pt-0 relative overflow-visible">
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
                {/* Hover effect overlay */}
                <div className="w-full h-full transition-all duration-300 rounded-sm group-hover:bg-white/15 group-hover:shadow-[0_0_30px_rgba(43,212,207,0.3)]" />

                {/* Label that appears on hover (desktop only) */}
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden lg:block">
                  {tv.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile hint */}
          <motion.p
            className="text-zinc-500 text-sm font-mono mt-6 lg:hidden"
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
