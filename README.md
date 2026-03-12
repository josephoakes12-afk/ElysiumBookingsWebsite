# Elysium Bookings Website

Public website for [elysiumbookings.com](https://elysiumbookings.com), built as a static-first Astro site.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Static output suitable for GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Verification commands

```bash
npm run build
npm run lint
npm run typecheck
```

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. In repository settings, enable GitHub Pages with GitHub Actions as the source.
3. The included workflow at `.github/workflows/deploy.yml` will lint, typecheck, build, and publish `dist/`.
4. Keep `public/CNAME` set to `elysiumbookings.com`.

### Custom domain

1. Point the domain DNS to GitHub Pages.
2. Confirm the custom domain in the GitHub Pages settings.
3. Keep HTTPS enforced once DNS has propagated.
4. Because the site is configured for the root custom domain, no path `base` value is needed in Astro.

## Content and metadata

Editable business and marketing metadata lives in `src/config/site.ts`, including:

- navigation
- contact details
- legal placeholders
- pricing
- FAQ content
- feature truth baseline used for public copy

## Founder placeholders to confirm before launch

- switch `josephoakes17@hotmail.com` to the final domain email inboxes when they are set up
- business legal name
- registered address
- final public pricing confirmation
