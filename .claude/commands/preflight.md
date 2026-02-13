# Preflight Check

Run build and lint checks before pushing to main. Since main auto-deploys to Vercel, this catches breakage before it hits production.

## Process

### Step 1: Check git state
```bash
git status
git log --oneline -5
```

Report:
- Current branch
- Uncommitted changes (if any)
- How many commits ahead of origin

### Step 2: Run lint
```bash
npm run lint
```

Report any lint errors or warnings. If errors exist, offer to fix them.

### Step 3: Run build
```bash
npm run build
```

Report:
- Build success or failure
- Any TypeScript errors
- Any warnings worth noting
- Build output size if available

### Step 4: Quick sanity checks
- Verify no `.env.local` or secrets are staged
- Verify no `.DS_Store` files are staged
- Check that `content/blog/` posts with `draft: false` have all required frontmatter fields (title, date, excerpt, readTime, tags)

### Step 5: Report

Present a clear pass/fail summary:

```
PREFLIGHT CHECK
===============
Lint:     PASS / FAIL
Build:    PASS / FAIL
Secrets:  CLEAN / WARNING
Drafts:   OK / [issues]

Ready to push: YES / NO
```

If everything passes, ask if the user wants to push now.
If anything fails, list exactly what needs fixing.
