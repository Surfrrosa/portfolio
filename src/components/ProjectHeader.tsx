type ProjectHeaderProps = {
  title: string
  tagline: string
  subtitle?: string
}

export function ProjectHeader({ title, tagline, subtitle }: ProjectHeaderProps) {
  return (
    <>
      <h3 className="text-white text-2xl font-display font-bold mb-4">{title}</h3>
      <h4 className="text-accent-teal text-lg font-semibold mb-6">{tagline}</h4>
      {subtitle && (
        <div className="mb-6">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
            {subtitle}
          </p>
        </div>
      )}
    </>
  )
}
