# Elysium Bookings Branding Assets

This folder documents the approved brand asset setup used by the website and any future brand touchpoints.

## Brand direction

- Premium
- Modern
- Boutique elegant
- Soft
- Feminine
- Clean
- Exciting
- Useful

## Approved palette

- Soft Black: `#51504F`
- Warm Ivory: `#FEFBF7`
- Muted Stone: `#E4DCD6`
- Soft Taupe: `#D8CEC7`
- Mist Beige: `#F4EEE9`

## Approved typography

- Header / Display: `Cormorant Garamond`
- Subheading / UI Heading: `Inter`
- Body / Text: `Inter`

## Source of truth

The approved transparent PNG files in `public/branding/icons/` are the repo source of truth for the current monogram assets.

- Do not redesign, recolor, crop, or add backgrounds.
- Do not compress or export replacement copies unless a new approved master asset is supplied.
- Reuse these public files by URL for website, email, app, and documentation surfaces.

## Asset inventory

- `public/branding/icons/elysium-monogram-rounded-square.png`
  Use for favicon, Apple touch icon, and app-style icon surfaces.
- `public/branding/icons/elysium-monogram-circle.png`
  Use for Supabase auth emails, lightweight embedded brand marks, and general monogram use where a softer badge shape is preferred.

## Folder conventions

- `public/branding/icons/`
  Approved icon and monogram assets intended to be publicly addressable.
- `public/branding/logos/`
  Reserved for future approved wordmarks or lockups.
- `public/branding/email/`
  Reserved for future email-specific branded assets if they are ever approved.
- `docs/branding/`
  Internal documentation for brand usage and naming conventions.

## Naming conventions

- Public assets should use stable kebab-case names.
- Use `elysium-` as the filename prefix for public brand assets.
- Keep shape or usage in the filename when it improves clarity, for example `monogram-circle` or `monogram-rounded-square`.
- Prefer updating references to stable filenames instead of introducing duplicate exports.

## Current website usage

- Favicon / browser tab icon: `/branding/icons/elysium-monogram-rounded-square.png`
- Apple touch icon: `/branding/icons/elysium-monogram-rounded-square.png`
- Web app manifest icon: `/branding/icons/elysium-monogram-rounded-square.png`
- Supabase auth email image: `/branding/icons/elysium-monogram-circle.png`

## Public URL examples after deploy

- `https://elysiumbookings.com/branding/icons/elysium-monogram-circle.png`
- `https://elysiumbookings.com/branding/icons/elysium-monogram-rounded-square.png`

## Supabase auth email example

```html
<img
  src="https://elysiumbookings.com/branding/icons/elysium-monogram-circle.png"
  alt="Elysium Bookings"
  width="64"
  height="64"
/>
```

Use a hosted public URL like the example above inside the email template. Do not embed local repo paths in Supabase templates.
