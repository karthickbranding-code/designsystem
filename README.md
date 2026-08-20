# Enterprise Design System

A reusable **Enterprise Tech Blue Design System** for building consistent SaaS, AI, industrial, analytics, CFO, HR and operations applications.

## What this repository provides

- Design tokens: colors, typography, spacing, radius and elevation
- Responsive rules from mobile to 1920px+ / TV dashboards
- Reusable UI component specifications
- Dashboard patterns for enterprise applications
- AI Agent, AI Insight, RAG and document-ingestion patterns
- Figma component guidance
- Tailwind + shadcn/ui guidance
- Accessibility, density, motion and quality standards

## AI-first usage

The key file for AI coding assistants is:

`skills/enterprise-tech-blue/SKILL.md`

Give this skill to Claude, Antigravity or another coding agent as the project's design-system instruction. Then ask the agent to build the application. The agent should follow the skill instead of inventing a separate visual system.

The full reference specification is:

`docs/ENTERPRISE_TECH_BLUE_DESIGN_SYSTEM.md`

## Claude

If your Claude environment supports Skills, upload or install the `skills/enterprise-tech-blue/` directory. The `SKILL.md` contains YAML frontmatter and is intentionally written as a reusable skill.

For a project-level instruction, you can also reference the skill from your project instructions:

> Use `skills/enterprise-tech-blue/SKILL.md` as the mandatory visual and interaction design system for this project. Follow its tokens, components, responsive rules, accessibility rules and quality gate. Do not invent a separate design language unless explicitly instructed.

## Antigravity / coding agents

Clone this repository or copy the `skills/enterprise-tech-blue/SKILL.md` into the application's repository. Tell the coding agent:

> Read and follow `skills/enterprise-tech-blue/SKILL.md` before creating or modifying UI. Use the Enterprise Tech Blue Design System for all screens, components, responsive behavior and interaction states.

For agents that use `AGENTS.md`, `CLAUDE.md` or equivalent project instruction files, add the same instruction there.

## Recommended application repository structure

```text
my-app/
├── AGENTS.md                 # coding-agent rules
├── CLAUDE.md                # Claude project instructions, if used
├── src/
├── components/
├── styles/
└── design-system/
    └── SKILL.md              # copied/synced from this repository
```

## Team workflow

1. One owner maintains the design-system repository.
2. Product teams consume the skill and tokens rather than creating competing styles.
3. New components are proposed with states, responsive behavior and accessibility requirements.
4. Approved components/patterns are added to the system.
5. Product applications update their synced copy when the design system changes.

## Important distinction

This repository contains the **design language and implementation guidance**. It does not force a particular framework. It can guide Next.js/React, Tailwind, shadcn/ui and other application stacks.

## Repository

`karthickbranding-code/designsystem`
