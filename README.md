# Enterprise Tech Blue Design System

A reusable **Enterprise Tech Blue Design System** for enterprise SaaS, AI, industrial, analytics, CFO, HR and operations products.

## Now includes

- Master design tokens and responsive rules
- AI-first coding skill
- Reusable React component library
- Accessible interaction states
- Enterprise dashboard primitives
- CSS distributed with the library
- Figma implementation guidance

## React library

Install the package from this repository:

```bash
npm install github:karthickbranding-code/designsystem
```

Import the library and its styles:

```jsx
import { Button, Card, MetricCard, Input, Badge, Tabs, Dialog } from "@karthickbranding/enterprise-tech-blue";
import "@karthickbranding/enterprise-tech-blue/styles.css";
```

### Core components

Button, IconButton, Card, MetricCard, Input, SearchInput, Badge/Status, Avatar, Tabs, Alert, Skeleton/Loading, EmptyState, Dialog.

The library owns the visual implementation. Product applications should consume these components rather than recreating the same CSS locally.

## Source of truth

- `skills/enterprise-tech-blue/SKILL.md` — AI coding rules
- `docs/ENTERPRISE_TECH_BLUE_DESIGN_SYSTEM.md` — complete design specification
- `src/index.jsx` — React component API
- `src/styles.css` — token-backed implementation

## Build

```bash
npm install
npm run build
```

The package is intentionally lightweight: React is a peer dependency and the library has no UI framework dependency.
