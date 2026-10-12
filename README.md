# Ignitly website

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Resend

## Getting started

```bash
npm install
cp .env.example .env.local   # add RESEND_API_KEY
npm run dev
```

Database (optional locally, recommended in production): set `DATABASE_URL` in `.env.local`, then `npm run db:migrate`.
After editing `server/db/schema.ts`, run `npm run db:generate` and commit the new migration.

## Project structure

```
app/            Routing only: pages, layouts, route handlers, Next file conventions.
                Files here stay thin and delegate to the layers below.
features/       Frontend, by feature (landing sections, contact form + its API client).
components/     Shared UI: layout/ (Navbar, Footer), seo/ (JsonLd).
content/        Static copy and data (pricing, FAQs, testimonials, work, ...).
lib/            Isomorphic code safe for browser and server: config/, schemas/, seo/.
server/         Backend only (guarded by `server-only`):
  modules/        one folder per domain: controller (HTTP) → service → email template
  db/             Drizzle schema, client and SQL migrations (Postgres)
  email/          email provider wrapper (the only place that imports Resend)
  http/           response helpers, rate limiting
  config.ts       environment variables and secrets
```

Dependency direction: `app` → `features`/`server` → `lib`/`content`. `server/` must never be imported from client components.

## Adding an API endpoint

1. Schema in `lib/schemas/<name>.ts` (shared by form and API).
2. `server/modules/<name>/` with `<name>.controller.ts` and `<name>.service.ts`.
3. `app/api/<name>/route.ts` re-exporting the controller.
4. Client call in `features/<name>/api.ts`.

## Environment variables

See `.env.example`. `RESEND_API_KEY` is required in production.
