import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { papers, site, type PaperTopic } from '@/data/site'

const filters: Array<'All' | PaperTopic> = ['All', 'HRI', 'Locomotion', 'Fabrication', 'Control']

export function Papers() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = useMemo(
    () => (filter === 'All' ? papers : papers.filter((paper) => paper.topic === filter)),
    [filter],
  )

  return (
    <section id="papers" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm tracking-[0.18em] text-primary uppercase">Publications</p>
          <h2 className="font-heading mt-3 text-4xl">Selected papers</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            A short list. The full record lives on{' '}
            <a className="text-foreground underline-offset-4 hover:underline" href={site.links.scholar}>
              Google Scholar
            </a>{' '}
            and{' '}
            <a className="text-foreground underline-offset-4 hover:underline" href={site.links.orcid}>
              ORCID
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {filters.map((item) => (
          <Button
            key={item}
            size="sm"
            variant={filter === item ? 'default' : 'outline'}
            onClick={() => setFilter(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">No papers in this topic yet.</p>
      ) : (
        <ol className="mt-8 divide-y divide-border/80">
          {visible.map((paper) => (
            <li key={paper.title} className="grid gap-2 py-5 sm:grid-cols-[auto_1fr_auto] sm:gap-6">
              <span className="font-heading text-xl text-primary/90">{paper.year}</span>
              <div>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-pretty hover:underline"
                >
                  {paper.title}
                </a>
                <p className="mt-1 text-sm text-muted-foreground">{paper.authors}</p>
                <p className="mt-1 text-sm text-muted-foreground italic">{paper.venue}</p>
              </div>
              <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                <Badge variant="outline">{paper.topic}</Badge>
                {paper.citations > 0 ? (
                  <span className="text-xs text-muted-foreground">{paper.citations} cites</span>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
