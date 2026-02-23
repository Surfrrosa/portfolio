# Architecture

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4 + @tailwindcss/typography
- **Animation:** Framer Motion
- **Email:** Resend (via API route)
- **Analytics:** Vercel Analytics + Google Analytics
- **Blog:** MDX files parsed with gray-matter, rendered with react-markdown + remark-gfm
- **Hosting:** Vercel (auto-deploy from `main`)

## Directory Structure

```
portfolio/
  src/
    app/                    Next.js App Router pages and layouts
      layout.tsx            Root layout (fonts, metadata, video bg, analytics)
      page.tsx              Homepage
      about/page.tsx        About page
      contact/page.tsx      Contact form
      method/page.tsx       Method/framework page
      work/page.tsx         Project showcase
      writing/page.tsx      Blog listing
      writing/[slug]/       Dynamic blog post pages
      api/contact/route.ts  Contact form API endpoint
      sitemap.ts            Dynamic sitemap generation
      globals.css           Global styles, Tailwind directives, font imports
    components/             Shared React components
    lib/                    Utilities, data, helpers
  content/
    blog/                   MDX blog posts with frontmatter
  public/                   Static assets
    images/                 Images, logos, project screenshots
    videos/                 Background video loop, audio files
    sounds/                 UI sound effects (dialogue blips, clicks)
    diagrams/               Project diagrams and visuals
  docs/                     Project documentation
    sessions/               Development session logs
```

## Routing

Next.js App Router with file-based routing. All pages are static (prerendered at build time) except:
- `/api/contact` -- server-rendered API route (POST only)
- `/writing/[slug]` -- SSG with `generateStaticParams`

## Data Flow

### Blog Pipeline
1. MDX files in `content/blog/` contain frontmatter (title, date, excerpt, tags, draft) + content
2. `src/lib/blog.ts` reads and parses files using `gray-matter`
3. `writing/page.tsx` lists all non-draft posts sorted by date
4. `writing/[slug]/page.tsx` renders individual posts using `react-markdown` with `remark-gfm`
5. Posts with `draft: true` are excluded in production builds

### Contact Form
1. User fills form on `/contact`
2. Client-side POST to `/api/contact`
3. API route validates fields, sends email via Resend SDK
4. Response returned to client for success/error display

### Structured Data
`StructuredData` component in `layout.tsx` injects JSON-LD with Person, WebSite, WebPage, and ProfessionalService schemas.

## Design System

### Colors
- Background: `#0B0C0E` (`bg-bg-base`)
- Surface: `#14161A` (`bg-surface`)
- Accent: `#2BD4CF` (`text-accent-teal`)
- Text: white with opacity variations

### Typography
- Display: Archivo, League Spartan, Bebas Neue
- Body: Inter
- Monospace: system monospace (used in NPC dialog)

### Layout
- Sidebar navigation (desktop: fixed left, mobile: bottom bar)
- Full-viewport video background with dark overlay
- Smooth scrolling via Lenis on select pages

## Key Patterns

### Client Components
Components using browser APIs, state, or effects use `'use client'` directive. Server components are the default.

### Audio
- Background audio uses Web Audio API (AudioContext + BufferSource) for gapless looping
- UI sounds (dialogue blips, menu clicks) use `HTMLAudioElement.cloneNode()` for overlapping playback

### SEO
- Metadata exported from layout and page files
- JSON-LD structured data via `StructuredData` component
- Dynamic sitemap at `/sitemap.xml`
- Open Graph and Twitter card metadata

## Deployment

- Platform: Vercel
- Branch: `main` auto-deploys to production
- Environment variables configured in Vercel dashboard
- Static pages prerendered at build time
- API routes run as serverless functions
