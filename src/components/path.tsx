import { appointments } from '@/data/site'

export function Path() {
  return (
    <section id="path" className="border-y border-border/70 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm tracking-[0.18em] text-primary uppercase">Appointments</p>
        <h2 className="font-heading mt-3 text-4xl">Path</h2>
        <ol className="mt-10 space-y-0">
          {appointments.map((item, index) => (
            <li key={item.role} className="grid gap-2 border-l border-primary/40 py-4 pl-6 sm:grid-cols-[10rem_1fr]">
              <span className="text-sm text-muted-foreground">{item.period}</span>
              <div>
                <h3 className="font-medium">
                  {item.role}
                  {index === 0 ? <span className="text-primary"> · current</span> : null}
                </h3>
                <p className="text-sm text-muted-foreground">{item.org}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
