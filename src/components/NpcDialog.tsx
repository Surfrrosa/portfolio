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

// Witty RPG-style dialogue tree
const DIALOGUE_TREE: Record<string, DialogNode> = {
  start: {
    id: 'start',
    text: "Hey there, traveler. You look like someone who's got a project stuck in their inventory.",
    choices: [
      { text: "Yeah, I need help.", next: 'explain', type: 'positive' },
      { text: "Maybe. Who are you?", next: 'who', type: 'neutral' },
      { text: "I'm fine, thanks.", next: 'skeptic', type: 'negative' },
    ],
  },
  who: {
    id: 'who',
    text: "Fair question. I'm what you'd call a framework guide. Think of me as an NPC who actually has useful dialogue.",
    choices: [
      { text: "Alright, I'm listening.", next: 'explain', type: 'positive' },
      { text: "What's this framework?", next: 'explain', type: 'neutral' },
      { text: "Still not interested.", next: 'persistent', type: 'negative' },
    ],
  },
  skeptic: {
    id: 'skeptic',
    text: "Sure, sure. Everyone says they're fine until their project sits at 60% complete for three months straight.",
    choices: [
      { text: "Okay, you got me there.", next: 'explain', type: 'positive' },
      { text: "...I'm listening.", next: 'explain', type: 'neutral' },
      { text: "Still nope.", next: 'persistent', type: 'negative' },
    ],
  },
  persistent: {
    id: 'persistent',
    text: "Playing hard to get, huh? I respect that. But hey, the framework's not going anywhere. When you're ready...",
    choices: [
      { text: "Fine, tell me about it.", next: 'explain', type: 'positive' },
      { text: "I'll check it out.", next: 'checkMethod', type: 'neutral' },
    ],
  },
  explain: {
    id: 'explain',
    text: "Here's the deal: Five phases. Signal, Architect, Sync, Deploy, Transform. It's like a quest chain, but for actually finishing things.",
    choices: [
      { text: "Tell me more.", next: 'signal', type: 'positive' },
      { text: "What's the first phase?", next: 'signal', type: 'neutral' },
      { text: "Sounds complicated.", next: 'notComplicated', type: 'negative' },
    ],
  },
  notComplicated: {
    id: 'notComplicated',
    text: "Complicated? Nah. It's basically: figure out what you want, plan it, align your stuff, ship something small, then level up. That's it.",
    choices: [
      { text: "Okay, start from the top.", next: 'signal', type: 'positive' },
      { text: "I'm in. Let's go.", next: 'signal', type: 'neutral' },
    ],
  },
  signal: {
    id: 'signal',
    text: `Phase 1: SIGNAL. ${PHASES[0].objective} ${PHASES[0].action} ${PHASES[0].reward}`,
    choices: [
      { text: "I can do that. What's next?", next: 'architect', type: 'positive' },
      { text: "Continue.", next: 'architect', type: 'neutral' },
      { text: "Skip to the good part.", next: 'deploy', type: 'negative' },
    ],
  },
  architect: {
    id: 'architect',
    text: `Phase 2: ARCHITECT. ${PHASES[1].objective} ${PHASES[1].action} ${PHASES[1].reward}`,
    choices: [
      { text: "Got it. Keep going.", next: 'sync', type: 'positive' },
      { text: "Next phase.", next: 'sync', type: 'neutral' },
      { text: "When do we ship?", next: 'deploy', type: 'negative' },
    ],
  },
  sync: {
    id: 'sync',
    text: `Phase 3: SYNC. ${PHASES[2].objective} ${PHASES[2].action} ${PHASES[2].reward}`,
    choices: [
      { text: "This is great!", next: 'deploy', type: 'positive' },
      { text: "Continue.", next: 'deploy', type: 'neutral' },
      { text: "Just tell me about Deploy.", next: 'deploy', type: 'negative' },
    ],
  },
  deploy: {
    id: 'deploy',
    text: `Phase 4: DEPLOY. ${PHASES[3].objective} ${PHASES[3].action} ${PHASES[3].reward}`,
    choices: [
      { text: "Love it. What's last?", next: 'transform', type: 'positive' },
      { text: "One more to go.", next: 'transform', type: 'neutral' },
      { text: "Is that it?", next: 'transform', type: 'negative' },
    ],
  },
  transform: {
    id: 'transform',
    text: `Phase 5: TRANSFORM. ${PHASES[4].objective} ${PHASES[4].action} ${PHASES[4].reward}`,
    choices: [
      { text: "This is perfect!", next: 'end', type: 'positive' },
      { text: "Interesting system.", next: 'end', type: 'neutral' },
      { text: "That's all?", next: 'endSkeptic', type: 'negative' },
    ],
  },
  end: {
    id: 'end',
    text: "Nice! So, want to see the full system in action, or ready to book a session and actually use this thing?",
    choices: [
      { text: "Show me the full system.", next: 'showMethod', type: 'positive' },
      { text: "I'll book a session.", next: 'bookSession', type: 'positive' },
      { text: "Let me think about it.", next: 'goodbye', type: 'neutral' },
    ],
  },
  endSkeptic: {
    id: 'endSkeptic',
    text: "Hey, simple doesn't mean easy. But yeah, that's the framework. Sometimes the best systems are the ones you can actually remember.",
    choices: [
      { text: "Fair point. Show me more.", next: 'showMethod', type: 'positive' },
      { text: "I'll check it out.", next: 'showMethod', type: 'neutral' },
    ],
  },
  showMethod: {
    id: 'showMethod',
    text: "Alright! Sending you to the full framework page. You'll see each phase broken down with all the details.",
    action: 'goToMethod',
    choices: [],
  },
  bookSession: {
    id: 'bookSession',
    text: "Now we're talking! Heading to the booking page. Let's make this happen.",
    action: 'goToContact',
    choices: [],
  },
  goodbye: {
    id: 'goodbye',
    text: "No worries. I'll be here when you're ready. The smiley never sleeps.",
    action: 'close',
    choices: [],
  },
  checkMethod: {
    id: 'checkMethod',
    text: "Smart. Check out the method page and come back when you're ready to dive in.",
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
