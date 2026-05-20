import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { useApp } from '../context/AppContext'

export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        <span className={styles.logoAccent}>{'<'}</span>
        fr
        <span className={styles.logoAccent}>{' />'}</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="/cv_frubilar.pdf" download className={styles.cvBtn} onClick={() => setMenuOpen(false)}>
            {t.nav.cv}
          </a>
        </li>
        <li className={styles.controls}>
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label="toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className={styles.langBtn} onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </li>
      </ul>

      <div className={styles.mobileControls}>
        <button className={styles.iconBtn} onClick={toggleTheme} aria-label="toggle theme">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className={styles.langBtn} onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        <button className={styles.burger} onClick={() => setMenuOpen(o => !o)} aria-label="toggle menu">
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
          <span className={menuOpen ? styles.burgerOpen : ''} />
        </button>
      </div>
    </nav>
  )
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
