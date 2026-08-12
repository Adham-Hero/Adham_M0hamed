# Adham Mohamed — Portfolio (Phase 1)

Programmer × Nursing Student — personal portfolio built with **React + Vite**.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## What's in Phase 1

- Project structure (`components/`, `data/`, `context/`)
- Global design system (`src/index.css`) — CSS variables for dark/light themes
- `LanguageContext` — Arabic / English switching + RTL/LTR + localStorage
- `ThemeContext` — Dark / Light mode + localStorage
- `Navbar` — sticky, responsive, with language + theme switchers and a mobile drawer
- `Hero` — full-screen intro section with the glassmorphism visual and the
  signature "pulse → `</>`" animation

Sections **About / Skills / Projects / Contact / Footer** are stubbed out
(commented) in `src/App.jsx`, ready for Phase 2.

## Add your photo

Drop your picture at:

```
public/images/profile.jpg
```

The Hero section already points to `/images/profile.jpg`. If the file isn't
there yet, a placeholder avatar icon shows automatically — nothing breaks.

Project screenshots (Phase 2) will go in `public/images/projects/`.

## Editing text

All English/Arabic copy lives in one file:

```
src/data/translations.js
```

Change the `en` / `ar` objects there — no need to touch any component.

## Colors & theme

All colors, fonts, spacing tokens are CSS variables defined in
`src/index.css` under `:root`, `[data-theme="dark"]`, and
`[data-theme="light"]`. Change a value there and it updates everywhere.
