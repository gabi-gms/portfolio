import { useEffect, useRef } from 'react'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

function mulberry32(seed) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function ConstellationBackground({
  density = 0.000032, // particles per pixel^2
  maxStars = 72,
  linkDistance = 130,
}) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const stateRef = useRef({
    stars: [],
    w: 0,
    h: 0,
    dpr: 1,
    mouseX: 0,
    mouseY: 0,
    mouseTgtX: 0,
    mouseTgtY: 0,
    seed: 1337,
    t: 0,
    last: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const state = stateRef.current
    const rand = mulberry32(state.seed)

    const resize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2)
      state.w = w
      state.h = h
      state.dpr = dpr

      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const desired = Math.min(maxStars, Math.max(36, Math.floor(w * h * density)))
      if (state.stars.length !== desired) {
        state.stars = Array.from({ length: desired }).map((_, i) => {
          const x = rand() * w
          const y = rand() * h
          const r = 0.8 + rand() * 1.4
          const vx = (rand() - 0.5) * 0.08
          const vy = (rand() - 0.5) * 0.08
          const a = 0.16 + rand() * 0.28
          const tw = 0.6 + rand() * 1.0
          return { i, x, y, r, vx, vy, a, tw }
        })
      }
    }

    const onMove = (e) => {
      state.mouseTgtX = (e.clientX / Math.max(1, state.w)) * 2 - 1
      state.mouseTgtY = (e.clientY / Math.max(1, state.h)) * 2 - 1
    }

    const onLeave = () => {
      state.mouseTgtX = 0
      state.mouseTgtY = 0
    }

    resize()
    window.addEventListener('resize', resize, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave, { passive: true })

    const draw = (now) => {
      rafRef.current = requestAnimationFrame(draw)
      const last = state.last || now
      state.last = now
      const dt = clamp((now - last) / 1000, 0.001, 0.05)
      state.t += dt

      // smooth mouse
      const mouseEase = 1 - Math.pow(0.001, dt)
      state.mouseX += (state.mouseTgtX - state.mouseX) * mouseEase
      state.mouseY += (state.mouseTgtY - state.mouseY) * mouseEase

      const { w, h } = state
      ctx.clearRect(0, 0, w, h)

      const px = state.mouseX * 9
      const py = state.mouseY * 9

      const dist = linkDistance
      const dist2 = dist * dist

      // connections
      ctx.lineWidth = 0.8
      for (let i = 0; i < state.stars.length; i += 1) {
        const s1 = state.stars[i]
        const x1 = s1.x + px * 0.35
        const y1 = s1.y + py * 0.35

        for (let j = i + 1; j < state.stars.length; j += 1) {
          const s2 = state.stars[j]
          const dx = s2.x - s1.x
          const dy = s2.y - s1.y
          const d2 = dx * dx + dy * dy
          if (d2 > dist2) continue

          const k = 1 - d2 / dist2
          const a = 0.032 * k

          ctx.strokeStyle = `rgba(148,163,184,${a})`
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(s2.x + px * 0.35, s2.y + py * 0.35)
          ctx.stroke()
        }
      }

      // stars
      for (let i = 0; i < state.stars.length; i += 1) {
        const s = state.stars[i]
        s.x += s.vx * (dt * 60)
        s.y += s.vy * (dt * 60)

        if (s.x < -20) s.x = w + 20
        else if (s.x > w + 20) s.x = -20
        if (s.y < -20) s.y = h + 20
        else if (s.y > h + 20) s.y = -20

        const tw = 0.75 + 0.25 * Math.sin(state.t * s.tw + s.i)
        const a = s.a * tw

        const x = s.x + px
        const y = s.y + py

        ctx.fillStyle = `rgba(255,255,255,${a})`
        ctx.shadowColor = 'rgba(99,102,241,0.14)'
        ctx.shadowBlur = 7
        ctx.beginPath()
        ctx.arc(x, y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.shadowBlur = 0
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [density, linkDistance, maxStars])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-50 opacity-35"
    />
  )
}

