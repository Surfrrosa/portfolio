# Session: 2026-02-20 -- Blog Post Writing and Publishing

## What happened
- Wrote and published "All the Notes, None of the Music" (content/blog/all-the-notes-none-of-the-music.mdx)
  - Topic: why AI produces bad code (directing/orchestration problem, not an AI problem)
  - Inspired by viral tweet about vibe-coded app with 30 useState calls
  - Includes real CLAUDE.md artifact from Absurdity Index project
  - Multiple revision rounds refining voice, adding sections, correcting grammar
  - Sections: fruity loops, known unknowns, if you build it, bare necessities, the end is the beginning, dirty secret, lunch & learn
  - Published (draft: false)
- Wrote "The Same Mistake, Faster" (content/blog/what-a-stock-drop-does-to-a-product-roadmap.mdx)
  - Topic: AI scare trade will produce failed corporate AI initiatives (same product mistakes, compressed by panic)
  - Grounded in real experience with a year-long dashboard project that got killed
  - Still in draft (draft: true)
- Investigated SEO setup for blog posts
  - Foundation is solid: generateMetadata, sitemap, robots.txt, structured data, Article schema all wired up
  - Gap: no per-article OG images for social sharing previews

## Decisions made
- Two separate blog posts at different scales: organizational (stock drop) vs individual/craft (useState)
- Used Absurdity Index CLAUDE.md as the artifact example over Synestrology (too domain-specific)
- Kept "SOC" abbreviation despite potential confusion (enough context in the sentence)
- "the end is the beginning" and "lunch & learn" as final section headers (replacing earlier names)

## Known issues
- Opening of "All the Notes" references "a developer shipped" but original source was someone celebrating vibe coding working, not a dev letting bad code slide. Needs minor reframing of intro (swap "shipped" for "shared," adjust the closing question of the intro). Identified but not yet fixed.
- No per-article OG images for social sharing. All posts use the same default image.
- "The Same Mistake, Faster" still in draft status, needs review before publishing
- Existing issues from prior session still open: GA ID hardcoded, `any` type in contact form, accessibility gaps

## Next session
- Fix the intro framing on "All the Notes" to match original source context
- Add per-article OG image support for blog posts
- Cross-post "All the Notes" to Substack
- Review and potentially publish "The Same Mistake, Faster"
- Address remaining tech debt (GA env var, contact form types, accessibility)
