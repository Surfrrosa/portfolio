'use client'

import { motion } from 'framer-motion'

type ProjectCardProps = {
  delay?: number
  children: React.ReactNode
}

export function ProjectCard({ delay = 0.5, children }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}
