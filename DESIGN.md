# DESIGN.md — Hadil AlSakani Portfolio

Design system for the portfolio site. Every value below is implemented in
`src/index.css` as a CSS custom property on `:root`.

> **Source.** No reviewed Stitch design was available for this build: the
> Stitch project *Hadil Sakani Developer Portfolio*
> (`projects/14931838701360332873`) contained zero screens, no screenshots were
> attached to the brief, and the second Stitch project (*UI Design Scope*)
> contains unrelated earlier work (B-Tareeak, Sela case study). The system
> below is therefore a direct transcription of the written visual brief, not an
> extraction from rendered screens. See "Verification" at the bottom.

---

## 1. Colour

GitHub-dark palette. Values are given verbatim in the brief.

| Token | Value | Role |
| --- | --- | --- |
| `--bg` | `#0D1117` | Page background |
| `--panel` | `#161B22` | Panel / card surfaces, terminal body |
| `--panel-raised` | `#1C2128` | Title bar, hovered cards, inset surfaces |
| `--border` | `#30363D` | 1px borders everywhere |
| `--border-strong` | `#3D444D` | Accent borders (hover, focus) |
| `--text` | `#C9D1D9` | Primary body text |
| `--muted` | `#8B949E` | Secondary text, labels, metadata |
| `--green` | `#3FB950` | Shell prompts, success, primary accent |
| `--blue` | `#58A6FF` | Links |
| `--amber` | `#D29922` | Highlights, badges, "pending" markers |

Supporting terminal-window dot colours, used only in the panel chrome:

| Token | Value | Dot |
| --- | --- | --- |
| `--red` | `#FF5F56` | close |
| `--yellow` | `#FFBD2E` | minimise |
| `--green` | `#3FB950` | maximise |

Contrast ratios (computed, not estimated):

| Pair | Ratio | Verdict |
| --- | --- | --- |
| `--text` on `--bg` | 12.26 : 1 | AAA |
| `--muted` on `--bg` | 6.15 : 1 | AA |
| `--green` on `--bg` | 7.45 : 1 | AAA |
| `--blue` on `--bg` | 7.49 : 1 | AAA |
| `--amber` on `--bg` | 7.50 : 1 | AAA |
| `--text` on `--panel` | 11.21 : 1 | AAA |
| `--muted` on `--panel` | 5.62 : 1 | AA |
| `--text` on `--panel-raised` | 10.49 : 1 | AAA |
| `--muted` on `--panel-raised` | 5.26 : 1 | AA |
| `--green` on `--panel-raised` | 6.37 : 1 | AA |
| `--blue` on `--panel-raised` | 6.41 : 1 | AA |
| `#05130A` on `--green` (filled button) | 7.49 : 1 | AAA |

Borders are decorative, not text: `--border` on `--bg` is 1.55 : 1 and
`--border-strong` is 1.92 : 1. Both are supplemented by a visible focus ring
(2px `--blue`) wherever a border carries meaning.

## 2. Typography

| Token | Family | Use |
| --- | --- | --- |
| `--font-mono` | JetBrains Mono | Headings, labels, commands, file names, code-like elements |
| `--font-sans` | Inter | Long-form body copy (LTR) |
| `--font-arabic` | IBM Plex Sans Arabic | Arabic body copy and Arabic headings |

The mono stack includes `'IBM Plex Sans Arabic'` as a fallback so that Arabic
glyphs inside command-style elements still render in Plex Arabic rather than
falling back to a system face.

### Scale

| Token | Size | Use |
| --- | --- | --- |
| `--text-hero` | `clamp(1.9rem, 1.35rem + 2.6vw, 3.15rem)` | Hero name |
| `--text-2xl` | `clamp(1.5rem, 1.2rem + 1.4vw, 2rem)` | Secondary name, large values |
| `--text-xl` | `clamp(1.25rem, 1.1rem + 0.7vw, 1.5rem)` | Section command heading |
| `--text-lg` | `1.125rem` | Lead paragraph, project name |
| `--text-base` | `1rem` | Body |
| `--text-sm` | `0.8125rem` | Metadata, tags, nav |
| `--text-xs` | `0.75rem` | Uppercase labels |

Leading: `1.15` tight (hero), `1.35` snug (card descriptions), `1.65` normal
(body). Label tracking: `0.09em`, uppercase, for `.section__title`,
`.contact__label`, `.about__fact dt`, `.project__field dt`.

## 3. Spacing

Base unit 4px. Steps: `1` 4px · `2` 8px · `3` 12px · `4` 16px · `5` 24px ·
`6` 32px · `7` 48px · `8` 64px · `9` 96px.

| Context | Value |
| --- | --- |
| Section padding (block) | `--space-8` (64px), 48px on ≤ 52rem viewports |
| Panel body padding | `--space-5` (24px), `--space-4` on ≤ 30rem |
| Panel title bar padding | `--space-3` `--space-4` (12px 16px) |
| Grid gap | `--space-4` (16px) cards, `--space-6` (32px) wide layouts |
| Shell max width | `--shell` = 1160px, gutter 2.5rem (1.75rem ≤ 26rem) |

## 4. Shape, borders, depth

