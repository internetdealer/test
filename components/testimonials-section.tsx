import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "СтройМастер построил наш жилой комплекс точно в срок и с безупречным качеством. Рекомендуем как надёжного партнёра.",
    author: "Алексей Петров",
    role: "Генеральный директор, ГК «Развитие»",
  },
  {
    quote: "Профессиональный подход на каждом этапе. Команда оперативно решала все вопросы и полностью выполнила все обязательства.",
    author: "Мария Козлова",
    role: "Руководитель проекта, «ТехноПарк»",
  },
  {
    quote: "Мы выбрали СтройМастер для строительства нашего логистического центра и не пожалели. Высочайший уровень работы.",
    author: "Дмитрий Волков",
    role: "Директор по развитию, «ЛогиТранс»",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Отзывы
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Что говорят наши клиенты
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col rounded-lg border border-border bg-card p-6"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </p>
              <div>
                <p className="font-display text-sm font-semibold text-card-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
