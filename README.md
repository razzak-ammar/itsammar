This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Private presentation download

The `/presentation` page protects the PowerPoint download with a server-side
password and a 12-hour, HTTP-only session cookie. This requires a Next.js
server runtime, which is supported by Vercel and Netlify (not a static export).

Before deploying, add these environment variables in your hosting provider:

```bash
PRESENTATION_PASSWORD="choose-a-strong-password"
PRESENTATION_AUTH_SECRET="a-long-random-secret-different-from-the-password"
```

Place the PowerPoint at:

```
presentation-assets/final-hrv_jul_29_26.pptx
```

Keep it outside `public/`; `/presentation/download` is the only route that can
serve it after a valid password check. Commit the presentation file only if the
repository itself is private.

## Short redirect links

Edit `data/links.json` to add a destination. The object key becomes the part
after `/link/` on the site:

```json
{
  "slides": "https://drive.google.com/your-shared-link",
  "backup": "https://www.dropbox.com/your-shared-link"
}
```

Those entries are available as `/link/slides` and `/link/backup`. Only `https`
and `http` destinations are accepted, and an unknown slug returns a 404.

## SD Rclone OAuth branding

Public informational pages for the household Mac backup setup:

| Google Auth Platform field | Value |
| --- | --- |
| App name | `SD Rclone` |
| User support email | `razzakammar.edu@gmail.com` |
| Application home page | `https://<your-domain>/apps/sd-rclone` |
| Application privacy policy link | `https://<your-domain>/apps/sd-rclone/privacy` |
| Application terms of service link | `https://<your-domain>/apps/sd-rclone/terms` |
| Authorized domains | Your domain only, without `https://` or a path |

Replace `<your-domain>` with the deployed site's domain. The pages require no
login, environment variables, or Google credentials. They describe a personal
rclone setup with direct transfers between owner-controlled devices and Drive;
keep the policy aligned with the actual setup if its behavior changes.

After deploying the site, save those URLs under **Branding** in Google Auth
Platform. Use a **Desktop app** OAuth client for rclone. For unattended Drive
backups, change the external app's publishing status from **Testing** to
**In production** under **Audience**, then authorize rclone again. Google
[expires testing-mode refresh tokens after seven days](https://developers.google.com/identity/protocols/oauth2#expiration)
for Drive access. Publishing and verification are separate; see
[rclone's current client ID setup instructions](https://rclone.org/drive/#making-your-own-client-id)
for personal-use guidance.

## Availability calendar

`/availability` reads a dedicated public Google Calendar on the server and
caches it for five minutes. Until credentials are configured, it displays
clearly labeled demo data.

Add these variables in Netlify (with the **Functions** scope):

```bash
GOOGLE_CALENDAR_ID="your-public-calendar-id@group.calendar.google.com"
GOOGLE_CALENDAR_API_KEY="restricted-google-api-key"
```

Enable the Google Calendar API for the key and restrict it to that API. Keep
the key server-only; it is never exposed to the browser.
