---
layout: default
title: Code Review Checklist
---

# Code Review Checklist
## Quality
- Reability
- Tested

## Performance
- Pay attention to loops.
    - API call in loop?  If so, can you batch the requests?
    - Database query in loop?  If so, this may be an N+1 issue.  Get all the data in one query before the loop.
