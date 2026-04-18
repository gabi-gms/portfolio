import { createContext, useContext, useState, useEffect } from 'react'

// Import translation files
import enTranslations from '../locales/en.json'
import ptTranslations from '../locales/pt.json'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)
  const [translations, setTranslations] = useState(enTranslations)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage)
      setTranslations(savedLanguage === 'en' ? enTranslations : ptTranslations)
    }
  }, [mounted])

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en'
    setLanguage(newLanguage)
    setTranslations(newLanguage === 'en' ? ptTranslations : enTranslations)
    localStorage.setItem('language', newLanguage)
  }

  // Optimized translation function with direct object access
  const t = (key, variables = {}) => {
    const keys = key.split('.')
    let value = translations[keys[0]]
    
    for (let i = 1; i < keys.length; i++) {
      value = value?.[keys[i]]
    }
    
    if (!value) return key
    
    // Handle variable interpolation only for strings
    if (typeof value === 'string') {
      return value.replace(/\{(\w+)\}/g, (match, varName) => {
        return variables[varName] !== undefined ? variables[varName] : match
      })
    }
    
    // Return non-string values as-is (arrays, objects, etc.)
    return value
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
