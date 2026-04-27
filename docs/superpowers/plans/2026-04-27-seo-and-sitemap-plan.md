# SEO and Sitemap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Next.js `<Link>` components and automated sitemap generation for `aikenirrigation.pro`.

**Architecture:** Refactor internal links to use `next/link` and set up `next-sitemap` for automated static file generation during build.

**Tech Stack:** Next.js, next-sitemap, Tailwind CSS.

---

### Task 1: Setup next-sitemap

**Files:**
- Modify: `package.json`
- Create: `next-sitemap.config.js`

- [ ] **Step 1: Install next-sitemap**
Run: `npm install -D next-sitemap`

- [ ] **Step 2: Create next-sitemap.config.js**
```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://aikenirrigation.pro',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}
```

- [ ] **Step 3: Update package.json scripts**
Add `"postbuild": "next-sitemap"` to the scripts section.

- [ ] **Step 4: Verify setup with a dry run**
Run: `npm run build` (or `npx next-sitemap` if full build is too slow for first test)

---

### Task 2: Refactor Hero Component Links

**Files:**
- Modify: `components/sections/Hero.tsx`

- [ ] **Step 1: Update imports to include Link**
```typescript
import Link from 'next/link';
```

- [ ] **Step 2: Replace internal <a> tags with <Link>**
Change `<a href="/#quote" ...>` to `<Link href="/#quote" ...>`.

- [ ] **Step 3: Verify navigation**
Ensure the link still correctly navigates to the quote section.

---

### Task 3: Refactor Footer Component Links

**Files:**
- Modify: `components/sections/Footer.tsx`

- [ ] **Step 1: Update imports to include Link**
```typescript
import Link from 'next/link';
```

- [ ] **Step 2: Replace internal <a> tags with <Link>**
Replace all internal links (Privacy, Terms, Safety, Home, etc.) with `<Link>`.
Keep `tel:` and `mailto:` as `<a>`.

---

### Task 4: Refactor Contact Component Links

**Files:**
- Modify: `components/sections/Contact.tsx`

- [ ] **Step 1: Update imports to include Link**
```typescript
import Link from 'next/link';
```

- [ ] **Step 2: Replace internal section links**
Ensure any internal navigation links use `<Link>`.

---

### Task 5: Final Build and Verification

- [ ] **Step 1: Run full build**
Run: `npm run build`

- [ ] **Step 2: Check generated sitemap**
Verify `public/sitemap.xml` exists and contains URLs for:
- `/`
- `/case-studies`
- `/case-studies/[all-slugs]`

- [ ] **Step 3: Check robots.txt**
Verify `public/robots.txt` points to the sitemap.
