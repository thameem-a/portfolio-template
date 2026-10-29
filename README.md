# Portfolio Template

A fast, config-driven developer portfolio built with Next.js 16, React 19, and Tailwind CSS v4. Edit one file to make it yours — no component hunting.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthameem-a%2Fportfolio-template&project-name=portfolio&repository-name=portfolio)

**Live demo:** [portfolio-template-one-green.vercel.app](https://portfolio-template-one-green.vercel.app) — this repo as-is, with placeholder content.

## Features

- **Single-file config** — bio, experience, projects, skills, education, and map pins all live in `app/config/portfolio.ts`. Every view renders from it.
- **Two views** — a split-pane main page with section tabs and a live clock, plus an interactive `/terminal` page that renders the same data as a command-line UI.
- **Travel map** — Leaflet map of places you've lived and visited. Mark one pin as `"current"` and the map opens centered on it.
- **Monospace aesthetic** — Geist Mono, dark theme, no API keys required.

## Get Started

**Option A — one click:** hit **Deploy with Vercel** above. Vercel copies this repo into your GitHub account and deploys it. Then clone your new repo and edit the config.

**Option B — GitHub template:** click **Use this template** at the top of this page, then:

```bash
git clone https://github.com/<you>/<your-repo>.git
cd <your-repo>
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Make It Yours

1. **Edit `app/config/portfolio.ts`** — replace the placeholder `personal`, `experience`, `projects`, `certifications`, `skillCategories`, `education`, and `mapLocations`.
   - `personal.handle` is the username in the terminal prompt (`jane@portfolio:~$`).
   - `personal.description` is the page description for search results and link previews.
   - Map `coords` are `[latitude, longitude]` — right-click a spot in Google Maps to copy them.
2. **Replace `public/resume.pdf`** with your own resume.
3. **Replace `app/favicon.ico`** with your own icon.
4. **Push** — Vercel redeploys on every push to `main`.

## Project Structure

```
app/
  config/portfolio.ts   # ← edit this: all your content
  page.tsx              # main split-pane view
  terminal/page.tsx     # interactive terminal view
  components/TravelMap.tsx
  layout.tsx            # fonts + metadata (reads from config)
  globals.css           # theme tokens
public/
  resume.pdf            # ← replace with yours
```

## Tech Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · React Leaflet. Package manager: pnpm. Map tiles: Esri Dark Gray Canvas.

## Credits

Design inspired by [Clean Personal Resume](https://www.figma.com/community/file/1495248085295405720/clean-personal-resume) on Figma Community.

## License

MIT — see [LICENSE](LICENSE). Use it, change it, ship it. A link back is appreciated but not required.
