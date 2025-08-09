Project Overview

Build a fast, minimal 3‑page portfolio that positions Shaina as a future‑ready Product Manager (AI + data
fluent). Design language draws from Cyphr Studio, Bemo, and Odinaut. Primary showcase project:
prompt2story.com.

Site Map (3 pages)
1) Home / About
2) Work (project index + featured case study)
3) Contact
4) 
Aesthetic Direction (Mood & Motion)
Tone: Bold, modern, future‑forward. Dark UI with high‑contrast type and surgical use of color.
Motion: Memorable, not noisy. Smooth scroll with easing; micro‑interactions on hover; one signature hero
effect.

Color Tokens (dark theme)
•bg/base: #0B0C0E
•surface: #14161A
•text/primary: #E8EDF2
•text/muted: #AAB3BD
•accent/teal: #2BD4CF
•accent/acid‑green: #C6FF4D
•accent/rgb‑edge (for chromatic aberration overlays): use additive RGB channel split ~1–2px.

Note: keep color use restrained; rely on imagery and motion for pop.

Typography
•Display (hero/headlines): Monument Extended, Bebas Neue, or Space Grotesk SemiBold (condensed/
heavy vibe).
•Body/UI: Inter or Satoshi (400/500/700).
•Tight letter‑spacing on display, generous line‑height on body.

Key Effects to Implement
1.Scroll‑Triggered Text Distortion (hero): WebGL shader warp + subtle chromatic aberration (RGB
split).
2.Soft Parallax on background elements in hero.
3.Micro‑interactions: hover lift (scale 1.02), subtle shadow bloom, link underline slide.
4.Smooth scrolling (Lenis or equivalent).

Performance budget: LCP < 2.5s, CLS < 0.02, TTI < 2.5s on mid‑range mobile. Provide
prefers‑reduced‑motion fallbacks (disable heavy effects; keep content intact).

Technical Approach (pick one)
Option A — Framer-first (fastest ship):
- Framer site for layout, components, CMS-like project cards.
- Custom Code Component for the WebGL text distortion (Three.js/GLSL).
- Framer Motion for secondary animations.
Option B — Next.js app (max control):
- Next.js + React + Tailwind.
- Three.js (or Pixi.js) for shader effect.
- GSAP ScrollTrigger or Framer Motion for scroll sync.
Recommend Option A for speed, then migrate to Option B later if needed.
Page Blueprints & Copy (v1)

1) Home / About
Hero:
- H1 (animated with distortion): Future‑Ready Product Management
- Subhead (1–2 lines): I build AI‑powered products and systems that feel inevitable—clear strategy, elegant
UX, and measurable outcomes.
- CTA: View Work
About (short):
- I’m Shaina Pauley, a product leader who blends customer insight, data fluency, and AI tooling. I’ve shipped
platform features at scale (auth, dashboards, APIs) and prototype fast with automation.
- Highlights: 7+ years PM | SaaS, AI workflows, neuroscience‑adjacent tools | Strengths: Strategic,
Arranger, Positivity, Connectedness, Input.
Logos/cred strip (optional): Key companies/initiatives (e.g., ConnectWise Manage, Prompt2Story,
Enlighten).

2) Work
Intro line: Selected work that shows range—from zero‑to‑one AI tools to platform modernization.

Featured — Prompt2Story (lead card, opens detail):
- Tagline: Turn any prompt into a compelling, structured narrative.
- Problem: Creators and marketers waste time turning rough prompts into publish‑ready stories.
- Solution: A guided pipeline that transforms inputs into narrative arcs with tone, pacing, and
calls‑to‑action.
- My role: Product strategy, UX, prompt engineering, evaluation harness.
- Outcome (v1): Faster story ideation (minutes → seconds), consistent voice, export‑ready content.
- Link: prompt2story.com
- Visuals: hero mock, flow diagram, sample outputs.
Other Projects (short cards):
- ConnectWise Manage — MFA rollout, REST API conversion, React migration; significant performance lift.
- Enlighten (case brief) — Customer‑facing strategy doc and prototype; clarified value prop and roadmap.
- AI Workflow Toolkits — Automated user stories/acceptance criteria generator for PMs.
Clicking a card opens a lightweight overlay or dedicated case page (optional within the Work
page) with problem → approach → impact.

3) Contact
•Headline: Let’s build the future.
•Copy: I’m open to product leadership roles, consulting, and collaborations.
•Form: name, email, message (honey‑pot spam trap).
•Direct: shainaep@gmail.com 
•Links: LinkedIn, Substack.
•Optional: Calendly link.

Components & Layout
•Nav: sticky top, sections: About / Work / Contact.
•Hero block: full‑bleed, 100vh, animated headline, subhead, CTA.
•Project cards: image, title, 1‑line impact, tags; hover lift + underline.
•Case layout: split grid (problem / approach / outcome) + metrics band.
•Footer: minimal, dark.

Implementation Notes for Devin.ai
1.Set up project (Framer or Next.js). Add Tailwind if Next.js.
2.Global tokens: add color + type tokens above; support dark by default.
3.Hero effect: Implement shader warp with RGB split; bind intensity to scroll progress (0→1). Provide CSS fallback with simple fade/translate if prefers-reduced-motion or no WebGL.
4.Smooth scroll: Lenis (60fps), damping ~0.1–0.2.
5.Images: Next/Image or responsive Framer images; lazy‑load below the fold.
6.SEO: meaningful titles/desc, Open Graph image from hero.
7.Analytics: GA4 or privacy‑friendly alt.
8.Perf: prefetch fonts; serve variable fonts; compress images; code‑split shader component.
9.Accessibility: Focus states, color contrast ≥ 4.5:1, skip‑to‑content link.

Acceptance Criteria
- Distortion effect matches reference within ±10% intensity; 60fps on desktop; fallback works.
- Lighthouse (Mobile) Performance ≥ 85, Accessiblity ≥ 95.
- CLS < 0.02; no layout jumps.
- All CTAs functional; contact form sends to email/DB.
Assets Needed from Shaina:
•Headshot or abstract graphic (optional).
•Logos/marks for projects.
•Screenshots: prompt2story.com flows + outputs.
•Short bios (50/150 words).
•Social links and contact email.

Next Steps
1) Confirm palette + type (or swap from the options listed).
2) Approve the page copy above (I can refine tone/voice).
3) Choose Option A (Framer) or Option B (Next.js).
4) I’ll generate a task list for Devin.ai + provide code scaffolding snippets if going Next.js.
