---
name: TTCorp Solutions brand rename convention
description: Display text vs code identifier split when the company name changed from TTCorpSolutions to TTCorp Solutions
---

All user-facing strings (headings, meta text, alt text, footer copy) must read "TTCorp Solutions" with a space.

Code identifiers (component names like `TTCorpSolutionsLogo`, `WhyTTCorpSolutions`, prop type names, file names) intentionally keep the no-space form `TTCorpSolutions` — these were left unchanged during the rebrand and should stay that way for consistency; only literal display strings should have the space.

**Why:** avoids a large, risky rename of files/imports across the codebase for a purely cosmetic text change.

**How to apply:** when adding new components/copy, use "TTCorp Solutions" in any text rendered to users, but keep new component/type names in the no-space `TTCorpSolutions` style if they follow the existing pattern.
