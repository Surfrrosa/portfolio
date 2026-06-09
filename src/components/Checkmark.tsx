type CheckmarkProps = {
  children: React.ReactNode
  marker?: string
}

export function Checkmark({ children, marker = '✓' }: CheckmarkProps) {
  return (
    <p className="flex items-start">
      <span className="text-accent-teal mr-2">{marker}</span>
      <span>{children}</span>
    </p>
  )
}
