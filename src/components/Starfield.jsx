import { useMemo } from 'react'

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function Starfield({ count = 90 }) {
  const layers = useMemo(() => {
    const rand = mulberry32(1337)

    const makeStars = (n, { minSize, maxSize, minOpacity, maxOpacity }) =>
      Array.from({ length: n }).map((_, i) => {
        const size = minSize + Math.floor(rand() * (maxSize - minSize + 1))
        const left = rand() * 100
        const top = rand() * 100
        const opacity = minOpacity + rand() * (maxOpacity - minOpacity)
        const twinkle = 5 + rand() * 10
        const delay = rand() * 10
        const blur = rand() < 0.18 ? 0.6 : 0
        return { i: `${n}-${i}-${size}`, size, left, top, opacity, twinkle, delay, blur }
      })

    const total = Math.max(30, count)
    return [
      {
        key: 'far',
        className:
          'absolute inset-0 opacity-35 animate-[driftSlow_46s_linear_infinite]',
        stars: makeStars(Math.floor(total * 0.55), {
          minSize: 1,
          maxSize: 1,
          minOpacity: 0.18,
          maxOpacity: 0.45,
        }),
      },
      {
        key: 'mid',
        className:
          'absolute inset-0 opacity-55 animate-[driftMid_34s_linear_infinite]',
        stars: makeStars(Math.floor(total * 0.32), {
          minSize: 1,
          maxSize: 2,
          minOpacity: 0.22,
          maxOpacity: 0.6,
        }),
      },
      {
        key: 'near',
        className:
          'absolute inset-0 opacity-65 animate-[driftFast_28s_linear_infinite]',
        stars: makeStars(Math.floor(total * 0.13), {
          minSize: 2,
          maxSize: 3,
          minOpacity: 0.18,
          maxOpacity: 0.45,
        }),
      },
    ]
  }, [count])

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_72%)]"
    >
      {layers.map((layer) => (
        <div key={layer.key} className={layer.className}>
          {layer.stars.map((s) => (
            <span
              key={s.i}
              className="absolute rounded-full bg-white/80"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                opacity: s.opacity,
                filter: s.blur ? `blur(${s.blur}px)` : undefined,
                animation: `twinkle ${s.twinkle}s ease-in-out ${s.delay}s infinite`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

