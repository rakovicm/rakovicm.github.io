import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

const links = [
  { href: '#about', label: 'About' },
  { href: '#code', label: 'Code' },
  { href: '#papers', label: 'Papers' },
  { href: '#path', label: 'Path' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-border/80 bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-heading text-lg tracking-tight">
          {site.shortName}
          <span className="sr-only">{site.name}</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1 overflow-x-auto md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-md px-2 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild size="sm">
            <a href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
