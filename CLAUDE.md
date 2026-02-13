# Portfolio -- Claude Code Instructions

## Project

Personal portfolio for Shaina Pauley at [shainapauley.com](https://shainapauley.com).
Next.js 16 (App Router), TypeScript, Tailwind CSS 3.3, Framer Motion, Vercel.

## Rules

- No emojis anywhere in code or content.
- No em dashes. Use "-- " (double hyphen with space) if needed.
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

## Commands

```bash
npm run dev       # Dev server
npm run build     # Production build
npm run lint      # ESLint
```
