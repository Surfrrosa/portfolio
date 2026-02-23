'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Typewriter from './Typewriter'
import { DIALOGUE_TREE } from './DialogueData'

interface NpcDialogProps {
  open: boolean
  onClose: () => void
}

function DialogChoices({
  choices,
  onChoice,
}: {
  choices: { text: string; next: string }[]
  onChoice: (next: string) => void
}) {
  return (
    <div className="space-y-2 animate-fade-in">
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => onChoice(choice.next)}
          className="w-full text-left px-4 py-3 text-sm border-2 border-white/50 rounded-sm hover:border-white hover:bg-white/5 transition-all duration-200 font-mono text-white"
        >
          <span className="mr-2">►</span>
          {choice.text}
        </button>
      ))}
    </div>
  )
}

export default function NpcDialog({ open, onClose }: NpcDialogProps) {
  const router = useRouter()
  const dialogRef = useRef<HTMLDivElement>(null)
  const menuClickAudioRef = useRef<HTMLAudioElement | null>(null)
  const [currentNode, setCurrentNode] = useState<string>('start')
  const [textComplete, setTextComplete] = useState(false)
  const [canSkip, setCanSkip] = useState(false)
  const [skipToEnd, setSkipToEnd] = useState(false)

  const node = DIALOGUE_TREE[currentNode]

  // Initialize menu click audio
  useEffect(() => {
    menuClickAudioRef.current = new Audio('/sounds/menu_click.wav')
    menuClickAudioRef.current.volume = 0.4
  }, [])

  // Focus trap
  useEffect(() => {
    if (!open || !dialogRef.current) return

    const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement?.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstElement?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose, currentNode])

  // Reset when dialog opens
  useEffect(() => {
    if (!open) return
    setCurrentNode('start')
    setTextComplete(false)
    setCanSkip(false)
    setSkipToEnd(false)
  }, [open])

  // Handle node changes
  useEffect(() => {
    setTextComplete(false)
    setCanSkip(false)
    setSkipToEnd(false)

    const timer = setTimeout(() => setCanSkip(true), 200)
    return () => clearTimeout(timer)
  }, [currentNode])

  // Handle actions when text completes
  useEffect(() => {
    if (!textComplete || !node.action) return

    const actions: Record<string, () => void> = {
      close: onClose,
      goToMethod: () => { router.push('/method'); onClose() },
      goToContact: () => { router.push('/contact'); onClose() },
    }

    const timer = setTimeout(() => actions[node.action!]?.(), 1000)
    return () => clearTimeout(timer)
  }, [textComplete, node.action, onClose, router])

  const handleChoice = (nextNode: string) => {
    if (menuClickAudioRef.current) {
      const audio = menuClickAudioRef.current.cloneNode() as HTMLAudioElement
      audio.volume = 0.4
      audio.play().catch(() => {})
    }
    setCurrentNode(nextNode)
  }

  const handleClick = () => {
    if (!textComplete && canSkip) setSkipToEnd(true)
  }

  if (!open) return null

  const hasChoices = textComplete && node.choices && node.choices.length > 0
  const showFooter = textComplete && (!node.choices || node.choices.length === 0) && !node.action

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[60] flex items-end justify-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
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
          {/* ASCII Smiley Portrait */}
          <div className="flex justify-center mb-4">
            <img
              src="/images/ascii-smiley.png"
              alt="ASCII smiley character portrait"
              className="w-16 h-16 pixelated"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          {/* Dialogue text */}
          <div className="min-h-[80px] text-white text-base leading-relaxed font-mono tracking-wide">
            <Typewriter
              text={node.text}
              speed={40}
              onComplete={() => setTextComplete(true)}
              skipToEnd={skipToEnd}
            />

            {hasChoices && (
              <div className="inline-block ml-2 animate-bounce">
                <span className="text-teal-400">▼</span>
              </div>
            )}
          </div>

          {hasChoices && (
            <DialogChoices choices={node.choices!} onChoice={handleChoice} />
          )}

          {showFooter && (
            <div className="flex justify-end gap-2 pt-4 border-t border-white/10">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm border-2 border-white/40 rounded-sm hover:border-white/70 hover:bg-white/5 transition-colors text-gray-300 font-mono"
              >
                Close
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute -top-1 right-3 w-6 h-6 flex items-center justify-center border-2 border-white/40 rounded-sm hover:border-red-400 hover:bg-red-400/10 transition-colors text-gray-300 hover:text-red-400 font-mono text-lg leading-none"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
