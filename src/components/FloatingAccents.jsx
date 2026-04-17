import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Cpu, GitBranch, Layers, Link, Sparkles, Timer } from 'lucide-react'

const ICONS = [Sparkles, Layers, Cpu, Timer, GitBranch, Link]

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function FloatingAccents({ count = 8 }) {
  const accents = useMemo(() => {
    const rand = mulberry32(4242)
    const base = Math.max(6, Math.min(14, count))

    return Array.from({ length: base }).map((_, i) => {
      const Icon = ICONS[i % ICONS.length]
      const left = rand() * 100
      const top = rand() * 100
      const size = 16 + Math.floor(rand() * 18) // 16..34
      const blur = rand() < 0.45 ? 0.6 : 0
      const opacity = 0.06 + rand() * 0.08
      const driftX = (rand() - 0.5) * 26
      const driftY = (rand() - 0.5) * 32
      const rotate = (rand() - 0.5) * 14
      const duration = 18 + rand() * 18 // 18..36
      const delay = rand() * 6
      const tint =
        i % 3 === 0
          ? 'text-indigo-200/70'
          : i % 3 === 1
            ? 'text-sky-200/70'
            : 'text-violet-200/70'

      return {
        key: `accent-${i}`,
        Icon,
        left,
        top,
        size,
        blur,
        opacity,
        driftX,
        driftY,
        rotate,
        duration,
        delay,
        tint,
      }
    })
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-70 [mask-image:radial-gradient(circle_at_center,black_45%,transparent_78%)]"
    >
      {accents.map((a) => (
        <motion.div
          key={a.key}
          className="absolute"
          style={{
            left: `${a.left}%`,
            top: `${a.top}%`,
            opacity: a.opacity,
            filter: a.blur ? `blur(${a.blur}px)` : undefined,
          }}
          initial={{ x: 0, y: 0, rotate: 0 }}
          animate={{
            x: [0, a.driftX, 0],
            y: [0, a.driftY, 0],
            rotate: [0, a.rotate, 0],
          }}
          transition={{
            duration: a.duration,
            delay: a.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <a.Icon
            className={`${a.tint}`}
            style={{
              width: a.size,
              height: a.size,
              strokeWidth: 1.4,
              filter: 'drop-shadow(0 0 18px rgba(99,102,241,0.10))',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

