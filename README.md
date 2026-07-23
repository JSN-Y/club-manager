# Mosaic Workshops — Club Manager

A full-stack club management platform built for **Mosaic Workshops**, a Moroccan sports club. Handles everything from member enrollment and payments to coach scheduling, attendance tracking, and WhatsApp messaging — all in one place.

> **Deployed for free:** React frontend on [Netlify](https://netlify.com) · Express API backend on [Render](https://render.com)

---

## What it does

### For Admins
- **Dashboard** — high-level overview of the club's activity
- **Leads management** — track prospective members through the pipeline
- **Trimester management** — create and manage enrollment periods
- **Payments** — record and monitor member payments, generate receipts
- **Enrollments & approvals** — approve or reject coach session requests
- **Calendar** — view all scheduled sessions across the club
- **Attendance** — track member presence per session
- **Events** — create and publish club events
- **Gallery** — manage club photo gallery
- **Users, Coaches & Admins** — full user management for all roles
- **WhatsApp messaging** — send messages directly via an integrated WhatsApp panel (powered by Baileys)

### For Coaches
- **Dashboard** — personal activity summary
- **Session management** — create and manage their own sessions, see approval status
- **Attendance** — mark and review member attendance for their sessions

### For Members
- **Schedule** — view upcoming sessions they're enrolled in
- **Attendance history** — see their own presence record
- **Payments** — view their payment status for the current trimester
- **Gallery** — browse club photos
- **Events** — see upcoming club events
- **Settings** — manage personal profile

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, TypeScript, Wouter, TanStack Query, Tailwind CSS v4, shadcn/ui |
| Backend | Node.js, Express 5, TypeScript, JWT authentication |
| Database | Supabase (PostgreSQL) |
| File storage | Google Cloud Storage |
| Spreadsheets | Google Sheets API |
| Messaging | WhatsApp via Baileys |
| API contract | OpenAPI 3.0 → Orval codegen (typed hooks + Zod schemas) |
| Monorepo | pnpm workspaces |

---

## Free deployment

| Service | Platform | Cost |
|---------|----------|------|
| React frontend | [Netlify](https://netlify.com) | Free forever |
| Express API | [Render](https://render.com) free tier | Free (sleeps after 15 min inactivity) |

The backend spins down after 15 minutes of inactivity on Render's free tier — the first request after a sleep takes ~30 seconds to wake up. Everything else runs with no charges.

### Deploy your own

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the full step-by-step guide. In short:

1. **Backend → Render** — connect this repo, `render.yaml` is pre-configured, add your environment variables  
2. **Frontend → Netlify** — connect this repo, `netlify.toml` is pre-configured, set `VITE_API_URL` to your Render URL

### Required environment variables

| Variable | Description |
|----------|-------------|
| `SESSION_SECRET` | Secret key for signing JWTs |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_DB_URL` | Supabase direct database connection string |
| `GOOGLE_CLIENT_EMAIL` | Google service account email |
| `GOOGLE_PRIVATE_KEY` | Google service account private key |

---

## Project structure
