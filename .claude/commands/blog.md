# Portfolio Blog Post

Write a blog post for the portfolio writing section at shainapauley.com/writing.

## Arguments

The user will specify a topic or title, e.g. `/blog why most product roadmaps fail` or `/blog new post about CI/CD pipelines`. They may also provide notes, a rough outline, or just a direction to explore.

## Process

### Step 1: Read existing posts for context
- Read `content/blog/` directory to see existing posts and their frontmatter patterns
- Read 2-3 recent posts to calibrate voice and format
- Read `CLAUDE.md` for project rules

### Step 2: Research (if needed)
If the topic involves industry trends, current discourse, or claims that need grounding:
- Use WebSearch to find recent articles, data, and perspectives
- Find specific numbers, quotes, or examples to anchor the argument
- Identify what's being left out of the mainstream conversation (this is where the best posts come from)

### Step 3: Gather details
Ask the user (if not already provided):
- **Core argument** -- what's the one thing the reader should take away?
- **Title** -- what's the post called? (Can be refined during writing)
- **Draft or publish?** -- should `draft` be `true` or `false`?

### Step 4: Create the MDX file
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

### Step 5: Write the post

#### Voice Profile

The portfolio voice is: conversational with sophisticated syntax, curious not certain, pragmatic not idealistic, darkly humorous but not cynical. It sounds like someone who has thought deeply about a problem AND tried to solve it, then is sharing both the thinking and the scars.

**Core patterns to follow:**

1. **The Inversion Hook.** Open by stating what everyone believes, then immediately invert it. Don't ease in. The first two sentences should reframe the reader's assumptions.

2. **Specificity as Credibility.** Use exact numbers, dates, and metrics. "323 npm packages" not "hundreds of packages." Ground philosophy in evidence. Personal experience anchors every argument.

3. **Personal Experience + Pattern Recognition.** Oscillate between "here's what happened to me" and "here's what this means for everyone." Never stay in memoir mode. Always zoom out to the universal principle.

4. **Metaphor Over Jargon.** Use extended metaphors to explain complex systems (spiderwebs for thinking architecture, straightjackets for process constraints). Titles can be playful, colloquial, or reference songs/culture.

5. **The Spiral Structure.** Sections follow: problem, attempt, failure, learning, application. Show the work, not just conclusions.

6. **Sentence Rhythm.** Vary deliberately. Short punchy opener (5-10 words). Medium explanation (1-2 sentences). Longer reflection with subordinate clauses. Return to short concrete statement to land the point. Paragraphs are 3-5 sentences, rarely over 150 words.

7. **Relationship with Reader.** Peer, not guru. Share experience, not prescriptions. Use "I" for personal journey, "we" when inviting reader into the frame, "you" when identifying universal experience (not commanding).

8. **Hold complexity.** Don't pick sides in binary debates. Reframe: "The split was never AI code vs. human code. It's directed work vs. undirected work."

**Section headers:** Lowercase, creative, often cultural references or metaphors. Not corporate ("The Framework for Success"). More like: "fruity loops," "the known unknowns," "bare necessities," "sneaky snake."

**Closings:** End with an observation, not a command. Grounded, slightly philosophical. No motivational poster copy. The best closings reframe the entire post in one sentence.

#### Hard Rules (mandatory)

- No emojis. Ever.
- No em dashes or double hyphens. Use commas, periods, semicolons, or colons instead.
- No AI speak: delve, navigate, tapestry, landscape, beacon, realm, embark, harness, pivotal, multifaceted, nuanced (as filler), "it's important to note that," "at the end of the day," "in a very real sense," "let's dive in," "game-changer," "unlock"
- Contractions are mandatory. Write like you talk.
- No corporate jargon without interrogating it first ("synergy," "leverage," "move the needle")
- No technology triumphalism. AI isn't saving or destroying anything. It's a tool that amplifies what's already there.
- No us-vs-them framing. Reframe binaries into spectrums.
- Every paragraph earns its place. No filler.

### Step 6: Review
Before presenting the post:
- Scan for em dashes and double hyphens (replace all)
- Scan for AI speak (replace all)
- Scan for emojis (remove all)
- Check that the opening hooks within 2 sentences
- Check that the closing is an observation, not a command
- Verify the slug is clean
- Verify the excerpt is under 200 characters
- Verify tags are consistent with existing posts (check `content/blog/` for common tags)
- Confirm read time estimate
- Check for repetitive sentence structures across consecutive paragraphs

### Step 7: Present
Show the user the complete post and ask if they want to:
1. Publish it (set `draft: false`)
2. Keep it as draft
3. Make edits

Do NOT commit automatically. Let the user decide when to commit.
