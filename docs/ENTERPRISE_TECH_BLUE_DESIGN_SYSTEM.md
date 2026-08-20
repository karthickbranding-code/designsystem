---
name: enterprise-tech-blue-design-system
description: Complete enterprise SaaS and AI application design system using Tech Blue tokens, responsive layouts, accessible reusable components, data-dense dashboards, Figma patterns, Tailwind and shadcn/ui guidance.
---

# Enterprise Tech Blue Design System

## Purpose

Use this as the master visual and interaction system for enterprise SaaS, AI, industrial AI, analytics, CFO, HR, operations and dashboard products. The visual language is clean, precise, calm, data-dense and operational rather than decorative.

## 1. Design Principles

- Clarity before decoration.
- Information hierarchy before visual effects.
- Reuse components instead of creating one-off UI.
- Design for real content, not placeholder text.
- Every important component has default, hover, focus, active, disabled, loading, empty and error states where applicable.
- Never rely on color alone to communicate meaning.
- Never design for only one laptop resolution.
- Prefer accessible, responsive and maintainable solutions.

## 2. Color Tokens

### Primary

| Token | Value | Use |
|---|---|---|
| `primary` | `#2563EB` | Primary actions, links, active states, focus |
| `primary-hover` | `#1D4ED8` | Hover |
| `primary-active` | `#1E40AF` | Pressed/active |
| `primary-soft` | `#EFF6FF` | Selected backgrounds |
| `primary-subtle` | `#DBEAFE` | Soft highlights |
| `primary-foreground` | `#FFFFFF` | Text on primary |

### Surfaces

| Token | Value | Use |
|---|---|---|
| `background` | `#F8FAFC` | Application canvas |
| `surface` | `#FFFFFF` | Cards, panels, modals |
| `surface-muted` | `#F1F5F9` | Secondary surfaces |
| `surface-hover` | `#F8FAFC` | Hover |
| `surface-active` | `#EFF6FF` | Selected state |

### Text

| Token | Value | Use |
|---|---|---|
| `text-primary` | `#0F172A` | Headers, important data |
| `text-secondary` | `#334155` | Body |
| `text-muted` | `#64748B` | Supporting text |
| `text-subtle` | `#94A3B8` | Metadata/placeholders |
| `text-disabled` | `#CBD5E1` | Disabled |

### Borders

| Token | Value | Use |
|---|---|---|
| `border` | `#E2E8F0` | Standard separation |
| `border-strong` | `#CBD5E1` | Inputs/strong borders |
| `border-subtle` | `#F1F5F9` | Table dividers |
| `focus-ring` | `#2563EB` | Keyboard focus |

### Feedback

| State | Main | Soft |
|---|---|---|
| Success | `#10B981` | `#ECFDF5` |
| Warning | `#F59E0B` | `#FFFBEB` |
| Error | `#F43F5E` | `#FFF1F2` |
| Info | `#2563EB` | `#EFF6FF` |

Always pair status color with text/icon/shape.

## 3. Typography

Preferred fonts:

```text
Inter, Plus Jakarta Sans, system-ui, sans-serif
```

| Style | Size | Line height | Weight |
|---|---:|---:|---:|
| Display | 32px | 40px | 600 |
| H1/Page title | 24px | 32px | 600 |
| H2/Section | 18px | 24px | 600 |
| H3 | 16px | 24px | 600 |
| Body | 14px | 20px | 400 |
| Body medium | 14px | 20px | 500 |
| Small | 13px | 18px | 400 |
| Caption/Meta | 12px | 16px | 400 |
| Metric | 28–36px | 1.1 | 600 |

Use tabular numerals for financial/operational figures when supported.

## 4. Spacing

Use a 4px base with an 8px primary rhythm:

```text
4  8  12  16  24  32  40  48  64  80  96
```

Defaults:

```text
Page padding: 24–32px
Card padding: 16–24px
Section gap: 24–32px
Form gap: 12–16px
Button horizontal padding: 12–16px
```

## 5. Radius

```text
sm  4px
md  6px
lg  8px
xl  12px
2xl 16px
full 9999px
```

Defaults: buttons/inputs 6px, cards 8–12px, modals 12px, pills full.

## 6. Elevation

Prefer borders over heavy shadows.

```text
Card: border, usually no shadow
Dropdown: subtle shadow
Modal: strong shadow
Drawer: subtle shadow/border
Floating action: medium shadow
```

## 7. Responsive System

Baseline CSS breakpoints:

