# Session: 2026-03-28 -- AI Product Architect Repositioning

## What happened
- Full SEO repositioning from "Product Builder / Technical Product Owner" to "AI Product Architect"
- Updated all back-end metadata: meta title, description, keywords, OG/Twitter cards across layout.tsx and all page layouts (about, work, contact, method, writing)
- Updated all structured data: Person schema (jobTitle, knowsAbout, description), WebSite, WebPage, ProfessionalService, ArticleStructuredData, WritingStructuredData
- Updated RSS feed description
- Rewrote visible copy on about page: intro, "Proven Impact" bullet #2, three FAQ answers (What's an AI Product Architect, How do you use AI, What's your typical engagement)
- Updated Synestrology "My Role" on work page
- Updated contact page "What I Do" and "Industries" sections
- Drafted "Terminal Office Space" blog post (currently draft: true), saved OG image to public/images/og/
- Removed macOS resource fork file that was breaking builds
- Updated resume (surfrrosa/resume repo): title, profile, core strengths, methods, tools, selected projects, freelance section
- Removed Prompt2Story from resume (project retired, domain for sale)
- LinkedIn profile updates: about section, Open to Work preferences (Product Engineer), freelance experience title/bullets, added 5 new top skills (AI Product Architecture, Agentic Systems Design, Claude Code, Context Architecture, Evaluation Design), updated What I Do and Industries on services section

## Decisions made
- Positioning anchor is "AI Product Architect" across all surfaces (portfolio, resume, LinkedIn)
- SEO keywords target the 7 skills from the AI job market: specification precision, evaluation harnesses, multi-agent orchestration, context architecture, failure pattern recognition, trust/security design, token economics
- Visible copy kept balanced: not all-AI, reflects full range of work (Chrome extensions, journalism, privacy tools, enterprise)
- User pushed back on corporate jargon; FAQ answers rewritten in plain language
- Sidebar bio ("action-oriented dreamer...") stays untouched, it's personal brand
- Work page heading ("stuff I've been working on") stays, it's the vibe
- Writing page heading stays
- LinkedIn headline "connoisseur of clouds | product builder" stays per user preference
- Prompt2Story retired from all surfaces (portfolio work page still has other projects)
- Terminal Office Space blog post saved as draft pending user review

## Known issues
- Terminal Office Space blog post needs user review and edits before publishing
- "How I Built Synestrology" blog post planned but not started
- GitHub username inconsistency in Absurdity Index posts still unresolved (Surfrrosa vs shainarazavi)
- No per-article OG images for older blog posts (default og-image.png used)
- GA ID now uses env var (NEXT_PUBLIC_GA_ID) but may need verification
- Dependabot flagging 2 vulnerabilities (1 high, 1 moderate)
- Dead icon components (MediumIcon, SubstackIcon) still in Sidebar.tsx
- LinkedIn skills list still has legacy entries that should be removed/deprioritized
- Contra link on contact page is placeholder (href="#", opacity-40, cursor-not-allowed)

## Next session
- User to review Terminal Office Space blog post, provide feedback, publish when ready
- Plan and write "How I Built Synestrology" blog post (case study format, no repo exposure)
- LinkedIn skills cleanup: remove legacy noise (Workday, PLM Tools, Snowflake, Microsoft Excel, etc.)
- Consider whether Absurdity Index posts belong on work page vs writing page
- Address remaining tech debt from previous sessions
