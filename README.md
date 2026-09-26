# TKM OIL GROUP SRL — colectareuleialimentar.ro

Web application for **TKM OIL GROUP SRL** — *„Ulei uzat, resurse pentru viitor”*.  
Autorizată ANPM pentru colectarea, transportul și valorificarea ecologică a uleiurilor alimentare uzate și mentenanța separatoarelor de grăsimi pentru restaurante, unități HoReCa și persoane fizice.

**Live Domain**: [https://colectareuleialimentar.ro](https://colectareuleialimentar.ro)  
**Contact**: `0748 058 141` • `office@tkm-oil.ro`

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript (`npx tsc --noEmit`)
- **Styling**: **SCSS Modules** (`*.module.scss`) using TKM brand design tokens (Deep Emerald `#093826`, Metallic Gold `#c59b27`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [Brevo Transactional API](https://www.brevo.com/) via native HTTPS `fetch`
- **Containerization**: Docker (multi-stage build with standalone Next.js output) & Docker Compose
- **Web Server / Reverse Proxy**: Nginx with HTTP/2 and Let's Encrypt SSL/TLS termination
- **Hosting**: DigitalOcean Droplet (`Ubuntu 24.04`)
- **CI/CD**: GitHub Actions deploying to GitHub Container Registry (`ghcr.io`) & Droplet

---

## 🛠️ Local Development

### 1. Prerequisites
- Node.js `20.x` or higher
- npm `10.x` or higher

### 2. Installation
```bash
git clone https://github.com/crosmanvlad/colectare-ulei-alimentar.git
cd colectare-ulei-alimentar
npm install
```

### 3. Environment Variables
Create `.env.local` in the project root:
```env
# Brevo Email Service (Settings -> SMTP & API -> API Keys)
BREVO_API_KEY=xkeysib-your-brevo-api-key
BREVO_SENDER_EMAIL=office@tkm-oil.ro
BREVO_SENDER_NAME="TKM OIL GROUP"
CONTACT_NOTIFICATION_EMAIL=office@tkm-oil.ro
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Quality Checks
```bash
# Typecheck (0 errors required)
npx tsc --noEmit

# Linting
npm run lint

# Production build test
npm run build
```

---

## 🚢 Architecture & Deployment (DigitalOcean Droplet)

### Server Details
- **Droplet IP**: `157.230.117.220`
- **Application Directory**: `/var/www/colectare-ulei-alimentar`
- **Domain**: `colectareuleialimentar.ro` and `www.colectareuleialimentar.ro`
  - DNS A-Record points to `157.230.117.220` (managed via Cyberfolks / ex-Gazduire.ro).
  - MX/Email records point to `mail.tkm-oil.ro` (`81.181.253.2`).

### Container Composition
- **`colectare_ulei_app`**: Standalone Next.js production server listening on port `3000`.
- **`colectare_ulei_nginx`**: Nginx proxy listening on `80` (redirects to HTTPS) and `443` (SSL termination with cached static assets).

### SSL / HTTPS Auto-Renewal
Managed by host **Certbot** via webroot:
```bash
certbot certonly --webroot -w /var/www/colectare-ulei-alimentar/certbot/www -d colectareuleialimentar.ro -d www.colectareuleialimentar.ro
```
Automatic Nginx reload hook on renewal: `/etc/letsencrypt/renewal-hooks/deploy/reload-nginx.sh`:
```bash
#!/bin/bash
docker exec colectare_ulei_nginx nginx -s reload
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

Workflow file: `.github/workflows/deploy.yml`

On every push to `main`:
1. **Build & Test**: Installs dependencies and verifies `npm run build` passes on Node.js 20.
2. **Docker Buildx**: Builds multi-stage standalone image and publishes to `ghcr.io/crosmanvlad/colectare-ulei-alimentar:latest`.
3. **Automated SCP**: Synchronizes latest `docker-compose.yml` and `nginx.conf` directly to `/var/www/colectare-ulei-alimentar`.
4. **SSH Deploy**:
   - Pulls latest container from GHCR.
   - Cleans up any conflicting containers.
   - Recreates services with `docker compose up -d --remove-orphans --force-recreate`.
   - Prunes dangling Docker images older than 72 hours.

### Required GitHub Secrets
- `DIGITALOCEAN_HOST`: `157.230.117.220`
- `DIGITALOCEAN_USER`: `root`
- `DIGITALOCEAN_SSH_KEY`: Droplet authorized private SSH key.
- `DIGITALOCEAN_SSH_PORT`: `22` (optional, defaults to 22).

---

## 📄 License
Proprietary — All rights reserved by **TKM OIL GROUP SRL**.

