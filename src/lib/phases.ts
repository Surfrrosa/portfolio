export const PHASES = [
  {
    key: 'signal',
    title: 'Signal',
    emoji: '📡',
    objective: `Find what's real beneath the noise.`,
    action: `Write the one sentence you've been avoiding.`,
    reward: `Clarity (+15 courage).`,
  },
  {
    key: 'architect',
    title: 'Architect',
    emoji: '🗺️',
    objective: `Design the structure that can hold the goal.`,
    action: `Define 3 loops: daily, weekly, monthly—plus one constraint.`,
    reward: `Stability (+10 focus).`,
  },
  {
    key: 'sync',
    title: 'Sync',
    emoji: '🔄',
    objective: `Bring self, tools, and timing into phase.`,
    action: `Remove one friction; add one tiny delight.`,
    reward: `Momentum (+12 consistency).`,
  },
  {
    key: 'deploy',
    title: 'Deploy',
    emoji: '🚀',
    objective: `Act; ship a thin slice.`,
    action: `Publish a v0.5: one screen, one post, or one email.`,
    reward: `Reality check (+20 feedback).`,
  },
  {
    key: 'transform',
    title: 'Transform',
    emoji: '♻️',
    objective: `Integrate learning; update the system and the self.`,
    action: `Keep what worked; remove one step; add one safeguard.`,
    reward: `Evolution (+1 level).`,
  },
] as const;

export type PhaseKey = typeof PHASES[number]['key'];
