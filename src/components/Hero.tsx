import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { useApp } from '../context/AppContext'

export default function Hero() {
  const { t } = useApp()
  const roleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ROLES = t.hero.roles
    let roleIdx = 0
    let charIdx = 0
    let deleting = false
    let raf: ReturnType<typeof setTimeout>

    const type = () => {
      const current = ROLES[roleIdx]
      if (!roleRef.current) return

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1)
        charIdx++
        if (charIdx === current.length) {
          deleting = true
          raf = setTimeout(type, 1800)
          return
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1)
        charIdx--
        if (charIdx === 0) {
          deleting = false
          roleIdx = (roleIdx + 1) % ROLES.length
        }
      }
      raf = setTimeout(type, deleting ? 45 : 90)
    }

    raf = setTimeout(type, 600)
    return () => clearTimeout(raf)
  }, [t.hero.roles])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.greeting}>{t.hero.greeting}</p>
        <h1 className={styles.name}>Felipe Rubilar</h1>
        <p className={styles.role}>
          <span ref={roleRef} />
          <span className={styles.cursor}>|</span>
        </p>
        <p className={styles.tagline}>{t.hero.tagline}</p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>{t.hero.cta_projects}</a>
          <a href="/cv_frubilar.pdf" download className={styles.btnSecondary}>
            {t.hero.cta_cv}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>{t.hero.stat_exp}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>15+</span>
            <span className={styles.statLabel}>{t.hero.stat_projects}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>6+</span>
            <span className={styles.statLabel}>{t.hero.stat_tech}</span>
          </div>
        </div>
      </div>

      <div className={styles.grid} aria-hidden="true" />
    </section>
  )
}
