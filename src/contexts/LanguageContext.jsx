import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  en: {
    // Navigation
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      stacks: 'Stacks',
      contact: 'Contact'
    },
    // Hero
    hero: {
      tagline: 'COSMIC · FUTURISTIC · MINIMAL',
      heading: {
        line1: 'Hello,',
        line2: `I'm Gabriella`,
      },
      description: 'I build premium, minimal web experiences\u2014clean typography, subtle depth, and motion that feels natural.',
      viewProjects: 'View projects',
      getInTouch: 'Get in touch'
    },
    // About
    about: {
      title: '<developer mindset />',
      eyebrow: 'ABOUT',
      concepts: {
        clarity: {
          title: 'Clarity',
          subtitle: 'Design with purpose',
          points: [
            'Clean, intuitive interfaces',
            'Focused user experiences',
            'Intentional visual hierarchy'
          ]
        },
        motion: {
          title: 'Motion',
          subtitle: 'Subtle animations',
          points: [
            'Natural micro-interactions',
            'Smooth transitions',
            'Performance-optimized'
          ]
        },
        systems: {
          title: 'Systems',
          subtitle: 'Scalable architecture',
          points: [
            'Component-driven development',
            'Reusable design patterns',
            'Maintainable code structure'
          ]
        },
        performance: {
          title: 'Performance',
          subtitle: 'Lightning fast',
          points: [
            'Optimized loading strategies',
            'Efficient rendering',
            'Smooth user interactions'
          ]
        }
      },
      approach: {
        title: 'My Approach',
        code: {
          status: 'system.status',
          focus: 'focus: "interfaces"',
          style: 'style: "minimal + cosmic"',
          approach: 'approach: "precision"'
        }
      }
    },
    // Projects
    projects: {
      title: 'Selected work blending design, logic, and interaction',
      eyebrow: 'PROJECTS',
      featured: 'Featured',
      nebulanotes: {
        title: 'Nebula Notes',
        description: 'A clean notes app with fast search, markdown support, and offline-first storage.',
        tags: ['React', 'Local storage', 'UI']
      },
      orbitdashboard: {
        title: 'Orbit Dashboard',
        description: 'A minimal analytics dashboard with responsive charts and accessible components.',
        tags: ['React', 'Tailwind', 'A11y']
      },
      stellarshop: {
        title: 'Stellar Shop',
        description: 'A storefront concept with polished product cards, filters, and smooth motion.',
        tags: ['UI', 'Motion', 'Performance']
      }
    },
    // Experience
    experience: {
      title: 'My journey through learning, building, and evolving',
      eyebrow: 'EXPERIENCE'

    },
    // Technologies
    technologies: {
      title: 'Tools and technologies behind my work',
      eyebrow: 'TECH STACK',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
        database: 'Database'
      }
    },
    // Contact
    contact: {
      eyebrow: 'CONTACT',
      title: 'Let’s connect. Feel free to reach out.',
      social: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email'
      }
    },
    // Footer
    footer: {
      tagline: 'Crafting premium digital experiences',
      navigation: 'Navigation',
      connect: 'Connect',
      copyright: '© {year} Gabriella Gomes',
      builtWith: 'Built with React, Tailwind, Framer Motion'
    }
  },
  pt: {
    // Navigation
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      stacks: 'Tecnologias',
      contact: 'Contato'
    },
    // Hero
    hero: {
      tagline: 'CÓSMICO · FUTURISTA · MINIMALISTA',
      heading: {
        line1: 'Criando',
        line2: 'interfaces',
        line3: 'com silenciosa',
        line4: 'precisão.'
      },
      description: 'Crio experiências web premium e minimalistas\u2014tipografia limpa, profundidade sutil e movimento que parece natural.',
      viewProjects: 'Ver projetos',
      getInTouch: 'Entre em contato'
    },
    // About
    about: {
      title: '<mindset de desenvolvedor />',
      eyebrow: 'SOBRE',
      concepts: {
        clarity: {
          title: 'Clareza',
          subtitle: 'Design com propósito',
          points: [
            'Interfaces limpas e intuitivas',
            'Experiências de usuário focadas',
            'Hierarquia visual intencional'
          ]
        },
        motion: {
          title: 'Movimento',
          subtitle: 'Animações sutis',
          points: [
            'Micro-interações naturais',
            'Transições suaves',
            'Otimizado para performance'
          ]
        },
        systems: {
          title: 'Sistemas',
          subtitle: 'Arquitetura escalável',
          points: [
            'Desenvolvimento orientado a componentes',
            'Padrões de design reutilizáveis',
            'Estrutura de código mantível'
          ]
        },
        performance: {
          title: 'Performance',
          subtitle: 'Rapidez extrema',
          points: [
            'Estratégias de carregamento otimizadas',
            'Renderização eficiente',
            'Interações de usuário suaves'
          ]
        }
      },
      approach: {
        title: 'Minha Abordagem',
        code: {
          status: 'system.status',
          focus: 'focus: "interfaces"',
          style: 'style: "minimal + cosmic"',
          approach: 'approach: "precision"'
        }
      }
    },
    // Projects
    projects: {
      title: 'Projetos que unem design, lógica e interação',
      eyebrow: 'PROJETOS',
      featured: 'Destaque',
      nebulanotes: {
        title: 'Nebula Notes',
        description: 'Um app de notas limpo com busca rápida, suporte markdown e armazenamento offline-first.',
        tags: ['React', 'Local storage', 'UI']
      },
      orbitdashboard: {
        title: 'Orbit Dashboard',
        description: 'Um dashboard analítico minimal com gráficos responsivos e componentes acessíveis.',
        tags: ['React', 'Tailwind', 'A11y']
      },
      stellarshop: {
        title: 'Stellar Shop',
        description: 'Um conceito de loja com cards de produto polidos, filtros e movimento suave.',
        tags: ['UI', 'Motion', 'Performance']
      }
    },
    // Experience
    experience: {
      title: 'Minha jornada entre aprendizado, construção e evolução',
      eyebrow: 'EXPERIÊNCIA'
    },
    // Technologies
    technologies: {
      title: 'Ferramentas e tecnologias por trás do meu trabalho',
      eyebrow: 'TECNOLOGIAS',
      categories: {
        frontend: 'Front-end',
        backend: 'Back-end',
        tools: 'Ferramentas',
        database: 'Banco de Dados'
      }
    },
    // Contact
    contact: {
      eyebrow: 'CONTATO',
      title: 'Vamos nos conectar! Fique à vontade para entrar em contato.',
      social: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        email: 'Email'
      }
    },
    // Footer
    footer: {
      tagline: 'Criando experiências digitais premium',
      navigation: 'Navegação',
      connect: 'Conectar',
      copyright: '© {year} Gabriella Gomes',
      builtWith: 'Desenvolvido com React, Tailwind, Framer Motion'
    }
  }
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    // Check localStorage for saved language preference
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage)
    }
  }, [mounted])

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key, variables = {}) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
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
