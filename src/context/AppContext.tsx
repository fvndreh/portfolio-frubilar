import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Lang } from '../i18n/translations'

type Theme = 'dark' | 'light'

interface AppContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations.es
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType>(null!)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    (localStorage.getItem('lang') as Lang) || 'es'
  )
  const [theme, setTheme] = useState<Theme>(() =>
    (localStorage.getItem('theme') as Theme) || 'dark'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <AppContext.Provider value={{ lang, setLang, t: translations[lang], theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
