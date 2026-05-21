# Checklist conformance audit

Audit every file matching `checklists/**/*.md`.

## Rules to apply

Read and apply these project rules in full:

- `.cursor/rules/markdown.mdc` — Jekyll frontmatter, markdown formatting
- `.cursor/rules/AGENTS.mdc` — global formatting (indentation, sentence spacing in prose)

## Checks per file

1. **Frontmatter** — Present with `layout: default` and a sensible `title` (aligned with the page `#` heading or a short page name).
2. **Lists** — Simple hyphen bullets (`-`), not mixed conventions unless already established in the file.
3. **Headings** — No blank line between a heading and the first line of content below it.
4. **Prose** — Two spaces after sentence-ending `.`, `?`, or `!` in narrative text (not in code, URLs, or frontmatter).
5. **Indentation** — Four spaces where indentation is used.
6. **Structure** — Clear `#` title; sections use consistent heading levels.
7. **Length** — Keep checklist items concise (<=3 sentences).
    - Never more than 36 lines per file.
8. **Voice** - Use 'you' and imperatives in checklist items, not 'I' or 'we'.

## Output format

For each file under `checklists/`:

```text
### checklists/<filename>.md — PASS | FAIL

- [rule or check]: OK | issue — brief fix
```

End with a short summary: total files, pass count, fail count, and prioritized fixes.

Do not edit files unless the user asks you to apply fixes.
