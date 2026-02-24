export const PHASES = [
  {
    key: 'define',
    title: 'Define the System',
    objective: `Set the rules before the first line of code.`,
    action: `Write the CLAUDE.md. Design tokens, file structure, constraints, what's off limits. The AI reads this before every session.`,
    reward: `Clarity (+15 alignment).`,
  },
  {
    key: 'build',
    title: 'Build with Context',
    objective: `Every session picks up where the last one left off.`,
    action: `Session logs, onboarding workflows, architecture docs. Treat every session like a new teammate just walked in.`,
    reward: `Continuity (+12 coherence).`,
  },
  {
    key: 'harden',
    title: 'Harden',
    objective: `Nothing ships without security, testing, and dependency hygiene.`,
    action: `Audit dependencies. Pen test. CI/CD. Rate limiting. Treat AI output like a pull request from a junior dev.`,
    reward: `Resilience (+20 trust).`,
  },
  {
    key: 'shipmaintain',
    title: 'Ship & Maintain',
    objective: `Deploy it, monitor it, keep the system alive.`,
    action: `Push to production. Track what breaks. Update the docs. The loop never closes.`,
    reward: `Evolution (+1 level).`,
  },
] as const;

export type PhaseKey = typeof PHASES[number]['key'];
