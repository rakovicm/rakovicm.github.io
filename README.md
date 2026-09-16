# Mirko Raković — GitHub Pages

Personal site for [github.com/rakovicm](https://github.com/rakovicm), built to publish at **https://rakovicm.github.io**.

It is a static Vite + React page: biography, selected papers, appointments, and a live list of public GitHub repositories.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43141](http://127.0.0.1:43141).

```bash
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Create a **public** GitHub repository named `rakovicm.github.io` (user site) on the `rakovicm` account.
2. Push this project to that repository’s `main` branch.
3. In the repo: **Settings → Pages → Source → GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`.

After the first successful run the site is at `https://rakovicm.github.io`.

If you instead publish this as a **project** site (any other repo name), set a base path before building:

```bash
GITHUB_PAGES_BASE=/your-repo-name/ npm run build
```

Then the URL is `https://rakovicm.github.io/your-repo-name/`.

## Edit the content

- Profile, papers, and appointments: `src/data/site.ts`
- GitHub username used by the live repo list: `githubUsername` in that file

Citation counts are a snapshot from Google Scholar and should be updated there when you want them refreshed.

The header sun/moon control switches light and dark. The choice is stored in the browser; first visit follows the system theme.
