import SectionHead from './SectionHead.jsx'
import { PROFILE } from '../content.js'
import { cvAvailable, CV_PATH } from '../cvAsset.js'

export default function Contact({ t }) {
  const items = [
    {
      label: t.contact.labels.email,
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
    },
    {
      label: t.contact.labels.phone,
      value: PROFILE.phone,
      href: `tel:${PROFILE.phoneHref}`,
    },
    {
      label: t.contact.labels.location,
      value: PROFILE.location,
    },
    {
      label: t.contact.labels.linkedin,
      value: 'linkedin.com/in/hadil-sakani-',
      href: PROFILE.linkedin,
    },
    {
      label: t.contact.labels.github,
      value: 'github.com/HadilSakani',
      href: PROFILE.github,
    },
    {
      label: t.contact.labels.behance,
      value: 'behance.net/hadil_sakani',
      href: PROFILE.behance,
    },
  ]

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="shell">
        <div id="contact-heading">
          <SectionHead command={t.contact.command} title={t.contact.title} />
        </div>

        <p className="contact__intro">{t.contact.intro}</p>

        <ul className="contact__list">
          {items.map((item) => (
            <li className="contact__item" key={item.label}>
              <span className="contact__label">{item.label}</span>
              {item.href ? (
                <a
                  className="contact__value ltr"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span className="contact__value contact__value--muted">{item.value}</span>
              )}
            </li>
          ))}

          <li className="contact__item">
            <span className="contact__label">{t.contact.labels.cv}</span>
            {cvAvailable ? (
              <a className="contact__value" href={CV_PATH} download target="_blank" rel="noreferrer noopener">
                cat cv.pdf
              </a>
            ) : (
              <span className="contact__value contact__value--muted">cv.pdf — {t.projects.pending}</span>
            )}
          </li>
        </ul>
      </div>
    </section>
  )
}
