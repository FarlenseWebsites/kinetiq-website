# KinetiQ — Developer Guide

This document outlines developer conventions for `kinetiq-web`, focusing on maintaining responsiveness, component structure, and basic contribution guidance.

## Purpose
- Keep the site responsive and accessible across devices.
- Provide clear rules for adding components, styles and tests.

## Running locally
- Install: `pnpm install` (or `npm install` / `yarn`)
- Dev server: `pnpm dev`

Open `http://localhost:3000` to view changes.

## Responsiveness Principles
- Mobile-first: build styles for small screens first, then scale up using breakpoints.
- Use Tailwind's responsive utilities (`sm:`, `md:`, `lg:`, `xl:`) instead of fixed pixel-only rules.
- Prefer fluid spacing and max-widths (`max-w-6xl`, `w-full`) and avoid absolute positioning when possible.
- Images and media: use responsive images and keep aspect ratio. Test scaling with `width: auto` or `height: auto` where needed.
- Typography: use relative sizes (rem, Tailwind `text-sm`,`text-lg`, etc.) so text scales consistently.

## Component Guidelines
- Place components in `app/components/` as named React components (PascalCase filenames).
- Components should be small, focused, and accept props for content and behaviour.
- Keep markup semantic (`header`, `nav`, `main`, `section`, `footer`).
- Add ARIA attributes and keyboard focus styles for interactive elements.

## Styling
- Use Tailwind utility classes for layout and spacing.
- Create reusable utility classes only when multiple components share the same complex pattern.

## Testing Responsiveness
- Use browser DevTools device toolbar to test breakpoints and touch interactions.
- Manually test on typical screen sizes: 360×800 (small phones), 768×1024 (tablets), 1024×1366 (laptops), 1440+ (desktop).

## Accessibility
- Ensure sufficient color contrast and that interactive elements are reachable by keyboard.
- Use `alt` on images and `aria-label` where needed.

## Removing Unused Template Artifacts
- Default template assets `next.svg` and `vercel.svg` were removed from `public/` to avoid confusion.

## Commit / PR Checklist
- Code builds locally and site remains responsive.
- Components documented and named clearly.
- Add screenshots for visual changes in PR description when relevant.

---
If you want, I can add a short `CONTRIBUTING.md` or CI steps to run visual regression tests.
