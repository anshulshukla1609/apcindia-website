# ALOK PANDEY & CO. — Deployment Guide

## 1. Build

```bash
bun install
bun run build
```

Static output is written to `dist/` (or `.output/public` for SSR — use whichever your `vite.config.ts` emits). For GoDaddy shared hosting, deploy the static build.

## 2. Upload to GoDaddy

1. Log in to **GoDaddy → My Products → Web Hosting → Manage → cPanel**.
2. Open **File Manager → `public_html`**.
3. Delete default files, upload the contents of `dist/` (not the folder itself).
4. Ensure `index.html` sits directly under `public_html/`.

## 3. Connect Your Domain

If the site is on GoDaddy hosting linked to the same GoDaddy domain, no DNS change is needed.

If hosting elsewhere:
- **A record** `@ → <server IP>`
- **CNAME** `www → <hosting hostname>`

Manage in **GoDaddy → Domain Portfolio → DNS**.

## 4. SSL

In cPanel → **SSL/TLS Status** → **Run AutoSSL**. Free Let's Encrypt cert is issued in minutes. Force HTTPS via cPanel → **Domains → toggle Force HTTPS Redirect**.

## 5. Contact Form Email

The current form is UI only. For live email delivery, either:
- Use **Formspree** — set `action="https://formspree.io/f/<your-id>"` and `method="POST"` on the `<form>` in `src/routes/index.tsx`.
- Or wire a TanStack server function to send via SMTP / Resend.

## 6. Future Updates

Edit content in `src/routes/index.tsx` (team, services, copy). Rebuild and re-upload `dist/`.

## 7. Partner Contacts

- CA Alok Pandey — +91-9889471057
- CA Anshul Shukla — +91-9889929292
- CA Sharad Shukla — +91-9956700632
- CA Ankur Malhotra — +91-9918647667
- CA Shikhar Malhotra — +91-9839604389

## 8. Corporate Office

117/K-53, Sarvodaya Nagar, Kanpur, Uttar Pradesh 208005, India

## 9. Official Email

alokpandeyandco@gmail.com
