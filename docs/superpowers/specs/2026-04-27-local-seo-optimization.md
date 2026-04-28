# Local SEO Optimization Spec

**Date:** 2026-04-27
**Topic:** Local Business Schema, Dynamic Metadata, and Service Areas

## 1. Goal
Maximize local search visibility for "Greater Aiken Irrigation" in the Aiken, SC and Augusta, GA metro areas.

## 2. Requirements
- **Task 1: JSON-LD Schema**: Add `LocalBusiness` structured data to the root layout/home page. Use privacy-focused city-level location.
- **Task 2: Dynamic Metadata**: Implement `generateMetadata` in the Case Study dynamic route to pull from markdown frontmatter.
- **Task 3: Local Landing Sections**: Add a "Service Areas" list to the Footer to help with local keyword density.

## 3. Architecture & Approach
- **Schema:** Inject a `<script type="application/ld+json">` in `app/layout.tsx`.
- **Metadata:** Use Next.js 13+ `generateMetadata` export in `app/case-studies/[slug]/page.tsx`.
- **UI:** Update `components/sections/Footer.tsx` with a new column for service areas.

## 4. Implementation Details
### JSON-LD Data:
- Name: Greater Aiken Irrigation LLC
- Phone: 912-266-9697
- Area Served: Aiken SC, Augusta GA, North Augusta SC, Evans GA, Grovetown GA, Martinez GA.
- Price Range: $$

### Metadata Pattern:
- Title: `[Issue] in [Neighborhood] | Greater Aiken Irrigation`

## 5. Verification
- Use Google Rich Results Test tool (manual).
- Verify metadata changes in browser tab for multiple case studies.
- Visual check of Footer.
