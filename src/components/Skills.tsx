import styles from './Skills.module.css'
import { useApp } from '../context/AppContext'

const SKILL_DATA = [
  {
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'React / Vite', level: 82 },
      { name: 'TypeScript', level: 88 },
      { name: 'Ionic', level: 75 },
      { name: 'SCSS / CSS', level: 80 },
    ],
  },
  {
    skills: [
      { name: 'Node.js / NestJS', level: 88 },
      { name: '.NET', level: 65 },
      { name: 'Python / Flask', level: 72 },
      { name: 'REST APIs', level: 92 },
    ],
  },
  {
    skills: [
      { name: 'MySQL / SQL Server', level: 80 },
      { name: 'MongoDB', level: 65 },
      { name: 'Docker', level: 70 },
      { name: 'Azure / CI-CD', level: 68 },
      { name: 'Git / GitHub', level: 90 },
    ],
  },
  {
    skills: [
      { name: 'GitHub Copilot', level: 92 },
      { name: 'Claude / Codex', level: 88 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'AI-Driven Dev', level: 80 },
    ],
  },
]

const TOOLS = [
  'VS Code', 'Postman', 'Jira', 'Scrum', 'Docker',
  'Azure', 'AWS', 'CI/CD', 'Git', 'MySQL', 'SQL Server',
]

export default function Skills() {
  const { t } = useApp()

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>{t.skills.tag}</span>
        <h2 className={styles.heading}>{t.skills.heading}</h2>

        <div className={styles.grid}>
          {SKILL_DATA.map((cat, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{t.skills.categories[i]}</h3>
              <ul className={styles.skillList}>
                {cat.skills.map(s => (
                  <li key={s.name}>
                    <div className={styles.skillRow}>
                      <span className={styles.skillName}>{s.name}</span>
                      <span className={styles.skillPct}>{s.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.fill}
                        style={{ '--w': `${s.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.tools}>
          <p className={styles.toolsLabel}>{t.skills.tools_label}</p>
          <div className={styles.toolsGrid}>
            {TOOLS.map(tool => (
              <span key={tool} className={styles.tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
