# Personal Banking Web App

A static, BDO-inspired personal banking landing page (blue/red "We find ways" theme).
Pure HTML + CSS — no build step required.

## Files
- `index.html` — the page
- `styles.css` — the theme
- `vercel.json` — tells Vercel this is a static site (no build)

## Deploy to Vercel
This site has **no build step**. The included `vercel.json` overrides any
"Create React App" preset so Vercel just serves the static files.

1. Push to GitHub.
2. Import the repo in Vercel.
3. Deploy — `vercel.json` handles the rest.

> If a previous deploy failed with `react-scripts: command not found`, that was
> Vercel's dashboard running `react-scripts build` on a non-React project.
> The `vercel.json` here disables that. You can also clear the **Build Command**
> and set **Framework Preset = Other** in Project Settings → Build & Output.

## Run locally
Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 3000
```

> Demo project. Not affiliated with any bank.