| Token | Value |
| --- | --- |
| `--radius` | 8px (panels, cards, buttons) |
| `--radius-sm` | 6px (tags, brand mark, focus rings) |
| `--radius-lg` | 12px (reserved) |
| `--border-w` | 1px, solid `--border` |

Cards use a flat 1px border. Depth is expressed by a 1px inset highlight plus a
soft, low-opacity drop shadow (`--shadow-panel`); hover raises a card by 2px
and brightens its border to `--border-strong`.

## 5. Components

**Terminal panel** — shared chrome for every section: three dots
(red/yellow/green, 0.7rem), a monospace title, and a body on `--panel`.

**Section heading** — a shell command, e.g. `❯ ls ~/projects`, followed by an
uppercase label and a rule that fills the remaining width. The command string
is wrapped in an LTR isolate so it reads correctly inside an RTL document.

**Hero** — a terminal window. `whoami` types itself, then the name, the
Arabic name, the role, a one-line bio and an availability chip appear, closed
by a blinking cursor. Two command-styled buttons follow: `./view-projects`
(anchor to `#projects`) and `cat cv.pdf` (download, rendered only when
`public/assets/cv.pdf` exists).

**Project card** — a file entry: permissions marker, monospace filename,
description, a language dot, the type tag and a `Case study pending` chip.
Expanding the card (`<details>`) reveals the structured fields — Problem,
Role, Technologies, Outcome — each showing `Pending` until the real content is
supplied. No link button is rendered: no public project links were supplied.

**Skill group** — `cat skills.json` styling: a green key (`"design":`) above a
wrapping row of bordered tags.

**Log entry** — `git log` styling: a fixed LTR date column and a commit
message line, with a bordered type badge and a muted detail line.

**Contact card** — label above a monospace value; links open in a new tab
with `rel="noreferrer noopener"`.

## 6. Bilingual behaviour

| | Arabic | English |
| --- | --- | --- |
| `html[lang]` | `ar` | `en` |
| `dir` | `rtl` | `ltr` |
| Body font | IBM Plex Sans Arabic | Inter |
| Command strings | LTR isolate (`dir="ltr"`, `unicode-bidi: isolate`) | as authored |
| Dates, filenames | LTR isolate | as authored |

The active language is persisted in `localStorage` under `portfolio-lang` and
re-applied to `<html lang>` and `<html dir>` on load, so the choice survives
reloads. The switch is a two-button group with `aria-pressed`.

## 7. Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `footer`; one `h1` (hero
  name); `h2` per section; `h3` within sections.
- Skip link to `#main`.
- `:focus-visible` ring — 2px `--blue` outline with 3px offset, never removed.
- `prefers-reduced-motion: reduce` disables the typewriter, the blinking
  cursor and every transition/transform.
- Keyboard operable: language buttons are real `<button>`s; project cards use
  native `<details>`/`<summary>`.
- `aria-pressed` on the language switch, `aria-hidden` on decorative dots and
  prompt glyphs, `aria-labelledby` on every section.

## 8. Verification status

The implementation follows the written brief exactly, because no rendered
design was available to measure against. What that means concretely:

- Colours, fonts, radii, spacing and component structure come straight from
  the brief and are tokenised in `src/index.css`.
- **No pixel comparison against reviewed screenshots was performed** — no
  screenshots exist in the Stitch project or the brief. This is the one part
  of the brief that remains outstanding.

### What was actually tested

| Check | Result |
| --- | --- |
| Production build | `vite build` succeeds; `oxlint` reports no warnings |
| Layout viewport | driven over the DevTools Protocol at exactly 375, 768 and 1440px (Chrome's `--window-size=375` is clamped to a wider minimum on Windows, so it cannot be trusted) |
| Horizontal overflow | `scrollWidth === clientWidth` at every width, in both directions |
| Navigation | all six links visible and within the viewport at 375px — the mobile header wraps instead of clipping |
| RTL | `dir="rtl"`, `lang="ar"`, mirrored layout, commands/filenames/dates/URLs isolated to LTR |
| Language switch | flips `lang`/`dir`, updates the title, persists to `localStorage`, survives reload, and stays in step with the `?lang=` query parameter |
| Default language | English / LTR with no stored preference |
| Keyboard focus | visible `2px` ring on links, buttons and `<summary>`; tab order runs skip link → brand → nav → language → content |
| Reduced motion | with `prefers-reduced-motion: reduce`, the hero renders fully and the cursor animation is `none` |
| Colour contrast | ratios computed, not estimated (table in §1) |
| External links | GitHub 200; Behance resolves to the real profile ("Hadil Sakani — Software Engineer / UXUI Designer in Gaza City"); LinkedIn redirects to its login wall, so its existence could not be confirmed |
| CV asset | `public/assets/cv.pdf` served with `application/pdf`; the `cat cv.pdf` button appears only when the file exists |
| Build output | no API keys or secrets in `dist/` |

### Still needs manual verification

- Visual diff against the reviewed design — impossible until the screenshots
  exist.
- LinkedIn profile validity — blocked by the login wall.
- Real device testing (iOS Safari, Android Chrome) and a screen-reader pass.
- Publishing to GitHub Pages, which is deliberately not done here.
