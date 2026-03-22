# Session: 2026-03-22 -- Blog Expansion and Rebrand

## What happened
- Changed writing page heading from "stuff I'm writing about" to "navigating mind, machine, & modern unease"
- Updated writing page metadata: title matches heading, description is "Essays on staying human."
- Reviewed all 10 blog posts for voice, cohesion, and issues
- Fixed typo "curiousity" to "curiosity" in The Absurdity Index
- Fixed "Claude Terminal" to "Claude Code" in The Absurdity Index
- Renamed `what-a-stock-drop-does-to-a-product-roadmap.mdx` to `the-same-mistake-faster.mdx` to match its actual title
- Refined Agile Is a Pyramid Scheme post (trimmed specific dollar figures/stats, single quotes, merged remote's "kind of beautiful" tweak)
- Ported three posts from the deleted Nothing But Static Substack:
  - **The Shadow Economy of Silence** (2025-09-08) -- commodification of stillness. Published as-is with voice cleanup.
  - **Synthetic Intimacy** (2025-09-15) -- AI companionship and neurochemistry. Was an unpublished paid draft on Substack. Published.
  - **You Are the Marketplace** (2025-09-01) -- identity, performance, and the intimacy economy. Significantly tightened: cut solopreneur section (rehash of Rise of the One-Person Company) and environmental critique, kept Martha Stewart/Jung/great flattening/eudaimonia thread. Roughly cut in half.
- Removed Medium and Substack links from sidebar (no longer using either platform)
- Added art portfolio globe icon to sidebar, linking to surfrrosa.vercel.app

## Decisions made
- Blog voice is broadening beyond AI dev and product management into culture, consciousness, and identity. The new heading and description reflect this.
- Substack posts brought over with original publication dates, no attribution to Nothing But Static (platform no longer exists, raises more questions than it answers)
- "You Are the Marketplace" needed heavy editing to fit the portfolio voice. The original tried to be four essays at once. Kept the identity/performance thread, cut the solopreneur manifesto and environmental critique.
- Decided against porting: Rise of the One-Person Company (too LinkedIn), 10 Ways to Vibe Code (listicle), AI Collab Revolution (generic), Baptism by Code (diary entry), The Project Is the Way (tutorial)
- The Zalgo text in The Absurdity Index stays (user preference)
- Early voice drift in Death of Product Management and Absurdity Index posts is acceptable as natural evolution

## Known issues
- GitHub repo link inconsistency: `Surfrrosa` vs `shainarazavi` in the two Absurdity Index posts (user hasn't clarified which is current)
- No per-article OG images for social sharing (all posts share one default)
- GA ID still hardcoded instead of env var
- `any` type in contact form handler
- Accessibility gaps not yet addressed
- Dead icon components (MediumIcon, SubstackIcon) still in Sidebar.tsx (harmless, could clean up)
- Art portfolio link currently points to surfrrosa.vercel.app (temporary until domain purchased)
- Dependabot flagging 1 high vulnerability on the repo

## Next session
- Review the three new posts on the live site for any formatting or rendering issues
- Consider whether the two Absurdity Index posts belong on the work page instead of writing
- Address remaining tech debt (GA env var, contact form types, accessibility)
- Look into per-article OG images for social sharing
- Clean up dead icon components from Sidebar.tsx
- Resolve GitHub username inconsistency in Absurdity Index posts
