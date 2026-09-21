# Table & DataGrid

Enterprise Tech Blue treats tabular data as a **family of patterns**, from lightweight semantic tables to advanced operational grids.

## Components

| Component | Use |
|---|---|
| `Table` | Foundation table with density, selection, sorting, sticky headers and row states |
| `DataTable` | Simple structured data |
| `DenseTable` | High-volume operational views |
| `SortableTable` | Sortable columns |
| `SelectableTable` | Checkbox row selection |
| `SearchableTable` | Search within records |
| `PaginatedTable` | Page navigation |
| `StickyTable` | Persistent headers during scrolling |
| `StatusTable` | Semantic status badges |
| `ActionTable` | Row-level actions |
| `GroupedTable` | Multi-level column groups |
| `MetricTable` | KPI/performance datasets |
| `VirtualizedTable` | Large datasets with windowed rendering |
| `DataGrid` | Advanced enterprise grid |
| `TableToolbar` | Title, search, filters and actions |
| `BulkActionBar` | Contextual bulk operations |

## Design principles

- Use **Table** for semantic, readable datasets.
- Use **DataGrid** when users need repeated data operations: search, sort, selection and pagination.
- Prefer **4px base spacing / 8px rhythm**.
- Default row height is **52px**; dense is **40px**.
- Use borders and restrained surfaces before shadows.
- Keep numeric columns right-aligned.
- Use semantic badges for status rather than color alone.
- Provide a useful empty state.
- Keep bulk actions contextual to selected records.
- Preserve keyboard and screen-reader semantics.

## Example

```jsx
import { DataGrid } from "@karthickbranding/enterprise-tech-blue";
import "@karthickbranding/enterprise-tech-blue/styles.css";

<DataGrid
  columns={[
    { key: "name", label: "Campaign", sortable: true },
    { key: "status", label: "Status", sortable: true },
    { key: "leads", label: "Leads", align: "right", sortable: true }
  ]}
  rows={campaigns}
  checkboxSelection
  searchable
  stickyHeader
/>
```

## Selection guidance

**Table:** simple presentation, operational tables, content libraries, activity history.

**DataGrid:** campaign management, lead operations, analytics, asset monitoring, large datasets.

## Accessibility

Use real table semantics. Headers are rendered as `th` elements with column scope. Captions can describe the table purpose. Selection controls include accessible labels.

## Related

- `packages/data/DataTable`
- `packages/data/Pagination`
- `packages/data/FilterBar`
- `packages/data/CommandPalette`
