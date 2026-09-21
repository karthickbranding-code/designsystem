# Enterprise Tech Blue Design System

A reusable **Enterprise Tech Blue** design system for enterprise SaaS, web applications, websites, AI products and industrial products.

## Architecture

One system. Multiple product layers. Shared foundations and reusable components.

```text
Enterprise Tech Blue
├── Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Grid
│   ├── Radius
│   ├── Elevation
│   └── Accessibility
│
├── Packages
│   ├── foundations
│   ├── core
│   ├── forms
│   ├── data
│   ├── navigation
│   ├── feedback
│   ├── overlays
│   ├── layout
│   ├── website
│   ├── ai
│   ├── industrial
│   └── icons
│
├── Documentation
│   ├── Component Catalogue
│   ├── Foundations Catalogue
│   ├── Patterns Catalogue
│   └── Individual Component Documentation
│
├── Examples
│   ├── SaaS Dashboard
│   ├── Website
│   ├── AI Workspace
│   ├── Industrial Operations
│   └── Marketing Command Center
│
└── Runtime Library
    ├── src/index.jsx
    └── src/styles.css
```

## Component Catalogue

The repository is organized so every reusable component can have its own discoverable folder and documentation.

### Core
Button, IconButton, Card, MetricCard, Badge, Avatar.

### Forms
Input, SearchInput, FileUpload.

### Data
DataTable, Pagination, FilterBar, CommandPalette.

### Navigation
AppShell, PageHeader, Tabs.

### Feedback
Alert, Skeleton, EmptyState, Loading.

### Overlays
Dialog.

### Website
Hero, FeatureGrid, CTA, FAQ.

### AI
AIChat, AgentCard, InsightCard.

### Industrial
StatusMonitor and future plant, machine, sensor and operations components.

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

## Source of truth

- `skills/enterprise-tech-blue/SKILL.md`
- `docs/ENTERPRISE_TECH_BLUE_DESIGN_SYSTEM.md`
- `src/index.jsx`
- `src/styles.css`

## Design rule

**Reuse first. Extend second. Duplicate last.**

IBM Carbon is used only as a benchmark for the level of repository organization and documentation quality. Enterprise Tech Blue keeps its own visual language, tokens and product philosophy.
