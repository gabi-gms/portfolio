import { motion } from 'framer-motion'

const nav = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stacks', href: '#technologies' },
  { label: 'Contact', href: '#contact' },
]

export function Hero() {
  return (
    <section className="relative">
      <header className="mx-auto w-full max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200 backdrop-blur-md transition hover:bg-white/[0.07]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400/80 shadow-[0_0_18px_rgba(99,102,241,0.5)]" />
            <span className="font-medium tracking-tight">Gabriella Gomes</span>
          </a>

          <nav className="hidden items-center gap-2 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-slate-300/90 transition hover:bg-white/5 hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto w-full max-w-6xl px-6 pb-10 pt-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.21, 0.65, 0.21, 0.98] }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_15%_15%,rgba(99,102,241,0.16),transparent_60%),radial-gradient(700px_circle_at_70%_20%,rgba(56,189,248,0.12),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(circle_at_50%_20%,black_35%,transparent_70%)]">
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute right-[-90px] top-8 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-[0.26em] text-slate-400">
                COSMIC • FUTURISTIC • MINIMAL
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-6xl">
                <span className="block">Designing interfaces</span>
                <span className="block bg-gradient-to-r from-indigo-200 via-sky-200 to-violet-200 bg-clip-text text-transparent">
                  with quiet precision.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                I build premium, minimal web experiences—clean typography, subtle
                depth, and motion that feels natural.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500/80 to-sky-400/80 px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_12px_40px_rgba(99,102,241,0.18)] ring-1 ring-white/10 hover:from-indigo-500/90 hover:to-sky-400/90"
                >
                  <span className="relative">
                    View projects
                    <span className="pointer-events-none absolute inset-x-0 -bottom-2 mx-auto h-px w-10 bg-white/40 opacity-0 blur-[1px] transition group-hover:opacity-70" />
                  </span>
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 backdrop-blur-md transition hover:bg-white/[0.07]"
                >
                  Get in touch
                </motion.a>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <motion.div
                aria-hidden="true"
                className="relative mx-auto aspect-square w-full max-w-[420px]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(56,189,248,0.18),transparent_58%),radial-gradient(circle_at_45%_55%,rgba(99,102,241,0.22),transparent_60%)] blur-[1px]" />
                <div className="absolute inset-6 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_80px_rgba(0,0,0,0.7)]" />
                <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(168,85,247,0.12),transparent_55%),radial-gradient(circle_at_60%_65%,rgba(56,189,248,0.10),transparent_55%)]" />
                <div className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_50px_rgba(99,102,241,0.18)]" />
                <div className="absolute left-1/2 top-1/2 h-px w-[88%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2 rotate-90">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

