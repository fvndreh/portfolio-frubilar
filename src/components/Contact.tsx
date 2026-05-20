import { useState } from 'react'
import styles from './Contact.module.css'
import { useApp } from '../context/AppContext'

export default function Contact() {
  const { t } = useApp()
  const [copied, setCopied] = useState(false)
  const EMAIL = 'felipe.rubilar.zamorano@gmail.com'

  const copy = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>{t.contact.tag}</span>
        <h2 className={styles.heading}>{t.contact.heading}</h2>
        <p className={styles.sub}>
          {t.contact.sub.split('\n').map((line, i) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </p>

        <div className={styles.emailRow}>
          <span className={styles.email}>{EMAIL}</span>
          <button className={styles.copyBtn} onClick={copy}>
            {copied ? t.contact.copied : t.contact.copy}
          </button>
          <a href={`mailto:${EMAIL}`} className={styles.mailBtn}>
            {t.contact.send}
          </a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/fvndreh" target="_blank" rel="noreferrer" className={styles.social}>
            <GithubIcon />
            {t.contact.github}
          </a>
          <a href="https://linkedin.com/in/frubilar/" target="_blank" rel="noreferrer" className={styles.social}>
            <LinkedinIcon />
            {t.contact.linkedin}
          </a>
          <a href="/cv_frubilar.pdf" download className={styles.social}>
            <DownloadIcon />
            {t.contact.download_cv}
          </a>
        </div>
      </div>
    </section>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
