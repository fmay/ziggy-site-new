# Ziggy Site

A modern Next.js website built with TypeScript and Tailwind CSS, inspired by Stripe's design.

## Features

- Built with Next.js 14 and TypeScript
- Styled with Tailwind CSS
- Fully responsive (mobile and desktop)
- Reusable components
- Multiple pages with clean navigation
- Stripe-inspired design system

## Design System

The site uses a color palette inspired by Stripe:
- **Navy Blue**: `#0a2540` - Primary text and headings
- **Gray**: `#727f96` - Secondary text
- **Light Background**: `#f6f9fb` - Section backgrounds
- **Purple**: `#635bff` - CTAs and accents

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header and Footer
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── products/          # Products page
│   ├── solutions/         # Solutions page
│   ├── developers/        # Developers page
│   ├── resources/         # Resources page
│   ├── pricing/           # Pricing page
│   ├── contact/           # Contact page
│   ├── signin/            # Sign in page
│   ├── about/             # About page
│   ├── careers/           # Careers page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── cookies/           # Cookie policy
└── components/            # Reusable components
    ├── Header.tsx         # Navigation header
    ├── Footer.tsx         # Footer component
    ├── Hero.tsx           # Hero section
    └── PageLayout.tsx     # Page layout wrapper
```

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Pages

- **Home** (`/`) - Hero section with features
- **Products** (`/products`) - Product showcase
- **Solutions** (`/solutions`) - Solutions overview
- **Developers** (`/developers`) - Developer resources
- **Resources** (`/resources`) - Articles and guides
- **Pricing** (`/pricing`) - Pricing tiers
- **Contact** (`/contact`) - Contact form
- **Sign In** (`/signin`) - Authentication page
- **About** (`/about`) - Company information
- **Careers** (`/careers`) - Job listings

## Components

### Header
Responsive navigation with mobile menu, includes:
- Logo
- Navigation links
- CTA buttons
- Mobile hamburger menu

### Footer
Multi-column footer with:
- Links organized by category
- Copyright information
- Legal links

### Hero
Engaging hero section with:
- Large headline
- Description text
- CTA buttons
- Email signup form
- Gradient background effects

### PageLayout
Reusable page wrapper for consistent layouts across all pages.

## Customization

### Colors
Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  'stripe-navy': '#0a2540',
  'stripe-gray': '#727f96',
  'stripe-light-bg': '#f6f9fb',
  'stripe-purple': '#635bff',
}
```

### Fonts
The site uses Inter font from Google Fonts. Change it in `src/app/layout.tsx`.

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React 18** - UI library

## License

Private
