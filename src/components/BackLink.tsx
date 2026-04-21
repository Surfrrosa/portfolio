import Link from 'next/link'

type BackLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function BackLink({ href, children, className }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 transition-colors ${className ?? ''}`}
    >
      <svg
        className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {children}
    </Link>
  )
}
