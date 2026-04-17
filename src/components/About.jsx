import { Section } from './Section.jsx'
import { User } from 'lucide-react'

export function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT"
      title="Focused on clarity, motion, and craft."
      icon={User}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-8">
            <p className="text-base leading-relaxed text-slate-300">
              I design and build modern interfaces with a calm, futuristic
              aesthetic—minimal layouts, subtle gradients, and motion that feels
              natural instead of flashy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              My approach is simple: strong hierarchy, clean typography, and
              micro-interactions that guide attention without clutter. I like
              shipping polished features that are fast, accessible, and easy to
              maintain.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <div className="text-sm font-medium text-slate-200">Toolbox</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li className="flex items-center justify-between">
              <span>React</span>
              <span className="text-slate-400">UI</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Tailwind</span>
              <span className="text-slate-400">Design system</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Framer Motion</span>
              <span className="text-slate-400">Motion</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Vite</span>
              <span className="text-slate-400">Build</span>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-r from-indigo-500/10 to-sky-400/10 p-4">
            <div className="text-xs font-medium tracking-[0.22em] text-slate-400">
              CURRENTLY
            </div>
            <div className="mt-2 text-sm text-slate-200">
              Open to freelance and full-time roles.
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

