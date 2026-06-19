# Personal Banking Web App

A BDO-inspired personal banking landing page (blue/red "We find ways" theme),
built with **Next.js** (Pages Router) — same tech stack and folder structure as
the PowerIntake-WebApp project (Next.js 16 + Tailwind v4, JavaScript/`.jsx`,
`@/*` import alias, static `output: "export"`).

## Tech stack
- **Next.js 16** (Pages Router) + **React 19**
- **Tailwind CSS v4** (`@tailwindcss/postcss`, `styles/globals.css`)
- JavaScript (`.jsx`), shadcn-style conventions (`components.json`, `lib/utils.js`)
- `@/*` path alias via `jsconfig.json`
- Static export (`output: "export"`)

## Structure
- `pages/_app.jsx` — app shell, imports global styles
- `pages/_document.jsx` — base HTML document
- `pages/index.jsx` — the landing page (page `<title>`/meta via `next/head`)
- `components/Header.jsx` — header with mobile nav toggle (`useState`)
- `components/Footer.jsx` — footer
- `styles/globals.css` — Tailwind import + the banking theme
- `lib/utils.js` — `cn()` helper

## Run locally
The dev/start scripts are hardcoded to **port 3000**.

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)
```bash
npm run build    # outputs static site to ./out
```

## Deploy to Vercel
1. Push to GitHub.
2. Import the repo in Vercel — it auto-detects Next.js (`vercel.json` sets the preset).
3. Deploy.

> Demo project. Not affiliated with any bank.
