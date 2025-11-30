export const PHASES = [
  {
    key: 'nameit',
    title: 'Name It',
    emoji: '📝',
    objective: `Figure out what you're actually building.`,
    action: `Write the one sentence you've been avoiding.`,
    reward: `Clarity (+15 courage).`,
  },
  {
    key: 'setup',
    title: 'Set It Up',
    emoji: '🔧',
    objective: `Build the routine and remove the obstacles.`,
    action: `Pick 3 time blocks per week. Remove one thing that stops you from starting.`,
    reward: `Momentum (+12 focus).`,
  },
  {
    key: 'shipit',
    title: 'Ship It',
    emoji: '🚀',
    objective: `Put something imperfect into the world.`,
    action: `Publish v0.1: one screen, one post, or one email.`,
    reward: `Reality check (+20 feedback).`,
  },
  {
    key: 'adjust',
    title: 'Learn & Adjust',
    emoji: '🔄',
    objective: `Update the system based on reality, not theory.`,
    action: `Keep what worked; remove one step; add one safeguard.`,
    reward: `Evolution (+1 level).`,
  },
] as const;

export type PhaseKey = typeof PHASES[number]['key'];
