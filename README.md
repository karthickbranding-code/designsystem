# Enterprise Tech Blue Design System

A reusable, framework-light **Enterprise Tech Blue** component library for enterprise SaaS, web applications, websites, AI products and industrial products.

## Architecture

One design system. One source of truth. Multiple product layers.

- **Foundations** — tokens, typography, spacing, radius, responsive rules
- **Core** — reusable primitives used everywhere
- **SaaS / Data** — tables, metrics, filters, pagination, command palette
- **Web App** — app shell, page header and application layout
- **Website** — hero, feature grid, CTA, FAQ
- **AI / Industrial** — agent, insight, upload, status monitor, AI chat

Product applications should consume this library instead of recreating its CSS.

## React usage

```bash
npm install github:karthickbranding-code/designsystem
```

```jsx
import {
  Button, Card, MetricCard, DataTable, AppShell,
  Hero, AgentCard, InsightCard
} from "@karthickbranding/enterprise-tech-blue";
import "@karthickbranding/enterprise-tech-blue/styles.css";
```

## Component layers

### Core
Button, IconButton, Card, Input, SearchInput, Badge, Status, Avatar, Tabs, Alert, Skeleton, Loading, EmptyState, Dialog.

### SaaS / Data
MetricCard, DataTable, Pagination, FilterBar, CommandPalette.

### Web App
AppShell, PageHeader.

### Website
Hero, FeatureGrid, CTA, FAQ.

### AI / Industrial
AgentCard, InsightCard, FileUpload, StatusMonitor, AIChat.

## Source of truth

- `skills/enterprise-tech-blue/SKILL.md`
- `docs/ENTERPRISE_TECH_BLUE_DESIGN_SYSTEM.md`
- `src/index.jsx`
- `src/styles.css`

## Design rule

**Reuse first. Extend second. Duplicate last.**

New components should be added to the library when they are reusable across more than one product or represent an important product pattern. Keep application-specific compositions inside the consuming application.
