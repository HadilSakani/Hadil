/**
 * Two-button language switch. The active language is exposed to assistive
 * tech through `aria-pressed`, and the buttons are reachable by keyboard.
 */
export default function LanguageSwitch({ lang, onChange, t }) {
  return (
    <div className="lang-switch" role="group" aria-label={t.language.label}>
      <button
        type="button"
        className="lang-switch__btn"
        aria-pressed={lang === 'en'}
        onClick={() => onChange('en')}
        lang="en"
        title={lang === 'en' ? 'English' : 'Switch to English'}
      >
        {t.language.en}
      </button>
      <button
        type="button"
        className="lang-switch__btn"
        aria-pressed={lang === 'ar'}
        onClick={() => onChange('ar')}
        lang="ar"
        title={lang === 'ar' ? 'العربية' : t.language.switchTo}
      >
        {t.language.ar}
      </button>
    </div>
  )
}
