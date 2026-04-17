import { Starfield } from './components/Starfield.jsx'
import { FloatingAccents } from './components/FloatingAccents.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Technologies } from './components/Technologies.jsx'
import { Projects } from './components/Projects.jsx'
import { Experience } from './components/Experience.jsx'
import { Contact } from './components/Contact.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { LanguageProvider } from './contexts/LanguageContext.jsx'
import { useLanguage } from './contexts/LanguageContext.jsx'

function AppContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#060710] dark:bg-[#060710] light:bg-gray-50 text-slate-100 dark:text-slate-100 light:text-slate-900 selection:bg-indigo-500/30 selection:text-slate-50 transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#050611]" />

        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_12%,rgba(99,102,241,0.03),transparent_58%),radial-gradient(900px_circle_at_72%_18%,rgba(56,189,248,0.02),transparent_56%),radial-gradient(1100px_circle_at_50%_92%,rgba(168,85,247,0.02),transparent_62%),radial-gradient(700px_circle_at_50%_50%,rgba(255,255,255,0.01),transparent_62%)]" />

        <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black_55%,transparent_80%)]">
          <div className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-indigo-500/3 blur-3xl" />
          <div className="absolute -right-52 top-10 h-[640px] w-[640px] rounded-full bg-sky-400/3 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/3 blur-3xl" />
        </div>

        <Starfield count={120} />
        <FloatingAccents count={10} />

        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_50%,transparent_60%,rgba(0,0,0,0.75)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />
      </div>

      <div className="relative">
        <Hero />

        <main className="mx-auto w-full max-w-6xl px-6 pb-24">
          <About />
          <Projects />
          <Experience />
          <Technologies />
          <Contact />
        </main>

        <footer className="relative w-full border-t border-white/10 bg-gradient-to-b from-transparent via-black/20 to-black/40 backdrop-blur-sm">
          {/* Subtle top gradient glow */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-indigo-500/8 via-purple-500/4 to-transparent"></div>
          <div className="mx-auto w-full max-w-6xl px-6 py-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {/* Left: Name/Brand */}
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-400/80 shadow-[0_0_12px_rgba(99,102,241,0.4)]" />
                  <span className="font-medium text-slate-200">Gabriella Gomes</span>
                </div>
                <p className="text-xs text-slate-400">
                  {t('footer.tagline')}
                </p>
              </div>

              {/* Right: Social Links */}
              <div className="flex flex-col items-end space-y-2">
                <div className="flex gap-3">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-all hover:bg-white/10 hover:text-slate-100"
                    aria-label="GitHub"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-1.008 3.181-1.008 3.181 0 2.826 2.338 5.119 5.229 5.119 3.019 0 5.229-2.293 5.229-5.119 0-3.891-2.338-5.229-5.119-5.229z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-all hover:bg-white/10 hover:text-slate-100"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-1.846 1.852-1.846 1.852v5.569H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="mailto:contact@example.com" 
                    className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-all hover:bg-white/10 hover:text-slate-100"
                    aria-label="Email"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
                <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
                <span>{t('footer.builtWith')}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App