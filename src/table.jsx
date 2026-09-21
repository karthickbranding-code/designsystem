import React, { useMemo, useState } from "react";
import { Badge, Button, IconButton, Input, Pagination } from "./index.jsx";

const cx = (...v) => v.filter(Boolean).join(" ");

export const Table = ({
  columns = [],
  rows = [],
  caption,
  density = "default",
  striped = false,
  hoverable = true,
  stickyHeader = false,
  selectable = false,
  selectedKeys = [],
  onSelectionChange,
  getRowKey = (row, index) => row.id ?? index,
  emptyState,
  rowActions,
  renderExpanded,
  expandable = false,
  sort,
  onSort,
  className = "",
  ...props
}) => {
  const keys = rows.map(getRowKey);
  const allSelected = selectable && keys.length > 0 && keys.every(k => selectedKeys.includes(k));
  const toggleAll = () => onSelectionChange?.(allSelected ? [] : keys);
  const toggleRow = key => onSelectionChange?.(selectedKeys.includes(key) ? selectedKeys.filter(k => k !== key) : [...selectedKeys, key]);

  return (
    <div className={cx("etb-table-wrap", stickyHeader && "etb-table-wrap--sticky", className)}>
      <table className={cx("etb-table", `etb-table--${density}`, striped && "etb-table--striped")} {...props}>
        {caption && <caption className="etb-table__caption">{caption}</caption>}
        <thead><tr>
          {selectable && <th className="etb-table__select"><input type="checkbox" aria-label="Select all rows" checked={allSelected} onChange={toggleAll} /></th>}
          {expandable && <th className="etb-table__expand" aria-label="Expand row" />}
          {columns.map(c => (
            <th key={c.key} scope="col" className={cx(c.align && `is-${c.align}`, c.sortable && "is-sortable")} style={c.width ? { width: c.width } : undefined}>
              {c.sortable ? <button className="etb-table__sort" onClick={() => onSort?.(c.key)}>{c.label}<span aria-hidden="true">{sort?.key === c.key ? (sort.direction === "desc" ? "↓" : "↑") : "↕"}</span></button> : c.label}
            </th>
          ))}
          {rowActions && <th scope="col" className="is-right">Actions</th>}
        </tr></thead>
        <tbody>
          {!rows.length ? <tr><td colSpan={columns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0) + (rowActions ? 1 : 0)}>{emptyState || <div className="etb-table-empty"><strong>No data</strong><span>There is nothing to display yet.</span></div>}</td></tr> :
            rows.map((row, i) => {
              const key = getRowKey(row, i);
              return <React.Fragment key={key}>
                <tr className={cx(hoverable && "is-hoverable", selectedKeys.includes(key) && "is-selected")}>
                  {selectable && <td className="etb-table__select"><input type="checkbox" aria-label={`Select row ${i + 1}`} checked={selectedKeys.includes(key)} onChange={() => toggleRow(key)} /></td>}
                  {expandable && <td className="etb-table__expand">{row._expanded ? "⌄" : "›"}</td>}
                  {columns.map(c => <td key={c.key} className={c.align ? `is-${c.align}` : ""}>{c.render ? c.render(row[c.key], row, i) : row[c.key]}</td>)}
                  {rowActions && <td className="is-right">{rowActions(row, i)}</td>}
                </tr>
                {row._expanded && renderExpanded && <tr className="etb-table__expanded"><td colSpan={columns.length + (selectable ? 1 : 0) + (expandable ? 1 : 0) + (rowActions ? 1 : 0)}>{renderExpanded(row, i)}</td></tr>}
              </React.Fragment>;
            })}
        </tbody>
      </table>
    </div>
  );
};

export const SortableTable = ({ columns, rows, ...props }) => {
  const [sort, setSort] = useState(null);
  const sorted = useMemo(() => {
    if (!sort) return rows;
    return [...rows].sort((a,b) => {
      const av = a[sort.key], bv = b[sort.key];
      if (av === bv) return 0;
      const result = av > bv ? 1 : -1;
      return sort.direction === "desc" ? -result : result;
    });
  }, [rows, sort]);
  const onSort = key => setSort(s => s?.key === key && s.direction === "asc" ? {key, direction:"desc"} : {key, direction:"asc"});
  return <Table columns={columns} rows={sorted} sort={sort} onSort={onSort} {...props} />;
};

export const SelectableTable = ({ columns, rows, selectedKeys, onSelectionChange, ...props }) =>
  <Table columns={columns} rows={rows} selectable selectedKeys={selectedKeys} onSelectionChange={onSelectionChange} {...props} />;

export const SearchableTable = ({ columns, rows, searchKeys, placeholder="Search table...", ...props }) => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return rows;
    return rows.filter(row => (searchKeys || columns.map(c => c.key)).some(key => String(row[key] ?? "").toLowerCase().includes(q)));
  }, [rows, columns, searchKeys, query]);
  return <div className="etb-table-searchable"><div className="etb-table-toolbar"><Input aria-label="Search table" placeholder={placeholder} value={query} onChange={e => setQuery(e.target.value)} /><span>{filtered.length} results</span></div><Table columns={columns} rows={filtered} {...props} /></div>;
};

export const PaginatedTable = ({ columns, rows, pageSize=10, page=1, onPageChange, ...props }) => {
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageRows = rows.slice((safePage - 1) * pageSize, safePage * pageSize);
  return <div><Table columns={columns} rows={pageRows} {...props} /><Pagination page={safePage} totalPages={totalPages} onChange={onPageChange} /></div>;
};

