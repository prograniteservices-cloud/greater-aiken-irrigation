# Local SEO Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement JSON-LD Schema, Dynamic Metadata, and Service Area UI for local SEO.

**Architecture:** Inject structured data into the layout, use `generateMetadata` for dynamic routes, and expand the footer.

**Tech Stack:** Next.js, JSON-LD, Tailwind CSS.

---

### Task 1: JSON-LD Local Business Schema

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Define Schema Object**
Create a JSON object for `LocalBusiness`.

- [ ] **Step 2: Inject Script Tag**
Add the `<script>` tag with `dangerouslySetInnerHTML` to the `head` or `body`.

- [ ] **Step 3: Commit**

---

### Task 2: Dynamic Metadata for Case Studies

**Files:**
- Modify: `app/case-studies/[slug]/page.tsx`

- [ ] **Step 1: Export generateMetadata function**
Use `getCaseStudyBySlug` to fetch the markdown data.

- [ ] **Step 2: Format Title and Description**
Pattern: `[Issue] in [Neighborhood] | Greater Aiken Irrigation`

- [ ] **Step 3: Verify with multiple slugs**
Ensure metadata updates correctly per page.

---

### Task 3: Local Service Areas UI

**Files:**
- Modify: `components/sections/Footer.tsx`

- [ ] **Step 1: Add Service Areas Column**
List: Aiken, Augusta, North Augusta, Evans, Grovetown, Martinez.

- [ ] **Step 2: Style for Desktop/Mobile**
Ensure it matches the "Quick Links" column style.

---

### Task 4: Final Verification

- [ ] **Step 1: Run build**
`npm run build`

- [ ] **Step 2: Verify sitemap and SEO output**
Check if `public/sitemap.xml` is still valid and if page sources contain the new schema.
