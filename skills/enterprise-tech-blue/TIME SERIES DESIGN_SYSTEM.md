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

### Textarea

Minimum 96px height, 10–12px padding, vertical resize by default.

### Select

Use for one selection from a known list. Include label, value, chevron, keyboard support, disabled and error states.

### Multi-select

Use searchable checkbox selection for long lists. Show selected count and clear/apply controls when appropriate.

### Checkbox

Support unchecked, checked, indeterminate, disabled and focus states.

### Radio group

Use when exactly one option is required. For long lists use Select instead.

### Switch

Use for immediate boolean preferences. Do not use for actions that require confirmation.

### Slider

Use for thresholds, ranges, confidence, allocation and similar continuous values. Show current value when precision matters.

### Date/time controls

Support date, date range, time and date-time. Analytics presets: Today, Yesterday, 7 days, 30 days, This month, Last month, Custom.

### Search

Include search icon, clear action, loading state for remote searches, and optional keyboard shortcut.

## 10. Data Display Components

### Card

```text
Background #FFFFFF
Border #E2E8F0
Radius 8–12px
Padding 16–24px
```

Structure:

```text
Card Header → Title + Action
Card Content
Card Footer
```

### MetricCard

Hierarchy:

```text
Label
Large metric
Trend
Comparison period
```

Use semantic trend indicators. Do not assume every increase is positive.

### Badge / Status

Common statuses:

```text
Active, Pending, Completed, Failed, Warning,
In Review, Draft, Archived
```

Use soft semantic backgrounds.

### Avatar

Sizes 24, 32, 40, 48, 64px. Support image, initials and fallback.

### AvatarGroup

Overlap avatars and show `+N` when necessary.

### DataTable

Support:

```text
Search
Filter
Sort
Pagination
Row actions
Selection
```

Rules:

- Text left aligned.
- Numeric values right aligned.
- Status centered when appropriate.
- Use horizontal separators instead of excessive vertical borders.
- Sticky headers for long tables.

### Advanced DataTable

Optional features:

```text
Column visibility
Column resizing
Bulk selection/actions
Export
Saved views
Expandable rows
```

### Pagination

Show current range, page controls and rows-per-page.

### ActivityFeed

Show timestamp, actor, action, object and optional result/status.

### Timeline

Use for workflows, events and lifecycle history.

## 11. Navigation and Overlays

### Tabs

Separate closely related content. Examples: Overview, Analytics, Transactions, Activity, Settings.

### Accordion

Use for progressive disclosure, technical details and FAQs.

### Breadcrumbs

Use for deep hierarchy:

```text
Operations / Plants / Chennai / Line 04
```

### Tooltip

For unfamiliar icons and abbreviated labels. Never hide essential information only in a tooltip.

### Popover

For contextual controls such as filters and quick settings.

### Dropdown Menu

Contextual actions. Separate destructive actions with a divider.

### Context Menu

Useful for desktop workflows but never make critical actions right-click-only.

### Dialog/Modal

Use for focused forms, confirmation and short workflows. Avoid huge modals for complex workflows.

### Confirmation Dialog

```text
Title
Consequence/explanation
Cancel
Confirm
```

### Drawer/Sheet

Use for filters, record details and secondary workflows.

```text
Standard: 360–480px
Complex detail: 480–640px
```

## 12. Feedback Components

### Toast

For lightweight feedback such as save, export started or retry information. Do not use for critical persistent information.

### Alert

Persistent info, success, warning or error messages.

### Banner

Application-level maintenance, outage, compliance or announcement messages.

### Progress

Use linear, circular or step progress. Long AI tasks should expose meaningful stages such as Upload → Parse → Retrieve → Analyze → Generate → Complete.

### Skeleton

Match the approximate shape of the final content. Prefer skeletons to generic spinners for page content.

### EmptyState

```text
Icon/illustration
Title
Explanation
Primary action
```

### ErrorState

Explain what happened, likely reason, recovery action and provide Retry where appropriate.

## 13. Forms

Every form should have:

- Labels
- Typed values
- Validation
- Helper/error text
- Loading state
- Success state
- Disabled state where appropriate
- Server-side validation

