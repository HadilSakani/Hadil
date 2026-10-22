import SectionHead from './SectionHead.jsx'

export default function Skills({ t }) {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="shell">
        <div id="skills-heading">
          <SectionHead command={t.skills.command} title={t.skills.title} />
        </div>

        <div className="skills">
          {t.skills.groups.map((group) => (
            <div className="skills__group" key={group.key}>
              <h3 className="skills__key">{group.label}</h3>
              <ul className="skills__items">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="skill-tag">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
