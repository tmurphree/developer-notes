---
name: checklist-audit
description: >-
  Audits checklist markdown under checklists/ for conformance to project markdown
  and formatting rules. Use when the user runs /checklist-audit, asks to audit
  checklists, or wants checklist conformance review.
disable-model-invocation: true
---

# Checklist audit

Run a conformance review of all checklist pages.

## Steps

1. Read `.cursor/prompts/checklist-audit.md` and follow it exactly.
2. Read `.cursor/rules/markdown.mdc` and `.cursor/rules/AGENTS.mdc`.
3. Discover and read every file matching `checklists/**/*.md`.
4. Report results using the output format in the prompt file.
5. Do not edit files unless the user explicitly asks for fixes.

## Invoke

User runs `/checklist-audit` in Agent chat, or asks to audit checklists.
