import { Shield, Clock, Users, Award } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Каждый объект проходит многоуровневую проверку качества и полностью соответствует строительным нормам.",
  },
  {
    icon: Clock,
    title: "Точные сроки",
    description: "Мы строго следуем графику и сдаём объекты в установленные сроки, без задержек.",
  },
  {
    icon: Users,
    title: "Опытная команда",
    description: "Более 200 квалифицированных специалистов с опытом работы на крупнейших стройках страны.",
  },
  {
    icon: Award,
    title: "Сертификация",
    description: "Все работы выполняются по стандартам ISO 9001 с использованием сертифицированных материалов.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            О компании
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Строим с 2009 года. Доверие, проверенное временем.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            СтройМастер — одна из ведущих строительных компаний региона, специализирующаяся
            на возведении объектов любой сложности. Мы сочетаем современные технологии
            с проверенными методами строительства.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
