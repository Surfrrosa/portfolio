# Session: 2026-04-09 -- Blog posts, audit fixes, sandbox bug

## What happened
- Updated 'How I Built Synestrology' blog post with user's personal backstory (Thailand, HD classes), removed tl;dr section, prose fixes throughout
- Published 'The Skill Layer' blog post: practical guide to 20 custom Claude Code skills with catalog and getting-started guidance
- Ran /seo (88/100), /a11y (85/100), and /perf audits on portfolio
- Fixed sitemap leaking 5 draft post URLs to Google
- Added aria-label to social links in sidebar (LinkedIn, GitHub, Art Portfolio)
- Removed maximumScale: 1 from viewport meta (WCAG pinch-to-zoom violation)
- Replaced 4 render-blocking Google Font CSS @imports with next/font (Archivo, League Spartan now loaded via next/font alongside Inter and Bebas Neue)
- Cleaned up macOS resource fork files breaking the build
- Discovered and diagnosed Claude Code sandbox bug: PATH-resolved binaries (git, cat, ls via nvm) blocked on removable USB volumes while /usr/bin/ equivalents work. Filed as GitHub issue on anthropics/claude-code.
- Helped user draft application form answer about Claude Code process
- Verified stale known issues from 03-28 session: most already fixed (shainarazavi never existed, How I Built Synestrology written, dead Sidebar icons cleaned, Contra link removed)

## Decisions made
- Keep 'AI Product Architect' title over 'AI Product Manager' (less crowded, more accurate, signals builder not coordinator)
- Leave 36MB hero GIF alone for now (site feels fast, not the priority vs discoverability)
- Blog voice for 'The Skill Layer': straightforward, educational, practical (not a showcase of user's setup)
- Reverted 'I Know I Got Skillz' title back to 'The Skill Layer' (Shaq reference too niche)

## Known issues
- 36MB hero-banner.gif on homepage (perf issue, not urgent)
- 33MB hero-banner1.gif appears unused, can delete
- 2MB og-image.png (should compress for faster social previews)
- 55 PNG/JPG images in public/, none WebP/AVIF
- floatless-marketing.mp4 (11MB) for killed project, can delete
- 5 blog posts still in draft: terminal-office-space, the-same-mistake-faster, the-catalog-of-what-is-possible, agile-is-a-pyramid-scheme, why-most-product-roadmaps-fail
- LinkedIn description still shows "connoisseur of clouds | product builder" (stale positioning)
- Contact form heading hierarchy skips h2 (h1 to h3)
- ASCII art smiley in sidebar missing aria-hidden
- No per-article OG images for most posts
- No internal linking between blog posts
- Claude Code sandbox bug with SSD: use /usr/bin/git, /bin/cat, /bin/ls as workaround

## Next session
- Cross-post 'The Skill Layer' or 'How I Built Synestrology' to dev.to or Medium with canonical link (backlinks + distribution)
- Update LinkedIn headline/description to reflect AI Product Architect positioning
- Review and publish draft blog posts (5 sitting unpublished)
- Consider compressing og-image.png and cleaning up unused assets (hero-banner1.gif, floatless video)
- Add internal links between related blog posts (SEO growth signal)
