import styles from './Experience.module.css'
import { useApp } from '../context/AppContext'

const TAGS = [
  ['Angular', '.NET', 'Docker', 'Azure', 'CI/CD'],
  ['Angular', 'React', 'Node.js', 'TypeScript', 'Java'],
  ['Node.js', 'TypeScript', 'Laravel', 'AWS', 'Jest'],
  ['AngularJS', 'Python', 'Flask', 'MySQL'],
  ['PHP', 'CodeIgniter', 'MySQL'],
]

export default function Experience() {
  const { t } = useApp()

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>{t.experience.tag}</span>
        <h2 className={styles.heading}>{t.experience.heading}</h2>

        <div className={styles.timeline}>
          {t.jobs.map((job, i) => (
            <div key={i} className={styles.entry}>
              <div className={styles.left}>
                <span className={styles.period}>{job.period}</span>
                <div className={styles.dot} />
              </div>
              <div className={styles.right}>
                <p className={styles.company}>{job.company}</p>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.desc}>{job.desc}</p>
                <div className={styles.tags}>
                  {TAGS[i].map(tag => (
                    <span key={tag} className={styles.techTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
