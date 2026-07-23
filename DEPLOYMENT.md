# Deployment Guide — Club Manager

This app has two parts deployed separately, both for free:

| Part | Service | Cost |
|------|---------|------|
| **Frontend** (React) | Netlify | Free forever |
| **Backend** (Express API) | Render | Free (sleeps after 15 min inactivity) |

---

## Step 1 — Deploy the Backend on Render

1. **Create a Render account** at https://render.com (no credit card required for the free tier)
2. Go to **New → Web Service**
3. Connect your GitHub repo (push this project to GitHub first if you haven't)
4. Render will auto-detect `render.yaml` and pre-fill the settings
5. Add these **Environment Variables** in Render dashboard:

   | Key | Value |
   |-----|-------|
   | `SESSION_SECRET` | A long random string (e.g. generate at https://generate-secret.vercel.app/64) |
   | `SUPABASE_URL` | Your Supabase project URL |
   | `SUPABASE_ANON_KEY` | Your Supabase anon key |
   | `SUPABASE_DB_URL` | Your Supabase database connection string |
   | `GOOGLE_CLIENT_EMAIL` | Your Google service account email |
   | `GOOGLE_PRIVATE_KEY` | Your Google service account private key |

6. Click **Create Web Service** — Render will build and deploy
7. **Copy your Render URL** — it looks like `https://club-manager-api.onrender.com`

> **Note:** On Render's free tier, the service goes to sleep after 15 minutes of no traffic.
> The first request after sleep takes about 30 seconds. This is normal and free.

---

## Step 2 — Deploy the Frontend on Netlify

1. **Create a Netlify account** at https://netlify.com (free, no card required)
2. Go to **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Netlify auto-detects `netlify.toml` — build settings are pre-configured
5. Add this **Environment Variable** in Netlify → Site Settings → Environment Variables:

   | Key | Value |
   |-----|-------|
   | `VITE_API_URL` | Your Render URL from Step 1 (e.g. `https://club-manager-api.onrender.com`) |

6. Click **Deploy site**

---

## Step 3 — Connect them

After both are deployed:
- Your frontend URL: `https://your-site.netlify.app`
- Your backend URL: `https://your-app.onrender.com`

The frontend is configured to call the backend URL via `VITE_API_URL`.
The backend already allows all origins (`cors()` with no restrictions).

---

## WhatsApp (Baileys)

The backend initializes a WhatsApp connection on startup. On Render's free tier,
the session file (`whatsapp_auth/`) is stored on disk. Since Render's free disk is
ephemeral, you'll need to re-scan the QR code after each cold start.

To see the QR code: check your Render service logs after deployment.

---

## Pushing to GitHub (required for both services)

Both Render and Netlify deploy from a Git repository. If you haven't pushed yet:

```bash
git init  # if not already a git repo
git add .
git commit -m "Club Manager deployment setup"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then connect the repo on Render and Netlify.
