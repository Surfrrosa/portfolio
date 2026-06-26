# Session: 2026-06-25 -- Blog post iteration, /skills page launch, iOS audio fix

Catch-up log covering PRs #148 through #154 (all merged 2026-06-25).
This is a retroactive write-up assembled from PR descriptions and git
history during the 2026-06-26 onboarding pass; written-in-the-moment
context wasn't captured at session end.

## What happened

### Blog post arc: "Reading is the new writing" -> "How to learn to code in 2026"

Three PRs of iteration on a single thesis:

- **PR #148** -- shipped "Reading is the new writing" live (~620 words,
  audit POV, three Pragmatic Programmer principles woven in without
  naming the book).
- **PR #149** -- flipped the same post back to draft a few hours later.
- **PR #150** -- shipped "How to learn to code in 2026" (~580 words,
  3 min read) and deleted the reverted draft. SEO-tuned: excerpt and
  body lead with the "Learning to code in 2026" keyword phrase
  (~155 chars, fits SERP). Tina Huang video credited as italicized
  reference line under the title (option 2 from the placement
  discussion).

Net result: one post on the topic, framed as a learner's guide rather
than a thesis piece. Plain technical voice, no buzzwords.

### PR #151 -- New `/skills` page (the big one)

Publishes 14 of the Claude Code slash commands as a free, MIT-licensed
audit toolkit. Each skill is mirrored at
[Surfrrosa/claude-skills](https://github.com/Surfrrosa/claude-skills);
this PR adds the discoverable landing page on the portfolio.

**Register intentionally a gift:** no sales CTAs, no "book a call"
funnel at the bottom, no promotion beyond two subtle link surfaces.

Three tier sections on the page:

- **the toolkit** -- differentiated audit-class skills: `/full-sweep`,
  `/drift`, `/cohesion`, `/coupling`, `/walkthrough`, `/thatsweird`,
  `/design`
- **foundations** -- `/a11y`, `/perf`, `/seo`, `/privacy`
- **workflow** -- `/onboard`, `/ship`, `/session`

Each `SkillCard` has skill name in mono/accent, one-line description,
an `[install]` button that copies a one-liner (creates
`~/.claude/skills/<name>/` and downloads SKILL.md), and a
`[view source]` link to the canonical file on GitHub.

Two subtle link surfaces only:
- `/about` -- small "browse my skills ->" under the "What I Bring"
  bullets
- `/writing/the-skill-layer` -- closing line: "Mine are free to install
  at /skills."

New files: `src/lib/skills.ts` (data + install command builder + tier
ordering), `src/components/SkillCard.tsx` (card with clipboard copy +
GitHub link, inline feather SVGs). No new tokens, no new fonts, no new
dependencies. Card style mirrors `/writing` exactly. Lowercase title
voice matches the rest of the site.

### PR #152 -- Remove "browse my skills" link from /about

Pulled the link added in PR #151 24 hours later. The `/skills` page
stays discoverable via the closing line in `/writing/the-skill-layer`.
Cleaner /about, single discovery surface.

### PR #153 + #154 -- iOS audio fix arc

Two-PR arc fixing background music playback on mobile Safari.

**PR #153 (the wrong fix that was still a real fix).** iOS Safari
requires `AudioContext.resume()` to be called synchronously inside the
user gesture handler. The previous code awaited an async fetch +
`decodeAudioData` BEFORE calling `resume()`, which loses the gesture
context on iOS; `resume()` then silently fails. Refactored `toggleMute`
to create the AudioContext synchronously, capture the resume promise
without awaiting, then do the async fetch + decode, then await the
resume promise and start playback. Split `initAudioContext` into
`createAudioContext` (sync) and `loadAudioBuffer` (async) to make the
gesture-preserving order explicit. Real iOS Safari quirk, real fix,
but...

**PR #154 (the actual root cause).** ...wasn't the actual blocker.
The real culprit was the **iOS silent / ring switch**. Web Audio API
plays through iOS's "ambient" channel which the physical silent switch
mutes. HTML5 `<audio>` plays through the "media" channel (same as
videos, music apps) which ignores the silent switch. No JS workaround
exists; the channel choice is baked into which API you use.

Replaced the entire Web Audio API stack (AudioContext + GainNode +
AudioBufferSourceNode + decodeAudioData) with a plain HTML5 `<audio>`
element. `toggleMute` is now `audio.play()` / `audio.pause()` with a
setInterval-based volume fade. Less precise than sample-accurate Web
Audio gain ramps, plenty smooth for a background music toggle, and
actually works on iOS regardless of silent switch position.

PR #153 stays in the history as the right fix for the wrong problem
(also a legitimate iOS Safari bug); PR #154 is what made audio
actually play on real devices.

## Drift caught + fixed (this session)

None flagged in PR descriptions. No CLAUDE.md updates were needed (the
new `/skills` page, `src/lib/skills.ts`, and `SkillCard.tsx` aren't
documented in the Key Files table -- that's drift introduced by this
session, see Known Issues below).

## Memory saved this session

None saved during the session itself (this is a retroactive log).
Relevant memories that already existed and applied:
- `feedback_post_fix_history_pollution.md` -- the PR #154 root-cause
  flip is the canonical example: PR #153 shipped, the issue persisted,
  the second fix had to acknowledge the first wasn't the blocker.
- `feedback_no_bandaids.md` -- PR #154 picked the foundational fix
  (channel-correct API) over patching the AudioContext gesture timing
  further.

## Known issues / open threads

- **CLAUDE.md Key Files table missing new files.** `src/lib/skills.ts`,
  `src/components/SkillCard.tsx`, `src/app/skills/page.tsx` aren't
  listed. Small in-session drift fix worth a follow-up PR.
- **`SITE_URL` / install-command surface untested cross-platform.** The
  `[install]` button copies a curl one-liner; behavior on Windows
  PowerShell hasn't been verified.
- Carried forward from the 2026-06-17 PM log:
  - PostHog upgrade decision still pending
  - Token rename `accent-teal` -> `accent-fuchsia` (wide-blast)
  - ESLint v9 / `next lint` deprecation -- flat-config migration
  - 8 outstanding blog drafts
  - Hero GIF compression
  - Dependabot batch-merge
  - `StructuredData.tsx` `dateModified` auto-derivation
  - OG images at ~2MB each; 2 posts still missing custom OG

## Shipped 2026-06-25

- PR #148 -- Add "Reading is the new writing" blog post
- PR #149 -- Flip "Reading is the new writing" back to draft
- PR #150 -- Add "How to learn to code in 2026"; remove
  reading-is-the-new-writing
- PR #151 -- Add `/skills` page: free toolkit of Claude Code slash
  commands
- PR #152 -- Remove "browse my skills" link from `/about`
- PR #153 -- Fix mobile audio: call `resume()` synchronously inside the
  click gesture
- PR #154 -- Use HTML5 `<audio>` instead of Web Audio API for
  background music

Seven PRs total. All squash-merged. All Vercel-deployed.

## Next session

- Update CLAUDE.md Key Files table to include `/skills` page +
  supporting modules.
- Decide on PostHog (upgrade-trigger question is the gate).
- Pick from the carried-forward list: token rename, ESLint flat
  config, or whichever has the most leverage.
