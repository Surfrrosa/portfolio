import Sidebar from '@/components/Sidebar'
import BackLink from '@/components/BackLink'

export default function NotFound() {
  return (
    <div className="min-h-screen grid lg:grid-cols-[340px_1fr]">
      <Sidebar />
      <main id="main-content" className="flex items-center justify-center px-4 lg:px-12">
        <div className="text-center">
          <h1 className="text-6xl lg:text-8xl font-display font-bold text-accent-teal mb-4">
            404
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            This page doesn&apos;t exist.
          </p>
          <BackLink href="/">Back to home</BackLink>
        </div>
      </main>
    </div>
  )
}
