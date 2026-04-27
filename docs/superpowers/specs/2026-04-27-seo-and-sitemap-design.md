# SEO and Sitemap Design Spec

**Date:** 2026-04-27
**Topic:** Next.js Link Optimization and Sitemap Generation

## 1. Goal
Improve site-wide SEO and crawlability by implementing standard Next.js navigation components and an automated static sitemap.

## 2. Requirements
- Replace all internal `<a>` tags with `next/link`.
- Generate a static `sitemap.xml` that includes the home page, case studies list, and all individual case study pages.
- Production domain: `https://aikenirrigation.pro`

## 3. Architecture & Approach
- **Sitemap:** Use `next-sitemap` library. It will run as a post-build step (`postbuild` script in `package.json`) to generate `public/sitemap.xml` and `public/robots.txt`.
- **Link Optimization:** Manual refactor of identified components using `next/link`.

## 4. Components Affected
- `components/sections/Hero.tsx`
- `components/sections/Footer.tsx`
- `components/sections/Contact.tsx` (Internal links only)
- `app/case-studies/page.tsx` (Verify link usage)

## 5. Implementation Details
- **Dependency:** Add `next-sitemap` to `devDependencies`.
- **Config:** Create `next-sitemap.config.js` in root.
- **Build Process:** Update `package.json` with `"postbuild": "next-sitemap"`.

## 6. Verification
- Run `npm run build` and verify `public/sitemap.xml` exists and contains correct URLs.
- Manual check of navigation to ensure smooth client-side transitions.
