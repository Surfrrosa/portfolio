'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SmileyButton from './SmileyButton'

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  )
}


function WriteIcon() {
  return (
    <svg className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  )
}

function WorkIcon() {
  return (
    <svg className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function HomeLink({ isHome }: { isHome: boolean }) {
  return (
    <Link href="/" className="block group">
      <div className="font-bold text-white hover:text-accent-teal transition-colors cursor-pointer glitch-hover flex items-center gap-2" style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.02em' }}>
        <span>→</span>
        {isHome ? (
          <span>Hello</span>
        ) : (
          <span className="flex items-center gap-2">
            <span className="line-through opacity-50">Hello</span>
            <span>Home</span>
          </span>
        )}
      </div>
    </Link>
  )
}

function ArtPortfolioIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { href: 'https://surfrrosa.com/', icon: ArtPortfolioIcon, label: 'Art Portfolio' },
  { href: 'https://linkedin.com/in/shainapauley', icon: LinkedInIcon, label: 'LinkedIn' },
  { href: 'https://github.com/Surfrrosa', icon: GitHubIcon, label: 'GitHub' },
] as const

const NAV_LINKS = [
  { href: '/writing', icon: WriteIcon, label: 'Writing' },
  { href: '/work', icon: WorkIcon, label: 'View Work' },
  { href: '/contact', icon: MailIcon, label: 'Contact' },
] as const

function SocialLinks({ className }: { className: string }) {
  return (
    <>
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <a key={label} href={href} className={`${className} glitch-hover`}>
          <Icon />
        </a>
      ))}
    </>
  )
}

function NavLinks({ className }: { className: string }) {
  return (
    <>
      {NAV_LINKS.map(({ href, icon: Icon, label }) => (
        <Link key={label} href={href} className={`${className} group glitch-hover`} aria-label={label}>
          <Icon />
        </Link>
      ))}
    </>
  )
}

function DesktopSidebar({ isHome }: { isHome: boolean }) {
  return (
    <aside className="hidden lg:flex lg:flex-col gap-6 fixed top-0 left-0 w-[340px] h-screen
                       bg-black/60 backdrop-blur-[1px] border-r border-white/10 p-6 z-50">
      <div className="space-y-6">
        <HomeLink isHome={isHome} />

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white font-mono tracking-wide" style={{ fontSize: '22px', lineHeight: '1.7' }}>
            My name is Shaina Pauley.
          </p>
          <p className="text-white font-mono tracking-wide" style={{ fontSize: '22px', lineHeight: '1.7' }}>
            I&apos;m an action-oriented <a href="https://palebluedot.sh" target="_blank" rel="noopener noreferrer" className="text-accent-teal hover:text-white transition-colors">dreamer</a> and believer that emotional intelligence, systems thinking, storytelling, and collaboration are the real signal in a world full of noise
            <span className="inline-block w-[3px] h-[1.1em] bg-white ml-1 align-middle animate-blink" />
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SocialLinks className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" />
          <div className="w-px h-10 bg-white/20 mx-2"></div>
          <NavLinks className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" />
        </motion.div>

        <motion.div
          className="mt-8 flex-1 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <SmileyButton>
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
          </SmileyButton>
        </motion.div>
      </div>
    </aside>
  )
}

function MobileSidebar({ isHome }: { isHome: boolean }) {
  return (
    <aside className="lg:hidden p-4 border-b border-white/10 bg-black/50 backdrop-blur-[1px] relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <Link href="/" className="block">
          <div className="text-lg font-bold text-white hover:text-accent-teal transition-colors cursor-pointer glitch-hover flex items-center gap-2" style={{ letterSpacing: '-0.02em' }}>
            <span>→</span>
            {isHome ? (
              <span>Hello</span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="line-through opacity-50">Hello</span>
                <span>Home</span>
              </span>
            )}
          </div>
        </Link>
      </div>

      <div className="space-y-2">
        <p className="text-white font-mono tracking-wide text-base leading-relaxed">
          My name is Shaina Pauley.
        </p>
        <p className="text-white font-mono tracking-wide text-sm leading-relaxed">
          I'm an action-oriented dreamer and believer that emotional intelligence, systems thinking, storytelling, and collaboration are the real signal in a world full of noise
          <span className="inline-block w-[2px] h-[1em] bg-white ml-1 align-middle animate-blink" />
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-3">
          <SocialLinks className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation" />
        </div>
        <div className="flex gap-3">
          <NavLinks className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors touch-manipulation" />
        </div>
      </div>
    </aside>
  )
}

export default function Sidebar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      <div className="hidden lg:block w-[340px]" />
      <DesktopSidebar isHome={isHome} />
      <MobileSidebar isHome={isHome} />
    </>
  )
}
