# VFW Post 9509 & Auxiliary — Volunteer Sign-Up (front door)

This repository is the **front door** for the VFW Post 9509 & Auxiliary volunteer sign-up app in Moncks Corner, SC. It's a small static site on GitHub Pages:

**https://vfw9509.github.io/volunteer/** (short link: **https://tinyurl.com/VFW9509Volunteer**)

The app itself (the sign-up board, admin pages and emails) runs on **Google Apps Script** with a **Google Sheet** as its database. This site gives volunteers:

- a home-screen icon
- a share page with the "Scan to Volunteer" QR code
- one link to put on flyers and on vfw9509.org

No volunteer data is stored here.

```
Flyer / QR / tinyurl / vfw9509.org
        │
        ▼
GitHub Pages (this repo) ── index.html shows the app full-screen, adds the home-screen icon
        │
        ▼
Google Apps Script web app (/exec) ── Code.gs + Page.html
        │
        ▼
Google Sheet "Post 9509 Volunteers" ── Volunteers, Needs, Signups, Admins, EventLog, EmailQueue, archives
```

## Files

| File | What it does |
|---|---|
| `index.html` | The front door. Shows the Apps Script app full-screen, offers "Add to Home Screen," and remembers the volunteer's phone number on that device. **Holds `EXEC_URL`.** |
| `share.html` | Share page: QR code, plus Text / Facebook / Email / Copy link / Download / Print buttons. With `?ev=…&msg=…` it becomes "Share this event" (opened from sign-up emails). |
| `manifest.json`, `sw.js` | Make the site installable as a home-screen app. |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Home-screen icons. |
| `volunteer-qr.png` | The "Scan to Volunteer" QR code (points to the tinyurl). It's also used on the printed calendar, the sign-up sheets and the vfw9509.org Volunteer page. |
| `share-card.png` | The picture that shows when the link is shared on Facebook or in a text. |

## Setup (one time)

1. Create a **public** repository named `volunteer` under the `vfw9509` account.
2. Upload all files in this folder to the top level of the repository, not inside a subfolder.
3. Open `index.html` and replace `PASTE_YOUR_EXEC_URL_HERE` with the Apps Script **Web app URL** (ends in `/exec`). Commit.
4. Go to **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
5. After a minute or two, open https://vfw9509.github.io/volunteer/. The volunteer board should appear.
6. Point **tinyurl.com/VFW9509Volunteer** at `https://vfw9509.github.io/volunteer/`.

## Keeping it working

- **`EXEC_URL` must match the live deployment.** In Apps Script, always update the *existing* deployment (**Deploy → Manage deployments → pencil → Version: New version → Deploy**). **New deployment** creates a different URL, and this site would keep showing the old version of the app.
- **If the app shows twice** (one copy stacked under the other, the second stuck on "Loading…"), check that `EXEC_URL` matches the current Web app URL. Then check that the Page file in Apps Script isn't pasted in twice.
- **Changing the QR code or tinyurl** means replacing `volunteer-qr.png` here too. Printouts and the website page pull it from this repo.
- **This repo is public.** Never put admin codes, Sheet IDs or volunteer information in it.

## Related

- **The app** (Code.gs, Page.html, settings, admin guide): see the Google-side README kept with the Sheet in Google Drive.
- **Admin & lead directions:** the PDF "VFW9509-Volunteer-Admin-Directions."
- **Questions:** volunteer coordinator, call or text 843.900.4450 · VFW Post 9509, 1141 South Live Oak Drive, Moncks Corner, SC 29461.
