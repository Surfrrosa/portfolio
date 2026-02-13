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
    contact/page.tsx      Contact form (Resend integration)
    method/page.tsx       Method page
    work/page.tsx         Work showcase with project cards
    writing/page.tsx      Blog listing
    writing/[slug]/       Individual blog post
    api/contact/route.ts  Contact form API endpoint
  components/             Sidebar, Typewriter, VideoBackground, carousels, etc.
  lib/
    blog.ts               Blog post parsing (gray-matter, MDX)
    phases.ts             Phase configuration
content/
  blog/                   MDX blog posts
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
- **3D:** Three.js with React Three Fiber
- **Blog:** MDX with gray-matter frontmatter
- **Contact form:** Resend for email delivery
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

## Contact Form (Resend)

The `/api/contact` endpoint uses Resend for email delivery.

### Setup

1. Add domain in Resend and verify DNS (done for shainapauley.com)
2. Create API key at [resend.com/api-keys](https://resend.com/api-keys)
3. Copy `.env.example` to `.env.local` and fill in values
4. Restart dev server
5. For production: add the same environment variables in Vercel Settings

### Environment Variables

```bash
RESEND_API_KEY=your_api_key
CONTACT_FROM_EMAIL=hello@shainapauley.com
CONTACT_TO_EMAIL=your_email@example.com
```

### Test Locally

```bash
curl -i -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

### Troubleshooting

| Status | Error | Fix |
|--------|-------|-----|
| 401 | API key invalid | Check `RESEND_API_KEY` in .env.local |
| 400 | Missing fields | Ensure name, email, message are provided |
| 500 | Send failed | Verify `CONTACT_FROM_EMAIL` domain is verified in Resend |

## License

MIT. See [LICENSE](LICENSE).
