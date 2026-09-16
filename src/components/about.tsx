import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { projects, researchAreas, site } from '@/data/site'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm tracking-[0.18em] text-primary uppercase">About</p>
          <h2 className="font-heading mt-3 text-4xl text-balance">
            Robots that walk, wait, and work with people.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground text-pretty">{site.summary}</p>
          <p className="mt-4 max-w-xl text-muted-foreground text-pretty">
            IEEE RAS and CIS member. Associate editor for the International Journal of Advanced
            Robotics, editorial board of Frontiers in Robotics and AI, and external expert for the
            ERC. Lectures at IIT, Heidelberg, and IST Lisbon.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {researchAreas.map((area) => (
            <Card key={area.title} size="sm" className="bg-card/80">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-card/70 p-5 ring-1 ring-foreground/10 transition-colors hover:bg-card"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-medium">{project.name}</h3>
              <span className="text-xs tracking-wide text-muted-foreground uppercase">
                {project.period}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{project.body}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
