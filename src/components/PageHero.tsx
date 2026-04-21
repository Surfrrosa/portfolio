'use client'

import { motion } from 'framer-motion'

type PageHeroProps = {
  title: React.ReactNode
  subtitle: React.ReactNode
  titleClassName?: string
  subtitleMaxWidth?: string
}

export default function PageHero({
  title,
  subtitle,
  titleClassName = 'text-4xl lg:text-5xl font-bold text-white mb-12',
  subtitleMaxWidth = 'max-w-4xl',
}: PageHeroProps) {
  return (
    <>
      <motion.h1
        className={titleClassName}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className={`text-white text-xl md:text-2xl leading-relaxed ${subtitleMaxWidth} mb-16`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {subtitle}
      </motion.p>
    </>
  )
}
