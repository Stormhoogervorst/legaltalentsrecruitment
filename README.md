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

## Sollicitaties

Het formulier op een vacaturepagina post naar `POST /api/apply`. Die route bewaart de sollicitatie in Twenty en probeert daarnaast Web3Forms. De kandidaat ziet een succesmelding als minstens één van de twee lukt. Faalt Twenty, dan staat de sollicitatie (zonder CV-inhoud) in de serverlog. Faalt Web3Forms op de server — Cloudflare blokkeert server-side calls vaak met 403 — dan stuurt de browser de mail alsnog, mét CV, via de bestaande publieke Web3Forms-sleutel.

Zet in `.env.local` (lokaal) of in de hosting-omgeving, nooit in git:

```bash
WEB3FORMS_ACCESS_KEY=
TWENTY_API_KEY=
TWENTY_BASE_URL=
```

`TWENTY_BASE_URL` mag leeg blijven of `https://legal-talents.twenty.com` zijn. De cloud-API staat op `https://api.twenty.com`; de code valt daarop terug als het workspace-adres geen API serveert. `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` blijft nodig voor het contactformulier en als browser-fallback voor sollicitatiemail.

Testen, met `TEST` in elke naam:

```bash
npx tsx --env-file=.env.local scripts/test-apply.ts
```

Zonder `TWENTY_API_KEY` draaien alleen de telefoon- en bestandschecks. Met de sleutel maakt het script kandidaten, een CV, een dubbele aanvraag en drie telefoonnotaties aan in Twenty. Die records kun je opruimen op de naam `TEST`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
