# Portfolio Repo Audit

Run a health check on the portfolio repo. Catches cruft, dead code, and hygiene issues before they accumulate.

## Process

### Step 1: File hygiene
```bash
# Check for .DS_Store tracked in git
git ls-files | grep -i ds_store

# Check for uncommitted changes
git status

# Check for files that look like testing artifacts
find . -maxdepth 1 -name "*.tmp" -o -name "dummy*" -o -name "test*" -o -name "TODO*" | grep -v node_modules
```

### Step 2: Dead code scan
Search for components that are exported but never imported:
```bash
# For each component in src/components/, check if it's imported anywhere
for f in src/components/*.tsx; do
  name=$(basename "$f" .tsx)
  count=$(grep -r "$name" src/ --include="*.tsx" --include="*.ts" -l | grep -v "$f" | wc -l)
  if [ "$count" -eq 0 ]; then
    echo "UNUSED: $name"
  fi
done
```

Also check `src/lib/` for unused utility files.

### Step 3: Blog post validation
For each post in `content/blog/`:
- Verify required frontmatter: title, date, excerpt, readTime, tags
- Check that non-draft posts have all fields populated
- Flag any posts with `draft: true` that might be forgotten

### Step 4: Dependency check
```bash
npm audit --audit-level=high 2>&1 | tail -20
```

Report any high or critical vulnerabilities.

### Step 5: Branch hygiene
```bash
git branch -r
git branch
```

Flag any stale branches (remote or local) beyond main.

### Step 6: Quick accessibility check
Scan a few key files for common a11y issues:
- Images without alt text
- Buttons/links without aria-labels
- Form inputs without labels
- Missing lang attribute on html tag

### Step 7: Report

Present a summary:

```
REPO AUDIT
==========
File hygiene:    CLEAN / [issues]
Dead code:       CLEAN / [list unused files]
Blog posts:      OK / [issues]
Dependencies:    OK / [vulnerabilities]
Branch hygiene:  CLEAN / [stale branches]
Accessibility:   OK / [issues]

Overall: X issues found
```

List each issue with a recommended fix. Do NOT fix anything automatically. Present findings and let the user decide what to address.
