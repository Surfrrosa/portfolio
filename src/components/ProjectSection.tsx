type WithChildren = { children: React.ReactNode }

export function ProjectSection({ label, children }: { label: string } & WithChildren) {
  return (
    <div>
      <h5 className="text-white font-semibold mb-2">{label}</h5>
      {children}
    </div>
  )
}

export function ProjectText({ children }: WithChildren) {
  return <p className="text-gray-300 leading-relaxed">{children}</p>
}

export function ProjectBullets({ children }: WithChildren) {
  return <div className="text-gray-300 space-y-3">{children}</div>
}
