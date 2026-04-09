Premium bilingual legal landing page for Dr. Hassan Hashem Al-Maliki, built to establish digital authority and drive direct consultation enquiries through WhatsApp and phone CTAs.
## Overview
This project is a premium legal landing page built with Next.js for a high-trust, bilingual audience. It is designed around an Arabic-first experience with formal English support, strong editorial presentation, performance-conscious motion, and a conversion flow that routes visitors directly to WhatsApp or phone contact.
The codebase prioritises:
- Arabic-first UX with RTL as the default direction
- English support with a dedicated LTR layout
- High-end legal brand presentation
- Smooth scrolling and purposeful animation
- SEO-ready structure and metadata support
- Secure, no-form contact flows
## Experience Highlights
- Multi-section legal landing page tailored for authority and trust
- Arabic and English content powered by `next-intl`
- RTL/LTR-aware layout, spacing, and motion behaviour
- GSAP-powered animation system with Motion-based UI interactions
- Lenis smooth scrolling integrated with the animation layer
- SEO support through metadata, sitemap, robots, manifest, and structured data helpers
- Mobile-responsive experience with attention to narrow viewports
- Direct consultation CTAs via WhatsApp and phone
## Tech Stack
- Next.js 16.2.2 (App Router)
- React 19.2.4
- TypeScript (strict mode)
- Tailwind CSS v4
- GSAP 3.14.2
- Motion 12.38.0 via `motion/react`
- Lenis 1.3.21
- `next-intl` for localisation
- Vercel deployment target
## Local Development
### Prerequisites
- Node.js 20+
- npm 10+
### Install dependencies
```bash
npm install
Run the development server
npm run dev
Then open http://localhost:3000.
Available Scripts
- npm run dev — Start the local development server
- npm run build — Create a production build
- npm run start — Run the production build locally
- npm run lint — Run ESLint checks
Project Structure
src/
  app/
    [locale]/
      layout.tsx
      page.tsx
    globals.css
    layout.tsx
    manifest.ts
    not-found.tsx
    robots.ts
    sitemap.ts
  components/
    sections/
      About.tsx
      AuthorityBar.tsx
      Contact.tsx
      Footer.tsx
      Header.tsx
      Hero.tsx
      Services.tsx
      Testimonials.tsx
      WhyChoose.tsx
    ui/
      AvailabilityIndicator.tsx
      BackToTop.tsx
      CTAButton.tsx
      HeroReveal.tsx
      LanguageToggle.tsx
      LegalDisclaimer.tsx
      LoadingScreen.tsx
      LocaleDocument.tsx
      SchemaJsonLd.tsx
      ScrollProgress.tsx
      SiteMotion.tsx
      WhatsAppFAB.tsx
  fonts/
    CrimsonPro-Regular.woff2
    IBMPlexSansArabic-Regular.woff2
    NotoNaskhArabic-Regular.woff2
    PlayfairDisplay-Regular.woff2
  i18n/
    request.ts
    routing.ts
  lib/
    gsap.ts
    lenis.ts
  messages/
    ar.json
    en.json
Internationalisation
This project is built as a bilingual experience with Arabic as the default locale.
- Arabic is the default language and must render in RTL
- English is supported as an LTR alternative
- Localised content lives in src/messages/ar.json and src/messages/en.json
- Routing and locale handling are configured in src/i18n/routing.ts and src/i18n/request.ts
- Components must remain visually correct in both RTL and LTR contexts
RTL/LTR Rules
When building or updating UI:
- Use logical spacing utilities such as ps-*, pe-*, ms-*, and me-*
- Use text-start and text-end instead of left/right-specific alignment utilities
- Ensure animations respect reading direction
- Verify that layout, alignment, and CTA placement remain correct in both locales
Design System
The visual system is driven by CSS variables defined in src/app/globals.css. Do not hardcode colour values in components.
Core Colour Tokens
- --color-primary
- --color-gold
- --color-gold-light
- --color-surface
- --color-text
- --color-text-muted
- --color-border
Typography
- Arabic display: Noto Naskh Arabic
- Arabic body: IBM Plex Arabic
- English display: Playfair Display
- English body: Crimson Pro
Fonts are stored locally in src/fonts.
Animation Guidelines
Animation is part of the product experience and should be implemented carefully.
- Import GSAP utilities from src/lib/gsap.ts
- Import Motion from motion/react
- Do not use framer-motion
- Use Lenis for smooth scroll orchestration where needed
- Respect prefers-reduced-motion
- Avoid decorative motion that introduces layout jank or distracts from legal credibility
Contact Model and Security Constraints
This landing page is intentionally designed without data collection forms.
Contact Rules
- All primary CTAs should lead to phone or WhatsApp
- Do not add forms that collect or store user data
- Do not introduce external scripts except where explicitly allowed by project rules
- Keep all contact actions aligned with the project requirements
Contact Data
Use the project-approved values:
- Phone / WhatsApp: +966508089886
- WhatsApp URL: https://wa.me/966508089886
- Email placeholder: dr.hassan@[domain].com
- Location: Jeddah, Al-Sharafiyyah District
SEO and Metadata
The project includes supporting files and components for search and platform presentation, including:
- src/app/sitemap.ts
- src/app/robots.ts
- src/app/manifest.ts
- src/components/ui/SchemaJsonLd.tsx
When updating branding, copy, or page structure, keep metadata and structured data aligned with the visible experience.
Deployment
This project is intended to be deployed on Vercel.
Recommended pre-deployment checks:
npm run lint
npm run build
If both commands pass, the application is ready for a standard Vercel deployment workflow.
Contributor Checklist
Before shipping changes, verify the following:
- Arabic renders correctly in RTL
- English renders correctly in LTR
- Layout is stable on mobile widths starting at 375px
- Motion is smooth and does not cause layout shifts
- Design tokens are used instead of hardcoded colours
- Contact flows only use approved WhatsApp and phone actions
- Content remains formal, institutional, and legally appropriate
Project Notes
- This repository uses the Next.js App Router
- The project is structured for static-first delivery
- Localisation, typography, motion, and trust-building presentation are core concerns
- The experience should feel premium, restrained, and authoritative rather than generic
