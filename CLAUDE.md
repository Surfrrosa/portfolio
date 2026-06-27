# Portfolio -- Claude Code Instructions

## Project

Personal portfolio for Shaina Pauley at [shainapauley.com](https://shainapauley.com).
Next.js 16 (App Router), TypeScript, Tailwind CSS 3.3, Framer Motion, Vercel.

## Rules

- No emojis anywhere in code or content.
- No dashes (em dashes, double hyphens, etc.) unless absolutely necessary. Use commas, periods, or colons instead.
- No AI speak. Write like a human. Contractions are fine.
- Tailwind-first styling. Only add custom CSS to `globals.css` when Tailwind can't do it.
- All components are TypeScript (.tsx). All utilities are TypeScript (.ts).
- Use `'use client'` directive only when the component needs client-side interactivity.

## Before Writing New Code

Before adding a component, helper, or layout, search for existing ones
first:

- `rg "<symbol>" src/` for similar names or near-duplicates
- Components live in `src/components/` — check there before creating
  a new one (especially structured-data, hero, sidebar, link variants)
- Shared utilities live in `src/lib/`. Notable existing helpers:
  - `SITE_URL` in `src/lib/site.ts` — never hardcode `https://shainapauley.com`
  - `buildRouteMetadata({title, slug, description, ...})` in
    `src/lib/metadata.ts` — use for per-route layout.tsx files
  - `getAllPosts`, `getPostBySlug`, `BlogPost` type in `src/lib/blog.ts`
  - `BG_BASE`, `SURFACE`, `ACCENT_TEAL` in `src/lib/theme.ts` — hex values
    for Next.js metadata + inline SVG; CSS uses the Tailwind tokens
- Hooks live in `src/hooks/`
- Work-page primitives (use when adding a project to `src/app/work/page.tsx`):
  `<ProjectCard>`, `<ProjectHeader>`, `<ProjectSection>`, `<ProjectText>`,
  `<ProjectBullets>`, `<Checkmark>`, `<TechStackTags>`, `<ExternalLink>`,
  `<MediaButton>` (clickable preview that opens the enlarge modal)

Don't add a new file for a one-off variant of an existing pattern.
If you're about to copy-paste a layout/component and tweak two values,
extract or extend the helper instead.

## Design Tokens

Defined in `tailwind.config.ts` and `src/app/globals.css`:

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| Background | `bg-bg-base` | `#0B0C0E` |
| Surface | `bg-surface` | `#14161A` |
| Accent (electric fuchsia) | `text-accent-teal` | `#E930A8` |

Note: the Tailwind token is still named `accent-teal` for historical reasons
but the value was changed to electric fuchsia in commit `f6f609a` (2026-04-03).
Renaming the token to `accent-fuchsia` is tracked drift; do not assume the
literal hex is teal.

## Typography

- **Display:** Archivo (primary), League Spartan, Bebas Neue (fallback chain)
- **Body:** Inter
- Loaded via Google Fonts in `globals.css` and `next/font/google` in `layout.tsx`

## File Structure

```
src/app/              Pages (App Router)
src/components/       React components
src/lib/              Utilities and config
content/blog/         Markdown blog posts (.mdx extension, rendered via react-markdown)
public/               Static assets (images, videos, diagrams, media)
docs/sessions/        Development session logs
```

## Blog Posts

Blog posts live in `content/blog/` as `.mdx` files (rendered as plain markdown via react-markdown, not compiled MDX). Frontmatter fields:

```yaml
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Short description"
readTime: "X min read"
tags: ["Tag1", "Tag2"]
draft: false
```

Posts with `draft: true` are hidden in production but visible in dev.

### Voice

Understated and efficient, not self-congratulatory:

- **Minimize first person.** Use 'we' instead of 'I' when describing build work (the partner is Claude Code, so 'we' is accurate). Prefer passive/impersonal construction when possible: "this is what was done" over "I did this."
- **No redundancy.** Never restate the same idea twice. Not trying to hit a word count.
- **No gloating.** State what was built, not how impressive it is.
- **Be honest about timelines.** Things described as taking "weeks" often took days or hours. Don't inflate effort.
- **Earn every sentence.** Elegant and efficient. Never use "vibes and shipping" or similar try-hard casual phrasing.
- **Never frame testing/process as an afterthought.** Builds happen with tests and process from the start — baked in, not bolted on after things break.

### Single quotes for prose

Use single quotes for all quoted phrases, dialog, and referenced terms in blog post bodies. Use double quotes only for nested quotes or cases where single quotes would collide with apostrophes in a way that hurts readability. (Also memorialized in `.claude/commands/blog.md` Hard Rules.)

### Substack-suffix posts (3 posts) — leave the suffix

Three posts carry "(Substack)" in their title — `synthetic-intimacy.mdx`, `the-shadow-economy-of-silence.mdx`, `you-are-the-marketplace.mdx`. The suffix is **deliberate**: it signals to readers that these were written in a different style and perspective than the current portfolio voice, and warns of the tonal mismatch.

Don't strip the "(Substack)" suffix even though the Substack itself no longer exists. The original commit message ("Tag Substack-origin posts with '(Substack)' suffix") makes it sound like origin-tracking and tempts removal — it isn't. Leave it alone.

## Branching

- `main` -- production, auto-deploys to Vercel
- Feature branches off `main` for new work

## Contact Form

Form submit opens a `mailto:` link to `shaina@slabcheck.app` with prefilled subject and body. No backend, no Resend, no API keys. Inbox is Google Workspace on slabcheck.app.

## Session Logs

After each working session, write a session log to `docs/sessions/YYYY-MM-DD-summary.md`.
See `docs/sessions/README.md` for format.

## Running

**Prerequisites:** Node.js 18+, npm

**Setup:**
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in secrets
3. `npm run dev` starts the dev server at `http://localhost:3000`

**Environment variables:**
- `NEXT_PUBLIC_GA_ID` -- Google Analytics measurement ID (optional in dev)

**Commands:**
```bash
npm run dev       # Dev server (http://localhost:3000)
npm run build     # Production build
npm run start     # Serve production build locally
npm run lint      # ESLint
```

**Deployment:** Pushes to `main` auto-deploy via Vercel. Environment variables are set in the Vercel dashboard.

## Key Files

| Path | Description |
|------|-------------|
| `src/app/layout.tsx` | Root layout: fonts, metadata, VideoBackground, Analytics, Google Analytics |
| `src/app/page.tsx` | Homepage |
| `src/app/work/page.tsx` | Work/portfolio showcase with project cards and media modal |
| `src/app/writing/page.tsx` | Blog listing page |
| `src/app/writing/[slug]/page.tsx` | Individual blog post renderer |
| `src/app/contact/page.tsx` | Contact form (opens mailto: with prefilled fields) |
| `src/app/sitemap.ts` | Dynamic sitemap generator |
| `src/components/Sidebar.tsx` | Global sidebar navigation |
| `src/components/VideoBackground.tsx` | Background video loop with Web Audio API toggle |
| `src/components/StructuredData.tsx` | JSON-LD structured data for SEO |
| `src/lib/blog.ts` | Blog post loading and parsing (gray-matter + react-markdown) |
| `content/blog/` | Markdown blog posts with frontmatter |
| `tailwind.config.ts` | Design tokens, custom colors, font families |
| `src/app/globals.css` | Global styles, font imports, Tailwind directives |

## Project Skills

Custom slash commands in `.claude/commands/`:

| Command | What it does |
|---------|-------------|
| `/blog [topic]` | Scaffold a new MDX blog post with proper frontmatter and voice |
| `/work-card [project]` | Add a project card to the work page matching existing format |
| `/preflight` | Run build + lint + sanity checks before pushing to main |
| `/session` | Generate an end-of-session log in docs/sessions/ |
| `/audit` | Repo health check: dead code, file hygiene, a11y, dependencies |
