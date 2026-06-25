import Sidebar from '@/components/Sidebar'
import PageHero from '@/components/PageHero'
import { SkillCard } from '@/components/SkillCard'
import { SKILLS, SKILLS_REPO, TIER_LABELS, TIERS } from '@/lib/skills'
import { buildRouteMetadata } from '@/lib/metadata'

export const metadata = buildRouteMetadata({
  title: 'Skills',
  slug: '/skills',
  description:
    'A free audit toolkit for Claude Code. The slash commands I run on my own work, calibrated for my workflow.',
})

export default function SkillsPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      <main id="main-content" className="px-4 lg:px-12 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <PageHero
            title="skills"
            subtitle="The slash commands I run on my own work. Free to install, free to share, take what helps."
          />

          <p className="text-zinc-500 text-sm mb-16 max-w-2xl">
            Each install command creates <code className="font-mono text-zinc-400">~/.claude/skills/&lt;name&gt;/</code> and downloads <code className="font-mono text-zinc-400">SKILL.md</code>. The{' '}
            <a
              href={SKILLS_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-accent-teal transition-colors underline underline-offset-2"
            >
              full source
            </a>{' '}
            is on GitHub if you want to read before installing.
          </p>

          {TIERS.map((tier) => {
            const tierSkills = SKILLS.filter((s) => s.tier === tier)
            return (
              <section key={tier} className="mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 lowercase">
                  {TIER_LABELS[tier]}
                </h2>
                <div className="space-y-4">
                  {tierSkills.map((skill) => (
                    <SkillCard key={skill.slug} skill={skill} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
    </div>
  )
}
