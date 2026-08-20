---
name: enterprise-tech-blue-design-system
description: Build enterprise SaaS, AI, industrial, CFO, HR and analytics applications using the Enterprise Tech Blue visual system, responsive rules, reusable components and accessibility standards.
---

# Enterprise Tech Blue Design System

## Mission
Use this skill whenever creating or modifying an application UI. The result must feel like one coherent enterprise product family: precise, calm, data-dense, accessible, responsive and production-oriented. Reuse the system; do not invent a new visual language for each screen.

## Non-negotiable rules
1. Use the tokens below instead of arbitrary colors, spacing or radii.
2. Design with real content and realistic data density, not placeholder-only layouts.
3. Every interactive component needs default, hover, focus, active, disabled and loading states where applicable.
4. Never communicate meaning by color alone; pair status with text/icon/shape.
5. Use responsive layout rather than fixed desktop canvases.
6. Prefer reusable components and variants over one-off styling.
7. Maintain WCAG-conscious contrast, keyboard focus and semantic structure.
8. Do not add gradients, glass effects, excessive shadows or decorative animation unless explicitly requested.

## Brand tokens

### Color
| Token | Value | Use |
|---|---|---|
| primary | #2563EB | Primary action, link, active, focus |
| primary-hover | #1D4ED8 | Hover |
| primary-active | #1E40AF | Pressed |
| primary-soft | #EFF6FF | Selected/soft blue surface |
| primary-subtle | #DBEAFE | Highlight |
| background | #F8FAFC | App canvas |
| surface | #FFFFFF | Cards, panels, modal |
| surface-muted | #F1F5F9 | Secondary surface |
| text-primary | #0F172A | Headings and critical data |
| text-secondary | #334155 | Body |
| text-muted | #64748B | Supporting text |
| text-subtle | #94A3B8 | Metadata/placeholders |
| border | #E2E8F0 | Standard border/divider |
| border-strong | #CBD5E1 | Inputs/strong border |
| success | #10B981 | Positive/safe |
| success-soft | #ECFDF5 | Success surface |
| warning | #F59E0B | Warning |
| warning-soft | #FFFBEB | Warning surface |
| error | #F43F5E | Error/destructive |
| error-soft | #FFF1F2 | Error surface |
| info | #2563EB | Informational |

### Typography
Preferred stack: `Inter, Plus Jakarta Sans, system-ui, sans-serif`.

- Display: 32/40, 600
- H1: 24/32, 600
- H2: 18/24, 600
- H3: 16/24, 600
- Body: 14/20, 400
- Body medium: 14/20, 500
- Small: 13/18, 400
- Caption/meta: 12/16, 400
- Dashboard metric: 28–36px, 600
Use tabular numerals for financial and operational metrics.

### Spacing
Use a 4px base and 8px primary rhythm: `4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96`.
- Page padding: 24–32px desktop; 16px mobile
- Card padding: 16–24px
- Section gap: 24–32px
- Form gap: 12–16px
- Button horizontal padding: 12–16px

### Radius
`sm 4px`, `md 6px`, `lg 8px`, `xl 12px`, `2xl 16px`, `full 9999px`.
Default: inputs/buttons 6px; cards 8–12px; modals 12px; pills full.

### Elevation
Use borders before shadows. Cards normally use a 1px border and no heavy shadow. Dropdowns/popovers use subtle shadow. Modals/drawers use stronger but restrained elevation.

## Responsive system
Use these CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Design targets:
- Mobile: <640
- Tablet: 640–1023
- Desktop: 1024–1439
- Large desktop: 1440–1919
- TV/large display: 1920+

Never set a dashboard to one fixed width. Use fluid containers, CSS grid/flex, min/max widths and responsive typography. For 1920×1080+ displays, increase metric scale and whitespace while preserving information hierarchy; avoid tiny tables and controls. A physical TV resolution is not necessarily the browser viewport.

## Application shell
Recommended structure:
`Header + Sidebar + Main content + optional right context panel`.

