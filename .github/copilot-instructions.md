# Copilot Instructions for mahmudjion.github.io

## Project Overview
A **Nuxt 3 static portfolio site** (SSR disabled) that showcases a software engineer's professional profile, skills, and links. The site is deployed as a static build to GitHub Pages and uses Bootstrap 5 CSS framework.

## Architecture

### Framework Stack
- **Nuxt 3** with `ssr: false` (client-side only) for static generation
- **Bootstrap 5** CSS framework
- **Axios** for HTTP requests (configured but not actively used in current pages)
- **PWA module** for progressive web app capabilities

### File Structure
- `pages/` – Route pages (index.vue is the main landing page with jumbotron, navbar, and profile links)
- `components/` – Reusable components (Logo, NuxtLogo, Tutorial)
- `layouts/default.vue` – Global layout wrapper with base styling
- `assets/`, `plugins/`, `store/`, `middleware/` – Standard Nuxt directories (currently minimal content)

## Development Workflow

### Essential Commands
```bash
npm run dev           # Hot reload at localhost:3000
npm run build         # Build optimized bundle
npm run start         # Serve built version (uses --openssl-legacy-provider flag)
npm run generate      # Create static site in /dist
npm run deploy        # Push /dist to GitHub Pages master branch
npm run lint:js       # ESLint + Prettier checks
```

**Note:** `npm start` requires `--openssl-legacy-provider` flag due to Node.js compatibility.

## Code Patterns & Conventions

### Component Style
- Use Bootstrap 5 CSS classes directly (via imported stylesheet `bootstrap/dist/css/bootstrap.css`)
- Use standard HTML elements with Bootstrap utility classes (`.container`, `.jumbotron`, `.navbar-light`, `.bg-warning`, etc.)
- Keep styling in `<style>` blocks within `.vue` files; global CSS in `layouts/default.vue`
- Use scoped styles when component-specific

### Naming Conventions
- Vue components: PascalCase (`Logo.vue`, `NuxtLogo.vue`)
- CSS classes: kebab-case (e.g., `.profile-links`, `.main-container`)
- Internal styling in `layouts/default.vue` uses utility classes like `.button--green`, `.button--grey`

### Content & Links
- Profile links are hardcoded in `pages/index.vue` (GitHub, LinkedIn, Stack Overflow, Google Scholar, Academia.edu)
- External links use `target="_blank"` and have class `link` for styling
- Meta tags and Open Graph metadata configured in `nuxt.config.js` for SEO

## Important Configuration Details

### nuxt.config.js Key Settings
- **ssr: false** – Disable server-side rendering; entire app runs client-side
- **target: 'static'** – Optimized for static site generation
- **components: true** – Auto-import components without explicit imports
- **Modules:** BootstrapVue, Axios, PWA all auto-configured

### Deployment
- Static files are generated in the `/dist` folder
- Deploy to GitHub Pages via:
  ```bash
  npm run build          # Builds and precompiles the site to .output/public
  cp -r .output/public dist  # Copy to dist folder
  npm run deploy         # Pushes /dist to master branch using push-dir
  ```
- The build includes prerendering with Nitro preset to ensure all routes are static
- Alternatively, manually push `/dist` contents to your GitHub Pages repository

## Linting & Code Quality
- **ESLint** with Nuxt and Prettier configs enabled
- **Command:** `npm run lint` (checks .js and .vue files)
- Config files: `.eslintrc.*`, `.prettierrc` (if present)

## Common Tasks

### Adding a New Page
1. Create `.vue` file in `pages/` (auto-routed by Nuxt)
2. Use `<template>`, `<script>`, `<style>` structure
3. Wrap content with `<b-container>` and BootstrapVue components

### Adding a Reusable Component
1. Create `.vue` in `components/` (auto-imported)
2. Define props/methods in `<script>`
3. Export as standard Vue component

### Styling
- Avoid global CSS – use scoped styles or utility classes from `layouts/default.vue`
- Bootstrap classes available via BootstrapVue

## Known Dependencies & Quirks
- Node.js v20.17.0+ required (install with `--legacy-peer-deps` flag due to ESLint compatibility)
- Bootstrap 5 CSS included directly; BootstrapVue v2 is NOT used (Nuxt 3 incompatible)
- Static generation means no real-time data fetching on deployed site
- Prerendering configured in `nuxt.config.js` under `nitro.prerender` option
