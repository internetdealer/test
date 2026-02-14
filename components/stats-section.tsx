"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 15, suffix: "+", label: "Лет на рынке" },
  { value: 280, suffix: "+", label: "Объектов построено" },
  { value: 1200000, suffix: "", label: "м\u00B2 введено в эксплуатацию", formatAsM: true },
  { value: 200, suffix: "+", label: "Специалистов в команде" },
]

function formatNumber(num: number, formatAsM?: boolean): string {
  if (formatAsM) {
    return (num / 1000000).toFixed(1).replace(".", ",") + " млн"
  }
  return num.toLocaleString("ru-RU")
}

function AnimatedCounter({ target, suffix, formatAsM }: { target: number; suffix: string; formatAsM?: boolean }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-display text-4xl font-bold text-primary sm:text-5xl">
      {formatNumber(count, formatAsM)}
      {suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section id="stats" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} formatAsM={stat.formatAsM} />
              <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
