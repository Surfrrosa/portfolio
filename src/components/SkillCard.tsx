'use client'

import { useState } from 'react'
import { buildInstallCommand, SKILLS_REPO, type Skill } from '@/lib/skills'

function ClipboardIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export function SkillCard({ skill }: { skill: Skill }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(buildInstallCommand(skill.slug))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <article className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-accent-teal/50 transition-all duration-300">
      <h3 className="text-xl lg:text-2xl font-bold text-accent-teal font-mono mb-3">
        /{skill.slug}
      </h3>
      <p className="text-zinc-300 leading-relaxed mb-5">
        {skill.description}
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors"
          aria-label={`Copy install command for /${skill.slug}`}
        >
          {copied ? <CheckIcon /> : <ClipboardIcon />}
          <span>{copied ? 'copied' : 'install'}</span>
        </button>
        <a
          href={`${SKILLS_REPO}/blob/main/${skill.slug}/SKILL.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-accent-teal text-sm rounded-lg transition-colors"
        >
          <ExternalLinkIcon />
          <span>view source</span>
        </a>
      </div>
    </article>
  )
}
