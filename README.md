# Hadil AlSakani — Portfolio

**Live site:** <https://hadilsakani.github.io/Hadil/>

A bilingual (Arabic / English) personal portfolio for **Hadil Amer Jamal
AlSakani**, software engineering student and UX/UI designer, Gaza — Palestine.

The visual direction is a **developer terminal portfolio**: GitHub-dark palette,
monospace headings, and sections titled as shell commands (`whoami`,
`cat about.md`, `ls ~/projects`, `git log`, `ssh contact`).

- Stack: React 19 + Vite 8, JavaScript
- Bilingual: Arabic (RTL) / English (LTR) with a persisted language preference
- Design system: [`DESIGN.md`](./DESIGN.md)

---

## Getting started

```sh
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```sh
npm run build      # production build into dist/
npm run preview    # serve the production build on http://localhost:4173
npm run lint       # oxlint
```

**Local preview command (production build):**

```sh
npm run build && npm run preview
```

## Project layout

```
index.html                 document shell, font loading, meta tags
vite.config.js             Vite config + the CV asset check
src/
  main.jsx                 React entry point
  App.jsx                  language state, document sync, section composition
  content.js               every string, in English and Arabic
  cvAsset.js               build-time check for public/assets/cv.pdf
  index.css                design tokens and all component styles
  hooks/
    usePrefersReducedMotion.js
  components/
    Header.jsx             sticky header + navigation
    LanguageSwitch.jsx     EN / ع toggle
    Hero.jsx               terminal window, typed `whoami`
    About.jsx              `cat about.md`
    Skills.jsx             `cat skills.json`
    Projects.jsx           `ls ~/projects`
    Experience.jsx         `git log`
    Education.jsx          `cat education.md`
    Contact.jsx            `ssh contact`
    SectionHead.jsx        shared shell-command section heading
    TerminalPanel.jsx      shared terminal window chrome
public/
  images/                  project imagery (public/images/…)
  assets/                  the published CV (public/assets/cv.pdf)
  .nojekyll                keeps Pages from running Jekyll
.github/
  workflows/deploy.yml     build + deploy to GitHub Pages on push to main
```

## Language handling

- The active language is stored in `localStorage` under `portfolio-lang`.
- `?lang=ar` / `?lang=en` deep-links a specific language; the value is
  remembered like any manual choice and the URL is kept in step, so links
  stay shareable.
- Switching language updates `<html lang>` and `<html dir>`, which flips the
  whole layout between RTL and LTR.
- Command strings, filenames, dates and URLs stay left-to-right inside an RTL
  page via `.ltr` / `dir="ltr"` isolation.

## Publishing on GitHub Pages

**Live:** <https://hadilsakani.github.io/Hadil/>

Deployment is automatic. `.github/workflows/deploy.yml` runs on every push to
`main` (and on manual dispatch) and does: `npm ci` → `npm run lint` →
`npm run build` → upload `dist/` → `actions/deploy-pages`.

The build uses a **relative base** (`base: './'`), so the same `dist/` works
under any Pages subpath and under a custom domain without a rebuild. Vite
outputs its hashed bundles to `bundle/` rather than `assets/`, leaving
`assets/` free for the CV PDF that the site links to directly.

One-time setup, already applied to this repository:

1. **Repository → Settings → Pages → Source: GitHub Actions.** GitHub only
   offers Pages for private repositories on a paid plan; this repository is
   public.
2. Nothing else — no `gh-pages` branch, no committed build output, no secrets.
   The workflow authenticates through the `GITHUB_TOKEN` that GitHub injects,
   using the `pages: write` and `id-token: write` permissions declared in it.

To redeploy without a code change, open *Actions → Deploy to GitHub Pages →
Run workflow*. The first deployment after enabling Pages can take a minute to
go live; later pushes are usually visible within ~30 seconds.

If a custom domain is added later, add it under Settings → Pages and create a
`public/CNAME` file — the relative base keeps working unchanged.

## The CV download button

`cat cv.pdf` appears **only when the file exists** at `public/assets/cv.pdf`.
`vite.config.js` checks for the file at build time and exposes the result as
`__CV_AVAILABLE__`; `src/cvAsset.js` reads it. If the PDF is missing, the
hero button is omitted and the contact card shows `cv.pdf — Pending` instead
of a dead link.

To publish the CV, drop the file at `public/assets/cv.pdf` and rebuild.

## Content notes

Content comes from the supplied CV and profile. Nothing was invented:

- Project cards list only the name, type and description that were supplied.
  The Problem / Role / Technologies / Outcome fields show `Pending` until the
  real detail is provided, and no project links are rendered because none
  were supplied.
- The TAQAT entry is an internship / volunteer role from 14 Jul 2026; its
  end date and responsibilities are still pending.
- There is no contact form, because no message-sending service is wired up.

`about.md` in the repository root holds the same content in a longer-form,
bilingual profile document, including an open-questions list.
