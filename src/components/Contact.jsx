import { motion } from 'framer-motion'
import { Section } from './Section.jsx'
import { GitBranch, Link, Mail, Send } from 'lucide-react'

const links = [
  {
    label: 'Email',
    value: 'you@example.com',
    href: 'mailto:you@example.com',
    Icon: Mail,
    accent: 'from-indigo-500/35 to-sky-400/25',
  },
  {
    label: 'GitHub',
    value: '@yourhandle',
    href: 'https://github.com/',
    Icon: GitBranch,
    accent: 'from-indigo-500/30 to-violet-400/25',
  },
  {
    label: 'LinkedIn',
    value: 'in/yourname',
    href: 'https://linkedin.com/',
    Icon: Link,
    accent: 'from-sky-400/30 to-indigo-500/25',
  },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="CONTACT"
      title="Let’s connect."
      icon={Send}
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_20%,rgba(99,102,241,0.10),transparent_60%),radial-gradient(900px_circle_at_82%_10%,rgba(56,189,248,0.08),transparent_62%)]" />
          <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -right-44 top-8 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Email is best for project inquiries. For code and professional details,
              you can find me on GitHub and LinkedIn.
            </p>
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-indigo-400/35 via-sky-400/25 to-transparent" />
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-3">
              {links.map(({ label, value, href, Icon, accent }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{
                    duration: 0.55,
                    ease: [0.21, 0.65, 0.21, 0.98],
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-5 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_22px_70px_rgba(0,0,0,0.55)] backdrop-blur-xl transition duration-700 hover:border-white/15 hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-indigo-400/35"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
                    <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-indigo-500/12 blur-3xl" />
                    <div className="absolute -bottom-20 right-[-60px] h-52 w-52 rounded-full bg-sky-400/10 blur-3xl" />
                  </div>

                  <div className="relative flex items-start gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_0_26px_rgba(99,102,241,0.12)] transition duration-700 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.18)]">
                      <Icon
                        className="h-[20px] w-[20px] text-slate-200/90 transition duration-700 group-hover:-translate-y-0.5 group-hover:text-slate-100"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <div className="text-sm font-semibold tracking-tight text-slate-100">
                        {label}
                      </div>
                      <div className="mt-1 truncate text-xs text-slate-400">
                        {value}
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-6 text-xs font-medium tracking-[0.22em] text-slate-400">
                    OPEN
                    <span className="ml-2 text-slate-500 transition duration-700 group-hover:text-slate-300">
                      →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

