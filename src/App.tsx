import { useEffect, useState } from 'react'
import { About } from '@/components/about'
import { GithubRepos } from '@/components/github-repos'
import { Hero } from '@/components/hero'
import { Papers } from '@/components/papers'
import { Path } from '@/components/path'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { loadGithub, type GithubPayload } from '@/lib/github'

export default function App() {
  const [data, setData] = useState<GithubPayload | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    loadGithub()
      .then((payload) => {
        if (cancelled) return
        setData(payload)
        setStatus('ready')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="min-h-svh">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Hero profile={data?.profile ?? null} />
        <About />
        <GithubRepos data={data} status={status} />
        <Papers />
        <Path />
      </main>
      <SiteFooter />
    </div>
  )
}