Desktop may use one or two columns. Mobile becomes single-column unless there is a strong reason otherwise.

## 14. Charts and Visualization

Use charts only when they improve understanding.

Supported patterns:

```text
Line
Area
Bar
Horizontal bar
Stacked bar
Donut
Scatter
Heatmap
Gauge
```

Avoid decorative 3D charts.

Every chart should provide title, period/range, units, legend when necessary, tooltip, loading, empty and error states, plus an accessible textual summary.

### Chart semantic colors

```text
Emerald → positive
Rose → negative
Amber → attention
Blue → information
Slate → neutral
```

The meaning of direction must be defined by the metric.

## 15. Dashboard Patterns

### 12-column desktop grid

```text
KPI  KPI  KPI  KPI

Main chart              Secondary chart

Data table              Alerts/activity
```

Tablet: approximately 8 columns. Mobile: 4-column or single-column layouts.

### Executive dashboard

```text
Executive Summary
↓
Revenue / Cost / Cash
↓
Operational Performance
↓
Risk
↓
AI Insights
↓
Recommended Actions
```

### CFO dashboard

```text
Cash Position
Cash Flow Forecast
Budget vs Actual
AP
AR
Expenses
Procurement
Risk & Compliance
Financial Close
Financial Reporting
Executive Decision Support
```

### HR dashboard

```text
Headcount
Hiring
Turnover
Attendance
Leave
Payroll
Performance
Engagement
Learning
Compliance
Employee Helpdesk
Workforce Analytics
```

### Industrial/PCB visual analytics

```text
Inspection Overview
Pass / Fail
Missing Components
Component Identity
SPI Results
Solder Bridges / Shorts
Placement Errors
Polarity / Orientation
Foreign Objects
Visual Defects
Review Queue
Inspection Images
Traceability
```

Visual inspection should not be presented as proof of electrical or functional correctness unless separate testing supports that claim.

## 16. AI Product Components

### AgentCard

```text
Agent name
Purpose
Status
Last run
Key result
Primary action
```

### AgentStatus

```text
Idle
Running
Waiting
Needs Review
Completed
Failed
Paused
```

### AI Insight Card

```text
Insight
Evidence/source
Impact
Confidence when meaningful
Recommended action
Action buttons
```

### AI Chat

Support:

- Streaming
- Stop generation
- Retry
- Copy
- Feedback
- Source references
- Attachments

Do not expose hidden chain-of-thought. Show concise user-facing explanations and evidence instead.

### RAG / Knowledge UI

```text
Documents
Knowledge sources
Index status
Last updated
Retrieved sources
Answer
```

For document-grounded answers, preserve source references whenever possible.

### Document Upload

Support:

```text
Drag/drop
Browse
File type/size
Upload progress
Parsing
Embedding/indexing
Ready
Failure
```

### Command Palette

Use for enterprise navigation and actions. Recommended shortcut: `Ctrl/Cmd + K`.

## 17. Figma System

Create these libraries:

```text
Foundations
├── Colors
├── Typography
├── Spacing
├── Radius
├── Shadows
└── Icons

Components
├── Buttons
├── Inputs
├── Forms
├── Navigation
├── Feedback
├── Data Display
├── Overlays
├── AI
└── Charts

Patterns
├── Dashboard
├── Authentication
├── Settings
├── Data Management
├── AI Workspace
└── Executive Dashboard
```

Use Auto Layout for buttons, cards, navigation, forms, lists, tables and dashboard modules. Use variants for type, size, state, icon and density.

Reference frames:

```text
390px mobile
768px tablet
1440px desktop
1920px large desktop
```

Do not manually position responsive content when Auto Layout can express the relationship.

## 18. Tailwind/shadcn/ui

Use semantic tokens rather than scattered raw hex values.

Preferred conceptual classes:

```text
bg-background
bg-card
text-foreground
text-muted-foreground
border-border
bg-primary
text-primary-foreground
bg-destructive
```

Use shadcn/ui primitives where suitable:

```text
Button
Input
Textarea
Select
Checkbox
RadioGroup
Switch
Dialog
Sheet
Popover
DropdownMenu
Tabs
Tooltip
Table
Card
Badge
Alert
Skeleton
Command
```

