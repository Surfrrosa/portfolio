# Session: 2026-06-17 (PM) -- Positioning narrowing + legacy framework sunset

Companion to the morning log `2026-06-17-calendly-contact-page.md`.
The morning was the Calendly swap (PR #142) and its session log
(PR #143). The afternoon was a four-PR positioning + cleanup pass
driven by a strategic conversation about Shaina's actual service
offering.

## What happened

### Strategic anchor: the positioning conversation

Shaina pushed back on a too-broad "redesign your whole portfolio to
counter-signal grift" suggestion that emerged from market research on
the "help build with AI" segment. The market-validation work (general-
purpose agent, ~12 sources) confirmed her instinct that audit/coaching
for indie AI builders is a strong positioning move — Cursor at $2B
ARR, Lovable 8M users, 63% of vibe coders non-engineers, 62% of AI
code carries security vulns, and the "serious 1:1 operator" slot is
mostly empty (audit shops are commodity PDF-and-gone, course people
don't touch real codebases).

But — Shaina's actual offering is more specific than the generic
research category: she's a technical product owner (fluid, doesn't
code) who runs her own audit toolkit on AI-built systems and walks
operators through what's structurally weak. Not a coach, not a
tutor, not a course-grifter. The non-coder POV is the right altitude.
1:1 only, no team-scale work.

Saved as `project_portfolio_service_definition.md` so future-Claude
doesn't try to wholesale-rewrite again. The rule going forward:
narrow targeted copy edits, not wholesale repositioning.

### PR #144 — Sharpen /about (3 edits bundled)

1. **Availability line narrowed.** "Open to new opportunities" →
   "Currently taking on new clients who are interested in learning to
   build with AI." Intentional filter — moves inbound toward
   coaching/enablement, away from straight build-for-me contracts.
   CTA preserved.
2. **"Results Over Activity" bullet rewritten** for concrete proof.
   Old body was generic senior-PM filler. New body names the audit
   categories she actually runs: *"Orthogonality, drift detection,
   dead-code sweeps, security review: my own toolkit for finding
   what's weak in your AI-built system."* Technical terms intentionally
   kept — they signal "serious operator" to anyone who'd be a good
   client and self-filter anyone who wouldn't.
3. **Resume download CTA + PDF deleted.** Resume = job-seeker frame
   that contradicts the consulting positioning. The portfolio site IS
   the resume. Stale PDF (April 29) predated the latest positioning
   work and would have been worse than no resume. `BottomCTAs`
   simplified from 3 buttons to 2 — better visual hierarchy.

### PR #145 — Remove Find-me-on-Upwork section from /contact

Marketplace link at bottom of /contact pulled eye-traffic AWAY from
the dual-CTA we just built. Upwork in 2026 reads "marketplace
contractor" not "senior independent consultant" — frame conflict with
the narrowed positioning. Profile remains active independently; most
Upwork inflow comes from Upwork-internal search, not portfolio→Upwork
referrals, so income-channel risk is minimal. Contact page is now
single-purpose. Dropped the orphaned `upwork-logo.png` asset + pruned
the unused `next/image` import.

### PR #146 — Sunset RPG/method framework system

Two-commit cleanup of the legacy ASCII-NPC + four-phase methodology
framework that was originally meant to drive bookings:

- ExitIntentPrompt component (the "..wanna taco bout it?" exit-intent
  prompt) + its audio asset (`dialogue_blip.wav`) + the now-empty
  `public/sounds/` directory + the CLAUDE.md Key Files row.
- `/method` route (page.tsx + layout.tsx) + `src/lib/phases.ts` phase
  data + the CLAUDE.md row referencing phases.ts.

Sidebar nav was already not linking to /method (orphan-discoverable
only). Browser storage keys (`npc-dialog-interacted`,
`exit-intent-shown`) left to natural expiry in returning visitors'
storage — not worth a migration shim.

The whole thing was originally meant to encourage bookings; the new
dual-CTA on /contact (Calendly + email) carries that weight directly,
without the RPG framing.

## Drift caught + fixed (this session)

- CLAUDE.md design-tokens table: `accent-teal` was listed as `#2BD4CF`
  (teal); Tailwind config has had `#E930A8` (electric fuchsia) since
  commit f6f609a on 2026-04-03. Fixed in PR #142.
- CLAUDE.md Key Files rows for `ExitIntentPrompt.tsx` + `phases.ts`
  fixed in PR #146 alongside the file deletions.
- Token *name* drift (`accent-teal` Tailwind class now points at
  fuchsia) flagged as separate wide-blast work, not bundled.

## Memory saved this session

- `feedback_fix_drift_on_catch.md` — when drift surfaces during other
  work (docs vs code, stale comment, mismatched name/value), fix
  in-session. Small/mechanical: same PR. Wide-blast mechanical:
  separate PR. Judgment-needed: raise in chat.
- `project_portfolio_service_definition.md` — what Shaina actually
  sells via shainapauley.com (1:1 AI-build audit + systems advisory,
  no team-scale, non-coder technical PO POV) and what NOT to propose
  (wholesale portfolio rewrites for targeted edits).

## Known issues / open threads

- **PostHog upgrade question still pending.** Vercel Analytics covers
  traffic shape; PostHog would add conversion tracking on /contact
  (booking funnel for the new positioning). Shaina noted she'd need
  to upgrade her PostHog account — specific trigger (multi-project,
  session recordings, or event volume) wasn't pinned down before
  end-of-session. Decision deferred.
- Carried forward from morning log: token rename `accent-teal` →
  `accent-fuchsia` (wide-blast); ESLint v9 / `next lint` deprecation
  config migration; the 8 outstanding blog drafts; hero GIF
  compression; Dependabot batch-merge; `StructuredData.tsx`
  `dateModified` auto-derivation.

## Shipped today (full day)

- PR #142 — Calendly contact swap (morning)
- PR #143 — morning session log
- PR #144 — Sharpen /about (3-edit bundle)
- PR #145 — Remove Upwork section from /contact
- PR #146 — Sunset RPG/method framework system

Five PRs total. All squash-merged. All Vercel-deployed.

## Next session

- Decide on PostHog (the upgrade-trigger question is the gate).
- Token rename PR if Shaina wants to clean the `accent-teal` →
  `accent-fuchsia` semantic drift.
- ESLint config migration to flat-config (`eslint.config.js`).
- Whichever of the carried-forward items has the most leverage.
