import { motion } from 'framer-motion'
import { Section } from './Section.jsx'
import { Timer } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext.jsx'

const items = [
  {
    role: 'Front-End Developer',
    company: 'Freelance / Personal Projects',
    period: '2024 — Present',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    description:
      'Designing and building modern UIs with React and Tailwind, focusing on clean layouts, accessibility, and subtle motion.',
  },
  {
    role: 'UI Engineer',
    company: 'Product Prototype',
    period: '2023 — 2024',
    tags: ['Component Libraries', 'UI/UX', 'Performance'],
    description:
      'Created component libraries and polished interactions, improving consistency and speeding up feature delivery.',
  },
  {
    role: 'Web Developer',
    company: 'Learning & Labs',
    period: '2022 — 2023',
    tags: ['Responsive Design', 'Performance', 'Animation'],
    description:
      'Built responsive websites and experimented with performance, animations, and design systems.',
  },
]

function TimelineItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: [0.21, 0.65, 0.21, 0.98] }}
      className="group relative grid gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_80px_rgba(0,0,0,0.62)] backdrop-blur-xl transition duration-700 hover:border-white/15 hover:bg-white/[0.05] sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_15%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(700px_circle_at_80%_25%,rgba(56,189,248,0.10),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-indigo-400/35 via-sky-400/20 to-transparent opacity-70" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div>
          <div className="text-base font-semibold tracking-tight text-slate-50">
            {item.role}
          </div>
          <div className="mt-1 text-sm text-slate-500">{item.company}</div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.22em] text-slate-400">
          {item.period}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>

      {/* Stack tags */}
      {item.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export function Experience() {
  const { t } = useLanguage() 

  return (
    <Section
      id="experience"
       eyebrow={t('experience.eyebrow')}
      title={t('experience.title')}
      icon={Timer}
    >
      <div className="grid gap-8 lg:grid-cols-12">
        

        <div className="relative lg:col-span-12">
          <div className="pointer-events-none absolute left-4 top-2 hidden h-[calc(100%-8px)] w-px bg-gradient-to-b from-indigo-400/35 via-sky-400/20 to-transparent sm:block" />
          <div className="pointer-events-none absolute left-4 top-2 hidden h-[calc(100%-8px)] w-px blur-[1px] bg-gradient-to-b from-indigo-400/20 via-sky-400/15 to-transparent sm:block" />

          <div className="space-y-5">
            {items.map((item) => (
              <div key={item.role} className="relative sm:pl-10">
                <div className="pointer-events-none absolute left-4 top-7 hidden -translate-x-1/2 sm:block">
                  <div className="h-3.5 w-3.5 rounded-full bg-indigo-400/70 shadow-[0_0_26px_rgba(99,102,241,0.32)]" />
                  <div className="absolute inset-0 rounded-full ring-2 ring-white/10" />
                </div>
                <TimelineItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

