import { Badge } from '@/components/ui/badge'
import { GaitMark } from '@/components/gait-mark'
import { site } from '@/data/site'
import type { GithubProfile } from '@/lib/github'

export function Hero({ profile }: { profile: GithubProfile | null }) {
  const avatar = profile?.avatar_url ?? `https://github.com/${site.githubUsername}.png`

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/70">
      <GaitMark className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[320px] w-[min(100%,720px)] text-primary/25 sm:top-4" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm tracking-[0.18em] text-primary uppercase">
            {site.title}
          </p>
          <h1 className="font-heading mt-4 max-w-xl text-5xl leading-[0.95] text-balance sm:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            {site.tagline} {site.affiliation}.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="outline">Humanoids</Badge>
            <Badge variant="outline">HRI</Badge>
            <Badge variant="outline">Locomotion</Badge>
            <Badge variant="outline">Fabrication</Badge>
          </div>
        </div>
        <aside className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          <div className="col-span-2 flex items-center gap-4 rounded-xl bg-card/70 p-4 ring-1 ring-foreground/10">
            <img
              src={avatar}
              alt=""
              width={64}
              height={64}
              className="size-16 rounded-full ring-1 ring-foreground/15"
            />
            <div>
              <p className="font-medium">@{site.githubUsername}</p>
              <p className="text-sm text-muted-foreground">
                {profile
                  ? `${profile.public_repos} public repos · ${profile.followers} followers`
                  : 'GitHub profile'}
              </p>
            </div>
          </div>
          <Stat label="Citations" value={String(site.scholar.citations)} />
          <Stat label="h-index" value={String(site.scholar.hIndex)} />
        </aside>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-card/70 p-4 ring-1 ring-foreground/10">
      <p className="font-heading text-3xl">{value}</p>
      <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  )
}
