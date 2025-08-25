# Next.js Complete App (App Router + Tailwind + Server Actions CRUD)

A clean, production-ready starter with:

- Next.js **14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Sample **API route** (`/api/health`)
- **Tasks CRUD** using **Server Actions** and a local JSON file (`/data/tasks.json`)

> ✅ Local JSON persistence is for development demos. For production, replace with a real DB.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Open the app
#    http://localhost:3000
```

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm start` – run production server
- `npm run lint` – lint

## Replace file persistence with a DB

- Swap `lib/db.ts` functions with your DB logic (Prisma/Drizzle/etc.).
- Remove `data/tasks.json` when using a DB.
- Keep server actions the same – they just call your new functions.

## Project Structure

```
app/
  api/health/route.ts
  docs/page.tsx
  layout.tsx
  page.tsx
  tasks/
    actions.ts
    page.tsx
components/
data/
  tasks.json
lib/
  db.ts
tailwind.config.ts
postcss.config.js
tsconfig.json
next.config.mjs
package.json
```

## Notes

- This uses **Server Actions** for mutations, so there is no client-side fetch code for the CRUD.
- Dark mode is automatic via `prefers-color-scheme`.
- You can deploy to any Node host. On Vercel, JSON file writes are ephemeral; use a DB.
