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

### Step 1.5: Clean macOS resource forks
The repo lives on an external SSD and macOS periodically drops `._*` resource fork files into `content/blog/`. Next.js tries to render these as blog posts and the build explodes. There's no known way to prevent them at the source (filed as an Anthropic bug for the sandbox case), so we clean them up every preflight:

```bash
find . -name "._*" -type f -delete
```

Report how many files were removed (if any).

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
- Validate `package.json` has no duplicate keys in the dependency blocks. Dependabot merges can leave duplicates that `JSON.parse` silently flattens (takes the last value), which still passes `npm install` but quietly blocks every subsequent dependabot rebase with `mergeable: UNKNOWN`:

```bash
node -e "
const txt = require('fs').readFileSync('package.json', 'utf8');
const blocks = ['dependencies','devDependencies','peerDependencies','optionalDependencies'];
let failed = false;
for (const b of blocks) {
  const start = txt.indexOf('\"' + b + '\"');
  if (start < 0) continue;
  const open = txt.indexOf('{', start);
  let depth = 0, end = open;
  for (let i = open; i < txt.length; i++) {
    if (txt[i] === '{') depth++;
    else if (txt[i] === '}' && --depth === 0) { end = i; break; }
  }
  const keys = [...txt.slice(open, end).matchAll(/\"([^\"]+)\"\s*:/g)].map(m => m[1]);
  const dupes = [...new Set(keys.filter((k,i) => keys.indexOf(k) !== i))];
  if (dupes.length) { console.error('Duplicate ' + b + ' keys:', dupes); failed = true; }
}
process.exit(failed ? 1 : 0);
console.log('package.json: deps clean');
"
```

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
