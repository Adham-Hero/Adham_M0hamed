# Adham Mohamed — Portfolio (Complete)

Programmer × Nursing Student — personal portfolio built with **React + Vite**.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## What's built

- Project structure (`components/`, `data/`, `context/`, `hooks/`)
- Global design system (`src/index.css`) — CSS variables for dark/light themes
- `LanguageContext` — Arabic / English switching + RTL/LTR + localStorage
- `ThemeContext` — Dark / Light mode + localStorage
- `Navbar` — sticky, responsive, with language + theme switchers and a mobile drawer
- `Hero` — full-screen intro with the glassmorphism visual and the signature
  "pulse → `</>`" animation
- `About` — bio + Education / Interests / Career Goal, data-driven info rows
- `Skills` — grid of skill cards driven entirely by `src/data/skills.js`
- `Projects` + reusable `ProjectCard` — driven by `src/data/projects.js`
- `Contact` — info cards (Email / GitHub / LinkedIn) + a demo form (no backend
  yet — it simulates sending and shows a success/error message)
- `Footer` — copyright + social links, bilingual
- `useScrollReveal` — a reusable fade/slide-up-on-scroll hook (`.reveal` class)

## Add your photos

```
public/images/profile.jpg   → Hero card
public/images/about.jpg     → About section
public/images/projects/*.jpg → each project card (see src/data/projects.js)
```

Every `<img>` already points to these paths. If a file isn't there yet, a
placeholder icon shows automatically — nothing breaks.

## Edit your content

Everything lives in `src/data/`:

- `translations.js` — every piece of UI text, in English and Arabic
- `skills.js` — your skills list (icon, color, level)
- `projects.js` — your projects (bilingual title/description, tech, links)
- `socials.js` — your email, GitHub, and LinkedIn — read by both Contact and Footer

Add a new project or skill by adding one object to the array — no new
component required for either.

## Colors & theme

All colors, fonts, and spacing tokens are CSS variables defined in
`src/index.css` under `:root`, `[data-theme="dark"]`, and
`[data-theme="light"]`. Change a value there and it updates everywhere.

## Contact form

The form is UI-only right now (no backend, per the brief). It validates the
three fields client-side and shows a success message on "send." When you're
ready to wire it up for real, the obvious next step is a service like
Formspree, EmailJS, or a small serverless function — `handleSubmit` in
`src/components/Contact.jsx` is the only place that needs to change.


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
