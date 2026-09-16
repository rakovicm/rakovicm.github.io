import { GitFork, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { site } from '@/data/site'
import type { GithubPayload } from '@/lib/github'

export function GithubRepos({
  data,
  status,
}: {
  data: GithubPayload | null
  status: 'loading' | 'ready' | 'error'
}) {
  return (
    <section id="code" className="border-y border-border/70 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.18em] text-primary uppercase">GitHub</p>
            <h2 className="font-heading mt-3 text-4xl">Public repositories</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Live from{' '}
              <a
                className="text-foreground underline-offset-4 hover:underline"
                href={site.links.github}
              >
                github.com/{site.githubUsername}
              </a>
              . New repos appear here after GitHub indexes them.
            </p>
          </div>
          {data ? (
            <Badge variant={data.source === 'live' ? 'default' : 'secondary'}>
              {data.source === 'live' ? 'Live API' : 'Cached fallback'}
            </Badge>
          ) : null}
        </div>

        {status === 'loading' ? (
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {[0, 1].map((key) => (
              <div
                key={key}
                className="h-36 animate-pulse rounded-xl bg-muted/60 ring-1 ring-foreground/10"
              />
            ))}
          </div>
        ) : null}

        {status === 'error' && !data ? (
          <p className="mt-8 rounded-xl bg-destructive/10 p-4 text-sm text-destructive">
            GitHub could not be reached. Open the profile directly:{' '}
            <a className="underline" href={site.links.github}>
              {site.links.github}
            </a>
          </p>
        ) : null}

        {data && data.repos.length === 0 ? (
          <p className="mt-8 rounded-xl bg-muted/50 p-6 text-sm text-muted-foreground">
            No public repositories yet. Push a repo to {site.githubUsername} and refresh this page.
          </p>
        ) : null}

        {data && data.repos.length > 0 ? (
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {data.repos.map((repo) => (
              <Card key={repo.html_url} className="bg-background/60">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {repo.name}
                      </a>
                    </CardTitle>
                    {repo.fork ? <Badge variant="outline">Fork</Badge> : null}
                  </div>
                  <CardDescription>
                    {repo.description ?? 'No description on GitHub.'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  {repo.language ? <span>{repo.language}</span> : null}
                  <span className="inline-flex items-center gap-1">
                    <Star className="size-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork className="size-3" />
                    {repo.forks_count}
                  </span>
                  <span>
                    Updated {new Date(repo.updated_at).toLocaleDateString('en-GB')}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
