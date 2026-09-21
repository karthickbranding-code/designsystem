import React from "react";
import "./styles.css";

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
    {(title || description || actions) && (
      <header className="etb-card__header">
        <div><h3>{title}</h3>{description && <p>{description}</p>}</div>
        {actions}
      </header>
    )}
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
  <label className="etb-field" htmlFor={id}>
    {label && <span className="etb-field__label">{label}</span>}
    <input id={id} className={`etb-input ${error ? "is-error" : ""}`} {...props} />
    {error ? <span className="etb-field__error">{error}</span> : helperText ? <span className="etb-field__helper">{helperText}</span> : null}
  </label>
);

export const SearchInput = ({ placeholder="Search", shortcut="Ctrl K", ...props }) => (
  <label className="etb-search">
    <span aria-hidden="true">⌕</span>
    <input placeholder={placeholder} {...props} />
    {shortcut && <kbd>{shortcut}</kbd>}
  </label>
);

const badgeMap = { neutral:"neutral", info:"info", success:"success", warning:"warning", error:"error" };
export const Badge = ({ status="neutral", children, className="" }) => (
  <span className={`etb-badge etb-badge--${badgeMap[status] || "neutral"} ${className}`}><span className="etb-badge__dot" />{children}</span>
);

export const Avatar = ({ src, name="User", size="md" }) => (
  <span className={`etb-avatar etb-avatar--${size}`} title={name}>
    {src ? <img src={src} alt={name} /> : name.split(" ").map(x=>x[0]).slice(0,2).join("").toUpperCase()}
  </span>
);

export const Tabs = ({ items, value, onChange, className="" }) => (
  <div className={`etb-tabs ${className}`} role="tablist">
    {items.map(item => <button key={item.value} role="tab" aria-selected={value===item.value} className={value===item.value ? "is-active" : ""} onClick={()=>onChange?.(item.value)}>{item.label}</button>)}
  </div>
);

export const Alert = ({ status="info", title, children, action }) => (
  <div className={`etb-alert etb-alert--${status}`} role={status==="error" ? "alert" : "status"}>
    <div><strong>{title}</strong>{children && <p>{children}</p>}</div>{action}
  </div>
);

export const Skeleton = ({ width="100%", height=16, className="" }) => (
  <span className={`etb-skeleton ${className}`} style={{width, height}} aria-hidden="true" />
);

export const EmptyState = ({ title, description, action, icon="□" }) => (
  <div className="etb-empty"><div className="etb-empty__icon">{icon}</div><h3>{title}</h3><p>{description}</p>{action}</div>
);

export const Dialog = ({ open, title, children, actions, onClose }) => {
  if (!open) return null;
  return <div className="etb-dialog-backdrop" role="presentation" onMouseDown={e=>e.target===e.currentTarget&&onClose?.()}>
    <div className="etb-dialog" role="dialog" aria-modal="true" aria-labelledby="etb-dialog-title">
      <header><h2 id="etb-dialog-title">{title}</h2><IconButton label="Close" onClick={onClose}>×</IconButton></header>
      <div className="etb-dialog__body">{children}</div>
      {actions && <footer>{actions}</footer>}
    </div>
  </div>;
};

export const Status = Badge;
export const Loading = Skeleton;
export { React };
