# Component Architecture

The library is intentionally one package with layered components.

## 1. Foundations
Design tokens and responsive rules.

## 2. Core
Universal primitives: Button, Input, Card, Badge, Dialog, Tabs, Avatar, Alert, Search, Loading and Empty states.

## 3. SaaS / Data
Enterprise application patterns: MetricCard, DataTable, FilterBar, Pagination and CommandPalette.

## 4. Web App
Application shell and page-level navigation primitives.

## 5. Website
Marketing/public experience patterns: Hero, FeatureGrid, CTA and FAQ.

## 6. AI / Industrial
AgentCard, InsightCard, FileUpload, StatusMonitor and AIChat.

### Rule
Do not split these into separate npm packages unless a real dependency/versioning need appears. Keep one source of truth and evolve the layers together.

Application-specific sections remain in the application. Reusable patterns graduate into this library when they prove reusable.
