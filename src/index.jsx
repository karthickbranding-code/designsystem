import React from "react";
import "./styles.css";

// -----------------------------------------------------------------------------
// FOUNDATIONS / CORE
// -----------------------------------------------------------------------------
export const Button = ({ variant="primary", size="md", loading=false, icon, children, className="", ...props }) => (
  <button className={`etb-button etb-button--${variant} etb-button--${size} ${className}`} disabled={loading || props.disabled} {...props}>
    {loading && <span className="etb-spinner" aria-hidden="true" />}
    {!loading && icon}
    <span>{children}</span>
  </button>
);

export const IconButton = ({ label, size="md", children, className="", ...props }) => (
  <button className={`etb-icon-button etb-icon-button--${size} ${className}`} aria-label={label} title={label} {...props}>{children}</button>
);

export const Card = ({ title, description, actions, children, className="" }) => (
  <section className={`etb-card ${className}`}>
    {(title || description || actions) && <header className="etb-card__header"><div>{title && <h3>{title}</h3>}{description && <p>{description}</p>}</div>{actions}</header>}
    <div className="etb-card__body">{children}</div>
  </section>
);

export const MetricCard = ({ label, value, delta, trend, context, icon, className="" }) => (
  <Card className={`etb-metric ${className}`}>
    <div className="etb-metric__top"><span>{label}</span>{icon}</div>
    <div className="etb-metric__value">{value}</div>
    {(delta || trend) && <div className={`etb-metric__trend etb-metric__trend--${trend || "neutral"}`}>{trend === "up" ? "↑" : trend === "down" ? "↓" : "•"} {delta}</div>}
    {context && <div className="etb-metric__context">{context}</div>}
  </Card>
);

export const Input = ({ label, error, helperText, id, ...props }) => (
  <label className="etb-field" htmlFor={id}>{label && <span className="etb-field__label">{label}</span>}<input id={id} className={`etb-input ${error ? "is-error" : ""}`} {...props} />{error ? <span className="etb-field__error">{error}</span> : helperText ? <span className="etb-field__helper">{helperText}</span> : null}</label>
);

export const SearchInput = ({ placeholder="Search", shortcut="Ctrl K", ...props }) => (
  <label className="etb-search"><span aria-hidden="true">⌕</span><input placeholder={placeholder} {...props} />{shortcut && <kbd>{shortcut}</kbd>}</label>
);

const badgeMap = { neutral:"neutral", info:"info", success:"success", warning:"warning", error:"error" };
export const Badge = ({ status="neutral", children, className="" }) => (
  <span className={`etb-badge etb-badge--${badgeMap[status] || "neutral"} ${className}`}><span className="etb-badge__dot" />{children}</span>
);
export const Status = Badge;

export const Avatar = ({ src, name="User", size="md" }) => (
  <span className={`etb-avatar etb-avatar--${size}`} title={name}>{src ? <img src={src} alt={name} /> : name.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase()}</span>
);

export const Tabs = ({ items, value, onChange, className="" }) => (
  <div className={`etb-tabs ${className}`} role="tablist">{items.map(item => <button key={item.value} role="tab" aria-selected={value===item.value} className={value===item.value ? "is-active" : ""} onClick={()=>onChange?.(item.value)}>{item.label}</button>)}</div>
);

export const Alert = ({ status="info", title, children, action }) => (
  <div className={`etb-alert etb-alert--${status}`} role={status==="error" ? "alert" : "status"}><div><strong>{title}</strong>{children && <p>{children}</p>}</div>{action}</div>
);

export const Skeleton = ({ width="100%", height=16, className="" }) => <span className={`etb-skeleton ${className}`} style={{width,height}} aria-hidden="true" />;
export const Loading = Skeleton;

export const EmptyState = ({ title, description, action, icon="□" }) => <div className="etb-empty"><div className="etb-empty__icon">{icon}</div><h3>{title}</h3><p>{description}</p>{action}</div>;

export const Dialog = ({ open, title, children, actions, onClose }) => {
  if (!open) return null;
  return <div className="etb-dialog-backdrop" role="presentation" onMouseDown={e=>e.target===e.currentTarget&&onClose?.()}><div className="etb-dialog" role="dialog" aria-modal="true" aria-labelledby="etb-dialog-title"><header><h2 id="etb-dialog-title">{title}</h2><IconButton label="Close" onClick={onClose}>×</IconButton></header><div className="etb-dialog__body">{children}</div>{actions && <footer>{actions}</footer>}</div></div>;
};

// -----------------------------------------------------------------------------
// SAAS / DATA COMPONENTS
// -----------------------------------------------------------------------------
export const DataTable = ({ columns=[], rows=[], getRowKey=(row,i)=>row.id ?? i, emptyState }) => (
  <div className="etb-table-wrap"><table className="etb-table"><thead><tr>{columns.map(c=><th key={c.key} scope="col" className={c.align ? `is-${c.align}` : ""}>{c.label}</th>)}</tr></thead><tbody>
    {rows.length ? rows.map((row,i)=><tr key={getRowKey(row,i)}>{columns.map(c=><td key={c.key} className={c.align ? `is-${c.align}` : ""}>{c.render ? c.render(row[c.key],row,i) : row[c.key]}</td>)}</tr>) : <tr><td colSpan={columns.length}>{emptyState || <EmptyState title="No data" description="There is nothing to display yet." />}</td></tr>}
  </tbody></table></div>
);

export const Pagination = ({ page=1, totalPages=1, onChange }) => (
  <nav className="etb-pagination" aria-label="Pagination">
    <Button variant="secondary" size="sm" disabled={page<=1} onClick={()=>onChange?.(page-1)}>Previous</Button>
    <span>Page <strong>{page}</strong> of {totalPages}</span>
    <Button variant="secondary" size="sm" disabled={page>=totalPages} onClick={()=>onChange?.(page+1)}>Next</Button>
  </nav>
);

