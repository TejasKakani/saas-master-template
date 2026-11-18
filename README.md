# SaaS Master Template

A configurable landing-page template for launching a SaaS product, built with Next.js. It includes a hero section, features, pricing, a waitlist sign-up flow and light/dark theming, so a new product page can be started by editing one config file.

## Features

- Landing page sections: navbar, hero, features, pricing and footer
- Waitlist modal with a server action that stores sign-ups in MongoDB
- Input validation with Zod and request rate limiting
- Light and dark theme toggle
- Product name, copy and brand color driven by `src/config/saasConfig.ts`
- PostHog analytics integration

## Tech stack

- Next.js (App Router), React, TypeScript
- Tailwind CSS
- MongoDB (Mongoose)
- Zod, PostHog, Lucide icons

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your own values
npm run dev
```

Open http://localhost:3000 in your browser.

## Author

Tejas Kakani - [LinkedIn](https://www.linkedin.com/in/tejas-kakani) | [Portfolio](https://tejaskakani.github.io/myportfolio)
