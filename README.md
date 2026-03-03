# erinkate-portfolio

Personal portfolio – design engineer, built with Next.js 15 + TypeScript.

## Setup

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Deploy to Vercel

Push to GitHub, then connect the repo in your [Vercel dashboard](https://vercel.com/new). No configuration needed – Vercel auto-detects Next.js.

## Structure

```
app/
  layout.tsx    – Root layout, fonts, metadata
  page.tsx      – Home page composition
  globals.css   – All editorial styles
components/
  nav.tsx       – Fixed nav with scroll behavior
  hero.tsx      – Headline, body, photo
  marquee.tsx   – Client logo scroll
  projects.tsx  – Case study rows (Publix Pharmacy Refill Prescriptions, Fijord AI, CirrusMD)
  about.tsx     – Quote + bio
  footer.tsx    – CTA + links
  fade-in.tsx   – Scroll reveal wrapper
lib/
  data.ts       – Projects, clients, links (typed)
  fonts.ts      – Bodoni Moda, Source Serif 4, Outfit
public/
  erin-kate.png – Headshot
```
