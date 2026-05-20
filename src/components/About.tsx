import styles from './About.module.css'
import { useApp } from '../context/AppContext'

export default function About() {
  const { t } = useApp()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>{t.about.tag}</span>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h2 className={styles.heading}>{t.about.heading}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
            <div className={styles.chips}>
              <span>{t.about.chip_location}</span>
              <span>{t.about.chip_available}</span>
              <span>{t.about.chip_remote}</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.terminal}>
                <div className={styles.terminalHeader}>
                  <span className={styles.dot} data-color="red" />
                  <span className={styles.dot} data-color="yellow" />
                  <span className={styles.dot} data-color="green" />
                </div>
                <pre className={styles.code}>{`const frubilar = {
  rol: "Senior Full Stack Developer",
  stack: ["Angular", "React", "Node.js",
          "NestJS", ".NET", "Python"],
  db: ["MySQL", "SQL Server", "MongoDB"],
  infra: ["Docker", "Azure", "AWS", "CI/CD"],
  idiomas: {
    español: "nativo",
    inglés: "B1"
  },
  cert: "Scrum Foundation (Certiprof)",
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
