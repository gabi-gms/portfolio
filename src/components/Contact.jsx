import { motion } from 'framer-motion'
import { Section } from './Section.jsx'
import { Mail, Send, GitBranch, Link } from 'lucide-react'

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
      title="Let's connect. Feel free to reach out."
      icon={Send}
    >

        {/* Floating Contact Cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch">
          {links.map(({ label, value, href, Icon, accent }) => (
            <motion.a
              key={label}
              href={href}
              animate={{ y: 0, scale: 1 }}
              whileHover={{ 
                y: -4, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative flex w-full max-w-[280px] flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-indigo-400/30 overflow-hidden min-h-[200px]"
            >
              {/* Subtle hover glow effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-400 group-hover:opacity-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${accent} transition-all duration-500 group-hover:scale-102`} />
                <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/6 blur-2xl transition-all duration-500 group-hover:scale-110" />
                <div className="absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-sky-400/5 blur-2xl transition-all duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)] transition-all duration-500 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col items-center justify-center flex-1 space-y-3">
                {/* Icon Container */}
                <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-400 group-hover:shadow-[0_0_32px_rgba(99,102,241,0.30)]">
                  <Icon
                    className="h-6 w-6 text-slate-200/90 transition-all duration-400 group-hover:-translate-y-0.5 group-hover:text-slate-100"
                    aria-hidden="true"
                  />
                </div>

                {/* Contact Info */}
                <div className="relative text-center">
                  <div className="text-xs font-semibold tracking-tight text-slate-100 transition-all duration-400 group-hover:text-slate-50">
                    {label}
                  </div>
                  <div className="mt-1 truncate text-[11px] text-slate-400 transition-all duration-400 group-hover:text-slate-300">
                    {value}
                  </div>
                </div>

                {/* Call-to-action */}
                <div className="relative text-[11px] font-medium tracking-[0.22em] text-slate-400 transition-all duration-400 group-hover:text-slate-300">
                  Get in touch
                  <span className="ml-2 inline-block transition-all duration-400 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
    </Section>
  )
}

