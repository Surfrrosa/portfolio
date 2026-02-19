# Portfolio Blog Post

Scaffold and write a new blog post for the portfolio writing section.

## Arguments

The user will specify a topic or title, e.g. `/blog why most product roadmaps fail` or `/blog new post about CI/CD pipelines`.

## Process

### Step 1: Read existing posts for context
- Read `content/blog/` directory to see existing posts and their frontmatter patterns
- Read 1-2 recent posts to calibrate voice and format
- Read `CLAUDE.md` for project rules

### Step 2: Gather details
Ask the user (if not already provided):
- **Title** -- what's the post called?
- **Core argument** -- what's the one thing the reader should take away?
- **Draft or publish?** -- should `draft` be `true` or `false`?

### Step 3: Create the MDX file
Write to `content/blog/[slug].mdx` with this frontmatter:

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "One or two sentences. This shows on the /writing listing page."
readTime: "X min read"
tags: ["Tag1", "Tag2"]
draft: true
---
```

**Slug rules:**
- Lowercase, hyphenated
- No filler words (the, a, an, of) unless they're part of the title identity
- Keep it under 60 characters

**Read time:** Estimate based on ~250 words per minute.

### Step 4: Write the post
Write the full post body in MDX.

**Voice rules (mandatory):**
- No emojis. Ever.
- No dashes (em dashes, double hyphens, etc.) unless absolutely necessary. Use commas, periods, or colons instead.
- No AI speak: delve, navigate, tapestry, landscape, beacon, realm, embark, harness, pivotal, multifaceted, nuanced (as filler), "it's important to note that," "at the end of the day," "in a very real sense," "let's dive in"
- Contractions are fine and encouraged. Write like you talk.
- Be direct. Get to the point in the first two sentences.
- No filler paragraphs. Every paragraph earns its place.

### Step 5: Review
Before presenting the post:
- Scan for em dashes (replace all)
- Scan for AI speak (replace all)
- Verify the slug is clean
- Verify the excerpt is under 200 characters
- Verify tags are consistent with existing posts (check `content/blog/` for common tags)
- Confirm read time estimate

### Step 6: Present
Show the user the complete post and ask if they want to:
1. Publish it (set `draft: false`)
2. Keep it as draft
3. Make edits

Do NOT commit automatically. Let the user decide when to commit.
