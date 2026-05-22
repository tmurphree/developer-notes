---
layout: default
title: grep example
---

# Search src for 'MyComponent' recursively, case-insensitive, and include file names and line numbers in the output 
grep -RHinF 'MyComponent' src/

## Flags
| Flag | Long form | Meaning |
|------|-----------|---------|
| `-R` | `--recursive` | Search under `src/` and all subdirectories. |
| `-H` | `--with-filename` | Print the file path before each match (useful with `-R`). |
| `-i` | `--ignore-case` | Case-insensitive match (`mycomponent` matches too). |
| `-n` | `--line-number` | Show the line number of each match. |
| `-F` | `--fixed-strings` | Treat the pattern as plain text, not a regex (`MyComponent` is literal). |

Example output shape: `path:line:matched line`

You need the single quotes around the search string to prevent the shell from expanding it.
