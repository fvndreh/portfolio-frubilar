import styles from './Footer.module.css'
import { useApp } from '../context/AppContext'

export default function Footer() {
  const { t } = useApp()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          <span className={styles.accent}>{'<'}</span>
          fr
          <span className={styles.accent}>{' />'}</span>
        </span>
        <p className={styles.copy}>
          {t.footer.made_by} · {new Date().getFullYear()}
        </p>
        <a href="#hero" className={styles.top}>{t.footer.back_top}</a>
      </div>
    </footer>
  )
}
