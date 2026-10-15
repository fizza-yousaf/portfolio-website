# Fizza Yousaf — React Portfolio

A complete responsive React + JavaScript portfolio with six pages, real supplied project screenshots, your photograph, original CV, LinkedIn, and a local interactive portfolio assistant.

## Open in VS Code

```bash
npm install
npm run dev
```

Visit the localhost address printed in your terminal.

## Test the production build

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages (automatic)

1. Create a **public** GitHub repository named **`fizza-yousaf-portfolio`** in the account `fizza-yousaf`.
2. Open this folder in VS Code and run:

```bash
git init
git add .
git commit -m "Build React portfolio"
git branch -M main
git remote add origin https://github.com/fizza-yousaf/fizza-yousaf-portfolio.git
git push -u origin main
```

3. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The included workflow `.github/workflows/deploy.yml` installs, builds and publishes automatically after a push to `main`.
5. Open `https://fizza-yousaf.github.io/fizza-yousaf-portfolio/` once the action completes.

**Important:** This project is configured for that exact GitHub repository name. If you use a different repository, change the `base` path in `vite.config.js`. The site uses `HashRouter` so inner pages work after refresh.

## Deploy on Vercel

1. Import the GitHub repository into Vercel.
2. Framework: **Vite**; Build Command: `npm run build`; Output Directory: `dist`.
3. Add an environment variable: `VITE_DEPLOY_TARGET=vercel`.
4. Deploy. The Vercel environment setting changes the Vite base to `/`.

## Update content

- `src/data.js` — project links, work experience, skills, contact info and LinkedIn.
- `public/Fizza-Yousaf-CV.pdf` — original CV, unchanged.
- `public/fizza-portrait.png` — your supplied portrait with processed background.
- `public/projects/` — genuine screenshots you provided.
- WordPress/Webflow client projects have real site links but **no screenshots** because no authentic screenshot was available. To add one, put it in `public/projects/` and set its `image` field in `src/data.js`.
- AI Website Audit Tool has a live link but no supplied screenshot.
- The assistant is a **local rule-based portfolio guide**, not a live generative AI service; no API key is exposed.
- The contact form uses `mailto:` and opens the visitor's email app; it does not send directly from a server.

## Structure

```text
src/components/     Navigation, project cards, portfolio assistant
src/pages/          Home, About, Skills, Experience, Projects, Contact
src/data.js         Editable content
src/styles.css      Design system and responsive styles
public/projects/    Original screenshots
.github/workflows/  Automatic GitHub Pages deployment
```

## Services page
The `/services` route contains six editable service cards. Edit `src/pages/Services.jsx` to update services, descriptions and tags. Navigation is defined in `src/components/Navbar.jsx`.

## October 2026 portfolio updates
- Six authentic client website screenshots added under `public/projects/`.
- React Portfolio removed from the project list.
- Updated navigation/footer wordmark to FY + Fizza Yousaf.
- Original client live URLs retained from `src/data.js`.
- GitHub repository links are included only where a direct URL was supplied; other code links remain blank rather than pointing to an unverified repository.
- To add more repositories, update the `code` fields in `src/data.js`.
