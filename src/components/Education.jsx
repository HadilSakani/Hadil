import SectionHead from './SectionHead.jsx'

export default function Education({ t }) {
  return (
    <section className="section" id="education" aria-labelledby="education-heading">
      <div className="shell">
        <div id="education-heading">
          <SectionHead command={t.education.command} title={t.education.title} />
        </div>

        <div className="edu__list">
          {t.education.items.map((item) => (
            <article className="edu__item" key={item.title}>
              <h3 className="edu__title">{item.title}</h3>
              {item.org ? <p className="edu__org">{item.org}</p> : null}
              <p className="edu__meta mono ltr">{item.meta}</p>
            </article>
          ))}
        </div>

        <div className="courses">
          <h3 className="skills__key">{t.education.coursesLabel}</h3>
          <p className="courses__note">{t.education.certificateNote}</p>
          <ul className="courses__list">
            {t.education.courses.map((course) => (
              <li className="course" key={course.name}>
                <span className="course__name">{course.name}</span>
                <span className="course__org">— {course.org}</span>
                <span className="course__year mono ltr">{course.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
