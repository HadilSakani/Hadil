import { useCallback, useEffect, useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import { content, PROFILE } from './content.js'

const STORAGE_KEY = 'portfolio-lang'
const DEFAULT_LANG = 'en'

// Evaluated once at module load, not during render.
const COPYRIGHT_YEAR = new Date().getFullYear()

function readRequestedLang() {
  try {
    const requested = new URLSearchParams(window.location.search).get('lang')
    if (requested === 'en' || requested === 'ar') return requested
  } catch {
    /* malformed URL — ignore */
  }
  return null
}

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'ar') return stored
  } catch {
    /* storage unavailable — fall through to the default */
  }
  return DEFAULT_LANG
}

/** Keep the URL in step with the active language so links stay shareable. */
function syncUrl(lang) {
  try {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', lang)
    window.history.replaceState(null, '', url.toString())
  } catch {
    /* history unavailable — the stored preference still applies */
  }
}

export default function App() {
  // An explicit ?lang=ar|en wins over the stored preference, so a shared
  // link can point at one language; it is then remembered like any choice.
  const requested = useMemo(() => readRequestedLang(), [])
  const [lang, setLang] = useState(() => requested ?? readStoredLang())
  const t = content[lang]

  const changeLang = useCallback((next) => {
    setLang(next)
    syncUrl(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore write failures */
    }
  }, [])

  // Remember a language that arrived through the URL.
  useEffect(() => {
    if (!requested) return
    try {
      window.localStorage.setItem(STORAGE_KEY, requested)
    } catch {
      /* ignore write failures */
    }
  }, [requested])

  // Keep the document in sync: language, direction and title.
  useEffect(() => {
    const root = document.documentElement
    root.lang = t.htmlLang
    root.dir = t.dir
    document.title = t.meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', t.meta.description)
  }, [t])

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>

      <Header t={t} lang={lang} onChange={changeLang} />

      <main id="main">
        <Hero t={t} lang={lang} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <p>
            © {COPYRIGHT_YEAR} {PROFILE.name}. {t.footer.rights}
          </p>
          <p className="mono ltr">{t.footer.built}</p>
        </div>
      </footer>
    </>
  )
}
