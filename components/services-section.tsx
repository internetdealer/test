import { Building2, Factory, Home, Wrench, HardHat, Ruler } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Жилое строительство",
    description: "Многоэтажные жилые комплексы, таунхаусы и коттеджные посёлки с полной инфраструктурой.",
  },
  {
    icon: Building2,
    title: "Коммерческие объекты",
    description: "Офисные центры, торговые комплексы и бизнес-парки под ключ.",
  },
  {
    icon: Factory,
    title: "Промышленное строительство",
    description: "Производственные цеха, складские комплексы и логистические центры.",
  },
  {
    icon: Wrench,
    title: "Реконструкция",
    description: "Капитальный ремонт и модернизация существующих зданий и сооружений.",
  },
  {
    icon: HardHat,
    title: "Генеральный подряд",
    description: "Полное управление строительным процессом от проектирования до сдачи объекта.",
  },
  {
    icon: Ruler,
    title: "Проектирование",
    description: "Разработка проектной документации с учётом всех норм и стандартов.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Услуги
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-card-foreground sm:text-4xl text-balance">
            Полный спектр строительных услуг
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-border bg-secondary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-base font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
