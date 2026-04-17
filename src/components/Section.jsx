import { motion } from 'framer-motion'

export function Section({ id, eyebrow, title, icon: Icon, children }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-24 py-16 sm:py-20"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: [0.21, 0.65, 0.21, 0.98] }}
      viewport={{ once: true, amount: 0.22 }}
    >
      <div className="mb-8">
        {eyebrow ? (
          <div className="flex items-center gap-2.5 text-xs font-medium tracking-[0.22em] text-slate-400">
            {Icon ? (
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200/80 shadow-[0_0_22px_rgba(99,102,241,0.14)]">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
            ) : null}
            <span>{eyebrow}</span>
          </div>
        ) : null}
        {title ? (
          <div className="mt-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
              {title}
            </h2>
            <div className="mt-3 h-px w-20 bg-gradient-to-r from-indigo-400/40 via-sky-400/30 to-transparent" />
          </div>
        ) : null}
      </div>
      {children}
    </motion.section>
  )
}

