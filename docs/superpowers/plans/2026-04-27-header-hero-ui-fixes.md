# Header and Hero UI Fixes Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the mobile menu functionality, improve header readability, and refine the hero scroll indicator.

**Architecture:** Use React state for the mobile menu, adjust Framer Motion transforms for header opacity, and style the hero scroll elements.

**Tech Stack:** Next.js, Framer Motion, Tailwind CSS.

---

### Task 1: Fix Mobile Menu Functionality

**Files:**
- Modify: `components/sections/Header.tsx`

- [ ] **Step 1: Add `isOpen` state**
Add `const [isMenuOpen, setIsMenuOpen] = useState(false);`.

- [ ] **Step 2: Implement Toggle Logic**
Add an `onClick` handler to the mobile menu button.

- [ ] **Step 3: Create Mobile Overlay**
Implement a `AnimatePresence` controlled overlay with navigation links for mobile users.

- [ ] **Step 4: Close menu on link click**
Ensure clicking a link closes the menu.

---

### Task 2: Improve Header Readability

**Files:**
- Modify: `components/sections/Header.tsx`

- [ ] **Step 1: Increase Opacity**
Change `headerOpacity` transform from `[0.7, 0.95]` to `[0.9, 1.0]`.
Increase `bg-brand-black/40` to `bg-brand-black/80` or `90` for the nav container.

- [ ] **Step 2: Enhance Backdrop Blur**
Ensure `backdrop-blur-xl` is consistently effective.

---

### Task 3: Refine Hero Scroll Indicator

**Files:**
- Modify: `components/sections/Hero.tsx`

- [ ] **Step 1: Adjust Styling**
Ensure the "Scroll" text and line are centered and visible but not intrusive.
Reduce the line height if it's too long (`h-16` -> `h-12`).

- [ ] **Step 2: Fix Visibility**
Ensure the indicator doesn't overlap with the footer or other sections on short screens.

---

### Task 4: Final Verification

- [ ] **Step 1: Visual Check**
Check header on dark and light backgrounds.
Test mobile menu on small screen sizes.
Verify scroll indicator looks polished.
