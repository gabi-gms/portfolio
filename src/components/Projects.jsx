import { motion } from 'framer-motion'
import { Section } from './Section.jsx'
import { Layers, Sparkles } from 'lucide-react'

const projects = [
  {
    title: 'Nebula Notes',
    description:
      'A clean notes app with fast search, markdown support, and offline-first storage.',
    tags: ['React', 'Local storage', 'UI'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1620712943543-26fc9962c452?w=800&h=600&fit=crop&auto=format',
  },
  {
    title: 'Orbit Dashboard',
    description:
      'A minimal analytics dashboard with responsive charts and accessible components.',
    tags: ['React', 'Tailwind', 'A11y'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format',
  },
  {
    title: 'Stellar Shop',
    description:
      'A storefront concept with polished product cards, filters, and smooth motion.',
    tags: ['UI', 'Motion', 'Performance'],
    href: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
  },
]

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.21, 0.65, 0.21, 0.98] }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
    >
      {/* Image Section */}
      <div className="relative h-35 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Hover Glow Effect */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_15%,rgba(99,102,241,0.14),transparent_60%),radial-gradient(700px_circle_at_75%_30%,rgba(56,189,248,0.10),transparent_58%)]" />
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6">
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-white/10 transition duration-500 group-hover:opacity-100" />

        <div className="relative">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-slate-50">
              {project.title}
            </h3>
            <span className="mt-1 inline-flex items-center gap-2 text-xs text-slate-400">
              <Sparkles
                className="h-4 w-4 text-indigo-200/70 transition duration-700 group-hover:-translate-y-0.5 group-hover:text-indigo-200/85"
                aria-hidden="true"
              />
              Featured
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 text-sm font-medium text-slate-200">
            <span className="bg-gradient-to-r from-indigo-300 to-sky-200 bg-clip-text text-transparent">
              View details
            </span>
            <span className="ml-2 text-slate-500 transition duration-500 group-hover:text-slate-300">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="PROJECTS" title="Selected work." icon={Layers}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      {/* <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-medium text-slate-200">
              Want to see more?
            </div>
            <div className="mt-1 text-sm text-slate-400">
              Add your GitHub / live demos and we’ll link them here.
            </div>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.2 }}
            className="mt-3 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-100 backdrop-blur-md transition hover:bg-white/[0.07] sm:mt-0"
          >
            Contact me
          </motion.a>
        </div>
      </div> */}
    </Section>
  )
}

