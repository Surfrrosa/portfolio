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

## Design Tokens

Defined in `tailwind.config.ts` and `src/app/globals.css`:

| Token | Tailwind Class | Hex |
|-------|---------------|-----|
| Background | `bg-bg-base` | `#0B0C0E` |
| Surface | `bg-surface` | `#14161A` |
| Accent Teal | `text-accent-teal` | `#2BD4CF` |

## Typography

- **Display:** Archivo (primary), League Spartan, Bebas Neue (fallback chain)
- **Body:** Inter
- Loaded via Google Fonts in `globals.css` and `next/font/google` in `layout.tsx`

## File Structure

```
src/app/              Pages (App Router)
src/components/       React components
src/lib/              Utilities and config
content/blog/         MDX blog posts with gray-matter frontmatter
public/               Static assets (images, videos, diagrams, media)
docs/sessions/        Development session logs
```

## Blog Posts

Blog posts live in `content/blog/` as `.mdx` files. Frontmatter fields:

```yaml
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Short description"
readTime: "X min read"
tags: ["Tag1", "Tag2"]
draft: false
```

Posts with `draft: true` are hidden in production but visible in dev.

## Branching

- `main` -- production, auto-deploys to Vercel
- Feature branches off `main` for new work

## Contact Form

Uses Resend (`/api/contact`). Environment variables in `.env.local`:
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

See `.env.example` for template.

## Session Logs

After each working session, write a session log to `docs/sessions/YYYY-MM-DD-summary.md`.
See `docs/sessions/README.md` for format.

## Running

**Prerequisites:** Node.js 18+, npm

**Setup:**
1. `npm install`
2. Copy `.env.example` to `.env.local` and fill in secrets
3. `npm run dev` starts the dev server at `http://localhost:3000`

**Environment variables** (required for contact form):
- `RESEND_API_KEY` -- API key from Resend
- `CONTACT_FROM_EMAIL` -- verified sender email in Resend
- `CONTACT_TO_EMAIL` -- recipient email for contact form submissions

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
| `src/app/contact/page.tsx` | Contact form (posts to `/api/contact`) |
| `src/app/api/contact/route.ts` | Contact form API route (Resend) |
| `src/app/sitemap.ts` | Dynamic sitemap generator |
| `src/components/Sidebar.tsx` | Global sidebar navigation |
| `src/components/VideoBackground.tsx` | Background video loop with Web Audio API toggle |
| `src/components/NpcDialog.tsx` | Undertale-style NPC dialogue easter egg |
| `src/components/StructuredData.tsx` | JSON-LD structured data for SEO |
| `src/lib/blog.ts` | Blog post loading and parsing (gray-matter + MDX) |
| `src/lib/phases.ts` | Method framework phase data |
| `content/blog/` | MDX blog posts with frontmatter |
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
