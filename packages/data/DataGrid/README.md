# DataGrid

Advanced enterprise data surface for datasets that require **search, sorting, row selection, pagination and dense operational workflows**.

## When to use

Use DataGrid when the user is actively working with records rather than simply reading a table.

Typical use cases:

- Marketing campaign operations
- Lead and account management
- Content libraries
- Industrial asset monitoring
- Analytics and KPI operations
- AI-generated insight queues

## When not to use

Use `Table` instead when the data is primarily for reading, when interaction is limited, or when a semantic native table is sufficient.

## Features

- Search
- Column sorting
- Checkbox selection
- Pagination
- Page-size control
- Sticky header
- Density control
- Record count
- Selection count

## Example

```jsx
<DataGrid
  columns={columns}
  rows={rows}
  checkboxSelection
  searchable
  stickyHeader
  pageSize={10}
  pageSizeOptions={[10, 25, 50]}
/>
```

## Enterprise pattern

Recommended structure:

```text
PageHeader
  ↓
TableToolbar
  ↓
BulkActionBar (when rows are selected)
  ↓
DataGrid
  ↓
Pagination / page-size control
```

Keep the grid focused. Filters, exports and destructive actions belong in the toolbar or contextual action bar rather than inside every row.
