# 🚀 Mandresy's Developer Portfolio

A modern, responsive, production-ready portfolio website built with **Vite + React + TypeScript + Tailwind CSS v4**.

**Live site:** https://mandreshope.github.io/ *(update URL after deployment)*

---

## ✨ Features

- Dark / light mode (auto-detects system preference, persisted)
- Hero section with animated gradient and CTA buttons
- **Projects**: live-fetched from GitHub API with search, language filter, and pinned repos
- **Skills**: grouped technology cards + stats
- **Services**: freelance / consulting cards
- **Contact**: mailto form with copy-to-clipboard (zero backend)
- Full SEO — meta tags, Open Graph, Twitter cards, sitemap, robots.txt
- Static export — deployable to GitHub Pages, Netlify, Vercel, etc.
- Lighthouse-friendly (fast, accessible, semantic HTML)

---

## 🛠 Local Development Setup

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/mandreshope/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. (optional) create a local .env file for higher GitHub API rate limits
cp .env.example .env.local
# Then edit .env.local and add your GitHub token:
# VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx

# 4. Start dev server
npm run dev
# Open http://localhost:5173
```

---

## ⚙️ Configuration

All personal data lives in **`src/config.ts`** — edit it to match your profile.

### Setting your GitHub username

```ts
// src/config.ts
export const SITE_CONFIG = {
  githubUsername: [github],
  github: [github],
  linkedin: [linkedin],
  email: [EMAIL_ADDRESS],
  // ...
}
```

The Projects section will automatically fetch and display all your public non-forked repos.

### Configuring Featured / Pinned Repos

Add repo names exactly as they appear on GitHub:

```ts
// src/config.ts
export const FEATURED_REPOS: string[] = [
  'my-flutter-app',
  'nestjs-stripe-api',
  'portfolio',
]
```

Featured repos appear **first** in the grid and show a 📌 pin icon.

### Customising skills and services

Edit the `SKILLS` and `SERVICES` arrays in `src/config.ts`.

---

## 🌐 GitHub Pages Deployment Guide

### Step 1 — Push your code

Make sure your code is on the `main` branch of your GitHub repository.

```bash
git add .
git commit -m "feat: initial portfolio"
git push origin main
```

### Step 2 — Enable GitHub Pages

1. Go to **Settings → Pages** in your repository.
2. Under **Source**, select **GitHub Actions**.
3. Save.

### Step 3 — Set the base path

The workflow file (`.github/workflows/deploy.yml`) already contains:

```yaml
env:
  BASE_PATH: /portfolio/
```

Change `/portfolio/` to match your **repository name** (e.g. `/my-portfolio/`).

> If your repository is named exactly `<username>.github.io`, set `BASE_PATH: /` (no sub-path).

### Step 4 — Push and watch 🎉

Push any commit to `main`. The Actions workflow will:

1. Install dependencies (cached)
2. Run `npm run build`
3. Deploy the `dist/` folder to GitHub Pages

Visit `https://<your-username>.github.io/<repo-name>/` once the workflow finishes.

---

## 🔑 Optional: GitHub API Token (Higher Rate Limits)

Without a token, the GitHub API allows **60 requests/hour** (per IP). This is plenty for a portfolio site, but if you want higher limits:

1. Create a **fine-grained personal access token** at https://github.com/settings/tokens  
   → **No scopes needed** for reading public repos.

2. Add it as a repository secret:  
   **Settings → Secrets and variables → Actions → New repository secret**  
   Name: `VITE_GITHUB_TOKEN`  
   Value: `ghp_xxxxxxxxxxxxxxxxxxxx`

The GitHub Actions workflow already reads this secret during build. Rate limit will increase to **5000 requests/hour**.

For local development, add it to a `.env.local` file (never commit this file):

```
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

---

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — build + deploy to GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky responsive navbar + dark mode toggle
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useGitHubRepos.ts   # GitHub API fetch with caching + rate-limit handling
│   │   └── useTheme.ts         # Dark/light mode
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx        # Live GitHub repos + filtering
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── config.ts               # ⭐ Edit this file to personalise the site
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Tailwind v4 + custom design system
├── index.html                  # Full SEO meta tags
├── vite.config.ts
├── tsconfig.json
├── .env.example
└── package.json
```

---

## 🏗 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 7 | Build tool |
| React | 19 | UI framework |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| lucide-react | latest | Icons |
| date-fns | latest | Date formatting |
| @fontsource/inter | latest | Self-hosted font |

---

## 📜 License

MIT — feel free to use this as a template for your own portfolio.
