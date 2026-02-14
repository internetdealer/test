import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    image: "/images/project-1.jpg",
    title: "ЖК «Солнечный Город»",
    category: "Жилое строительство",
    area: "45 000 м\u00B2",
    year: "2024",
  },
  {
    image: "/images/project-2.jpg",
    title: "Бизнес-центр «Меридиан»",
    category: "Коммерческое строительство",
    area: "28 000 м\u00B2",
    year: "2023",
  },
  {
    image: "/images/project-3.jpg",
    title: "Логистический центр «Восток»",
    category: "Промышленное строительство",
    area: "62 000 м\u00B2",
    year: "2023",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Проекты
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Реализованные объекты
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
              </div>
              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{project.area}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
