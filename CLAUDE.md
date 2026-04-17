# Claude Code Guidelines

## Project

Revamp of https://sdnetworkingevents.com/ using Next.js. Goal: recreate and improve the site, deploy publicly via GitHub Actions. Use Supabase for backend only if needed.

## Stack

- Next.js (App Router, TypeScript)
- pnpm as package manager
- GitHub + GitHub Actions for CI/CD
- Supabase (optional, only if backend is needed)

## Dev Commands

```bash
pnpm dev       # start dev server
pnpm build     # production build
pnpm lint      # eslint
```

## Tools

Use `playwright-cli` to scrape reference site content/structure:

```bash
playwright-cli open https://sdnetworkingevents.com/
playwright-cli snapshot
playwright-cli eval "document.querySelector('h1').textContent"
playwright-cli screenshot
```

Use `gh` for all GitHub operations (repo creation, PRs, Actions).