```text
sm   640px
md   768px
lg   1024px
xl   1280px
2xl  1536px
```

Design targets:

```text
Mobile: <640
Tablet: 640–1023
Desktop: 1024–1439
Large desktop: 1440–1919
TV/large display: 1920+
```

Use fluid width, `min-width`, `max-width`, grid, flex and container queries where appropriate. Do not use a fixed canvas width as the responsive strategy.

### Large-display/TV

Support 1920×1080 and larger. Increase critical metric size and spacing, reduce unnecessary controls, avoid tiny tables, and prefer 16:9 compositions. Do not assume physical screen resolution equals browser viewport size.

## 8. Application Shell

```text
Header
├── Logo/Breadcrumb
├── Page context
├── Search
├── Notifications
├── Help
└── User menu

Sidebar
└── Main navigation

Main
├── Page header
├── Filters/actions
├── Primary content
└── Secondary content
```

Sidebar:

```text
Expanded: 240–260px
Collapsed: 64–72px
Mobile: drawer
```

Active navigation:

```text
Background #EFF6FF
Text/Icon #1D4ED8 / #2563EB
```

## 9. Core Components

### Button

Variants:

- Primary: `#2563EB` + white, hover `#1D4ED8`, active `#1E40AF`.
- Secondary: white + `#CBD5E1` border + dark text.
- Ghost: transparent, hover `#F1F5F9`.
- Destructive: `#F43F5E` or soft `#FFF1F2` with dark rose text.
- Icon button: compact square control with accessible label.

Sizes:

```text
sm 32px
md 36px
lg 40px
```

### Link

Default `#2563EB`; hover `#1D4ED8`. Use underline when link context is ambiguous.

### Input

```text
Compact height: 36px
Default height: 40px
Border: #CBD5E1
Radius: 6px
Focus border/ring: #2563EB
```

States: default, hover, focus, filled, error, disabled, read-only.

### Select / Combobox / Multi-select

Use the same input geometry. Dropdown surface is white with border and subtle shadow. Selected option uses `#EFF6FF`. Provide keyboard navigation and clear selection where applicable.

### Checkbox / Radio / Switch

Use blue for selected/checked state. Maintain visible focus ring. Pair destructive or warning semantics with text, not color alone.

### Search

40px default. Leading search icon. Optional keyboard shortcut indicator such as `⌘K`/`Ctrl K`. Search results should support empty, loading and no-result states.

### Cards

White surface, 1px `#E2E8F0` border, 8–12px radius, 16–24px padding. Avoid decorative gradients. Use card header/body/footer hierarchy.

### Metric card

Structure: label → value → delta/trend → supporting context. Value 28–36px/600. Positive/negative trend must include arrow/icon and text.

### Badge / Status

Use compact semantic labels. Recommended states: Neutral, Info, Success, Warning, Error. Use soft backgrounds and readable foregrounds; never rely on color alone.

### Avatar

Use 32px default, 40px large, circular. Support image, initials, status dot and avatar group.

### Data table

Use strong column hierarchy, 40–48px row height, horizontal dividers `#F1F5F9`, right-align numeric columns, tabular numerals, sticky header for long tables, sorting/filtering indicators and pagination. On mobile, transform to cards or horizontally scroll rather than compressing unreadable columns.

### Charts

Use restrained visualizations with clear axes, labels and tooltips. Blue is the primary series; use semantic colors only for status. Never use a rainbow palette. Provide accessible labels and a data/table alternative where appropriate.

### Modal / Dialog

White surface, 12px radius, strong but restrained shadow. Clear title, body and footer actions. Primary action on the right. Destructive confirmation must explain consequence.

### Drawer

Use for contextual details, filters and mobile navigation. Preserve the underlying page context.

### Tabs

Use simple text/underline or subtle segmented treatment. Active tab uses `#2563EB`; inactive uses `#64748B`.

### Accordion

Clear title row, chevron, 44px+ touch target, concise content.

### Breadcrumb

Muted text with current page in `#0F172A`. Use sparingly on deep enterprise navigation.

### Tooltip / Popover / Dropdown

White surface, border, subtle shadow, 6–8px radius. Never hide essential information only inside a tooltip.

### Toast / Alert / Banner

Use semantic icon + title/message + optional action. Success #ECFDF5, warning #FFFBEB, error #FFF1F2, info #EFF6FF.

### Loading

Use skeleton blocks matching the final layout. Avoid arbitrary spinners for page-level content when skeleton loading is possible.

