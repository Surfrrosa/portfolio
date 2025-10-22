'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Typewriter from './Typewriter'
import { PHASES } from '@/lib/phases'

interface NpcDialogProps {
  open: boolean
  onClose: () => void
}

type DialogNode = {
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
const DIALOGUE_TREE: Record<string, DialogNode> = {
  start: {
    id: 'start',
    text: "* You feel a strange pull toward the smiling face...\n\nOh! Hey! You actually clicked me. Most people just stare and wonder if I'm a feature or a bug.\n\n(I'm a feature.)",
    choices: [
      { text: "...", next: 'startContinue', type: 'neutral' },
    ],
  },
  startContinue: {
    id: 'startContinue',
    text: "So... you got a project that's been sitting in your mental backlog for, what, three months? Six? A year?\n\nDon't worry. I'm not judging. I'm here to help.",
    choices: [
      { text: "...How did you know?", next: 'explain', type: 'positive' },
      { text: "Who ARE you?", next: 'who', type: 'neutral' },
      { text: "I was just clicking around.", next: 'skeptic', type: 'negative' },
    ],
  },
  who: {
    id: 'who',
    text: "* The smiling face seems pleased you asked.\n\nI'm your friendly neighborhood framework guide. Like those NPCs in old RPGs, except my dialogue actually matters.\n\nNo fetch quests. No 'collect 10 rat tails.' Just a solid system for finishing what you start.\n\nWhich, let's be real, is the hardest quest of all.",
    choices: [
      { text: "Okay, I'm intrigued.", next: 'explain', type: 'positive' },
      { text: "Tell me about this system.", next: 'explain', type: 'neutral' },
      { text: "This is weird.", next: 'persistent', type: 'negative' },
    ],
  },
  skeptic: {
    id: 'skeptic',
    text: "* The face knows.\n\n'Just clicking around,' huh? Sure. And that side project you started isn't haunting you at 2 AM.\n\nLook, I've seen your type before. Curious. Skeptical. Probably has 47 browser tabs open right now.\n\nYou're exactly who needs this framework.",
    choices: [
      { text: "...Okay fine, you got me.", next: 'explain', type: 'positive' },
      { text: "I'm listening.", next: 'explain', type: 'neutral' },
      { text: "This is getting creepy.", next: 'persistent', type: 'negative' },
    ],
  },
  persistent: {
    id: 'persistent',
    text: "* The smiley shrugs.\n\nFair enough. Not everyone's ready to face their unfinished projects.\n\nI'll be here, shimmering mysteriously in the sidebar, if you change your mind.\n\nNo pressure. The framework isn't going anywhere.\n\n(Unlike that deadline you're thinking about.)",
    choices: [
      { text: "Alright, FINE. Tell me.", next: 'explain', type: 'positive' },
      { text: "What's this framework thing?", next: 'explain', type: 'neutral' },
    ],
  },
  explain: {
    id: 'explain',
    text: "* You feel determined.\n\nOkay, here's the deal:\n\nFive phases. Signal. Architect. Sync. Deploy. Transform.\n\nThink of it like a quest chain, but instead of 'save the princess,' it's 'actually finish your project.'\n\nNo grinding. No RNG. Just you, a system, and forward momentum.\n\nReady?",
    choices: [
      { text: "Let's do this.", next: 'signal', type: 'positive' },
      { text: "Start from the beginning.", next: 'signal', type: 'neutral' },
      { text: "Can I skip the tutorial?", next: 'notComplicated', type: 'negative' },
    ],
  },
  notComplicated: {
    id: 'notComplicated',
    text: "* A button masher, huh?\n\nAlright speedrunner, here's the TL;DR:\n\nFigure out what you want. Plan the structure. Align your tools. Ship something tiny. Learn and evolve.\n\nThat's it. That's the whole thing.\n\nSimple doesn't mean easy, but it DOES mean you can actually remember it at 3 AM when motivation strikes.",
    choices: [
      { text: "Okay, let's hear the full version.", next: 'signal', type: 'positive' },
      { text: "Alright, I'm in.", next: 'signal', type: 'neutral' },
    ],
  },
  signal: {
    id: 'signal',
    text: `SIGNAL. ${PHASES[0].objective} ${PHASES[0].action} ${PHASES[0].reward}\n\nThis is where it starts. Not with perfection. With honesty.`,
    choices: [
      { text: "I can do that.", next: 'architect', type: 'positive' },
      { text: "What's next?", next: 'architect', type: 'neutral' },
      { text: "Can we skip ahead?", next: 'deploy', type: 'negative' },
    ],
  },
  architect: {
    id: 'architect',
    text: `ARCHITECT. ${PHASES[1].objective} ${PHASES[1].action} ${PHASES[1].reward}\n\nStructure before chaos. Systems before burnout.`,
    choices: [
      { text: "This makes sense.", next: 'sync', type: 'positive' },
      { text: "Keep going.", next: 'sync', type: 'neutral' },
      { text: "When do we ship?", next: 'deploy', type: 'negative' },
    ],
  },
  sync: {
    id: 'sync',
    text: `SYNC. ${PHASES[2].objective} ${PHASES[2].action} ${PHASES[2].reward}\n\nAlignment isn't perfectionism. It's removing the friction between you and the work.`,
    choices: [
      { text: "I love this.", next: 'deploy', type: 'positive' },
      { text: "Continue.", next: 'deploy', type: 'neutral' },
      { text: "Let's ship already.", next: 'deploy', type: 'negative' },
    ],
  },
  deploy: {
    id: 'deploy',
    text: `DEPLOY. ${PHASES[3].objective} ${PHASES[3].action} ${PHASES[3].reward}\n\nThis is the scary part. Also the only part that matters.\n\nShip something imperfect. Learn what's real.`,
    choices: [
      { text: "And then?", next: 'transform', type: 'positive' },
      { text: "What's the final phase?", next: 'transform', type: 'neutral' },
      { text: "That's it?", next: 'transform', type: 'negative' },
    ],
  },
  transform: {
    id: 'transform',
    text: `TRANSFORM. ${PHASES[4].objective} ${PHASES[4].action} ${PHASES[4].reward}\n\nThe loop closes. You're not the same person who started.\n\nThat's the point.`,
    choices: [
      { text: "I want to do this.", next: 'end', type: 'positive' },
      { text: "Tell me more.", next: 'end', type: 'neutral' },
      { text: "Wait, that's IT?", next: 'endSkeptic', type: 'negative' },
    ],
  },
  end: {
    id: 'end',
    text: "* You reached the end of the dialogue tree.\n\nSo... what now?\n\nYou can check out the full framework breakdown. Or we can book a session and actually DO this thing.\n\nOr you can close this and pretend we never had this conversation.\n\n(But we both know that project is still waiting.)",
    choices: [
      { text: "Show me everything.", next: 'showMethod', type: 'positive' },
      { text: "Let's book a session.", next: 'bookSession', type: 'positive' },
      { text: "I need to think about it.", next: 'goodbye', type: 'neutral' },
    ],
  },
  endSkeptic: {
    id: 'endSkeptic',
    text: "* The smiley shrugs again.\n\n'That's IT?' Yeah. That's it.\n\nNo secret level. No hidden achievement. Just five phases that work.\n\nSometimes the best systems are the ones you can remember at 3 AM when inspiration hits.\n\nSimple doesn't mean easy. But it DOES mean you'll actually use it.",
    choices: [
      { text: "Okay, show me the full thing.", next: 'showMethod', type: 'positive' },
      { text: "Alright, I'll check it out.", next: 'showMethod', type: 'neutral' },
    ],
  },
  showMethod: {
    id: 'showMethod',
    text: "* The smiley guide nods approvingly.\n\nNice! Opening the full framework page now.\n\nEach phase is broken down with details, examples, and the stuff that actually matters.\n\nGood luck out there. Come back and tell me how it goes.",
    action: 'goToMethod',
    choices: [],
  },
  bookSession: {
    id: 'bookSession',
    text: "* Determination fills your soul!\n\nHell yeah! That's what I like to see.\n\nHeading to the booking page. Let's turn that backlog into progress.\n\nSee you on the other side.",
    action: 'goToContact',
    choices: [],
  },
  goodbye: {
    id: 'goodbye',
    text: "* The smiley face waves.\n\nNo pressure. Sometimes the best decision is marinating on things.\n\nI'll be here, shimmering in the sidebar, whenever you're ready.\n\nThe framework isn't going anywhere. Unlike that deadline.\n\n(Sorry, couldn't resist.)",
    action: 'close',
    choices: [],
  },
  checkMethod: {
    id: 'checkMethod',
    text: "* You chose wisely.\n\nSmart move. Check out the method page, see if it vibes with you.\n\nIf it does, you know where to find me.\n\n(Hint: I'm the shimmering smiley. Hard to miss.)",
    action: 'goToMethod',
    choices: [],
  },
}

export default function NpcDialog({ open, onClose }: NpcDialogProps) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDivElement>(null)
  const [currentNode, setCurrentNode] = useState<string>('start')
  const [textComplete, setTextComplete] = useState(false)
  const [canSkip, setCanSkip] = useState(false)
  const [skipToEnd, setSkipToEnd] = useState(false)

  const node = DIALOGUE_TREE[currentNode]

  // Focus trap
  useEffect(() => {
    if (open && dialogRef.current) {
      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      const handleTab = (e: KeyboardEvent) => {
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault()
              lastElement?.focus()
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault()
              firstElement?.focus()
            }
          }
        }
      }

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }

      document.addEventListener('keydown', handleTab)
      document.addEventListener('keydown', handleEscape)
      firstElement?.focus()

      return () => {
        document.removeEventListener('keydown', handleTab)
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [open, onClose, currentNode])

  // Reset when dialog opens
  useEffect(() => {
    if (open) {
      setCurrentNode('start')
      setTextComplete(false)
      setCanSkip(false)
      setSkipToEnd(false)
    }
  }, [open])

  // Handle node changes
  useEffect(() => {
    setTextComplete(false)
    setCanSkip(false)
    setSkipToEnd(false)

    // Allow skipping after a short delay
    const timer = setTimeout(() => setCanSkip(true), 200)
    return () => clearTimeout(timer)
  }, [currentNode])

  // Handle actions when text completes
  useEffect(() => {
    if (textComplete && node.action) {
      const timer = setTimeout(() => {
        if (node.action === 'close') {
          onClose()
        } else if (node.action === 'goToMethod') {
          router.push('/method')
          onClose()
        } else if (node.action === 'goToContact') {
          router.push('/contact')
          onClose()
        }
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [textComplete, node.action, onClose, router])

  const handleChoice = (nextNode: string) => {
    setCurrentNode(nextNode)
  }

  const handleClick = () => {
    if (!textComplete && canSkip) {
      setSkipToEnd(true)
    }
  }

  const handleTextComplete = () => {
    setTextComplete(true)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[60] flex items-end justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="npc-dialog-title"
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-[800px] mb-8 mx-4 bg-zinc-950 border-[4px] border-white/90 rounded-sm shadow-2xl"
        onClick={handleClick}
      >
        <h2 id="npc-dialog-title" className="sr-only">
          Framework Quest Dialog
        </h2>

        {/* Inner border for classic layered look */}
        <div className="absolute inset-[8px] border-2 border-white/30 rounded-sm pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 p-8 space-y-6">
          {/* Dialogue text */}
          <div className="min-h-[80px] text-white text-base leading-relaxed font-mono tracking-wide">
            <Typewriter
              text={node.text}
              speed={40}
              onComplete={handleTextComplete}
              skipToEnd={skipToEnd}
            />

            {/* Continue arrow (only show when text complete and there are choices) */}
            {textComplete && node.choices && node.choices.length > 0 && (
              <div className="inline-block ml-2 animate-bounce">
                <span className="text-teal-400">▼</span>
              </div>
            )}
          </div>

          {/* Choice buttons */}
          {textComplete && node.choices && node.choices.length > 0 && (
            <div className="space-y-2 animate-fade-in">
              {node.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice.next)}
                  className="w-full text-left px-4 py-3 text-sm border-2 border-white/50 rounded-sm hover:border-white hover:bg-white/5 transition-all duration-200 font-mono text-white"
                >
                  <span className="mr-2">►</span>
                  {choice.text}
                </button>
              ))}
            </div>
          )}

          {/* Footer buttons */}
          {textComplete && (!node.choices || node.choices.length === 0) && !node.action && (
            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm border-2 border-white/40 rounded-sm hover:border-white/70 hover:bg-white/5 transition-colors text-gray-300 font-mono"
              >
                Close
              </button>
            </div>
          )}

          {/* Always show close button in corner */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 border-white/40 rounded-sm hover:border-red-400 hover:bg-red-400/10 transition-colors text-gray-300 hover:text-red-400 font-mono text-xl leading-none"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
