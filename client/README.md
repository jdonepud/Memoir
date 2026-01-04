# Memoir Client

A Vite-powered React and TypeScript frontend for the Memoir project. The client delivers the user interface, integrates Tailwind CSS styling, and communicates with the backend API for authentication and content features.

## Prerequisites
- Node.js 18+ recommended
- npm (included with Node)

## Setup
```bash
cd client
npm install
```

## Available Scripts
- `npm run dev` — start the Vite dev server on http://localhost:5173.
- `npm run build` — type-check and build the production bundle.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint against the codebase.

## Development Notes
- The app expects the API to be available at http://localhost:3000 (the default server port). Update any API base URLs in the code or via environment-specific configuration if your backend runs elsewhere.
- Styling is provided by Tailwind CSS; adjust design tokens and utilities in `tailwind.config.js` as needed.

## Project Structure
- `src/` — React components, routes, and UI logic.
- `tailwind.config.js` — Tailwind setup for design tokens and plugins.
- `vite.config.ts` — Vite configuration for the dev server and build pipeline.
