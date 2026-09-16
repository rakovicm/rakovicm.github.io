import { fallbackRepos, githubUsername } from '@/data/site'

export type GithubRepo = {
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  updated_at: string
}

export type GithubProfile = {
  login: string
  html_url: string
  avatar_url: string
  public_repos: number
  followers: number
  bio: string | null
  name: string | null
}

export type GithubPayload = {
  profile: GithubProfile
  repos: GithubRepo[]
  source: 'live' | 'fallback'
}

const fallbackProfile: GithubProfile = {
  login: githubUsername,
  html_url: `https://github.com/${githubUsername}`,
  avatar_url: `https://avatars.githubusercontent.com/${githubUsername}`,
  public_repos: fallbackRepos.length,
  followers: 0,
  bio: null,
  name: 'Mirko Raković',
}

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}`)
  }
  return response.json() as Promise<T>
}

export async function loadGithub(): Promise<GithubPayload> {
  try {
    const [profile, repos] = await Promise.all([
      getJson<GithubProfile>(`https://api.github.com/users/${githubUsername}`),
      getJson<GithubRepo[]>(
        `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=12`,
      ),
    ])
    return { profile, repos, source: 'live' }
  } catch {
    return {
      profile: fallbackProfile,
      repos: fallbackRepos,
      source: 'fallback',
    }
  }
}
