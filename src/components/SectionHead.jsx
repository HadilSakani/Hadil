/**
 * Section heading rendered as a shell command, e.g. `ls ~/projects`.
 * The command itself stays LTR inside an RTL document.
 */
export default function SectionHead({ command, title }) {
  return (
    <div className="section__head">
      <h2 className="section__command">
        <span className="section__prompt" aria-hidden="true">
          ❯
        </span>
        <span className="ltr">{command}</span>
      </h2>
      <span className="section__title">{title}</span>
      <span className="section__rule" aria-hidden="true" />
    </div>
  )
}
