# Portfolio Session Log

Generate an end-of-session log for portfolio development work.

## Process

### Step 1: Gather context
- Check today's date
- Read `docs/sessions/README.md` for the format
- List existing session logs to determine filename (if today already has a log, use `-2`, `-3`, etc.)
- Review git log since the last session log to see what changed:
  ```bash
  git log --oneline --since="today"
  ```
- Review the conversation history to capture decisions and context that git log misses

### Step 2: Write the session log
Create `docs/sessions/YYYY-MM-DD-short-description.md` with this format:

```markdown
# Session: YYYY-MM-DD -- Short Title

## What happened
- Specific bullet points of work completed
- Include file names and concrete changes
- Group by category if multiple areas were touched

## Decisions made
- Architectural or design choices and the reasoning
- Anything that future sessions shouldn't re-litigate

## Known issues
- Anything broken, degraded, or needing attention

## Next session
- What to pick up next, prioritized
```

### Step 3: Commit
Stage and commit:
```bash
git add docs/sessions/YYYY-MM-DD-*.md
git commit -m "Add session log for YYYY-MM-DD ([brief summary])"
```

## Rules
- Be specific, not vague. "Updated work page" is bad. "Added Floatless project card to work page with 4 impact metrics" is good.
- Include file paths when mentioning changes.
- Keep the whole log under 80 lines.
- No emojis. No em dashes.
