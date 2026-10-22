/**
 * Shared terminal-window chrome used by every section.
 */
export default function TerminalPanel({ title, children, className = '' }) {
  return (
    <div className={`panel ${className}`.trim()}>
      <div className="panel__bar">
        <span className="panel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="panel__title mono ltr">{title}</span>
      </div>
      <div className="panel__body">{children}</div>
    </div>
  )
}
