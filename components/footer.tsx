export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
            СТРОЙ<span className="text-primary">МАСТЕР</span>
          </a>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Навигация в подвале">
            <a href="#about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              О компании
            </a>
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Услуги
            </a>
            <a href="#projects" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Проекты
            </a>
            <a href="#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              Контакты
            </a>
          </nav>

          <p className="text-xs text-muted-foreground">
            {'\u00A9'} 2026 СтройМастер. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
