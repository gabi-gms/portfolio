import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Section } from './Section.jsx'
import { Cpu } from 'lucide-react'
import { useMemo, useState } from 'react'

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function TechParticles({ count = 32 }) {
  const particles = useMemo(() => {
    const rand = mulberry32(9001)
    return Array.from({ length: count }).map((_, i) => {
      const size = 1 + Math.floor(rand() * 2) // 1..2
      const left = rand() * 100
      const top = rand() * 100
      const opacity = 0.10 + rand() * 0.18
      const twinkle = 7 + rand() * 10
      const delay = rand() * 8
      const blur = rand() < 0.25 ? 0.6 : 0
      return { key: `tp-${i}`, size, left, top, opacity, twinkle, delay, blur }
    })
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-40 mask-[radial-gradient(circle_at_center,black_42%,transparent_78%)]"
    >
      <div className="absolute inset-0 animate-[driftSlow_42s_linear_infinite]">
        {particles.map((p) => (
          <span
            key={p.key}
            className="absolute rounded-full bg-white/80"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              filter: p.blur ? `blur(${p.blur}px)` : undefined,
              animation: `twinkle ${p.twinkle}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}


const filters = ['All', 'Frontend', 'Backend', 'Tools', 'Database', 'IA', 'DevOps']

const tech = [
  // Frontend
  { name: 'Angular', category: 'Frontend', level: 'Advanced', value: 80 },
  { name: 'JavaScript', category: 'Frontend', level: 'Advanced', value: 85 },
  { name: 'TypeScript', category: 'Frontend', level: 'Intermediate', value: 68 },
  { name: 'Tailwind', category: 'Frontend', level: 'Intermediate', value: 60 },
  { name: 'HTML', category: 'Frontend', level: 'Advanced', value: 89 },
  { name: 'CSS', category: 'Frontend', level: 'Advanced', value: 82 },
  { name: 'React', category: 'Frontend', level: 'Intermediate', value: 65 },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 'Intermediate', value: 68 },
  { name: 'Express', category: 'Backend', level: 'Intermediate', value: 50 },
  { name: 'REST APIs', category: 'Backend', level: 'Intermediate', value: 66 },

  // Tools
  { name: 'Git', category: 'Tools', level: 'Advanced', value: 80 },
  { name: 'Vite', category: 'Tools', level: 'Advanced', value: 78 },
  { name: 'Figma', category: 'Tools', level: 'Intermediate', value: 64 },
  { name: 'VS Code', category: 'Tools', level: 'Advanced', value: 76 },
  
  // Database
  { name: 'MySQL', category: 'Database', level: 'Intermediate', value: 65 },
  { name: 'PostgreSQL', category: 'Database', level: 'Intermediate', value: 60 },
  
  // IA
  { name: 'LLM', category: 'IA', level: 'Beginner', value: 60 },
  { name: 'Prompt Engineering', category: 'IA', level: 'Intermediate', value: 60 },
  
  // DevOps
  { name: 'SCRUM', category: 'DevOps', level: 'Intermediate', value: 60 },
  { name: 'Kanban', category: 'DevOps', level: 'Intermediate', value: 60 },
  { name: 'Project Management', category: 'DevOps', level: 'Intermediate', value: 60 },
]

function FilterButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'rounded-full border px-3.5 py-2 text-xs font-medium tracking-[0.20em] transition duration-500',
        active
          ? 'border-white/15 bg-white/6 text-slate-100 shadow-[0_0_24px_rgba(99,102,241,0.12)]'
          : 'border-white/10 bg-white/[0.035] text-slate-300 hover:border-white/15 hover:bg-white/5',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

function TechCard({ item }) {
  return (
    <Motion.div
      layout
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.55, ease: [0.21, 0.65, 0.21, 0.98] }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_22px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-700 hover:border-white/15 hover:bg-white/5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_28px_90px_rgba(0,0,0,0.62)] sm:p-5"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(520px_circle_at_20%_15%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(520px_circle_at_80%_30%,rgba(56,189,248,0.10),transparent_60%)]" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="min-w-0 pt-0.5">
            <div className="truncate text-[14px] font-semibold tracking-tight text-slate-100">
              {item.name}
            </div>
            {/* <div className="mt-1 text-[11px] text-slate-400">{item.category}</div> */}
          </div>
        </div>

        {/* <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-[0.22em] text-slate-300">
          {item.level}
        </div> */}
        <div className="mt-1 text-[11px] text-slate-400">{item.category}</div>
      </div>

      <div className="relative mt-4.5">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
         {/*  <span className="tracking-[0.18em]">PROFICIENCY</span> */}
         {item.level}
          <span className="tabular-nums">{item.value}%</span>
        </div>

        <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-black/25">
          <div className="pointer-events-none absolute left-0 right-0 mt-2 h-2 rounded-full bg-[radial-gradient(220px_circle_at_30%_50%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(220px_circle_at_80%_50%,rgba(56,189,248,0.10),transparent_60%)] opacity-60" />
          <Motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${item.value}%` }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.1, ease: [0.21, 0.65, 0.21, 0.98] }}
            className="relative h-full rounded-full bg-linear-to-r from-indigo-400/60 via-sky-400/45 to-violet-400/40 shadow-[0_0_22px_rgba(99,102,241,0.18)]"
          />
        </div>
      </div>
    </Motion.div>
  )
}

export function Technologies() {
  const [activeCategory, setActiveCategory] = useState('All')

  const visible = useMemo(() => {
    if (activeCategory === 'All') return tech
    return tech.filter((t) => t.category === activeCategory)
  }, [activeCategory])

  return (
    <Section
      id="technologies"
      eyebrow="TECH STACK"
      title="Tools and technologies behind my work"
      icon={Cpu}
    >
      <div className="relative">
        <TechParticles />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2.5">
            {filters.map((f) => (
              <FilterButton
                key={f}
                active={activeCategory === f}
                onClick={() => setActiveCategory(f)}
              >
                {f}
              </FilterButton>
            ))}
          </div>

          <Motion.div
            layout
            className="mt-7 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((item) => (
                <Motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.21, 0.65, 0.21, 0.98],
                  }}
                >
                  <TechCard item={item} />
                </Motion.div>
              ))}
            </AnimatePresence>
          </Motion.div>
        </div>
      </div>
    </Section>
  )
}
