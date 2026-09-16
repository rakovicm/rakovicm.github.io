import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

const contactLinks = [
  { label: 'GitHub', href: site.links.github },
  { label: 'Google Scholar', href: site.links.scholar },
  { label: 'ORCID', href: site.links.orcid },
  { label: 'LinkedIn', href: site.links.linkedin },
  { label: 'FTN profile', href: site.links.ftn },
  { label: 'ISR Lisbon', href: site.links.isr },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-sm tracking-[0.18em] text-primary uppercase">Contact</p>
      <h2 className="font-heading mt-3 max-w-xl text-4xl text-balance">
        Write from campus, or open an issue on GitHub.
      </h2>
      <p className="mt-4 max-w-xl text-muted-foreground">
        {site.affiliation}. Cabinet 119, Institutes of the Mechanical Engineering Department.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild>
          <a href={`mailto:${site.email}`}>
            <Mail data-icon="inline-start" />
            {site.email}
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={site.links.github} target="_blank" rel="noreferrer">
            @{site.githubUsername}
          </a>
        </Button>
      </div>
      <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {contactLinks.map((link) => (
          <li key={link.href}>
            <a className="hover:text-foreground" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-xs text-muted-foreground">
        Personal GitHub Pages site for {site.name}. Source is this repository; deploy to{' '}
        {site.githubUsername}.github.io.
      </p>
    </footer>
  )
}
