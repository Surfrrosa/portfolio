# Security Checklist

## Environment Variables

- [x] `.env.local` is gitignored (listed in `.gitignore`)
- [x] `.env.example` contains placeholder values only, no real secrets
- [x] Secrets (`RESEND_API_KEY`) accessed via `process.env` server-side only
- [x] No secrets exposed to client-side bundles
- [x] Production env vars stored in Vercel dashboard, not in repo

## API Route Security

### `/api/contact` (POST)
- [x] Input validation: checks for required fields (name, email, message)
- [x] Returns generic error messages (no stack traces or internal details)
- [x] Uses `replyTo` instead of injecting user email into `from` field
- [x] Server-side only: Resend SDK and API key never reach the client
- [ ] Rate limiting: not implemented (Vercel provides basic DDoS protection)
- [ ] CSRF protection: not implemented (acceptable for public contact forms)

## Input Handling

- [x] Contact form uses controlled React inputs (no `dangerouslySetInnerHTML` on user input)
- [x] Blog content is author-controlled MDX, not user-submitted
- [x] `StructuredData` uses `JSON.stringify` for safe JSON-LD injection
- [x] No SQL databases (no SQL injection surface)
- [x] No URL parameter parsing for dynamic queries

## Dependencies

- [x] All dependencies pinned to exact versions (no caret `^` or tilde `~`)
- [x] No known malicious packages
- [x] Unused packages removed to reduce attack surface
- [x] `sharp` included as devDependency for image optimization (build-time only)

## CORS and Headers

- [x] Next.js default CORS behavior (same-origin for API routes)
- [x] No custom CORS headers configured (API is same-origin only)
- [x] Vercel adds security headers by default (X-Frame-Options, etc.)

## Authentication

- No authentication required (public portfolio site)
- No user accounts or sessions
- No admin panel

## Deployment

- [x] Vercel auto-deploys from `main` branch only
- [x] HTTPS enforced by Vercel
- [x] No SSH keys, deploy tokens, or credentials in repo
- [x] Build logs do not expose secrets (env vars are masked)

## Content Security

- [x] External scripts limited to Google Analytics (loaded via `next/script`)
- [x] Vercel Analytics loaded as first-party
- [x] No inline scripts except GA config (CSP-compatible via `next/script`)
- [x] Images served from same origin or specified domains
- [x] Video/audio assets served from same origin

## Monitoring

- Google Analytics for traffic monitoring
- Vercel Analytics for performance and web vitals
- Vercel deployment logs for build and runtime errors
