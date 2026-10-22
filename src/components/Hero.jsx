import { useEffect, useRef, useState } from 'react'
import TerminalPanel from './TerminalPanel.jsx'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js'
import { cvAvailable, CV_PATH } from '../cvAsset.js'

const TYPE_SPEED = 65
const HOLD_SPEED = 420

/**
 * Hero: a terminal window where `whoami` types itself and reveals the
 * name, role and one-line bio. Respects prefers-reduced-motion by jumping
 * straight to the finished state.
 */
export default function Hero({ t, lang }) {
  const reducedMotion = usePrefersReducedMotion()
  const command = t.hero.command

  const [typed, setTyped] = useState(reducedMotion ? command : '')
  const [revealed, setRevealed] = useState(reducedMotion)
  const timerRef = useRef(null)

  useEffect(() => {
    if (reducedMotion) return

    let i = 0
    timerRef.current = window.setInterval(() => {
      i += 1
      setTyped(command.slice(0, i))
      if (i >= command.length) {
        window.clearInterval(timerRef.current)
        timerRef.current = window.setTimeout(() => setRevealed(true), HOLD_SPEED)
      }
    }, TYPE_SPEED)

    return () => {
      window.clearInterval(timerRef.current)
      window.clearTimeout(timerRef.current)
    }
  }, [command, reducedMotion])

  // The secondary name is written in the other script, so it needs the
  // opposite direction to render correctly.
  const secondaryDir = lang === 'ar' ? 'ltr' : 'rtl'

  return (
    <section className="section hero" id="hero" aria-labelledby="hero-title">
      <div className="shell">
        <TerminalPanel title={t.hero.windowTitle} className="hero__panel">
          <div className="hero__output">
            <p className="hero__line ltr">
              <span style={{ color: 'var(--green)' }} aria-hidden="true">
                ❯{' '}
              </span>
              <span>{typed}</span>
              {!revealed && <span className="cursor" aria-hidden="true" />}
            </p>

            {revealed && (
              <div className="hero__output">
                <h1 className="hero__name" id="hero-title">
                  {t.hero.name}
                </h1>
                <p className="hero__name-ar">
                  <span dir={secondaryDir}>{t.hero.nameLocalized}</span>
                </p>
                <p className="hero__role">{t.hero.role}</p>
                <p className="hero__bio">{t.hero.bio}</p>
                <p className="hero__status">{t.hero.status}</p>
                <p className="hero__line" aria-hidden="true">
                  <span className="cursor">{t.hero.cursor}</span>
                </p>
              </div>
            )}
          </div>

          <div className="hero__actions">
            <a className="cmd-btn" href="#projects">
              <span className="cmd-btn__prompt" aria-hidden="true">
                ❯
              </span>
              <span className="ltr">{t.hero.buttons.projects}</span>
            </a>
            {cvAvailable && (
              <a className="cmd-btn cmd-btn--ghost" href={CV_PATH} download>
                <span className="cmd-btn__prompt" aria-hidden="true">
                  ❯
                </span>
                <span className="ltr">{t.hero.buttons.cv}</span>
              </a>
            )}
          </div>
        </TerminalPanel>
      </div>
    </section>
  )
}
