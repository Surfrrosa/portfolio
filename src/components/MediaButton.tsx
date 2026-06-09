type MediaButtonProps = {
  onClick: () => void
  aspectVideo?: boolean
  label?: string
  children: React.ReactNode
}

export function MediaButton({ onClick, aspectVideo = false, label, children }: MediaButtonProps) {
  const aspectClass = aspectVideo ? 'aspect-video' : ''
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`relative ${aspectClass} block w-full text-left rounded-lg overflow-hidden border border-white/10 cursor-pointer hover:border-white/20 transition-colors bg-transparent p-0`}
    >
      {children}
    </button>
  )
}
