'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <>
      <aside className="hidden lg:flex lg:flex-col gap-6 sticky top-0 h-screen
                         bg-black/60 backdrop-blur-[1px] border-r border-white/10 p-6">
        <div className="space-y-6">
          <Link href="/" className="block">
            <div className="font-bold text-white hover:text-accent-teal transition-colors cursor-pointer glitch-hover" style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em' }}>Hello</div>
          </Link>
          
          <Link href="/" className="block">
            <motion.div
              className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              style={{ width: '280px', height: '175px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/shaina-photo.jpg"
                alt="Shaina Pauley"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </Link>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white font-semibold" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              My name is Shaina Pauley.
            </p>
            <p className="text-white font-semibold" style={{ fontSize: '18px', lineHeight: '1.6' }}>
              I'm an action-oriented dreamer, a student of ideas, and a believer that emotional intelligence, systems thinking, storytelling, and collaboration are the real superpowers in a time of rapid change.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="https://linkedin.com/in/shainapauley" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors glitch-hover">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/Surfrrosa" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors glitch-hover">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://medium.com" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors glitch-hover">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a href="https://nothingbutstatic.substack.com/" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors glitch-hover">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </a>
            
            <div className="w-px h-10 bg-white/20 mx-2"></div>
            
            <Link href="/work" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group glitch-hover" aria-label="View Work">
              <svg className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
              </svg>
            </Link>
            <Link href="/contact" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group glitch-hover" aria-label="Contact">
              <svg className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex-1 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <pre className="text-white/30 text-[12px] leading-[1.2] font-mono select-none scale-150">
{`⠀⠀⠀⠀⠀⡾⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⠀⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⠀⡸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⢿⠀⠀⠀⠀⠀
⠀⠀⠀⢠⡾⠁⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠙⣦⠀⠀⠀⠀⠀⠀⠀⣴⠋⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⠀⠈⢳⣄⠀⠀⠀
⠤⠒⠚⠁⠀⢀⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠙⠒⠂⠤⠐⠒⠋⠀⠀⣰⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠳⣄⠀⠈⠓⠒⠤
⠀⠀⣀⡤⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣄⡀⠀⠀⠀⢀⣠⠴⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⢤⣀⠀⠀
⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠒⠋⠉⠉⠉⠓⠲⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠖⠚⠉⠉⠉⠙⠒⠦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠁⠀⠀⣀⠀⠀⢀⡀⠀⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⢀⡀⠀⠀⣀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢰⠋⠀⠀⠀⠀⣿⡄⠀⣾⡇⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠁⠀⠀⠀⢸⣧⠀⢰⣿⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡿⠀⣀⡀⠀⠀⢿⠁⠀⢹⠇⠀⠀⣠⡄⠈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⢀⣀⠀⠀⠸⡏⠀⠈⡿⠀⠀⢀⣤⠀⢹⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢻⠀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠀⢰⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⠀⠹⣄⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⡾⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⡀⠀⠙⠲⠤⢀⣀⠠⠴⠚⠁⠀⣰⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣆⠀⠈⠓⠦⠄⣀⡀⠤⠖⠋⠀⢀⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⣀⡀⠀⠀⠀⠀⠀⣀⡠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢄⣀⠀⠀⠀⠀⠀⢀⣀⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠒⠒⠤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠑⠒⠒⠒⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⠔⠒⠒⠒⠢⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠒⠒⠒⠚⠉⠁⠀⠀⠀⠀⠀⠀⠀⢀⣠⠤⠒⠒
⠀⠀⠀⠀⠉⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠚⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠖⠉⠀⠀⠀⠀
⠀⣾⡆⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠁⠀⠀⠀⣾⡆⠀⢸⣧⠀⠀⠀⠀⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠋⠀⠀⠀⢠⣿⠀
⠀⣿⡇⠀⠀⠀⠀⠸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡸⠀⠀⠀⠀⠀⢿⡇⠀⢸⡿⠀⠀⢀⡀⠈⢇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠇⠀⣀⠀⠀⠸⣿⠀
⠀⠈⠀⠀⠘⣹⠁⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢹⡟⠀⠀⠈⠀⠀⠀⠁⠀⠀⢙⡏⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠈⣏⠁⠀⠀⠉⠀
⠀⠀⠀⠀⢠⠏⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡆⠀⠹⣄⠀⠀⠀⠀
⠀⣀⣠⠔⠃⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢳⡀⠀⠛⢤⣀⡀⠀⢀⣀⡤⠚⠀⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣄⠀⠘⠣⣄⣀⠀
⠁⠀⠀⠀⣀⠴⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⢤⡀⠀⠀⠀⠉⠁⠀⠀⢀⡠⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠷⣀⠀⠀⠀⠈
⠤⠤⠒⠋⠁⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠢⠤⠤⠤⠔⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⠤⠤⠤⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠒⠤⠤
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠉⠀⠀⠀⠀⠀⠀⠈⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⠁⠀⠀⠀⠀⠀⠀⠉⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠁⠀⠀⠀⣶⠀⠀⣰⡆⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠏⠀⠀⠀⢰⡆⠀⢀⣶⠀⠀⠀⠈⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⠀⠀⠀⠀⣿⠇⠀⢿⡇⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⢸⡿⠀⠸⣿⠀⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⢲⠦⠀⠀⠙⠀⠀⠘⠁⠀⠀⢺⠃⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠐⡶⠄⠀⠈⠃⠀⠀⠋⠀⠀⠐⡟⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀⠸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡄⠀⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀⣸⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠸⣆⠀⠙⢦⣀⠀⠀⠀⠀⢀⣠⠞⠁⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢷⡀⠈⠳⣄⡀⠀⠀⠀⠀⣀⡴⠋⠀⣠⠏⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢦⡀⠀⠈⠉⠐⠒⠈⠉⠀⠀⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠉⠁⠒⠂⠉⠁⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠲⠤⢄⣀⣀⣀⡤⠴⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠦⠤⣀⣀⣀⣠⠤⠖⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀
⠀⠀⠉⠓⠦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡠⠖⠋⠁⠀⠀⠀⠈⠙⠲⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⠚⠉⠁⠀
⠀⣤⠀⠀⠀⠈⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠏⠀⠀⠀⢠⡄⠀⢀⣄⠀⠀⠀⠙⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡼⠁⠀⠀⢀⣄⠀
⠀⣿⡇⠀⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀⠀⠀⣿⡧⠀⢸⣿⠀⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⢸⣿⠀
⠀⠿⠁⠀⢠⣶⡆⢨⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡎⠀⢴⡦⠀⠀⢹⡇⠀⠘⣟⠀⠀⣠⣤⠀⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠱⢠⣤⡄⠀⠘⡟⠀`}
            </pre>
          </motion.div>
        </div>

      </aside>

      <aside className="lg:hidden p-4 border-b border-white/10 bg-black/50 backdrop-blur-[1px]">
        <div className="flex items-center gap-3 mb-4">
          <Link href="/" className="block">
            <div className="text-lg font-bold text-white hover:text-accent-teal transition-colors cursor-pointer glitch-hover" style={{ letterSpacing: '-0.02em' }}>Hello</div>
          </Link>
        </div>
        
        <div className="flex items-start gap-4">
          <Link href="/" className="block flex-shrink-0">
            <div className="w-16 h-16 relative rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
              <Image
                src="/images/shaina-photo.jpg"
                alt="Shaina Pauley"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>
          
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold leading-relaxed mb-2">
              My name is Shaina Pauley and I am a product owner, builder, writer, and connoisseur of clouds.
            </p>
            <p className="text-white text-xs leading-relaxed text-gray-300">
              I'm an action-oriented dreamer, a student of ideas, and a believer that emotional intelligence, systems thinking, storytelling, and collaboration are the real superpowers in a time of rapid change.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3">
            <a href="https://linkedin.com/in/shainapauley" className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation glitch-hover">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/Surfrrosa" className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation glitch-hover">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://nothingbutstatic.substack.com/" className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation glitch-hover">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
            </a>
          </div>
          
          <div className="flex gap-3">
            <Link href="/work" className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group touch-manipulation glitch-hover" aria-label="View Work">
              <svg className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
              </svg>
            </Link>
            <Link href="/contact" className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group touch-manipulation glitch-hover" aria-label="Contact">
              <svg className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
