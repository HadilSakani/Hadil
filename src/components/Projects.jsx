import SectionHead from './SectionHead.jsx'
import { DOT_COLORS } from '../content.js'

export default function Projects({ t }) {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="shell">
        <div id="projects-heading">
          <SectionHead command={t.projects.command} title={t.projects.title} />
        </div>

        <ul className="projects__grid">
          {t.projects.items.map((project) => (
            <li key={project.file}>
              <details className="project">
                <summary className="project__summary">
                  <span className="project__row">
                    <span className="project__marker" aria-hidden="true">
                      -rw-r--r--
                    </span>
                    <span className="project__name mono">{project.file}</span>
                  </span>

                  <span className="project__desc">{project.description}</span>

                  <span className="project__meta">
                    <span
                      className="dot"
                      style={{ background: DOT_COLORS[project.dot] }}
                      aria-hidden="true"
                    />
                    <span className="project__lang">{project.tag}</span>
                    <span className="project__tags">
                      <span className="tag">{t.projects.caseStudyPending}</span>
                    </span>
                  </span>
                </summary>

                <div className="project__body">
                  <dl>
                    <div className="project__field">
                      <dt>{t.projects.fields.problem}</dt>
                      <dd>{t.projects.pending}</dd>
                    </div>
                    <div className="project__field">
                      <dt>{t.projects.fields.role}</dt>
                      <dd>{t.projects.pending}</dd>
                    </div>
                    <div className="project__field">
                      <dt>{t.projects.fields.technologies}</dt>
                      <dd>{t.projects.pending}</dd>
                    </div>
                    <div className="project__field">
                      <dt>{t.projects.fields.outcome}</dt>
                      <dd>{t.projects.pending}</dd>
                    </div>
                  </dl>
                  <p className="project__note">{t.projects.noLinks}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
