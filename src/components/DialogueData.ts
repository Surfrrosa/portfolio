import { PHASES } from '@/lib/phases'

export type DialogNode = {
  id: string
  text: string
  choices?: {
    text: string
    next: string
    type?: 'positive' | 'neutral' | 'negative'
  }[]
  action?: 'close' | 'goToMethod' | 'goToContact'
}

// Undertale-esque dialogue tree with maximum charm
export const DIALOGUE_TREE: Record<string, DialogNode> = {
  start: {
    id: 'start',
    text: "* You feel a strange pull toward the smiling face...\n\nOh! Hey! You actually clicked me. Most people just stare and wonder if I'm a feature or a bug.\n\n(I'm a feature.)",
    choices: [
      { text: "...", next: 'startContinue', type: 'neutral' },
    ],
  },
  startContinue: {
    id: 'startContinue',
    text: "So... you're building with AI and wondering why everything keeps drifting between sessions. Or maybe you shipped something fast and now you're scared to touch it.\n\nDon't worry. I've seen this before. A lot.",
    choices: [
      { text: "...How did you know?", next: 'explain', type: 'positive' },
      { text: "Who ARE you?", next: 'who', type: 'neutral' },
      { text: "I was just clicking around.", next: 'skeptic', type: 'negative' },
    ],
  },
  who: {
    id: 'who',
    text: "* The smiling face seems pleased you asked.\n\nI'm your friendly neighborhood methodology guide. Like those NPCs in old RPGs, except my dialogue actually matters.\n\nNo fetch quests. No 'collect 10 rat tails.' Just a system for building with AI that doesn't fall apart between sessions.\n\nWhich, let's be real, is the hardest quest of all.",
    choices: [
      { text: "Okay, I'm intrigued.", next: 'explain', type: 'positive' },
      { text: "Tell me about this system.", next: 'explain', type: 'neutral' },
      { text: "This is weird.", next: 'persistent', type: 'negative' },
    ],
  },
  skeptic: {
    id: 'skeptic',
    text: "* The face knows.\n\n'Just clicking around,' huh? Sure. And that last AI session didn't just silently rewrite half your codebase.\n\nLook, I've seen your type before. Curious. Skeptical. Probably has a repo with no CLAUDE.md and vibes for documentation.\n\nYou're exactly who needs this methodology.",
    choices: [
      { text: "...Okay fine, you got me.", next: 'explain', type: 'positive' },
      { text: "I'm listening.", next: 'explain', type: 'neutral' },
      { text: "This is getting creepy.", next: 'persistent', type: 'negative' },
    ],
  },
  persistent: {
    id: 'persistent',
    text: "* The smiley shrugs.\n\nFair enough. Not everyone's ready to face their undocumented repos.\n\nI'll be here, shimmering mysteriously in the sidebar, if you change your mind.\n\nNo pressure. The methodology isn't going anywhere.\n\n(Unlike your context window.)",
    choices: [
      { text: "Alright, FINE. Tell me.", next: 'explain', type: 'positive' },
      { text: "What's this methodology thing?", next: 'explain', type: 'neutral' },
    ],
  },
  explain: {
    id: 'explain',
    text: "* You feel determined.\n\nOkay, here's the deal:\n\nFour phases. Define the System. Build with Context. Harden. Ship & Maintain.\n\nThink of it like a quest chain, but instead of 'save the princess,' it's 'stop your AI from rewriting your architecture every session.'\n\nNo grinding. No RNG. Just you, a system, and code that ain't trying to brawl.\n\nReady?",
    choices: [
      { text: "Let's do this.", next: 'define', type: 'positive' },
      { text: "Start from the beginning.", next: 'define', type: 'neutral' },
      { text: "Can I skip the tutorial?", next: 'notComplicated', type: 'negative' },
    ],
  },
  notComplicated: {
    id: 'notComplicated',
    text: "* A button masher, huh?\n\nAlright speedrunner, here's the TL;DR:\n\nWrite the rules. Keep the context. Harden everything. Ship and maintain.\n\nThat's it. Four phases. The difference between AI-assisted code that holds up and code that falls apart the second someone else touches it, including future you.",
    choices: [
      { text: "Okay, let's hear the full version.", next: 'define', type: 'positive' },
      { text: "Alright, I'm in.", next: 'define', type: 'neutral' },
    ],
  },
  define: {
    id: 'define',
    text: `DEFINE THE SYSTEM. ${PHASES[0].objective} ${PHASES[0].action} ${PHASES[0].reward}\n\nNo document, no direction. This is where it all starts.`,
    choices: [
      { text: "I can do that.", next: 'build', type: 'positive' },
      { text: "What's next?", next: 'build', type: 'neutral' },
      { text: "Can we skip ahead?", next: 'harden', type: 'negative' },
    ],
  },
  build: {
    id: 'build',
    text: `BUILD WITH CONTEXT. ${PHASES[1].objective} ${PHASES[1].action} ${PHASES[1].reward}\n\nContext is the difference between coherent code and a bowl of spaghetti o's.`,
    choices: [
      { text: "This makes sense.", next: 'harden', type: 'positive' },
      { text: "Keep going.", next: 'harden', type: 'neutral' },
      { text: "When do we ship?", next: 'harden', type: 'negative' },
    ],
  },
  harden: {
    id: 'harden',
    text: `HARDEN. ${PHASES[2].objective} ${PHASES[2].action} ${PHASES[2].reward}\n\nThis is the part most people skip, but you'll wish you didn't.`,
    choices: [
      { text: "And then?", next: 'shipmaintain', type: 'positive' },
      { text: "What's the final phase?", next: 'shipmaintain', type: 'neutral' },
      { text: "That's it?", next: 'shipmaintain', type: 'negative' },
    ],
  },
  shipmaintain: {
    id: 'shipmaintain',
    text: `SHIP & MAINTAIN. ${PHASES[3].objective} ${PHASES[3].action} ${PHASES[3].reward}\n\nThe work after shipping is where the good vibes separate from the bad vibes.`,
    choices: [
      { text: "I want to do this.", next: 'end', type: 'positive' },
      { text: "Tell me more.", next: 'end', type: 'neutral' },
      { text: "Wait, that's IT?", next: 'endSkeptic', type: 'negative' },
    ],
  },
  end: {
    id: 'end',
    text: "* You reached the end of the dialogue tree.\n\nSo... what now?\n\nYou can check out the full methodology breakdown. Or we can book a session and actually build this system for your project.\n\nOr you can close this and keep winging it.\n\n(But we both know how that's been going.)",
    choices: [
      { text: "Show me everything.", next: 'showMethod', type: 'positive' },
      { text: "Let's book a session.", next: 'bookSession', type: 'positive' },
      { text: "I need to think about it.", next: 'goodbye', type: 'neutral' },
    ],
  },
  endSkeptic: {
    id: 'endSkeptic',
    text: "* The smiley shrugs again.\n\n'That's IT?' Yeah. That's it.\n\nNo secret level. No hidden achievement. Just four phases that work.\n\nSometimes the best systems are the ones you can remember at 3 AM when the deploy breaks.\n\nSimple doesn't mean easy. But it DOES mean you'll actually use it.",
    choices: [
      { text: "Okay, show me the full thing.", next: 'showMethod', type: 'positive' },
      { text: "Alright, I'll check it out.", next: 'showMethod', type: 'neutral' },
    ],
  },
  showMethod: {
    id: 'showMethod',
    text: "* The smiley guide nods approvingly.\n\nNice! Opening the full methodology page now.\n\nEach phase is broken down with the details that actually matter.\n\nGood luck out there. Come back and tell me how it goes.",
    action: 'goToMethod',
    choices: [],
  },
  bookSession: {
    id: 'bookSession',
    text: "* Determination fills your soul!\n\nHell yeah! That's what I like to see.\n\nHeading to the booking page. Let's turn that chaos into a system.\n\nSee you on the other side.",
    action: 'goToContact',
    choices: [],
  },
  goodbye: {
    id: 'goodbye',
    text: "* The smiley face waves.\n\nNo pressure. Sometimes the best decision is marinating on things.\n\nI'll be here, shimmering in the sidebar, whenever you're ready.\n\nThe methodology isn't going anywhere. Unlike your context window.\n\n(Sorry, couldn't resist.)",
    action: 'close',
    choices: [],
  },
  checkMethod: {
    id: 'checkMethod',
    text: "* You chose wisely.\n\nSmart move. Check out the methodology page, see if it vibes with you.\n\nIf it does, you know where to find me.\n\n(Hint: I'm the shimmering smiley. Hard to miss.)",
    action: 'goToMethod',
    choices: [],
  },
}
