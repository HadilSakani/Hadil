import SectionHead from './SectionHead.jsx'

export default function Experience({ t }) {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <div className="shell">
        <div id="experience-heading">
          <SectionHead command={t.experience.command} title={t.experience.title} />
        </div>

        <ol className="log">
          {t.experience.entries.map((entry) => (
            <li className="log__entry" key={entry.date}>
              <span className="log__date mono ltr">{entry.date}</span>
              <div>
                <p className="log__message">{entry.message}</p>
                <span className="log__type">{entry.type}</span>
                <p className="log__detail">{entry.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
