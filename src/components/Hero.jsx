import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import profileImage from '../assets/profile-cosmic.png'


export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()

  // Cache navigation items to avoid redundant translation calls
  const nav = useMemo(() => [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.stacks'), href: '#technologies' },
    { label: t('nav.contact'), href: '#contact' },
  ], [language, t])

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
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content jump when navbar becomes fixed */}
      <div className="h-16"></div>

      <div id="top" className="mx-auto w-full max-w-6xl px-6 py-20 lg:py-32">
        <div className="relative grid items-center gap-12 lg:grid-cols-[60%_40%] lg:gap-8 lg:items-center">
          {/* Background ambient effects */}
          <div className="pointer-events-none absolute inset-0 lg:inset-0">
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl lg:h-96 lg:w-96" />
            <div className="absolute right-[-80px] top-20 h-96 w-96 rounded-full bg-sky-400/4 blur-3xl lg:h-[500px] lg:w-[500px]" />
            <div className="absolute bottom-[-100px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/4 blur-3xl lg:h-[500px] lg:w-[500px]" />
          </div>

          {/* Left: Main Text Content */}
          <div className="relative space-y-8 lg:space-y-10 text-left">
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
              className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-6xl leading-[1.05]"
            >
              <span className="block">{t('hero.heading.line1')}</span>
              <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {t('hero.heading.line2')}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base leading-relaxed text-slate-300 lg:text-lg"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500/80 to-sky-400/80 px-8 py-4 text-sm font-medium text-slate-950 shadow-[0_6px_24px_rgba(99,102,241,0.12)] ring-1 ring-white/10 hover:from-indigo-500/90 hover:to-sky-400/90 lg:px-10 lg:py-4.5"
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
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-slate-100 backdrop-blur-md transition hover:bg-white/[0.07] lg:px-10 lg:py-4.5"
              >
                {t('hero.getInTouch')}
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Enhanced Profile Image with Premium Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end lg:pl-8"
          >
            <div className="relative">
              {/* Premium animated gradient glow */}
              <motion.div 
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(168,85,247,0.15), rgba(99,102,241,0.10), rgba(56,189,248,0.15))",
                    "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(56,189,248,0.10), rgba(168,85,247,0.15))",
                    "linear-gradient(225deg, rgba(56,189,248,0.15), rgba(168,85,247,0.10), rgba(99,102,241,0.15))",
                    "linear-gradient(315deg, rgba(168,85,247,0.15), rgba(99,102,241,0.10), rgba(56,189,248,0.15))"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full blur-3xl scale-125"
              ></motion.div>
              
              {/* Secondary subtle glow layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/8 via-purple-500/6 to-sky-500/8 blur-2xl scale-110"></div>
              
              {/* Tertiary ambient glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/4 to-indigo-500/4 blur-3xl scale-110"
              ></motion.div>
              
              {/* Profile image container - Larger and more dominant */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative aspect-square w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center overflow-hidden"
              >
                {/* Enhanced floating decorative elements around the image */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Large star - top left (main accent) */}
                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 15, -15, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                    className="absolute top-6 left-6 text-white/50"
                  >
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </motion.div>

                  {/* Large moon - top right (main accent) */}
                  <motion.div
                    animate={{ 
                      y: [0, -6, 0],
                      scale: [1, 1.08, 1]
                    }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-4 right-8 text-purple-300/45"
                  >
                    <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                    </svg>
                  </motion.div>

                  {/* Large chip - bottom left */}
                  <motion.div
                    animate={{ 
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }}
                    className="absolute bottom-6 left-8 text-sky-300/50"
                  >
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 7H7v6h6V7z"/>
                      <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h1a2 2 0 012 2v1h1a1 1 0 110 2h-1v1h1a1 1 0 110 2h-1v1a2 2 0 01-2 2h-1v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H6a2 2 0 01-2-2v-1H3a1 1 0 110-2h1V9H3a1 1 0 010-2h1V6a2 2 0 012-2h1V2z" clipRule="evenodd"/>
                    </svg>
                  </motion.div>

                  {/* Additional star - bottom right */}
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, -15, 15, 0]
                    }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute bottom-8 right-6 text-indigo-300/40"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </motion.div>

                  {/* Enhanced circuit network */}
                  <div className="absolute inset-0">
                    {/* Top circuit node */}
                    <motion.div
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute top-12 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-400/60"
                    ></motion.div>
                    
                    {/* Bottom circuit node */}
                    <motion.div
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                      className="absolute bottom-12 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-sky-400/60"
                    ></motion.div>

                    {/* Left circuit node */}
                    <motion.div
                      animate={{ 
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-400/50"
                    ></motion.div>
                    
                    {/* Right circuit node */}
                    <motion.div
                      animate={{ 
                        opacity: [0.4, 0.7, 0.4]
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                      className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-400/50"
                    ></motion.div>

                    {/* Circuit lines connecting nodes */}
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute left-10 top-1/2 -translate-y-1/2 right-10 h-0.5 bg-gradient-to-r from-indigo-400/50 via-white/40 to-sky-400/50"
                    ></motion.div>
                    <motion.div
                      animate={{ 
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      className="absolute left-1/2 top-10 -translate-x-1/2 bottom-10 w-0.5 bg-gradient-to-b from-indigo-400/50 via-white/40 to-sky-400/50"
                    ></motion.div>

                    {/* Orbiting dots */}
                    <motion.div
                      animate={{ 
                        rotate: [0, 360]
                      }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
                      className="absolute inset-0"
                    >
                      <div className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                      <div className="absolute top-1/6 right-1/6 w-1.5 h-1.5 bg-indigo-300/35 rounded-full"></div>
                      <div className="absolute bottom-1/6 left-1/6 w-1.5 h-1.5 bg-sky-300/35 rounded-full"></div>
                      <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-purple-300/30 rounded-full"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Larger centered profile image */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                  <div className="absolute inset-0 rounded-full border border-white/30 "></div>
                  
                  {/* Profile image */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Enhanced tech accent lines over image */}
                  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-90"></div>
                    <div className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent"></div>
                    <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/20 to-transparent"></div>
                    <div className="absolute top-1/4 left-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45"></div>
                    <div className="absolute top-1/4 right-0 h-px w-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45"></div>
                    <div className="absolute bottom-1/4 left-0 h-px w-3/4 bg-gradient-to-r from-transparent via-purple-400/15 to-transparent rotate-45"></div>
                    <div className="absolute bottom-1/4 right-0 h-px w-3/4 bg-gradient-to-r from-transparent via-purple-400/15 to-transparent -rotate-45"></div>
                  </div>

                  {/* Additional floating elements over image */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Small floating star over image */}
                    <motion.div
                      animate={{ 
                        y: [0, -3, 0],
                        opacity: [0.6, 0.9, 0.6]
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                      className="absolute top-1/4 right-1/4 text-white/30"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </motion.div>

                    {/* Small tech dot over image */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                      className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-sky-400/40"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

