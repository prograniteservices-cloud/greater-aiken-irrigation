# AI-Search SEO Optimization (AEO) Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the site into an "Answer Engine" by implementing E-E-A-T content, FAQ schema, Entity structured data, and semantic HTML.

**Architecture:** Inject expert insights into existing copy, create a new FAQ component with inline schema, and expand the root layout's JSON-LD.

**Tech Stack:** Next.js 15, JSON-LD, Lucide React (for FAQ icons).

---

### Task 1: Semantic HTML & Heading Audit

**Files:**
- Modify: `app/page.tsx`, `components/sections/Hero.tsx`, `components/sections/Services.tsx`, `components/sections/About.tsx`

- [ ] **Step 1: Wrap home content in <main>**
Update `app/page.tsx` to ensure the layout is semantic.

- [ ] **Step 2: Correct Heading Hierarchy**
Ensure each page has exactly one `<h1>`. Fix sections so `<h2>` follows `<h1>`, and `<h3>` follows `<h2>` without gaps.

---

### Task 2: Entity Schema (Person & Service)

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Expand LocalBusiness Schema**
Add `founder`, `makesOffer` (Services), and `knowsAbout` fields to the existing schema.

- [ ] **Step 2: Add Person Schema**
Define Travis R. Sowell as an expert entity.

---

### Task 3: FAQ Section with FAQPage Schema

**Files:**
- Create: `components/sections/FAQ.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create FAQ Component**
Include 3-4 local irrigation questions and expert answers. Use standard accordion or list style.

- [ ] **Step 2: Inject FAQPage JSON-LD**
Add schema specifically for the FAQs within the component.

- [ ] **Step 3: Integrate into Home Page**
Add the FAQ section before the Footer.

---

### Task 4: E-E-A-T Content Injection

**Files:**
- Modify: `components/sections/About.tsx`, `components/sections/Hero.tsx`

- [ ] **Step 1: Add "Information Gain" details**
Inject specific local technical insights (e.g., sandy soil emitter spacing, Augusta golf course pressure requirements) to show expertise.

- [ ] **Step 2: Update Hero Hook**
Make the hero sub-text more authoritative.

---

### Task 5: Final Verification

- [ ] **Step 1: Run build**
`npm run build`

- [ ] **Step 2: Verify SEO structure**
Check page source for nested JSON-LD and clean HTML structure.