export const FilterBar = ({ children, actions }) => <div className="etb-filterbar"><div className="etb-filterbar__filters">{children}</div>{actions && <div className="etb-filterbar__actions">{actions}</div>}</div>;

export const CommandPalette = ({ open, query="", onQueryChange, items=[], onSelect, onClose }) => {
  if (!open) return null;
  const filtered=items.filter(x=>x.label.toLowerCase().includes(query.toLowerCase()));
  return <div className="etb-command-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose?.()}><div className="etb-command" role="dialog" aria-modal="true" aria-label="Command palette"><SearchInput autoFocus value={query} onChange={e=>onQueryChange?.(e.target.value)} placeholder="Search commands" shortcut="Esc" /> <div className="etb-command__list">{filtered.map(item=><button key={item.id} onClick={()=>onSelect?.(item)}>{item.icon}<span>{item.label}</span><kbd>{item.shortcut}</kbd></button>)}{!filtered.length && <EmptyState title="No commands found" description="Try a different search." />}</div></div></div>;
};

export const AppShell = ({ header, sidebar, children, rightPanel }) => (
  <div className="etb-app-shell"><header className="etb-app-shell__header">{header}</header><div className="etb-app-shell__body"><aside className="etb-app-shell__sidebar">{sidebar}</aside><main className="etb-app-shell__main">{children}</main>{rightPanel && <aside className="etb-app-shell__right">{rightPanel}</aside>}</div></div>
);

export const PageHeader = ({ title, description, breadcrumbs, actions }) => (
  <div className="etb-page-header">{breadcrumbs && <div className="etb-breadcrumbs">{breadcrumbs}</div>}<div><h1>{title}</h1>{description && <p>{description}</p>}</div>{actions && <div className="etb-page-header__actions">{actions}</div>}</div>
);

// -----------------------------------------------------------------------------
// WEBSITE / MARKETING COMPONENTS
// -----------------------------------------------------------------------------
export const Hero = ({ eyebrow, title, description, primaryAction, secondaryAction, media }) => (
  <section className="etb-hero"><div className="etb-hero__content">{eyebrow && <span className="etb-hero__eyebrow">{eyebrow}</span>}<h1>{title}</h1>{description && <p>{description}</p>}<div className="etb-hero__actions">{primaryAction}{secondaryAction}</div></div>{media && <div className="etb-hero__media">{media}</div>}</section>
);

export const FeatureGrid = ({ items=[], columns=3 }) => <div className={`etb-feature-grid etb-feature-grid--${columns}`}>{items.map((item,i)=><Card key={item.id ?? i} title={item.title} description={item.description}>{item.icon && <div className="etb-feature-icon">{item.icon}</div>}</Card>)}</div>;

export const CTA = ({ title, description, action, className="" }) => <section className={`etb-cta ${className}`}><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</section>;

export const FAQ = ({ items=[] }) => <div className="etb-faq">{items.map((item,i)=><details key={item.id ?? i}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>;

// -----------------------------------------------------------------------------
// AI / INDUSTRIAL COMPONENTS
// -----------------------------------------------------------------------------
export const AgentCard = ({ name, purpose, status="Ready", lastRun, metric, action, permissions }) => (
  <Card title={name} description={purpose} actions={action}><div className="etb-agent"><Badge status={status==="Ready"||status==="Running"?"success":status==="Attention"?"warning":"error"}>{status}</Badge>{metric && <div><span>Key metric</span><strong>{metric}</strong></div>}{lastRun && <div><span>Last run</span><strong>{lastRun}</strong></div>}{permissions && <div className="etb-agent__permissions">{permissions}</div>}</div></Card>
);

export const InsightCard = ({ title, evidence, confidence, source, action }) => (
  <Card title={title} actions={action}><div className="etb-insight"><p>{evidence}</p>{confidence && <Badge status="info">Confidence: {confidence}</Badge>}{source && <span className="etb-insight__source">Source: {source}</span>}</div></Card>
);

export const FileUpload = ({ accept, maxSize, onFiles, children }) => (
  <label className="etb-upload"><input type="file" accept={accept} multiple onChange={e=>onFiles?.(Array.from(e.target.files || []))} /> <strong>{children || "Drop files here or browse"}</strong>{accept && <span>Accepted: {accept}</span>}{maxSize && <span>Maximum size: {maxSize}</span>}</label>
);

export const StatusMonitor = ({ status="Healthy", label="System status", detail }) => (
  <div className="etb-status-monitor"><span className={`etb-status-dot etb-status-dot--${status.toLowerCase().replace(/\s/g,"-")}`} /> <div><strong>{label}</strong>{detail && <span>{detail}</span>}</div><Badge status={status==="Healthy"?"success":status==="Warning"?"warning":"error"}>{status}</Badge></div>
);

export const AIChat = ({ messages=[], onSend, placeholder="Ask a question..." }) => (
  <section className="etb-ai-chat"><div className="etb-ai-chat__messages">{messages.map((m,i)=><div key={i} className={`etb-chat-message etb-chat-message--${m.role}`}><span>{m.content}</span>{m.source && <small>Source: {m.source}</small>}</div>)}</div><form className="etb-ai-chat__composer" onSubmit={e=>{e.preventDefault();const value=e.currentTarget.elements.message.value.trim();if(value){onSend?.(value);e.currentTarget.reset();}}}><input name="message" placeholder={placeholder} /><Button type="submit">Send</Button></form></section>
);

export { React };
