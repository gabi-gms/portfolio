import { Section } from './Section.jsx'
import { User, Code, Zap, Layers, Gauge } from 'lucide-react'
import { motion } from 'framer-motion'

const concepts = [
  {
    icon: Code,
    title: 'Clarity',
    subtitle: 'clean.code',
    points: [
      'Semantic HTML structure',
      'Component-based architecture', 
      'TypeScript for type safety',
      'Readable, maintainable code'
    ]
  },
  {
    icon: Zap,
    title: 'Motion',
    subtitle: 'smooth.interactions',
    points: [
      '60fps animations',
      'Physics-based transitions',
      'Micro-interactions',
      'Performance optimized'
    ]
  },
  {
    icon: Layers,
    title: 'Systems',
    subtitle: 'scalable.design',
    points: [
      'Design tokens',
      'Reusable components',
      'Consistent patterns',
      'Documentation first'
    ]
  },
  {
    icon: Gauge,
    title: 'Performance',
    subtitle: 'optimized.experience',
    points: [
      'Core Web Vitals',
      'Lazy loading',
      'Bundle optimization',
      'Accessibility standards'
    ]
  }
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="ABOUT"
      title="<developer mindset />"
      icon={User}
    >
      <div className="space-y-8">
        {/* Code-like header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span>system.status</span>
            <span className="text-green-400">active</span>
          </div>
          <div className="mt-4 font-mono text-sm text-slate-300">
            <span className="text-purple-400">const</span>
            <span className="text-blue-400"> developer</span>
            <span className="text-slate-400"> =</span>
            <span className="text-slate-200"> {`{`}</span>
          </div>
          <div className="ml-6 mt-2 space-y-1 font-mono text-sm text-slate-300">
            <div><span className="text-indigo-400">focus</span>: <span className="text-slate-200">"premium interfaces"</span>,</div>
            <div><span className="text-indigo-400">approach</span>: <span className="text-slate-200">"minimal + functional"</span>,</div>
            <div><span className="text-indigo-400">status</span>: <span className="text-green-400">"open to opportunities"</span></div>
          </div>
          <div className="mt-2 font-mono text-sm text-slate-200">{`}`}</div>
        </motion.div>

        {/* Concept cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {concepts.map((concept, index) => {
            const Icon = concept.icon
            return (
              <motion.div
                key={concept.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-white/20"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-gradient-to-br from-indigo-500/20 to-sky-400/20 p-2">
                    <Icon className="h-4 w-4 text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">{concept.title}</div>
                    <div className="text-xs font-mono text-slate-400">{concept.subtitle}</div>
                  </div>
                </div>
                
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  {concept.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="mt-0.5 h-1 w-1 rounded-full bg-indigo-400 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative element */}
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-indigo-400/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </motion.div>
            )
          })}
        </div>

        {/* Code-style approach block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs font-mono text-slate-500">approach.js</span>
            </div>
          </div>
          
          <div className="space-y-2 font-mono text-sm">
            <div>
              <span className="text-purple-400">const</span>
              <span className="text-blue-400"> approach</span>
              <span className="text-slate-400"> =</span>
              <span className="text-slate-200"> [</span>
            </div>
            <div className="ml-6 space-y-1">
              <div>
                <span className="text-green-400">"clarity"</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="text-green-400">"performance"</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="text-green-400">"design systems"</span>
              </div>
            </div>
            <div>
              <span className="text-slate-200">];</span>
            </div>
          </div>
        </motion.div>

        {/* Status card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 to-sky-400/10 p-6 backdrop-blur-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-medium tracking-[0.22em] text-slate-400">
                // SYSTEM STATUS
              </div>
              <div className="mt-2 text-sm text-slate-200">
                Available for freelance & full-time opportunities
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs font-mono text-green-400">online</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

