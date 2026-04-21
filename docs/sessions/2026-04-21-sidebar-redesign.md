# Session: 2026-04-21 -- Sidebar redesign, mobile drawer, zombie audit

## What happened

### Sidebar content rewrite
- Replaced the generic bio paragraph ("action-oriented dreamer and believer that emotional intelligence, systems thinking, storytelling, and collaboration are the real signal in a world full of noise") with an "I am a..." identity list of 12 lowercase items: `builder, alchemist, cosmic puppet, interdimensional traveler, mime, peaceful noisemaker, noodlist, bicycler, facilitator of freedom, mad hatter, shoegazer, & heartist`. "& heartist" is the one teal link, pointing to palebluedot.sh.
- Iterations: list started at 17 items, trimmed to 13, then 12 after dropping "Product Owner" in favor of "builder" alone. Final lowercased for font-mono / terminal aesthetic consistency.

### Home-link card
- Replaced the `→ Hello` text link at the top of the sidebar with a name-tag image component (`HELLO my name is SHAINA`) that hover-swaps to a `HOME` version on desktop. Kept static on mobile (no hover).
- Original source was blue; user re-exported as black & white so the card ties into the dark aesthetic.
- Trimmed both PNGs to identical 1922×1334 so the swap has no layout shift.

### Mobile drawer
- Mobile sidebar previously rendered as a horizontal band at the top of every page (card + identity list + icons), eating ~40% of the viewport above every page's real content.
- Replaced with a fixed 40px bar (home icon + hamburger) and a slide-in drawer from the right containing the full identity list, home card, and social + nav icons.
- First-visit auto-opens the drawer (localStorage-gated via `sidebar-intro-seen`) so new visitors still see the identity-list content once.
- Close via: X button, backdrop tap, ESC key, or tapping any nav/social link. Body scroll locks while open; `useReducedMotion` respected. Close button receives focus when drawer opens.
- Header pinned with `fixed` positioning (not `sticky`) because sticky was glitching under iOS Safari nested layout. Background moved to `bg-black/95` so the hero GIF on home can't bleed through.

### /zombie audit + cleanup
- First `/zombie` run on this repo. jscpd (block-level scan) plus the expanded "duplicated artifacts" semantic pass found:
  - `DesktopSidebar` vs `MobileSidebar` identity list duplication (known; resolved via `IdentityList` component)
  - `blog.ts` frontmatter parser duplicated in `getAllPosts` and `getPostBySlug` → resolved via `parsePost` helper
  - Back-link SVG+Link in `not-found.tsx` and `writing/[slug]/page.tsx` → resolved via `<BackLink>` component
  - `motion.h1 + motion.p` hero header in `contact` and `method` pages → resolved via `<PageHero>` component
  - 23 orphaned static assets (stale project preview videos, old background variants, 3 prompt2story images, 3 windtalker SVGs, pomodoro media, unused icons, `menu_click.wav`) → deleted
  - 1 dead component: `Typewriter.tsx` → deleted
  - ~75MB of stale video variants dropped from the repo.

### /zombie skill itself expanded
- Section 2a widened from "Near-Duplicate Functions" to "Duplicated Artifacts" — explicitly includes twin components, responsive sibling components, twin hooks, parallel Zod/TS schemas, re-inlined components, and duplicated business rules.
- New Section 2g: block-level duplication via `jscpd` (with `npx` fallback, sensible `--ignore` defaults).
- New sub-bullet under 2b: "Orphaned static assets" that catches transitively-dead images/videos/fonts referenced via path strings (not imports).
- Severity table and fix-mode exclusions updated to match.

### Misc
- Deleted `SmileyButton.tsx`, `NpcDialog.tsx`, `DialogueData.ts` — orphaned after removing the ASCII smiley easter egg from the sidebar.
- Fixed mobile drawer icon row: GitHub and Writing were touching on narrow viewports. Shrunk icons from w-11 → w-9, swapped `justify-between` for a centered row with a visible vertical divider between social and nav clusters.

## Decisions made
- Lowercased identity list items over title-case for consistency with the mono-font / lowercase-header aesthetic. Accepted minor loss of "Mad Hatter" / "Shoegazer" proper-noun nods as worth the tradeoff.
- Dropped "Product Owner" as a list item — reads as job-title energy, breaks the vibe of the poetic words below it. Builder is sufficient.
- Mobile drawer only; desktop sidebar stays always-visible. Hamburger convention is ironclad on mobile but would be niche and brand-diluting on desktop.
- Header: `fixed` positioning chosen over `sticky` after seeing iOS Safari glitches. Added a matching h-10 spacer in the grid column to preserve layout.
- Header background set to `bg-black/95` (near-opaque) rather than fully transparent so the home page's hero GIF doesn't visually merge with the bar.
- Kept the palebluedot.sh link on "heartist" as the single teal accent in the list.
- Removed the bottom name-tag signature — one strong anchor at the top beats two echoes.

## Known issues
- 36MB `hero-banner.gif` on homepage still uncompressed (user's call from earlier sessions).
- `/simplify` skill still needs preventative-layer additions (diff-against-repo duplication check, survey-first step for lib/components primitives, pre-commit dupe scan). Paused because the skill file was in use; user will flag when free.
- 6 blog posts remain in draft: `terminal-office-space`, `the-same-mistake-faster`, `the-catalog-of-what-is-possible`, `agile-is-a-pyramid-scheme`, `why-most-product-roadmaps-fail`, `the-death-of-product-management`. Draft-review pass still deferred.
- Per-article OG image backfill for older posts still outstanding.

## Next session
- `/simplify` preventative-layer pass (when skill is editable)
- Draft review on the 6 outstanding drafts
- Hero GIF compression reconsideration
- Per-article OG image backfill
