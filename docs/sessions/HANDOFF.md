# Portfolio Session Handoff

**Last updated:** 2026-08-16 (end of founder-repositioning arc)

This document is the top-of-stack pickup brief for the next session. Read this FIRST, then follow the links below for depth.

---

## Where we are right now

Portfolio is in a settled, cohesive state after a five-day repositioning arc (2026-08-11 through 2026-08-16, 17 PRs). Everything on the site now reflects **founder-of-Synestrology-and-SlabCheck** framing instead of the prior "AI Product Architect for hire" posture.

**What's live:**
- `/about` is a full-viewport autoplay video (currently "let's all go to the lobby" + Len Lye's "A Colour Box") with a nonchalant credit rectangle bottom-right and inline sound toggle. Sidebar slides away after landing; chevron pulls it back.
- Sidebar third nav icon is a question-mark → `/about`. Email `me@shainapauley.com` in the sidebar footer, `select-all` styling for one-click copy.
- Google snippet (once re-indexed, 1-3 weeks): title `it me | shaina pauley`, description `founder @ synestrology & co-founder @ SlabCheck · let's have a kiki`.
- `/work` reordered — Synestrology first, SlabCheck second, Prism third.
- Person JSON-LD carries two real headshots for Google image-search identity clustering.
- `/contact` deleted, permanent redirect to `/about` in `next.config.js`.
- 8 open Dependabot vulnerability alerts cleared to 0 via `npm overrides`.

**What's NOT yet shipped:**
- PR #175 (swiper 12 → 14 major bump) parked pending manual usage audit
- Dormant bottom-right TV hotspot on the homepage awaits a future easter egg

---

## The single most important thing to do next

There isn't one. The arc closed cleanly. Portfolio is in a settled state and doesn't need immediate work.

**When Shaina returns to it, likely next tasks:**
- Rotate the `/about` video (swap `public/videos/about-hero.mp4` + `about-hero-poster.jpg`, update credit line in `src/app/about/page.tsx`)
- Nudge Google Search Console to reindex if the snippet hasn't updated yet
- Address PR #175 swiper major (needs manual usage audit — grep for `swiper` imports, check what breaks in swiper v13-v14 changelog)
- Fill the dormant homepage TV hotspot with an easter egg

---

## State of the world

### Branches
- On `main` at `0498996`, synced with `origin/main`, working tree clean
- 12 stale local branches from this arc (all merged, `--delete-branch` handled the remote side). Safe to prune locally with `git branch -D` since squash-merges aren't detected by `git branch -d`.
- 3 pre-existing stashes (WIP + "Sidebar improvements: wider panel (420px)…"); untouched this session

### Linear
Portfolio has no Linear board (per memory rule, Linear scope is syn/slab only).

### Production
Vercel auto-deploys from `main`. Last deploy: `0498996` (PR #190). Live at [shainapauley.com](https://shainapauley.com).

### Tests
Portfolio has no test suite. CI = CodeQL + `next lint` + Vercel preview build.

### Dependabot alerts
- 0 open vulnerability alerts (was 8 at start of arc)
- 1 open Dependabot PR: #175 swiper 12 → 14 (major, parked)

---

## Critical context that's NOT in commits/PRs

- **Video rotation cadence:** Shaina plans to rotate the `/about` video monthly or quarterly. Files at `public/videos/about-hero.mp4` and `public/videos/about-hero-poster.jpg`. Transcoding command lives in the 2026-08-16 session log. Credit line in `src/app/about/page.tsx` also needs updating when the video swaps.
- **Sidebar entrance timing:** first landing on `/about` uses a 900ms tween with `[0.16, 1, 0.3, 1]` ease-out for a graceful slide-away; subsequent chevron toggles use the normal 300ms snap. Managed by an `isEntering` flag that flips off after the initial `onAnimationComplete`.
- **"Kiki" isn't a typo:** the tagline "let's have a kiki" is deliberate, matches the "it me" playful register.
- **Vercel bot filter:** aggressive `curl` polling can trigger a temporary IP-level 403 from Vercel. Fall back to trusting CI + PR checks if it happens. Clears itself after ~15-60 min.

---

## Where to look for depth

| For... | Read |
|--------|------|
| Strategic positioning + service history | `CLAUDE.local.md` (current-state section at top; historical sections below) |
| Code conventions + Key Files | `CLAUDE.md` |
| This arc's full narrative | `docs/sessions/2026-08-16-founder-repositioning-arc.md` |
| Blog voice + content rules | `CLAUDE.md` "Blog Posts" section |
| User-level preferences | `~/.claude/projects/-Users-surfrrosa/memory/MEMORY.md` |

---

## Session recovery checklist

If a future session compacts mid-work:
1. Read THIS file first (you're here)
2. Read the most recent session log at `docs/sessions/2026-08-16-founder-repositioning-arc.md`
3. Read `CLAUDE.md` + `CLAUDE.local.md`
4. Run `git log --oneline -10` and `git status`

That sequence reconstructs the full picture in ~3 minutes.
