import styles from './Projects.module.css'
import { useApp } from '../context/AppContext'

const PROJECTS_DATA = [
  {
    name: 'OnCore Platform',
    key: 'oncore' as const,
    tags: ['Angular', 'Ionic', 'Node.js', 'MongoDB'],
    links: { live: 'https://oncore.cl/landing' },
    featured: true,
  },
  {
    name: 'DLove',
    key: 'dlove' as const,
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: { code: 'https://github.com/fvndreh/dlovebox', live: 'https://fvndreh.github.io/dlovebox/#/' },
    featured: true,
  },
  {
    name: 'Scrapper RUT',
    key: 'scrapper' as const,
    tags: ['Python', 'Flask', 'Scraping'],
    links: { code: 'https://github.com/fvndreh' },
    featured: false,
  },
  {
    name: 'PokeAPI Explorer',
    key: 'pokeapi' as const,
    tags: ['HTML', 'SCSS', 'JavaScript', 'REST'],
    links: { code: 'https://github.com/fvndreh' },
    featured: false,
  }
]

export default function Projects() {
  const { t } = useApp()

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tag}>{t.projects.tag}</span>
        <h2 className={styles.heading}>{t.projects.heading}</h2>

        <div className={styles.featured}>
          {PROJECTS_DATA.filter(p => p.featured).map((p, i) => (
            <div key={i} className={styles.featuredCard}>
              <div className={styles.cardHeader}>
                <span className={styles.folderIcon}>◈</span>
                <div className={styles.cardLinks}>
                  {p.links.live && (
                    <a href={p.links.live} target="_blank" rel="noreferrer" aria-label="ver sitio">
                      <ExternalIcon />
                    </a>
                  )}
                  {p.links.code && (
                    <a href={p.links.code} target="_blank" rel="noreferrer" aria-label="código">
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
              <h3 className={styles.projectName}>{p.name}</h3>
              <p className={styles.projectDesc}>{t.projects.descs[p.key]}</p>
              <div className={styles.tags}>
                {p.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rest}>
          {PROJECTS_DATA.filter(p => !p.featured).map((p, i) => (
            <div key={i} className={styles.restCard}>
              <div className={styles.restHeader}>
                <div>
                  <span className={styles.folderIconSm}>◈</span>
                  <h4 className={styles.restName}>{p.name}</h4>
                </div>
                {p.links.code && (
                  <a href={p.links.code} target="_blank" rel="noreferrer">
                    <GithubIcon size={16} />
                  </a>
                )}
              </div>
              <p className={styles.restDesc}>{t.projects.descs[p.key]}</p>
              <div className={styles.tags}>
                {p.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function ExternalIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
