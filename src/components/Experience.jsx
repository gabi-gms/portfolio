import { motion } from 'framer-motion'
import { Section } from './Section.jsx'
import { Timer } from 'lucide-react'

const items = [
  {
    role: 'Fullstack Developer',
    company: 'Freelance / Personal Projects',
    period: 'Jan 2026 — Present',
    tags: ['Python', 'Tailwind CSS', 'TypeScript', 'Next.js', 'LLM', 'Prompt Engineering'],
    description:
      'Designing and building modern UIs with React and Tailwind, focusing on clean layouts, accessibility, and subtle motion.',
  },
  {
    role: 'Visiting Extension Researcher',
    company: 'UFRGS | UC3M',
    period: 'May 2025 — Nov 2025',
    tags: ['Python', 'RISC-V', 'C', "Computer Vision", 'Management'],
    description:
      `Developed data processing pipelines and automation flows in Python for Computer Vision projects, aligning with machine learning technology preferences.
       Implemented low-level algorithms in C and analyzed RISC-V instructions, focusing on computational efficiency and large-scale system architecture.
       Designed modular systems integrating hardware logic with control interfaces, applying Agile methodologies (Scrum/Kanban) for complex delivery management.`,
  },
  {
    role: 'Frontend Software Engineer',
    company: 'Izio&Co',
    period: 'Jan 2023 — Aug 2023',
    tags: ['Responsive Design', 'Angular', 'TypeScript', 'Angular Material', 'SCRUM'],
    description:
      `Led the architecture of scalable web applications using Angular and TypeScript, ensuring high availability and performance for "massive scale" environments.
       Orchestrated real-time data flow processing via REST APIs, maintaining data integrity for critical operations.
       Reduced technical debt and increased ecosystem stability through rigorous code refactoring and clean code practices.`,
  },
  {
    role: 'Frontend Software Engineer',
    company: 'Smartscan',
    period: 'May 2022 — Dec 2022',
    tags: ['Responsive Design', 'Angular', 'Bootstrap'],
    description:
      `Architected and scaled administrative interfaces for logistics management using Angular, TypeScript, and Bootstrap, focusing on high-volume data visualization.
       Ensured robust integration with backend services via REST APIs, maintaining data integrity and continuous flow for critical operations.
       Applied Git versioning best practices, optimizing technical workflows.`,
  },
  {
    role: 'Junior Software Developer | IT Intern',
    company: 'Sigpharma',
    period: 'Feb 2020 — Feb 2021',
    tags: ['Angular', 'Node.js', 'MySQL', 'Technical Documentation', 'Angular Material', 'Kanban'],
    description:
      `Strategically acted in the migration of legacy architectures to modern stacks based on Angular. 
      Maintained APIs and integrated databases using Node.js and MySQL. 
      Developed technical documentation for system architecture and workflows, facilitating team organization and onboarding.`,
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
          <div className="mt-1 text-sm text-slate-500">{item.period}</div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.22em] text-slate-400">
          {item.company}
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
  return (
    <Section
      id="experience"
      eyebrow="EXPERIÊNCIA"
      title="My journey through learning, building, and evolving"
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

