# Next.js Starter

A modern Next.js starter (App Router) to quickly build an elegant, high‑performance back office.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38b2ac?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Vitest-3.x-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)
![Node](https://img.shields.io/badge/Node-%E2%89%A5%2018-43853d?logo=node.js&logoColor=white)

Note: This repository is a GitHub template. To get started, click “Use this template” on GitHub or fork/clone this project.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Environment Configuration](#environment-configuration)
- [npm Scripts](#npm-scripts)
- [Tests](#tests)
- [Code Quality](#code-quality)
- [Project Structure](#project-structure)
- [Tips & Gotchas](#tips--gotchas)
- [Security](#security)
- [Support](#support)

## Overview
- App Router (src/app) with server components by default.
- Clean UI with light/dark mode (next-themes).
- Ideal base for a back office: navigation, icons, subtle animations, toasts.

## Features
- Next.js 15 (App Router) and React 19
- Strict TypeScript
- Tailwind CSS v4 (PostCSS, class sorting via Prettier plugin)
- Light/dark theme with `next-themes`
- Icons via `@heroicons/react`
- Accessibility components via `@headlessui/react`
- Animations with `framer-motion`
- Notifications with `react-toastify`
- Class utilities with `clsx`
- Unit testing with Vitest + jsdom + Testing Library
- Linting (ESLint) and formatting (Prettier)

## Prerequisites
- Node.js 18 or higher (LTS recommended)
- npm

## Quick Start
1. Clone the repository
   ```bash
   git clone https://gitlab.com/mztrix/nextjs-starter.git
   cd nextjs-starter
   ```
2. Install dependencies
   ```bash
   npm install
   # or, in CI, for reproducible installs
   npm ci
   ```
3. Environment variables (local)
   ```bash
   cp .env .env.local  # if an example exists
   # then edit .env.local as needed
   ```
4. Start development
   ```bash
   npm run dev  # Turbopack enabled
   ```
   The app will be available at http://localhost:3000

## Environment Configuration
Create a `.env.local` file at the project root (not committed). Examples:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
FEATURE_FLAG_X=true
# Add your server-side variables without the NEXT_PUBLIC_ prefix
```
- Client-side variables must start with `NEXT_PUBLIC_`.
- Never commit secrets.

## npm Scripts
- `npm run dev` — Starts the dev server (Next 15, Turbopack)
- `npm run build` — Production build
- `npm run start` — Starts the server after build
- `npm run lint` — Lint with ESLint (Next + TS)
- `npm run test` — Runs Vitest (watch by default)
- `npm run sort` — Sorts package.json
- `npm run update` — Updates dependencies (npm-check-updates)

## Tests
- Launch the test UI:
  ```bash
  npm run test
  ```
- Single run (CI):
  ```bash
  npx vitest run --reporter=dot
  ```
- Filter by file/pattern:
  ```bash
  npm run test -- src/utils/sum.test.ts
  npm run test -- -t "test name"
  ```
Environment: jsdom with Testing Library. For Node tests, add `// @vitest-environment node` at the top of the file.

## Code Quality
- ESLint (next/core-web-vitals, next/typescript, etc.).
- Prettier (plugins: organize-imports, tailwindcss). Config: `semi: false`, `singleQuote: true`, `printWidth: 120`.
- TypeScript in strict mode.

## Project Structure
```
.
├─ src/
│  ├─ app/                 # App Router (pages, layouts, route handlers)
│  ├─ components/          # Shared UI (e.g., theme-provider)
│  └─ ...
├─ public/                 # Static assets
├─ next.config.mjs / .ts   # Keep only one active config file
├─ postcss.config.mjs      # Tailwind v4 via @tailwindcss/postcss
├─ vitest.config.mts       # Vitest + @/* alias
├─ tsconfig.json           # paths: @/* -> src/*
└─ package.json
```

## Tips & Gotchas
- Two Next config files are present (`next.config.mjs` and `next.config.ts`). Keep only one active to avoid ambiguity (Next 15 supports ESM/TS; prefer `next.config.mjs` unless you specifically need type-checked TS config).
- Turbopack: if a plugin causes issues, use `npx next dev` (without `--turbopack`).
- Testing Library + jsdom: for missing APIs (e.g., `ResizeObserver`), add a lightweight shim via `test.setupFiles` in `vitest.config.mts` if needed.
- `@/*` alias is available in the app and tests (via `vite-tsconfig-paths`).

## Security
To report a vulnerability, contact us directly. Avoid opening a public issue for sensitive problems.

## Support
- Open an issue on the repository.
- Or reach out via your usual (internal/private) channel.