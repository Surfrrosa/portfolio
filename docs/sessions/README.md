# Session Logs

Ephemeral pickup notes for development sessions. Not decision archaeology — decisions live in permanent homes (see below). Session logs are here to help future-self pick up where past-self left off.

## Naming

`YYYY-MM-DD-short-description.md`. Newest first when reading.

## Retention

Kept for the last 30 days. Older logs are pruned during `/bedtime` runs. Anything worth remembering longer than 30 days should be promoted to a permanent home before deletion. Git preserves deleted logs — recover with `git log --all -- 'docs/sessions/*'`.

## Where decisions actually live

| Kind of thing | Permanent home |
|---|---|
| Positioning shifts, service framing | `CLAUDE.local.md` |
| Code conventions, Key Files, "Before Writing" | `CLAUDE.md` |
| Shipped features (what's live in prod) | This project doesn't have a `CURRENT_STATE.md`; blog voice + rules live in `CLAUDE.md` |
| Voice / brand corrections | `CLAUDE.md` "Blog Posts" section |
| User-level cross-project preferences | `~/.claude/projects/-Users-surfrrosa/memory/` |

## Session-log template

```markdown
# Session: YYYY-MM-DD — Short Title

**Status:** <Complete | In Progress | Blocked>

## What shipped
- PR #X — one line

## What's open
- Uncommitted / unpushed / awaiting review

## Next pickup
<2-3 sentences: single most important thing for the next session>

## Promotion audit
<what got promoted to which permanent home this session>
```

## Current handoff

Read [`HANDOFF.md`](HANDOFF.md) first when starting a session. It's a live snapshot of pickup state.
