---
name: Shared PageHero component
description: A reusable dark navy/orange hero section component matching the site's premium brand hero, used across secondary pages.
---

The site has a shared `PageHero` component (dark navy gradient, orange eyebrow badge, optional `actions` slot, radial glow + grid overlay) that replaced individual light-themed hero sections on secondary pages.

**Why:** The user asked for the entire site to match the premium dark navy/orange aesthetic of the Home hero rather than having each page implement its own light hero markup.

**How to apply:** When adding a new page or section that needs a page-level hero, reuse this component (props: `eyebrow`, `title`, `description` as ReactNode, optional `actions`, optional `id` for a11y heading anchors) instead of writing a new light-themed hero block. Restyle any CTA buttons in the hero to the orange/sky gradient pill style already used elsewhere (e.g. CTASection) for visual consistency.
