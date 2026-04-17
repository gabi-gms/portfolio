import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext.jsx'
import { useLanguage } from '../contexts/LanguageContext.jsx'


export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  const nav = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.stacks'), href: '#technologies' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/[0.08] backdrop-blur-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]' 
          : 'bg-transparent'
      }`}>
        <div className="mx-auto w-full max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 backdrop-blur-md transition hover:bg-white/[0.07]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80 shadow-[0_0_18px_rgba(99,102,241,0.5)]" />
              <span className="font-medium tracking-tight">Gabriella Gomes</span>
            </a>

            <nav className="hidden items-center gap-2 sm:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm text-slate-300/90 transition hover:bg-white/5 hover:text-slate-100"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Language Toggle Button */}
              <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-slate-100"
                aria-label="Toggle language"
              >
                {language === 'en' ? 'PT' : 'EN'}
              </motion.button>
              
              {/* Theme Toggle Button */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-slate-100"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {isDark ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                </motion.div>
              </motion.button>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      <div className="h-16"></div>

      <div id="top" className="mx-auto w-full max-w-6xl px-6 pb-6 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.21, 0.65, 0.21, 0.98] }}
          className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_circle_at_15%_15%,rgba(99,102,241,0.10),transparent_65%),radial-gradient(500px_circle_at_70%_20%,rgba(56,189,248,0.06),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(circle_at_50%_20%,black_35%,transparent_70%)]">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-indigo-500/6 blur-3xl" />
            <div className="absolute right-[-48px] top-2 h-56 w-56 rounded-full bg-sky-400/6 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Main Text Content */}
            <div className="space-y-5">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xs font-medium tracking-[0.26em] text-slate-400"
              >
                {t('hero.tagline')}
              </motion.p>

              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl leading-[1.1]"
              >
                <span className="block">{t('hero.heading.line1')}</span>
                <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  {t('hero.heading.line2')}
                </span>
                <span className="block mt-1">{t('hero.heading.line3')}</span>
                <span className="block bg-gradient-to-r from-indigo-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                  {t('hero.heading.line4')}
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-sm text-sm leading-relaxed text-slate-300"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500/80 to-sky-400/80 px-4 py-2.5 text-sm font-medium text-slate-950 shadow-[0_6px_24px_rgba(99,102,241,0.12)] ring-1 ring-white/10 hover:from-indigo-500/90 hover:to-sky-400/90"
                >
                  <span className="relative">
                    {t('hero.viewProjects')}
                    <span className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-10 bg-white/40 opacity-0 blur-[1px] transition group-hover:opacity-70" />
                  </span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 backdrop-blur-md transition hover:bg-white/[0.07]"
                >
                  {t('hero.getInTouch')}
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Profile Image with Tech Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative">
                {/* Animated gradient glow behind image */}
                <motion.div 
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(168,85,247,0.08), rgba(99,102,241,0.06), rgba(56,189,248,0.08))",
                      "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(56,189,248,0.06), rgba(168,85,247,0.08))",
                      "linear-gradient(225deg, rgba(56,189,248,0.08), rgba(168,85,247,0.06), rgba(99,102,241,0.08))",
                      "linear-gradient(315deg, rgba(168,85,247,0.08), rgba(99,102,241,0.06), rgba(56,189,248,0.08))"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full blur-2xl scale-105"
                ></motion.div>
                
                {/* Profile image container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative aspect-square w-52 h-52 sm:w-64 sm:h-64"
                >
                  <div className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_72px_rgba(0,0,0,0.35)]"></div>
                  
                  {/* Profile placeholder */}
                  <div className="absolute inset-3 rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/12 to-blue-500/15 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 mx-auto mb-3 shadow-[0_0_24px_rgba(99,102,241,0.25)]"></div>
                      <div className="text-sm font-medium text-slate-300">GG</div>
                    </div>
                  </div>
                  
                  {/* Subtle tech accent lines */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/8 to-transparent rotate-90"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Subtle glow effect */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[240px] bg-gradient-to-r from-purple-500/2 via-indigo-500/1.5 to-transparent blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}