- Sidebar expanded: 240–260px
- Sidebar collapsed: 64–72px
- Mobile sidebar: drawer
- Header: 56–64px
- Main page max-width: 1440–1600px unless the product is explicitly a wallboard/TV dashboard

Active navigation: background `#EFF6FF`, icon/text `#2563EB` or `#1D4ED8`.

## Component specification

### Buttons
Variants: Primary, Secondary, Ghost, Destructive, Icon.
Sizes: 32px small, 36px medium, 40px large.
Primary = #2563EB/white; hover #1D4ED8; active #1E40AF. Secondary = white + #CBD5E1 border. Ghost hover = #F1F5F9. Always show disabled and focus states.

### Inputs
Height 36px compact or 40px default; 6px radius; `#CBD5E1` border; focus uses `#2563EB` border/ring. Support label, helper text, error text, prefix/suffix, disabled and read-only states.

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

## Dashboard patterns

### Executive/C-suite
Prioritize 4–6 KPIs, trends, exceptions and recommended actions. Hide raw operational noise. Use drill-down for detail.

### CFO
Typical sections: Cash Position, Cash Flow Forecast, Budget vs Actual, AP/AR, Spend, Risk/Compliance, Financial Close, Executive Insights.

### HR
Typical sections: Headcount, Hiring, Attrition, Attendance, Payroll, Performance, Engagement, Learning, Compliance, Workforce Analytics.

### Industrial / Operations
Typical sections: Plant health, production, quality, equipment state, predictive alerts, throughput, downtime, energy and root-cause insights.

### PCB visual analytics
Separate visual quality inspection from functional/electrical testing. Typical visual checks: missing components, wrong component/package, placement/orientation, solder bridges/shorts, insufficient/excess solder, lifted leads, tombstoning, skew/offset, polarity/marking, foreign material and board/trace damage. Use AOI/vision, SPI and appropriate 2D/3D inspection; functional quality is a separate test layer.

## AI/RAG product pattern
Do not present a RAG product merely as “upload a document and make a mind map.” Position the system around outcomes: connect knowledge → retrieve grounded evidence → reason → generate useful insight/action. Recommended UI stages: Sources → Ingestion → Knowledge index → Retrieval → Agent/analysis → Insight/report.

## Figma implementation
Create components with Auto Layout and variants. Suggested component naming:
`Button/Primary`, `Button/Secondary`, `Input/Default`, `Input/Error`, `Card/Metric`, `Table/Default`, `Badge/Success`, `Dialog/Default`, `Agent/Card`, `Insight/Card`.
Use Variables for color, spacing, radius and typography. Use component properties for icon, label, state, size and density. Build desktop, mobile and large-display examples for important patterns.

## Tailwind / shadcn mapping
Prefer Tailwind utilities and shadcn/ui primitives. Keep visual values in CSS variables/tokens rather than hard-coding values repeatedly. Map:
- `primary` → blue 600
- `primary-hover` → blue 700
- background → slate 50
- foreground → slate 900
- muted → slate 500/600
- border → slate 200
- radius → 0.375–0.75rem according to component

When a shadcn primitive already exists, extend it instead of creating a duplicate component.

## Dark mode
Dark mode is supported when requested. Preserve semantic roles rather than simply inverting colors. Use deep slate surfaces, readable slate text and accessible blue accents. Re-test every status color for contrast.

## Density
Support three density modes for enterprise products:
- Comfortable: more whitespace, 44–48px rows
- Default: 40–44px rows
- Compact: 32–40px rows
Do not reduce typography below readable sizes merely to fit more data.

## Motion
Use short, purposeful transitions (roughly 120–200ms). Prefer opacity/transform. No bouncing or decorative motion in operational dashboards. Respect reduced-motion preferences.

## Accessibility
- Semantic HTML first.
- Keyboard navigation for all interactive controls.
- Visible focus ring using `#2563EB`.
- Labels for inputs.
- Accessible names for icon-only buttons.
- Minimum comfortable touch target around 44px on touch devices.
- Do not use color as the sole status indicator.
- Provide table/chart alternatives where necessary.

## Implementation workflow
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

## Quality gate
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
