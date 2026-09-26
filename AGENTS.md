<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Knowledge & Developer Guide: TKM OIL GROUP (colectare-ulei-alimentar)

This document contains key architectural decisions, design guidelines, environment configurations, and deployment procedures for the **TKM OIL GROUP SRL** web application.

---

## 1. Tech Stack & Styling Rules

- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript (`npx tsc --noEmit` must pass with 0 errors)
- **Styling**: **SCSS Modules** (`*.module.scss`).
  > **STRICT USER RULE**: The user prefers SCSS modules over Tailwind CSS. Do not introduce Tailwind classes.
- **Global Styles & Variables**:
  - `src/styles/variables.scss`: Core tokens including `$color-primary: #093826`, `$color-accent-gold: #c59b27`, and glassmorphic mixins.
  - Emerald gradients: `linear-gradient(90deg, #051e14 0%, #093826 50%, #051e14 100%)` (used across page banners, stats bars, and rewards components).
  - Text on dark green must always be pure white (`#ffffff` / `rgba(255, 255, 255, 0.85)`).
  - Headings on light backgrounds must use `$color-primary` (`#093826`).
- **Official Contact Details**:
  - **Phone / WhatsApp**: `0748 058 141` (`tel:0748058141`, WhatsApp international format `40748058141`).
  - **Email**: `office@tkm-oil.ro`.

---

## 2. Email Service (Brevo Transactional API)

- **Library / Handler**: `src/lib/brevo.ts` & `src/app/api/contact/route.ts`.
- **Protocol**: Direct HTTPS REST API (`https://api.brevo.com/v3/smtp/email`) via native `fetch`. **No SMTP key or third-party packages (like nodemailer) are required**.
- **Functionality**:
  1. **Admin Notification**: Sends styled notification to `office@tkm-oil.ro` with client lead details and `replyTo: clientEmail`.
  2. **Client Confirmation**: Sends branded confirmation email to the user with dispatch info (`0748 058 141`).
- **Required Environment Variables**:
  - `BREVO_API_KEY`: API key (`xkeysib-...`) generated in Brevo under *Settings -> SMTP & API -> API Keys*.
  - `BREVO_SENDER_EMAIL`: `office@tkm-oil.ro` (or fallback `CONTACT_SENDER_EMAIL`). Must be an authenticated domain/sender in Brevo.
  - `BREVO_SENDER_NAME`: `TKM OIL GROUP`.
  - `CONTACT_NOTIFICATION_EMAIL`: `office@tkm-oil.ro`.

---

## 3. Server & Deployment Architecture (DigitalOcean Droplet)

The site runs on a DigitalOcean Droplet using Docker and Docker Compose.

- **Droplet IP**: `157.230.117.220`
- **Droplet Directory**: `/var/www/colectare-ulei-alimentar`
- **Domain**: `colectareuleialimentar.ro` & `www.colectareuleialimentar.ro`
  - DNS managed at Cyberfolks (ex-Gazduire.ro) via A Record pointing to `157.230.117.220`.
  - MX and mail records stay at Cyberfolks/cPanel (`mail.tkm-oil.ro` -> `81.181.253.2`).
- **Containers**:
  - `colectare_ulei_app`: Next.js production build (`node server.js` from standalone output) on port `3000`.
  - `colectare_ulei_nginx`: Nginx reverse proxy routing ports 80/443, SSL termination, caching `/_next/static/` and `/images/`, and proxying to `app:3000`.
- **SSL / HTTPS**:
  - Handled by host **Certbot** via webroot:
    `certbot certonly --webroot -w /var/www/colectare-ulei-alimentar/certbot/www -d colectareuleialimentar.ro -d www.colectareuleialimentar.ro`
  - Certificates located at `/etc/letsencrypt/live/colectareuleialimentar.ro/` and mounted read-only into Nginx.
  - Auto-renewal hook at `/etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh`:
    ```bash
    #!/bin/bash
    docker exec colectare_ulei_nginx nginx -s reload
    ```

---

## 4. CI/CD Pipeline (GitHub Actions)

Workflow file: `.github/workflows/deploy.yml`

### Triggers
- Automatic on push to `main` branch.
- Manual trigger via `workflow_dispatch`.

### Pipeline Stages
1. **Build & Test**:
   - Runs `npm ci` and `npm run build` on Node.js 20.
2. **Docker Build & Push**:
   - Uses Docker Buildx.
   - Pushes multi-stage standalone image to GitHub Container Registry (`ghcr.io/crosmanvlad/colectare-ulei-alimentar:latest`).
3. **Deploy to Droplet**:
   - **SCP Step**: Automatically copies latest `docker-compose.yml` and `nginx.conf` from repository to `/var/www/colectare-ulei-alimentar/` on the droplet.
   - **SSH Step**:
     - Logs in to GHCR on the droplet using `${{ secrets.GITHUB_TOKEN }}`.
     - Pulls latest image: `docker pull ghcr.io/crosmanvlad/colectare-ulei-alimentar:latest`.
     - Cleans up any conflicting containers: `docker rm -f colectare_ulei_app colectare_ulei_nginx 2>/dev/null || true`.
     - Starts containers with modern Docker Compose v2: `docker compose up -d --remove-orphans --force-recreate`.
     - Prunes dangling images older than 72 hours.

### Required GitHub Secrets (Repository Settings -> Secrets -> Actions)
- `DIGITALOCEAN_HOST`: `157.230.117.220`
- `DIGITALOCEAN_USER`: `root`
- `DIGITALOCEAN_SSH_KEY`: The private SSH key matching the public key authorized on the Droplet (`~/.ssh/crosmanvlad-GitHub`).
- `DIGITALOCEAN_SSH_PORT`: `22` (optional, defaults to 22).

---

## 5. Local Development Commands

- `npm run dev`: Start local development server on `http://localhost:3000`.
- `npm run build`: Production Next.js build.
- `npm run lint`: Run ESLint checks.
- `npx tsc --noEmit`: TypeScript typecheck.