export const StickyTable = props => <Table stickyHeader {...props} />;

export const DenseTable = props => <Table density="dense" {...props} />;

export const StatusTable = ({ statusKey="status", ...props }) => {
  const columns = props.columns.map(c => c.key === statusKey ? {...c, render: value => <Badge status={value === "Healthy" || value === "Active" || value === "Published" ? "success" : value === "Warning" || value === "Draft" ? "warning" : value === "Critical" || value === "Failed" ? "error" : "neutral"}>{value}</Badge>} : c);
  return <Table {...props} columns={columns} />;
};

export const ActionTable = ({ columns, actions, ...props }) =>
  <Table columns={columns} rowActions={(row, i) => <div className="etb-table-actions">{actions?.map((a, j) => <IconButton key={j} label={a.label} onClick={() => a.onClick?.(row, i)}>{a.icon || "⋯"}</IconButton>)}</div>} {...props} />;

export const GroupedTable = ({ groups=[], columns=[], rows=[], ...props }) => (
  <div className="etb-table-wrap">
    <table className="etb-table">
      <thead><tr>{groups.map(g => <th key={g.label} colSpan={g.span}>{g.label}</th>)}</tr><tr>{columns.map(c => <th key={c.key}>{c.label}</th>)}</tr></thead>
      <tbody>{rows.map((row,i) => <tr key={row.id ?? i}>{columns.map(c => <td key={c.key}>{c.render ? c.render(row[c.key], row, i) : row[c.key]}</td>)}</tr>)}</tbody>
    </table>
  </div>
);

export const ExpandableTable = ({ columns, rows, renderExpanded, ...props }) => {
  const [expanded, setExpanded] = useState([]);
  const enhanced = rows.map(row => ({...row, _expanded: expanded.includes(row.id)}));
  return <Table columns={columns} rows={enhanced} expandable renderExpanded={renderExpanded} {...props} />;
};

export const MetricTable = ({ columns, rows, ...props }) => <Table columns={columns} rows={rows} density="default" className="etb-table--metric" {...props} />;

export const VirtualizedTable = ({ columns, rows, height=420, rowHeight=44, ...props }) => {
  const [start, setStart] = useState(0);
  const visible = Math.ceil(height / rowHeight) + 6;
  const end = Math.min(rows.length, start + visible);
  const handleScroll = e => setStart(Math.max(0, Math.floor(e.currentTarget.scrollTop / rowHeight) - 3));
  return <div className="etb-table-virtual" style={{height}} onScroll={handleScroll}><div style={{height: rows.length * rowHeight, position:"relative"}}><div style={{position:"absolute", top:start * rowHeight, left:0, right:0}}><Table columns={columns} rows={rows.slice(start,end)} {...props} /></div></div></div>;
};

export const DataGrid = ({
  columns=[],
  rows=[],
  pageSize=10,
  pageSizeOptions=[10,25,50],
  checkboxSelection=false,
  searchable=true,
  sortable=true,
  stickyHeader=true,
  density="default",
  onRowClick,
  className=""
}) => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState(null);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(pageSize);

  const filtered = useMemo(() => {
    const q=query.toLowerCase().trim();
    const result=!q ? rows : rows.filter(r => columns.some(c => String(r[c.key] ?? "").toLowerCase().includes(q)));
    if (!sort) return result;
    return [...result].sort((a,b) => (a[sort.key] > b[sort.key] ? 1 : -1) * (sort.direction === "desc" ? -1 : 1));
  }, [rows, columns, query, sort]);
  const totalPages=Math.max(1,Math.ceil(filtered.length/size));
  const pageRows=filtered.slice((page-1)*size,page*size);
  const toolbar = <div className="etb-data-grid__toolbar"><div>{searchable && <Input aria-label="Search data grid" placeholder="Search data..." value={query} onChange={e=>{setQuery(e.target.value);setPage(1)}} />}</div><div className="etb-data-grid__meta">{selected.length ? `${selected.length} selected` : `${filtered.length} records`}</div></div>;
  return <section className={cx("etb-data-grid", className)}>{toolbar}<Table columns={columns.map(c=>({...c, sortable: sortable && c.sortable !== false}))} rows={pageRows} density={density} stickyHeader={stickyHeader} selectable={checkboxSelection} selectedKeys={selected} onSelectionChange={setSelected} sort={sort} onSort={key=>setSort(s=>s?.key===key&&s.direction==="asc"?{key,direction:"desc"}:{key,direction:"asc"})} onRowClick={onRowClick} /><footer className="etb-data-grid__footer"><label>Rows <select value={size} onChange={e=>{setSize(Number(e.target.value));setPage(1)}}>{pageSizeOptions.map(n=><option key={n}>{n}</option>)}</select></label><span>{filtered.length ? (page-1)*size+1 : 0}–{Math.min(page*size,filtered.length)} of {filtered.length}</span><Pagination page={page} totalPages={totalPages} onChange={setPage} /></footer></section>;
};

export const TableToolbar = ({ title, description, search, filters, actions }) => <div className="etb-table-toolbar etb-table-toolbar--full"><div>{title && <h3>{title}</h3>}{description && <p>{description}</p>}</div>{search}{filters && <div className="etb-table-toolbar__filters">{filters}</div>}{actions && <div className="etb-table-toolbar__actions">{actions}</div>}</div>;

export const BulkActionBar = ({ count=0, children, onClear }) => count > 0 ? <div className="etb-bulk-action-bar"><strong>{count} selected</strong><div>{children}</div>{onClear && <Button variant="ghost" onClick={onClear}>Clear</Button>}</div> : null;
