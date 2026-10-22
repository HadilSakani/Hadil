import SectionHead from './SectionHead.jsx'
import { PROFILE } from '../content.js'

export default function About({ t }) {
  const facts = [
    { label: t.about.facts.location, value: t.about.facts.locationValue },
    { label: t.about.facts.email, value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: t.about.facts.phone, value: PROFILE.phone, href: `tel:${PROFILE.phoneHref}` },
    { label: t.about.facts.languages, value: t.about.facts.languagesValue },
    { label: t.about.facts.focus, value: t.about.facts.focusValue },
    { label: t.about.facts.education, value: t.about.facts.educationValue },
  ]

  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="shell">
        <div id="about-heading">
          <SectionHead command={t.about.command} title={t.about.title} />
        </div>

        <div className="about__grid">
          <p className="about__summary">{t.about.summary}</p>

          <dl className="about__facts">
            {facts.map((fact) => (
              <div className="about__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  {fact.href ? (
                    <a className="ltr" href={fact.href}>
                      {fact.value}
                    </a>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
