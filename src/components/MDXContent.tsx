import React from 'react'

interface MDXContentProps {
  children: React.ReactNode
}

export default function MDXContent({ children }: MDXContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none
      prose-headings:font-bold prose-headings:text-white
      prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12
      prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-teal-400
      prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
      prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-6
      prose-a:text-teal-400 prose-a:no-underline hover:prose-a:underline prose-a:transition-all
      prose-strong:text-white prose-strong:font-semibold
      prose-code:text-teal-400 prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-6
      prose-ul:text-zinc-300 prose-ul:mb-6
      prose-ol:text-zinc-300 prose-ol:mb-6
      prose-li:mb-2 prose-li:leading-relaxed
      prose-blockquote:border-l-4 prose-blockquote:border-teal-400 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-zinc-400
      prose-img:rounded-xl prose-img:border prose-img:border-white/10
    ">
      {children}
    </div>
  )
}
