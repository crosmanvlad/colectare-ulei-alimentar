# DigitalOcean Droplet Deployment & CI/CD Setup Guide

This guide walks you through deploying **Colectare Ulei Alimentar** (`TKM OIL GROUP SRL`) to a DigitalOcean Droplet using **GitHub Actions** and **GitHub Container Registry (GHCR)**.

---

## 1. Required GitHub Repository Secrets

Go to your GitHub Repository: **Settings → Secrets and variables → Actions → New repository secret**

| Secret Name | Example Value | Description |
| :--- | :--- | :--- |
| `DIGITALOCEAN_HOST` | `159.65.xx.xx` | DigitalOcean Droplet IPv4 address |
| `DIGITALOCEAN_USER` | `root` | SSH user on droplet (usually `root` or `ubuntu`) |
| `DIGITALOCEAN_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----...` | Private SSH key (matching `~/.ssh/authorized_keys` on droplet) |
| `DIGITALOCEAN_SSH_PORT` | `22` | (Optional) SSH port, defaults to `22` |

> Note: `GITHUB_TOKEN` is automatically provided by GitHub Actions for GHCR authentication.

---

## 2. DigitalOcean Droplet Initial Setup (One-Time Setup)

SSH into your DigitalOcean Droplet:

```bash
ssh root@YOUR_DROPLET_IP
```

### Step 2.1: Install Docker & Docker Compose

```bash
# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install -y docker-compose-plugin docker-compose
```

### Step 2.2: Clone Project Repository

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/vladcrosman/colectare-ulei-alimentar.git
cd colectare-ulei-alimentar
```

---

## 3. SSL / HTTPS Setup with Let's Encrypt Certbot

To enable HTTPS with free SSL certificates:

```bash
# Install Certbot
apt install -y certbot

# Request certificate for domain
certbot certonly --standalone -d colectareuleialimentar.ro -d www.colectareuleialimentar.ro

# Copy certs or link them for Nginx container
mkdir -p certbot/conf certbot/www
```

Once certificates are issued, uncomment the HTTPS section in `nginx.conf` and restart the stack:

```bash
docker-compose up -d --build
```

---

## 4. Automated CI/CD Workflow Summary

Every push to the `main` branch automatically triggers `.github/workflows/deploy.yml`:

1. **Build & Test**: Verifies TypeScript types and Next.js standalone build.
2. **Build & Push Docker**: Packages Next.js into a lightweight container (~120MB) and pushes to `ghcr.io`.
3. **Deploy via SSH**: Connects to your DigitalOcean droplet, pulls the latest image, updates `docker-compose up -d`, and prunes old images.

---

## 5. Helpful Commands on Droplet

```bash
# Check running containers
docker-compose ps

# View live application logs
docker-compose logs -f app

# View Nginx web server logs
docker-compose logs -f nginx

# Restart deployment manually
docker-compose down && docker-compose up -d
```
