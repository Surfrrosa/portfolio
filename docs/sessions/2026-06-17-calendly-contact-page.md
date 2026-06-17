# Session: 2026-06-17 -- Replace contact form with Calendly popup

## What happened

- Diagnosed the existing contact form as silently failing for visitors
  without a registered mailto handler. The "Send Message" button built a
  `mailto:` URL via fake `<a>` click; this only works if the OS has a
  default mail handler bound. A large slice of modern web traffic
  (Chrome + Gmail-web with no Apple Mail or Outlook configured) gets
  nothing — no error, no toast, no confirmation. Confirmed by Shaina
  who hit the silent failure herself when testing.
- Replaced with a dual-CTA pattern: primary Calendly popup widget,
  secondary visible email with click-to-copy button. Dual-CTA respects
  mixed-intent traffic — serious prospects book a slot directly, casual
  askers email without committing to 30 minutes on the calendar.
- Chose vanilla Calendly embed (`https://assets.calendly.com/assets/external/widget.js`)
  over `react-calendly` npm package. Avoids React 19 peer-dep risk and
  keeps the bundle clean. Loaded via Next.js `<Script strategy="lazyOnload">`
  so widget.js only fires on /contact, not site-wide.
- Calendly URL theme params match brand bg + accent fuchsia:
  `background_color=0B0C0E`, `text_color=ffffff`, `primary_color=E930A8`,
  `hide_landing_page_details=1`, `hide_gdpr_banner=1`. Calendly opens
  straight to the time picker, not the landing page.
- Used existing PageHero, Sidebar, useLenis primitives untouched. Right
  column form replaced by a CTA card containing title, description, the
  "Pick a time" button, a "What happens next" 3-step list, and the
  email + copy button. Left column (What I Do, Industries) preserved.
  "Response Time" block dropped — calendar IS the response time. Upwork
  section at bottom preserved.
- Fallback handling: if `window.Calendly` isn't ready when the button is
  clicked (rare, but possible on first paint), opens Calendly in a new
  tab. Never silent failure. Copy button has a clipboard-blocked
  fallback that falls back to `mailto:` directly.

## Decisions made

- Dual-CTA over single-CTA inline embed. Pure inline wins for
  single-intent traffic but loses tire-kicker visitors who aren't ready
  for a 30-min commitment. Portfolio traffic is mixed-intent
  (prospects + recruiters + referrals + curious), so dual serves both
  populations and respects the user's readiness stage.
- Vanilla embed over `react-calendly` to keep bundle slim and avoid
  React 19 peer-dep compatibility worries.
- "What happens next" 3-step list inside the CTA card to reduce
  commitment anxiety without dictating: 1. You pick a slot that works
  for you. 2. We talk through what you're building. 3. We see if
  there's a fit. Active but not bossy.
- Contact email updated `shaina@slabcheck.app` → `me@shainapauley.com`
  to match the portfolio domain.
- Subtitle rewritten to drop the broken "I'll send you a link" promise.
  Final form: "Pick a time that works, or drop me a line:-)" (Shaina's
  exact wording, including the smiley).
- Wrapped page contents in a React fragment so the `<link>` and
  `<Script>` Calendly tags sit at the top level for clean React 19 head
  hoisting. Caused large reindent in the diff but no semantic noise.

## Drift caught + fixed

- CLAUDE.md's design-tokens table listed `accent-teal` as `#2BD4CF`
  (teal). Tailwind config has had `#E930A8` (electric fuchsia) since
  commit f6f609a on 2026-04-03 ("Replace teal accent with electric
  fuchsia"). Fixed the hex in CLAUDE.md in this PR, added a clarifying
  note about the token-name drift, flagged the rename as separate work.
- Saved new feedback memory `feedback_fix_drift_on_catch.md` after
  Shaina's "anytime you see/catch drift, let's make sure we correct it
  for future-us" framing. Small/mechanical: same PR. Wide-blast
  mechanical: separate PR. Judgment-needed: raise in chat. Companion to
  the existing take-initiative and no-bandaids rules.

## Known issues

- **Token name drift not fixed:** `accent-teal` Tailwind class now
  points at fuchsia. Renaming to `accent-fuchsia` is wide-blast —
  touches every component using `text-accent-teal` / `bg-accent-teal` /
  etc. Worth its own focused PR.
- **ESLint config is on the old `.eslintrc` format;** ESLint v9
  (installed per package.json) wants `eslint.config.js`. `npm run lint`
  currently errors with the migration message. Pre-existing, not
  introduced today.
- **`next lint` was deprecated in Next 16;** the package.json script
  still invokes it ("Invalid project directory provided" error). Either
  delete the script or move to direct eslint invocation once the config
  is migrated.
- Carried forward from 2026-06-12: 8 outstanding blog drafts past the
  broken-windows threshold called out in the PragProg post; hero GIF
  36MB uncompressed; 8 open Dependabot PRs; `StructuredData.tsx`
  `dateModified` hand-typed literal; 2 posts fall back to default OG.

## Next session

- ESLint config migration (`eslint.config.js` flat-config + remove
  `next lint` script).
- Token rename PR: `accent-teal` → `accent-fuchsia` across all
  components.
- Whatever Shaina wants to discuss on the blog (open ask at end of
  session).

## Shipped

- PR #142 (`feat/calendly-contact-page` → main) — squash-merged as
  `b8cc255`. Vercel auto-deploy fired.
