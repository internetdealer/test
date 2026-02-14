import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Строительная площадка"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Строительная компания
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl text-balance">
          Строим будущее.
          <br />
          Надёжно и качественно.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Более 15 лет мы возводим жилые комплексы, коммерческие здания
          и промышленные объекты. Полный цикл строительства под ключ.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2 text-base">
            <a href="#contact">
              Обсудить проект
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base">
            <a href="#projects">Наши проекты</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