### Empty state

Explain what is missing, why it matters and the next action. Keep it concise and useful.

### Error state

State what failed, whether data may be affected, and provide Retry/Back/Support action where applicable.

### Pagination

Use compact controls with current page clearly indicated. Provide page size when datasets are large.

### Date/time picker

Use the standard input geometry. Show locale-aware dates and timezone where business context requires it.

### File upload / Document ingestion

Provide drag/drop plus browse. Show accepted formats, size limit, progress, validation errors and uploaded-file status. For AI/RAG products, expose ingestion status such as Uploaded → Parsing → Chunking → Embedding → Indexed → Ready.

### AI Chat

Structure: conversation header, message stream, composer, attachment/context controls. AI responses should expose source/context when relevant, loading state and retry. Keep the interface enterprise-clean rather than consumer-chat decorative.

### AI Agent card

Show: agent name, purpose, status, last run, key metric, permissions/scope and primary action. Use status chips such as Ready, Running, Attention, Failed.

### AI Insight

Use a concise insight headline, evidence/metric, confidence or source context where available, and recommended next action. Never fabricate certainty.

### Command palette

Keyboard-first searchable action list. Support `Ctrl/Cmd + K`. Group actions and show shortcuts.

## 10. Dashboard Patterns

### Executive/C-suite

Prioritize 4–6 KPIs, trends, exceptions and recommended actions. Hide raw operational noise. Use drill-down for detail.

### CFO

Typical sections: Cash Position, Cash Flow Forecast, Budget vs Actual, AP/AR, Spend, Risk/Compliance, Financial Close, Executive Insights.

### HR

Typical sections: Headcount, Hiring, Attrition, Attendance, Payroll, Performance, Engagement, Learning, Compliance, Workforce Analytics.

### Industrial / Operations

Typical sections: Plant health, production, quality, equipment state, predictive alerts, throughput, downtime, energy and root-cause insights.

## 11. Figma Implementation

Create components with Auto Layout and variants. Suggested component naming:

```text
Button/Primary
Button/Secondary
Input/Default
Input/Error
Card/Metric
Table/Default
Badge/Success
Dialog/Default
Agent/Card
Insight/Card
```

Use Variables for color, spacing, radius and typography. Use component properties for icon, label, state, size and density. Build desktop, mobile and large-display examples for important patterns.

## 12. Tailwind / shadcn/ui

Prefer Tailwind utilities and shadcn/ui primitives. Keep visual values in CSS variables/tokens rather than hard-coding values repeatedly. When a shadcn primitive already exists, extend it instead of creating a duplicate component.

## 13. Dark Mode

Dark mode is supported when requested. Preserve semantic roles rather than simply inverting colors. Use deep slate surfaces, readable slate text and accessible blue accents. Re-test every status color for contrast.

## 14. Density

Support three density modes:

- Comfortable: more whitespace, 44–48px rows
- Default: 40–44px rows
- Compact: 32–40px rows

Do not reduce typography below readable sizes merely to fit more data.

## 15. Motion

Use short, purposeful transitions (roughly 120–200ms). Prefer opacity/transform. No bouncing or decorative motion in operational dashboards. Respect reduced-motion preferences.

## 16. Accessibility

- Semantic HTML first.
- Keyboard navigation for all interactive controls.
- Visible focus ring using `#2563EB`.
- Labels for inputs.
- Accessible names for icon-only buttons.
- Minimum comfortable touch target around 44px on touch devices.
- Do not use color as the sole status indicator.
- Provide table/chart alternatives where necessary.

## 17. Implementation Workflow

When asked to build an application:

1. Identify user role and primary tasks.
2. Define information architecture and navigation.
3. Select the relevant dashboard/application pattern.
4. Reuse existing components before creating new ones.
5. Apply tokens and responsive rules.
6. Build realistic states: loading, empty, error, success, disabled.
7. Validate mobile, desktop, 1440px and 1920px+ layouts where relevant.
8. Check accessibility and data density.
9. Keep components composable and production-ready.
10. Explain any deliberate deviation from this system.

## 18. Quality Gate

Before finalizing a screen, verify:

- Correct Tech Blue tokens
- Inter/approved font stack
- Consistent 4/8px spacing rhythm
- Correct radius/elevation
- Responsive behavior
- No clipped content at different viewport sizes
- Realistic data density
- All important component states
- Accessible focus and labels
- No unnecessary decorative effects
- Reusable component structure
- Clear hierarchy for the intended user role
