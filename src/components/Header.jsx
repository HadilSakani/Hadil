import LanguageSwitch from './LanguageSwitch.jsx'

export default function Header({ t, lang, onChange }) {
  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#experience', label: t.nav.experience },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="brand" href="#hero">
          <span className="brand__mark" aria-hidden="true">
            H
          </span>
          <span className="brand__name">hadil@portfolio</span>
        </a>

        <nav className="site-nav" aria-label={t.nav.label}>
          <ul className="site-nav__list">
            {links.map((link) => (
              <li key={link.href}>
                <a className="site-nav__link ltr" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageSwitch lang={lang} onChange={onChange} t={t} />
      </div>
    </header>
  )
}
