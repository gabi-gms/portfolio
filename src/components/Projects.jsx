import { motion } from 'framer-motion'
import { Section } from './Section.jsx'
import { Layers, Sparkles } from 'lucide-react'

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.href}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.21, 0.65, 0.21, 0.98] }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_24px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
    >
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
              {project.featured}
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
  const projects = [
    {
      title: 'Revende+',
      description: 'A platform for resellers to manage their products and sales.',
      tags: ['Next.js', 'Node.js', 'TypeScript', 'Tailwind'],
      href: '#',
      featured: 'Featured',
    },
  ]

  return (
    <Section
      id="projects"
      eyebrow="PROJECTS"
      title="Selected work blending design, logic, and interaction"
      icon={Layers}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </Section>
  )
}

