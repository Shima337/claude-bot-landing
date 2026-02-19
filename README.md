# ClaudeBot Landing

Landing page for a Claude AI automation service — ready-to-deploy bots connected to Notion, Slack, Telegram, CRM, and more.

- **Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion
- **Leads:** form (name, phone, email) submits to `POST /api/leads`, stored in SQLite inside the container
- **API:** `GET /api/leads` — open this URL to get all applications as JSON (Railway doesn’t show SQLite in the UI, so this is how you access the data). Optional: protect with `LEADS_API_KEY` and header `X-API-Key`

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Railway

### 1. Create a Git repo and push

On GitHub (or GitLab) create a **new empty repository** (no README, no .gitignore).

Then in this folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Railway

1. Go to [railway.app](https://railway.app), sign in, **New Project** → **Deploy from GitHub repo**.
2. Choose your repository. Railway will detect Next.js and build with `npm run build`, start with `npm start`.
3. After first deploy: **Settings** → **Generate Domain** to get a public URL.

### 3. Persist leads (SQLite)

So leads survive restarts and redeploys:

1. In your Railway project: **+ New** → **Volume**. Create a volume.
2. Attach it to your app service. Set **Mount Path**: `/app/data`.
3. In the app service **Variables** add:
   - `DATABASE_PATH` = `/app/data/leads.db`

(If you skip the volume, leads will be lost on each redeploy.)

### 4. Optional: protect GET /api/leads

In Railway **Variables** add:

- `LEADS_API_KEY` = any secret string

Then only requests with header `X-API-Key: <your-secret>` can call `GET https://your-app.railway.app/api/leads`. Without the key, opening that link in the browser returns the list of leads (name, phone, email, created_at) as JSON.

## Env reference

| Variable         | Required | Description |
|------------------|----------|-------------|
| `DATABASE_PATH`  | No       | SQLite file path (default: `./data/leads.db`). On Railway use `/app/data/leads.db` with a volume at `/app/data`. |
| `LEADS_API_KEY`  | No       | If set, `GET /api/leads` requires header `X-API-Key: <value>`. |