Customize primitives through the design tokens rather than creating an incompatible second primitive system.

## 19. Design Token JSON

```json
{
  "color": {
    "primary": "#2563EB",
    "primaryHover": "#1D4ED8",
    "primaryActive": "#1E40AF",
    "primarySoft": "#EFF6FF",
    "background": "#F8FAFC",
    "surface": "#FFFFFF",
    "surfaceMuted": "#F1F5F9",
    "textPrimary": "#0F172A",
    "textSecondary": "#334155",
    "textMuted": "#64748B",
    "border": "#E2E8F0",
    "borderStrong": "#CBD5E1",
    "success": "#10B981",
    "warning": "#F59E0B",
    "error": "#F43F5E",
    "info": "#2563EB"
  },
  "radius": {
    "sm": "4px",
    "md": "6px",
    "lg": "8px",
    "xl": "12px",
    "2xl": "16px",
    "full": "9999px"
  },
  "spacing": {
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px"
  }
}
```

## 20. Accessibility

Required:

- Semantic HTML.
- Keyboard navigation.
- Visible focus state.
- Accessible labels.
- Appropriate ARIA only where needed.
- Sufficient contrast.
- Reduced-motion support.
- Status communicated with more than color.

Touch targets should generally be at least 44×44px.

## 21. Motion

Use subtle 150–200ms transitions for hover, dropdown, modal, drawer and expand/collapse interactions. Avoid unnecessary animation in operational dashboards. Respect `prefers-reduced-motion`.

## 22. Dark Mode

If enabled, create dedicated semantic dark tokens rather than simply inverting colors. Preserve Tech Blue as the brand accent and maintain readable contrast.

## 23. Density Modes

Support optional:

```text
Comfortable
Compact
Dense
```

Recommended table rows:

```text
Comfortable: 48px
Compact: 40px
Dense: 36px
```

Do not make body text unreadably small to increase density.

## 24. Content and UX Language

Use concise, specific, action-oriented labels.

Prefer:

```text
Retry connection
Generate report
No transactions found
```

over vague or verbose alternatives.

Use sentence case for most labels.

## 25. AI Workflow Principle

AI products should not default to looking like generic chatbots. Embed AI into the user's workflow:

```text
Understand → Decide → Act
```

Prefer:

```text
Dashboard
↓
Insight
↓
Evidence
↓
Recommendation
↓
Action
```

rather than simply:

```text
Ask AI
```

## 26. Master Instruction

When creating any application, dashboard, web page or component using this system:

1. Use the Tech Blue tokens in this document.
2. Reuse existing components before inventing new ones.
3. Use semantic tokens rather than arbitrary hex values.
4. Use responsive layouts from mobile through large displays.
5. Include relevant component states.
6. Use Auto Layout and variants in Figma.
7. Map the same components to Tailwind/shadcn/ui in development.
8. Preserve accessibility.
9. Prioritize data hierarchy and readability.
10. Keep the visual language professional, calm, precise and enterprise-grade.
11. Do not introduce gradients, glassmorphism, neon effects, excessive 3D or decorative animation unless explicitly requested.
12. For AI applications, integrate AI into workflows rather than automatically creating a chatbot UI.
13. When a required component is missing, extend the system using the same tokens, spacing, typography, radius, states and interaction principles.

## 27. Final Quality Gate

Before delivery, verify:

- [ ] Tech Blue palette is consistent.
- [ ] Typography is consistent.
- [ ] 4px/8px spacing rhythm is respected.
- [ ] Radius and elevation are consistent.
- [ ] All interactive states exist.
- [ ] Loading, empty and error states exist where applicable.
- [ ] Responsive behavior works at 390, 768, 1440 and 1920+ widths.
- [ ] Tables remain usable.
- [ ] Charts have context and accessible summaries.
- [ ] Keyboard focus is visible.
- [ ] Destructive actions are clear.
- [ ] AI outputs show evidence/source context where appropriate.
- [ ] The interface does not depend on color alone.
- [ ] The result looks like the same product family across every screen.
