# developer-notes

Developer notes, checklists, and examples.  Published at [https://tmurphree.github.io/developer-notes/](https://tmurphree.github.io/developer-notes/).

Site content lives in [index.md](index.md).

## Cursor Agent

This repo includes Cursor configuration under `.cursor/` for consistent markdown and checklist reviews.

### Project rules

Rules apply automatically when relevant:

| Rule | Scope | Purpose |
|------|--------|---------|
| [AGENTS.mdc](.cursor/rules/AGENTS.mdc) | Always | Global formatting (indentation, prose spacing) |
| [markdown.mdc](.cursor/rules/markdown.mdc) | `**/*.md` | Jekyll frontmatter and markdown style |
| [cursor-instructions.mdc](.cursor/rules/cursor-instructions.mdc) | `**/*.mdc` | Conventions for editing Cursor rules |

### Skills

Skills are reusable Agent workflows.  They run only when you invoke them (not on every message).

| Skill | Invoke | What it does |
|-------|--------|----------------|
| [checklist-audit](.cursor/skills/checklist-audit/SKILL.md) | `/checklist-audit` in Agent chat | Audits every `checklists/**/*.md` file against project rules |

**How to run a skill**

1. Open **Agent** chat in Cursor.
2. Type `/` and choose **checklist-audit**, or type `/checklist-audit`.
3. The agent reads the skill, loads [markdown.mdc](.cursor/rules/markdown.mdc) and [AGENTS.mdc](.cursor/rules/AGENTS.mdc), scans `checklists/`, and reports **PASS** or **FAIL** per file.

You can also ask in plain language, e.g. “audit checklists,” after invoking the skill or mentioning it.

### Prompts

[checklist-audit.md](.cursor/prompts/checklist-audit.md) holds the detailed audit checklist (checks and report format).  The [checklist-audit](.cursor/skills/checklist-audit/SKILL.md) skill tells the agent to read that file when you run `/checklist-audit`.

To run the prompt without the slash command, reference it in chat:

```text
@checklist-audit.md audit all files in checklists/ per @markdown.mdc
```

### Adding more skills or prompts

- **Skill:** add `.cursor/skills/<name>/SKILL.md` with `name`, `description`, and `disable-model-invocation: true` for on-demand workflows.
- **Prompt:** add `.cursor/prompts/<name>.md` and point a skill or command at it, or `@`-mention the file in chat.

See [Cursor rules documentation](https://cursor.com/docs/rules) for rules, commands, and skills.
