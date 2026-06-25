export type Tier = 'foundations' | 'design' | 'workflow'

export type Skill = {
  slug: string
  description: string
  tier: Tier
}

export const SKILLS_REPO = 'https://github.com/Surfrrosa/claude-skills'
export const SKILLS_RAW = 'https://raw.githubusercontent.com/Surfrrosa/claude-skills/main'

export function buildInstallCommand(slug: string): string {
  return `mkdir -p ~/.claude/skills/${slug} && curl -L ${SKILLS_RAW}/${slug}/SKILL.md -o ~/.claude/skills/${slug}/SKILL.md`
}

export const TIER_LABELS: Record<Tier, string> = {
  foundations: 'foundations',
  design: 'design',
  workflow: 'workflow',
}

export const TIERS: Tier[] = ['foundations', 'design', 'workflow']

export const SKILLS: Skill[] = [
  {
    slug: 'a11y',
    tier: 'foundations',
    description:
      'Accessibility (WCAG) audit on source code and optionally live URLs. Can auto-fix safe categories.',
  },
  {
    slug: 'perf',
    tier: 'foundations',
    description:
      'Performance audit. Bundle size, image weight, render-blocking resources, and Core Web Vitals via PageSpeed.',
  },
  {
    slug: 'seo',
    tier: 'foundations',
    description:
      'SEO health audit across projects. Score them, identify gaps, optionally fix.',
  },
  {
    slug: 'privacy',
    tier: 'foundations',
    description:
      'Audit data collection, consent flows, exposed secrets, and privacy policy accuracy.',
  },
  {
    slug: 'design',
    tier: 'design',
    description:
      'Design psychology audit. Asks "does the system serve the user?" not "does the page match the system?" Evaluates typography, color register, brand-voice match.',
  },
  {
    slug: 'thatsweird',
    tier: 'design',
    description:
      'Browser and OS edge-case sweep. Chrome auto-dark inversion on dark sites, iOS rubber-band flash, iOS input zoom, prefers-reduced-motion violations.',
  },
  {
    slug: 'onboard',
    tier: 'workflow',
    description:
      "Digest a repository's architecture, docs, conventions, and current state before starting work.",
  },
  {
    slug: 'ship',
    tier: 'workflow',
    description:
      'Pre-deploy safety checklist. Catches build failures, leaked secrets, debug artifacts, missing env vars.',
  },
  {
    slug: 'session',
    tier: 'workflow',
    description:
      'End-of-session log generator. What changed, decisions made, next steps.',
  },
]
