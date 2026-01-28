# Greater Aiken Irrigation Website - Standard Operating Procedure

## Project Overview
**Goal**: Build a premium, responsive marketing website for "Greater Aiken Irrigation LLC" to generate residential and commercial leads.
**Core Mission**: Showcase 40 years of expertise, build trust with high-tier builders (golf courses, flower gardens), and convert visitors into leads.

**Tech Stack**:
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (Database + Edge Functions)
- **Automation**: Database Trigger -> Edge Function -> Gmail SMTP
- **AI Framework**: Antigravity Kit (Advanced Agentic Coding)

## Project Principles & Aesthetics
1. **"Ranchy but Professional"**: Emphasize old-school ranch house aesthetic with modern professional reliability.
2. **"Desktop-First"**: High-tier builders and commercial managers likely view on desktops. Maximize large screen real estate.
3. **"Spacious Design"**: High white space usage. No crowded elements.
4. **"Dynamic Backgrounds"**: Modern fade-in effects on page load using professional golf/garden imagery.
5. **"Lead-Centric"**: Clear Call to Action (CTA) on every single page.

---

## Phase 1: Planning & Setup ✅ IN PROGRESS
1. **D.O.E Framework**: Establish directives and orchestration rules in `DOE.md`. ✅
2. **Infrastructure Setup**: Create Supabase project, internal secrets, and lead tables. ✅
3. **Asset Organization**: Migrate images and brand assets to `public/assets/`. ✅
4. **SOP Development**: Document workflows and agent mappings. (Current)

---

## Phase 2: Branding & Design System
1. **Color Palette**: Develop a theme of forest greens, earthy browns, and professional gold accents.
2. **Typography**: Select established, clean fonts (e.g., Playfair Display for headings, Montserrat for body).
3. **Component Library**:
   - `Navbar`: Glassmorphic, floating style for desktop.
   - `Hero`: Full-bleed cinematic backgrounds with smooth fade-in.
   - `LeadForm`: Validated, stylized capture form.
   - `TestimonialCards`: Interactive, premium cards (5+ mocks).

*Agents: frontend-specialist, ui-ux-pro-max*

---

## Phase 3: Core Implementation
1. **Homepage**: "North Star" design implementation with hero hook and trust signals.
2. **Service Pages**: Golf course irrigation, Flower garden systems, Residential maintenance.
3. **Backend Integration**: Connect lead forms to Supabase `leads` table.
4. **Testimonials/Gallery**: Showcase interactive proof of quality.

*Agents: frontend-specialist, backend-specialist*

---

## Phase 4: SEO & Optimization
1. **Technical SEO**: Metadata, sitemaps, robots.ts.
2. **Local SEO**: Optimize for Aiken, SC and surrounding areas.
3. **Performance**: Core Web Vitals audit (Lighthouse focus).

*Agents: seo-specialist, performance-optimizer*

---

## Phase 5: Verification & Launch
1. **Manual Audit**: Visual check against "Ranchy-Professional" criteria.
2. **Functional Test**: End-to-end lead capture and email notification test.
3. **Deployment**: Push to production via Vercel.

*Agents: test-engineer, security-auditor*

---

## Agent Coordination Protocol
- **Discovery**: Consult `directives/DOE.md` and `directives/architect.md` first.
- **Implementation**: Follow `clean-code` and `architectural` principles.
- **Reporting**: Keep task summaries concise and artifact-focused.

## Risk Management
- **Deployment Errors**: Use `lead-notifier` pattern for edge functions if standard paths fail.
- **Aesthetic Drift**: Regular audits by `ui-ux-pro-max` to ensure the "Ranchy" vibe isn't lost.

---

## Troubleshooting Guide

### Vercel Build Failures - Dependency Issues
**Symptom**: Vercel refuses deployment with build errors mentioning:
- `tailwindcss-oxide.win32-x64-msvc.node is not a valid Win32 application`
- `Can't resolve 'motion-dom'` or `Can't resolve './progress.mjs'`
- Multiple module resolution errors in `framer-motion` or `motion-utils`

**Root Cause**: 
1. **Corrupted `node_modules`** - Native binaries (especially Tailwind's oxide engine) can become corrupted
2. **Beta/Unstable Dependencies** - Tailwind v4 beta has known issues with native binaries on Windows
3. **Missing Peer Dependencies** - Newer framer-motion versions require `motion-dom` and `motion-utils`

**Resolution** (January 2026):
```bash
# 1. Clean corrupted dependencies
Remove-Item -Recurse -Force node_modules, package-lock.json

# 2. Update package.json to stable versions
# - Tailwind CSS: 4.0.0-beta.8 → ^3.4.17 (stable)
# - Remove: @tailwindcss/postcss (beta-only package)

# 3. Fresh install
npm install

# 4. Test build locally
npm run build
```

**Prevention**:
- Avoid beta/alpha dependencies in production projects
- Use `npm ci` for clean installs in CI/CD environments
- Document dependency version constraints in this SOP

---
**Version**: 1.0
**Last Updated**: January 2026
**Current Phase**: Phase 1
