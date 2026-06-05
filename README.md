# Portfolio -- Shaina Pauley

**[shainapauley.com](https://shainapauley.com)**

Personal portfolio site. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel.

## Quick Start

```bash
git clone https://github.com/Surfrrosa/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    layout.tsx            Root layout, fonts, video background, SEO metadata
    page.tsx              Home -- hero GIF with clickable TV hotspot navigation
    about/page.tsx        About page
    contact/page.tsx      Contact form (opens mailto: with prefilled fields)
    method/page.tsx       Method page
    work/page.tsx         Work showcase with project cards
    writing/page.tsx      Blog listing
    writing/[slug]/       Individual blog post
  components/             Sidebar, VideoBackground, carousels, etc.
  lib/
    blog.ts               Blog post parsing (gray-matter, react-markdown)
    phases.ts             Phase configuration
content/
  blog/                   Markdown blog posts (.mdx extension)
public/
  images/                 Static images and hero GIF
  videos/                 Background video loops, project previews
  diagrams/               SVG diagrams (Nortal project)
  media/                  Project-specific media assets
```

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `bg-base` | `#0B0C0E` | Primary dark background |
| `surface` | `#14161A` | Card and section backgrounds |
| `accent-teal` | `#2BD4CF` | Primary accent, CTAs, highlights |

**Display fonts:** Archivo, League Spartan, Bebas Neue
**Body font:** Inter

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.3 with custom design tokens
- **Animations:** Framer Motion 12, Lenis (smooth scroll)
- **Blog:** Markdown with gray-matter frontmatter, rendered via react-markdown
- **Contact form:** Opens `mailto:` with prefilled subject and body (no backend)
- **Analytics:** Vercel Analytics, Google Analytics

## Commands

```bash
npm run dev       # Development server
npm run build     # Production build
npm start         # Production server
npm run lint      # ESLint
```

## Deployment

Deployed on Vercel with automatic deploys from `main`.

Live: [shainapauley.com](https://shainapauley.com)

## Contact Form

The contact form opens a `mailto:` link to `shaina@slabcheck.app` with prefilled subject and body. No backend, no API keys.

## License

MIT. See [LICENSE](LICENSE).
