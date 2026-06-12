# Session: 2026-06-12 -- Draft "The Pragmatic Programmer in the Age of AI"

## What happened

- Drafted a new blog post `content/blog/the-pragmatic-programmer-in-the-age-of-ai.mdx`
  as a sequel to `the-skill-layer` (2026-04-09). Frames five PragProg
  principles (orthogonality, DRY, tracer bullets vs prototypes, broken
  windows, audits hallucinate at scale) as patterns intuited via solo
  founder reps, with `/coupling`, `/kickoff`, `/drift`, `/sentry-digest`
  surfaced as offhand evidence rather than inventory.
- Title arrived at after iteration: started as "I read The Pragmatic
  Programmer last," changed to "The Pragmatic Programmer in the Age of AI"
  to better match where the post lands. Opening tightened accordingly to
  drop the meta inversion and lead with the AI-era angle.
- Verification pass tightened multiple soft claims: dropped "two years
  with Claude Code" (CC hasn't existed two years); 27% line reduction
  softened to "about a quarter" (audit doc rounded; actual math is 26.4%);
  "three components broke" generalized to "something elsewhere broke";
  unverified 90% co-change threshold dropped to "always change together";
  Synestrology wrong-date claim moved from "shipped a post with the wrong
  station date" to "started with hand-typed astro data, station dates were
  wrong in places" (matches what memory actually says); "twenty years ago"
  corrected to "before AI existed" (book is 27); "every assumption gets
  checked" replaced with the verbatim Tip 36 wording, "don't assume it,
  prove it."
- AI-speak stripped per voice ask: "encoded the same patterns" → "building
  skills, hooks, and audit procedures. The book gave them names";
  "absorbed every variation" → "where every variation ended up";
  "mechanical enforcement plus on-demand audit" → "one catches at
  keystroke, the other catches on demand"; "two different artifacts" →
  "different tools"; "the principle still holds" → "different problem,
  same answer"; "thoughtful person notices" → "noticing"; "AI tooling" →
  "AI" in most places.
- Final state: ~770 words, 3 min read, `draft: true`, single quotes
  throughout, no em dashes, lowercase creative section headers consistent
  with the rest of the blog.

## Decisions made

- Kept it principle-forward, with skills as evidence rather than the
  subject. Didn't enumerate the skill count or use inventory tables; that
  move would have read as obsessive after The Skill Layer already did the
  table-and-count pass.
- Left two soft spots for review rather than guessing: (1) the Synestrology
  phrasing is the verifiable version, but the punchier "I shipped a post
  with the wrong station date" is available if that incident actually
  shipped; (2) the "ten-minute conversation" line on `/kickoff` is
  illustrative; can drop the number if it reads as too specific.
- Shipped as `draft: true`. Post is visible in dev, hidden in production.
  Vercel auto-deploy is safe; the post will not appear on the live
  listing until `draft` flips.

## Known issues

- None introduced by this session.
- Carried forward from 2026-06-09: hero-banner.gif 36MB uncompressed,
  8 open Dependabot PRs, 7 blog drafts outstanding (now 8 with this one),
  `StructuredData.tsx` `dateModified` hand-typed literal.

## Next session

- Review pass on the draft. Decide on the two soft spots flagged above.
- Flip `draft: false` when ready to publish; add a custom OG image if
  desired (current fallback is `/og-image.png`).
- Stale draft cull is overdue per the broken-windows section of this very
  post; eight outstanding drafts is the threshold worth acting on.
