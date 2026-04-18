import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Cpu, GitBranch, Layers, Link, Sparkles, Timer } from 'lucide-react'
import { mulberry32 } from '../utils/random.js'

// Starfield component
function Starfield({ count = 90 }) {
  const layers = useMemo(() => {
    const rand = mulberry32(1337)

    const makeStars = (n, { minSize, maxSize, minOpacity, maxOpacity }) =>
      Array.from({ length: n }).map((_, i) => {
        const size = minSize + Math.floor(rand() * (maxSize - minSize + 1))
        const left = rand() * 100
        const top = rand() * 100
        const opacity = minOpacity + rand() * (maxOpacity - minOpacity)
        const twinkle = 7 + rand() * 10
        const delay = rand() * 8
        const blur = rand() < 0.25 ? 0.6 : 0
        return { key: `star-${i}`, size, left, top, opacity, twinkle, delay, blur }
      })

    return [
      // Background layer
      makeStars(Math.floor(count * 0.6), {
        minSize: 1,
        maxSize: 2,
        minOpacity: 0.1,
        maxOpacity: 0.18
      }),
      // Foreground layer
      makeStars(Math.floor(count * 0.4), {
        minSize: 1,
        maxSize: 3,
        minOpacity: 0.15,
        maxOpacity: 0.3
      })
    ]
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-40 mask-[radial-gradient(circle_at_center,black_42%,transparent_78%)]"
    >
      <div className="absolute inset-0 animate-[driftSlow_42s_linear_infinite]">
        {layers.map((layer) =>
          layer.map((star) => (
            <span
              key={star.key}
              className="absolute rounded-full bg-white/80"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                filter: star.blur ? `blur(${star.blur}px)` : undefined,
                animation: `twinkle ${star.twinkle}s ease-in-out ${star.delay}s infinite`,
              }}
            />
          ))
        )}
      </div>
    </div>
  )
}

// Floating accents component
function FloatingAccents({ count = 8 }) {
  const ICONS = [Sparkles, Layers, Cpu, Timer, GitBranch, Link]

  const accents = useMemo(() => {
    const rand = mulberry32(4242)
    const base = Math.max(6, Math.min(14, count))

    return Array.from({ length: base }).map((_, i) => {
      const size = 1 + Math.floor(rand() * 2)
      const left = rand() * 100
      const top = rand() * 100
      const opacity = 0.10 + rand() * 0.18
      const twinkle = 7 + rand() * 10
      const delay = rand() * 8
      const blur = rand() < 0.25 ? 0.6 : 0
      return { key: `accent-${i}`, size, left, top, opacity, twinkle, delay, blur }
    })
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-40 mask-[radial-gradient(circle_at_center,black_42%,transparent_78%)]"
    >
      <div className="absolute inset-0 animate-[driftSlow_42s_linear_infinite]">
        {accents.map((accent) => (
          <span
            key={accent.key}
            className="absolute rounded-full bg-white/80"
            style={{
              left: `${accent.left}%`,
              top: `${accent.top}%`,
              width: `${accent.size}px`,
              height: `${accent.size}px`,
              opacity: accent.opacity,
              filter: accent.blur ? `blur(${accent.blur}px)` : undefined,
              animation: `twinkle ${accent.twinkle}s ease-in-out ${accent.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Constellation background component
function ConstellationBackground({
  density = 0.000032, // particles per pixel^2
  maxStars = 72,
  linkDistance = 130,
}) {
  const stars = useMemo(() => {
    const rand = mulberry32(9001)
    const starCount = Math.floor(density * window.innerWidth * window.innerHeight)
    
    const stars = Array.from({ length: Math.min(starCount, maxStars) }).map((_, i) => {
      const size = 1 + Math.floor(rand() * 2)
      const left = rand() * 100
      const top = rand() * 100
      const opacity = 0.10 + rand() * 0.18
      const twinkle = 7 + rand() * 10
      const delay = rand() * 8
      const blur = rand() < 0.25 ? 0.6 : 0
      return { id: i, size, left, top, opacity, twinkle, delay, blur }
    })

    // Create constellation links
    const links = []
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dist = Math.sqrt(
          Math.pow((stars[i].left - stars[j].left) / 100 * window.innerWidth, 2) +
          Math.pow((stars[i].top - stars[j].top) / 100 * window.innerHeight, 2)
        )
        
        if (dist < linkDistance / 100 * Math.min(window.innerWidth, window.innerHeight)) {
          links.push({ from: i, to: j })
        }
      }
    }

    return { stars, links }
  }, [density, maxStars, linkDistance])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full">
        {stars.links.map((link, i) => {
          const from = stars.stars[link.from]
          const to = stars.stars[link.to]
          return (
            <line
              key={`link-${i}`}
              x1={`${from.left}%`}
              y1={`${from.top}%`}
              x2={`${to.left}%`}
              y2={`${to.top}%`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          )
        })}
      </svg>
      
      {stars.stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white/80"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            filter: star.blur ? `blur(${star.blur}px)` : undefined,
            animation: `twinkle ${star.twinkle}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

export { Starfield, FloatingAccents, ConstellationBackground }
