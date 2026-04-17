import { Starfield } from './components/Starfield.jsx'
import { FloatingAccents } from './components/FloatingAccents.jsx'
import { ConstellationBackground } from './components/ConstellationBackground.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Technologies } from './components/Technologies.jsx'
import { Projects } from './components/Projects.jsx'
import { Experience } from './components/Experience.jsx'
import { Contact } from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-[#060710] text-slate-100 selection:bg-indigo-500/30 selection:text-slate-50">
      <ConstellationBackground />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#050611]" />

        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_12%,rgba(99,102,241,0.22),transparent_58%),radial-gradient(900px_circle_at_72%_18%,rgba(56,189,248,0.16),transparent_56%),radial-gradient(1100px_circle_at_50%_92%,rgba(168,85,247,0.14),transparent_62%),radial-gradient(700px_circle_at_50%_50%,rgba(255,255,255,0.05),transparent_62%)]" />

        <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black_55%,transparent_80%)]">
          <div className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -right-52 top-10 h-[640px] w-[640px] rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute bottom-[-260px] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <Starfield count={120} />
        <FloatingAccents count={10} />

        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_50%,transparent_60%,rgba(0,0,0,0.55)_100%)]" />
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

        <footer className="relative mx-auto w-full max-w-6xl px-6 pb-10 text-sm text-slate-400">
          <div className="flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <span>© {new Date().getFullYear()} Gabriella Gomes</span>
            <span className="text-slate-500">Built with React, Tailwind, Framer Motion</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App